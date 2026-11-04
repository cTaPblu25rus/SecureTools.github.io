class_name World
extends Node3D
## Процедурный остров: рельеф, вода, небо, города, деревья, камни, трава.
## Всё сглаженное: гладкие нормали, сферы, цилиндры и деформированные шумом камни.

const ISLAND := 172.0
const HM_N := 257
const HM_SIZE := 470.0
const WATER_FLOOR := -1.15
const L_WORLD := 1

var cell := HM_SIZE / float(HM_N - 1)
var hm := PackedFloat32Array()
var n_hills := FastNoiseLite.new()
var n_ridge := FastNoiseLite.new()
var n_coast := FastNoiseLite.new()
var n_detail := FastNoiseLite.new()
var n_color := FastNoiseLite.new()

var towns := [
	{"name": "Рыбацкая бухта", "x": -98.0, "z": 58.0, "r": 30.0, "kind": "fish"},
	{"name": "Старый форт", "x": 46.0, "z": -92.0, "r": 30.0, "kind": "fort"},
	{"name": "Нефтебаза", "x": 98.0, "z": 52.0, "r": 32.0, "kind": "oil"},
	{"name": "Солнечные холмы", "x": -44.0, "z": -40.0, "r": 26.0, "kind": "village"},
	{"name": "Маяк", "x": -18.0, "z": 128.0, "r": 20.0, "kind": "light"},
	{"name": "Центр", "x": 24.0, "z": 16.0, "r": 30.0, "kind": "city"},
]
var loot_spots: Array = []   # Vector3, y = -999 -> на земле
var pads: Array = []         # Vector3
var footprints: Array = []   # Rect2 построек — для карты и расстановки
var island_tex: ImageTexture
var grass_mm: MultiMeshInstance3D
var pad_rings: Array = []
var water_mat: ShaderMaterial
var water_node: MeshInstance3D
var mats := {}

const WALLS := ["#F4E3C1", "#EBC6A0", "#C9E4DE", "#F6D6D6", "#D8E2F0", "#F2E8A8", "#E6CDB5"]
const ROOFS := ["#C8553D", "#3D5A80", "#7A4E3A", "#2A9D8F", "#9C3D54", "#5C6B73"]
const CONT := ["#D1495B", "#00798C", "#EDAE49", "#30638E", "#6A994E", "#E07A5F"]

func _init() -> void:
	var s := randi()
	for n in [n_hills, n_ridge, n_coast, n_detail, n_color]:
		n.seed = s
		s += 17
		n.noise_type = FastNoiseLite.TYPE_SIMPLEX_SMOOTH
		n.fractal_type = FastNoiseLite.FRACTAL_FBM
		n.fractal_octaves = 4
	n_hills.frequency = 0.0105
	n_ridge.frequency = 0.021
	n_coast.frequency = 0.008
	n_detail.frequency = 0.07
	n_color.frequency = 0.05
	for t in towns:
		t.h = clampf(base_h(t.x, t.z), 2.8, 9.0)
	hm.resize(HM_N * HM_N)
	for j in HM_N:
		for i in HM_N:
			hm[j * HM_N + i] = full_h(-HM_SIZE / 2.0 + i * cell, -HM_SIZE / 2.0 + j * cell)

# ------------------------------------------------------------------ рельеф
func base_h(x: float, z: float) -> float:
	var d := Vector2(x, z).length() / ISLAND
	var coast := 1.0 - smoothstep(0.7, 1.0, d + n_coast.get_noise_2d(x, z) * 0.16)
	var n := (n_hills.get_noise_2d(x, z) + 1.0) * 0.5
	var ridge := 1.0 - absf(n_ridge.get_noise_2d(x, z))
	var hills := pow(n, 1.7) * 36.0 + ridge * ridge * 5.0 + (n_detail.get_noise_2d(x, z) + 1.0) * 0.7
	return lerpf(-10.0, 1.6 + hills, coast)

func full_h(x: float, z: float) -> float:
	var h := base_h(x, z)
	for t in towns:
		var d := Vector2(x - t.x, z - t.z).length()
		if d < t.r * 1.35:
			h = lerpf(h, t.h, 1.0 - smoothstep(t.r * 0.75, t.r * 1.35, d))
	return h

func height_at(x: float, z: float) -> float:
	var gx := (x + HM_SIZE / 2.0) / cell
	var gz := (z + HM_SIZE / 2.0) / cell
	if gx < 0.0 or gz < 0.0 or gx >= HM_N - 1 or gz >= HM_N - 1:
		return -12.0
	var i := int(gx)
	var j := int(gz)
	var fx := gx - i
	var fz := gz - j
	var k := j * HM_N + i
	var a := hm[k]
	var b := hm[k + 1]
	var c := hm[k + HM_N]
	var d := hm[k + HM_N + 1]
	return a + (b - a) * fx + (c - a) * fz + (a - b - c + d) * fx * fz

func town_at(x: float, z: float, mul := 1.0):
	for t in towns:
		if Vector2(x - t.x, z - t.z).length() < t.r * mul:
			return t
	return null

# ------------------------------------------------------------------ материалы
func mat(c: Color, rough := 0.8, metal := 0.0, emis := 0.0) -> StandardMaterial3D:
	var key := "%s|%.2f|%.2f|%.2f" % [c.to_html(), rough, metal, emis]
	if mats.has(key):
		return mats[key]
	var m := StandardMaterial3D.new()
	m.albedo_color = c
	m.roughness = rough
	m.metallic = metal
	if emis > 0.0:
		m.emission_enabled = true
		m.emission = c
		m.emission_energy_multiplier = emis
	mats[key] = m
	return m

func mesh_node(mesh: Mesh, m: Material, pos: Vector3, parent: Node3D = null, shadow := true) -> MeshInstance3D:
	var mi := MeshInstance3D.new()
	mi.mesh = mesh
	mi.material_override = m
	mi.position = pos
	mi.cast_shadow = GeometryInstance3D.SHADOW_CASTING_SETTING_ON if shadow else GeometryInstance3D.SHADOW_CASTING_SETTING_OFF
	(parent if parent else self).add_child(mi)
	return mi

func static_box(center: Vector3, size: Vector3) -> void:
	var b := StaticBody3D.new()
	b.collision_layer = L_WORLD
	b.collision_mask = 0
	var cs := CollisionShape3D.new()
	var sh := BoxShape3D.new()
	sh.size = size
	cs.shape = sh
	b.add_child(cs)
	b.position = center
	add_child(b)

func static_cyl(center: Vector3, r: float, h: float) -> void:
	var b := StaticBody3D.new()
	b.collision_layer = L_WORLD
	b.collision_mask = 0
	var cs := CollisionShape3D.new()
	var sh := CylinderShape3D.new()
	sh.radius = r
	sh.height = h
	cs.shape = sh
	b.add_child(cs)
	b.position = center
	add_child(b)

func box(pos: Vector3, size: Vector3, c: Color, collide := true, emis := 0.0, rough := 0.8) -> void:
	var bm := BoxMesh.new()
	bm.size = size
	mesh_node(bm, mat(c, rough, 0.0, emis), pos, null, emis == 0.0)
	if collide:
		static_box(pos, size)
		footprints.append(Rect2(pos.x - size.x / 2.0, pos.z - size.z / 2.0, size.x, size.z))

func cyl(pos: Vector3, r: float, h: float, c: Color, collide := true, seg := 24, rough := 0.6, metal := 0.0, emis := 0.0) -> void:
	var cm := CylinderMesh.new()
	cm.top_radius = r
	cm.bottom_radius = r
	cm.height = h
	cm.radial_segments = seg
	mesh_node(cm, mat(c, rough, metal, emis), pos)
	if collide:
		static_cyl(pos, r, h)
		footprints.append(Rect2(pos.x - r, pos.z - r, r * 2.0, r * 2.0))

func is_free(x: float, z: float, w: float, d: float, m: float) -> bool:
	var r := Rect2(x - w / 2.0 - m, z - d / 2.0 - m, w + m * 2.0, d + m * 2.0)
	for f in footprints:
		if r.intersects(f):
			return false
	return true

# ------------------------------------------------------------------ постройка мира
func build_env(env_parent: Node3D) -> void:
	_build_environment(env_parent)

func build_terrain() -> void:
	_build_terrain()
	_build_water()

func build_towns() -> void:
	for t in towns:
		_build_town(t)
	_build_wild()

func build_nature() -> void:
	_build_nature()
	_build_pads()
	_build_clouds()
	_build_minimap()

func _build_environment(parent: Node3D) -> void:
	var env := Environment.new()
	var sky := Sky.new()
	var sm := ProceduralSkyMaterial.new()
	sm.sky_top_color = Color("#2F6FD6")
	sm.sky_horizon_color = Color("#FFC59A")
	sm.ground_horizon_color = Color("#F3C9A6")
	sm.ground_bottom_color = Color("#0B4D72")
	sm.sun_angle_max = 22.0
	sm.sun_curve = 0.12
	sky.sky_material = sm
	env.background_mode = Environment.BG_SKY
	env.sky = sky
	env.ambient_light_source = Environment.AMBIENT_SOURCE_SKY
	env.ambient_light_energy = 0.6
	env.tonemap_mode = Environment.TONE_MAPPER_FILMIC
	env.tonemap_exposure = 1.05
	env.tonemap_white = 6.0
	env.fog_enabled = true
	env.fog_light_color = Color("#F3C9A6")
	env.fog_mode = Environment.FOG_MODE_DEPTH
	env.fog_depth_begin = 260.0
	env.fog_depth_end = 1500.0
	env.fog_depth_curve = 1.6
	env.fog_density = 0.9
	env.fog_sky_affect = 0.25
	env.glow_enabled = true
	env.glow_intensity = 0.55
	env.glow_bloom = 0.08
	env.adjustment_enabled = true
	env.adjustment_saturation = 1.08
	env.adjustment_contrast = 1.1
	var we := WorldEnvironment.new()
	we.environment = env
	parent.add_child(we)

func _build_terrain() -> void:
	var N := 201
	var size := HM_SIZE
	var step := size / float(N - 1)
	var verts := PackedVector3Array()
	var norms := PackedVector3Array()
	var cols := PackedColorArray()
	var uvs := PackedVector2Array()
	verts.resize(N * N)
	norms.resize(N * N)
	cols.resize(N * N)
	uvs.resize(N * N)
	var c_wet := Color("#BFA672")
	var c_sand := Color("#EED79E")
	var c_g1 := Color("#86D057")
	var c_g2 := Color("#4F9F3E")
	var c_g3 := Color("#A9C95A")
	var c_rock := Color("#A08B74")
	var c_rock2 := Color("#C2B6A4")
	var c_dirt := Color("#B49A72")
	for j in N:
		for i in N:
			var x := -size / 2.0 + i * step
			var z := -size / 2.0 + j * step
			var h := height_at(x, z)
			var hx := height_at(x + 1.2, z) - height_at(x - 1.2, z)
			var hz := height_at(x, z + 1.2) - height_at(x, z - 1.2)
			var nrm := Vector3(-hx, 2.4, -hz).normalized()
			var slope := 1.0 - nrm.y
			var c: Color
			if h < 0.5:
				c = c_wet.lerp(Color("#0E4F6E"), 1.0 - smoothstep(-5.0, 0.0, h))
			elif h < 2.1:
				c = c_sand.lerp(c_g3, smoothstep(1.6, 2.1, h))
			else:
				var n := (n_color.get_noise_2d(x, z) + 1.0) * 0.5
				c = c_g1.lerp(c_g2, smoothstep(0.35, 0.7, n))
				if n > 0.72:
					c = c.lerp(c_g3, 0.6)
			if town_at(x, z, 0.95) != null and h > 2.0:
				c = c.lerp(c_dirt, 0.6)
			if slope > 0.2:
				c = c.lerp(c_rock, smoothstep(0.2, 0.42, slope) * 0.85)
			if h > 24.0:
				c = c.lerp(c_rock2, smoothstep(24.0, 32.0, h))
			var k := j * N + i
			verts[k] = Vector3(x, h, z)
			norms[k] = nrm
			cols[k] = c
			uvs[k] = Vector2(x, z) * 0.12
	var idx := PackedInt32Array()
	idx.resize((N - 1) * (N - 1) * 6)
	var p := 0
	for j in N - 1:
		for i in N - 1:
			var a := j * N + i
			var b := a + 1
			var c2 := a + N
			var d := c2 + 1
			idx[p] = a; idx[p + 1] = b; idx[p + 2] = c2
			idx[p + 3] = b; idx[p + 4] = d; idx[p + 5] = c2
			p += 6
	var arr := []
	arr.resize(Mesh.ARRAY_MAX)
	arr[Mesh.ARRAY_VERTEX] = verts
	arr[Mesh.ARRAY_NORMAL] = norms
	arr[Mesh.ARRAY_COLOR] = cols
	arr[Mesh.ARRAY_TEX_UV] = uvs
	arr[Mesh.ARRAY_INDEX] = idx
	var am := ArrayMesh.new()
	am.add_surface_from_arrays(Mesh.PRIMITIVE_TRIANGLES, arr)
	var m := ShaderMaterial.new()
	m.shader = load("res://scripts/terrain.gdshader")
	var nt := NoiseTexture2D.new()
	nt.width = 256
	nt.height = 256
	nt.seamless = true
	var nn := FastNoiseLite.new()
	nn.frequency = 0.03
	nn.fractal_octaves = 3
	nt.noise = nn
	m.set_shader_parameter("detail", nt)
	var mi := mesh_node(am, m, Vector3.ZERO, null, false)
	mi.visible = not ("--noterrain" in OS.get_cmdline_user_args())
	mi.cast_shadow = GeometryInstance3D.SHADOW_CASTING_SETTING_OFF
	var body := StaticBody3D.new()
	body.collision_layer = L_WORLD
	body.collision_mask = 0
	var cs := CollisionShape3D.new()
	cs.shape = am.create_trimesh_shape()
	body.add_child(cs)
	add_child(body)

func _build_water() -> void:
	var pm := PlaneMesh.new()
	pm.size = Vector2(6000, 6000)
	pm.subdivide_width = 170
	pm.subdivide_depth = 170
	water_mat = ShaderMaterial.new()
	water_mat.shader = load("res://scripts/water.gdshader")
	var mi := mesh_node(pm, water_mat, Vector3.ZERO, null, false)
	water_node = mi
	mi.extra_cull_margin = 4.0
	mi.visible = not ("--nowater" in OS.get_cmdline_user_args())
	mi.cast_shadow = GeometryInstance3D.SHADOW_CASTING_SETTING_OFF

# ------------------------------------------------------------------ постройки
const FLOORS := ["#A0785A", "#8C6A50", "#B89B7A", "#7A8C99", "#9E8C7A", "#C2A27C"]
const FURN := ["#6B4F3A", "#8A5A44", "#4F6D7A", "#9C6644", "#5E548E", "#7F5539"]
const FABRIC := ["#E07A5F", "#3D5A80", "#81B29A", "#F2CC8F", "#B56576", "#6D597A"]
var interior_spots: Array = []   # {"pos", "via", "rect"} — лут внутри домов
var chests: Array = []           # Vector3 — сундуки с несколькими предметами
var lamps: Array = []

func _solid(pos: Vector3, size: Vector3, c: Color, rough := 0.85) -> void:
	var bm := BoxMesh.new()
	bm.size = size
	mesh_node(bm, mat(c, rough), pos)
	static_box(pos, size)

func _deco(pos: Vector3, size: Vector3, c: Color, rough := 0.8, emis := 0.0) -> MeshInstance3D:
	var bm := BoxMesh.new()
	bm.size = size
	return mesh_node(bm, mat(c, rough, 0.0, emis), pos, null, emis == 0.0)

func _wall_piece(along_x: bool, s0: float, s1: float, c: float, y: float, h: float, t: float, col: Color) -> void:
	var ln := s1 - s0
	if ln < 0.02 or h < 0.02:
		return
	var mid := (s0 + s1) / 2.0
	if along_x:
		_solid(Vector3(mid, y + h / 2.0, c), Vector3(ln, h, t), col)
	else:
		_solid(Vector3(c, y + h / 2.0, mid), Vector3(t, h, ln), col)

## Стена с проёмами: openings = [[центр, ширина, низ, верх], ...]
func _wall(along_x: bool, a0: float, a1: float, c: float, y: float, h: float, t: float, col: Color, openings: Array) -> void:
	openings.sort_custom(func(p, q): return p[0] < q[0])
	var cur := a0
	for o in openings:
		var o0: float = o[0] - o[1] / 2.0
		var o1: float = o[0] + o[1] / 2.0
		_wall_piece(along_x, cur, o0, c, y, h, t, col)
		_wall_piece(along_x, o0, o1, c, y, o[2], t, col)
		_wall_piece(along_x, o0, o1, c, y + o[3], h - o[3], t, col)
		if o[2] > 0.5:
			# подоконник и рама
			var sill := Vector3(o[0], y + o[2], c) if along_x else Vector3(c, y + o[2], o[0])
			_deco(sill, Vector3(o[1] + 0.2, 0.08, t + 0.12) if along_x else Vector3(t + 0.12, 0.08, o[1] + 0.2), Color("#F4F1EA"))
		cur = o1
	_wall_piece(along_x, cur, a1, c, y, h, t, col)

func house(x: float, z: float, y: float, w: float, d: float, h: float, rot: bool) -> void:
	if rot:
		var tt := w
		w = d
		d = tt
	var wall := Color(WALLS.pick_random())
	var roof := Color(ROOFS.pick_random())
	var t := 0.28
	footprints.append(Rect2(x - w / 2.0, z - d / 2.0, w, d))
	_solid(Vector3(x, y - 0.2, z), Vector3(w + 0.4, 0.6, d + 0.4), Color("#8C8279"))
	var fy := y + 0.1
	_deco(Vector3(x, fy + 0.012, z), Vector3(w - t * 2.0, 0.02, d - t * 2.0), Color(FLOORS.pick_random()), 0.6)
	var door_side := randi() % 4
	var dirs := [Vector2(0, -1), Vector2(0, 1), Vector2(-1, 0), Vector2(1, 0)]
	for side in 4:
		var along_x := side < 2
		var length := w if along_x else d - t * 2.0
		var base := x if along_x else z
		var c: float
		if along_x:
			c = z - d / 2.0 + t / 2.0 if side == 0 else z + d / 2.0 - t / 2.0
		else:
			c = x - w / 2.0 + t / 2.0 if side == 2 else x + w / 2.0 - t / 2.0
		var ops := []
		if side == door_side:
			ops.append([base, 1.7, 0.0, 2.45])
			if length > 7.0:
				ops.append([base - length * 0.32, 1.2, 1.05, 2.15])
				ops.append([base + length * 0.32, 1.2, 1.05, 2.15])
		else:
			var n := 2 if length > 6.5 else 1
			for k in n:
				ops.append([base + (k - (n - 1) / 2.0) * length * 0.42, 1.3, 1.05, 2.2])
		_wall(along_x, base - length / 2.0, base + length / 2.0, c, fy, h, t, wall, ops)
	# потолок и крыша
	_solid(Vector3(x, fy + h + 0.1, z), Vector3(w + 0.3, 0.2, d + 0.3), wall.darkened(0.2))
	var pm := PrismMesh.new()
	var rh := minf(w, d) * 0.42
	var long_x := w >= d
	pm.size = Vector3((d if long_x else w) + 0.9, rh, (w if long_x else d) + 0.9)
	var r := mesh_node(pm, mat(roof, 0.7), Vector3(x, fy + h + 0.2 + rh / 2.0, z))
	if long_x:
		r.rotation.y = PI / 2.0
	var dn: Vector2 = dirs[door_side]
	var via := Vector3(x + dn.x * (w / 2.0 + 1.5), fy, z + dn.y * (d / 2.0 + 1.5))
	# козырёк и ступенька у двери
	_deco(Vector3(x + dn.x * (w / 2.0 + 0.45), fy + 2.6, z + dn.y * (d / 2.0 + 0.45)), Vector3(2.2 if dn.x == 0 else 0.9, 0.1, 0.9 if dn.x == 0 else 2.2), roof.darkened(0.2))
	var inner := Rect2(x - w / 2.0 + t, z - d / 2.0 + t, w - t * 2.0, d - t * 2.0)
	# перегородка с дверным проёмом в больших домах
	if w >= 9.5 and door_side >= 2:
		_wall(false, z - d / 2.0 + t, z + d / 2.0 - t, x, fy, h, 0.2, wall.darkened(0.08), [[z, 1.5, 0.0, 2.4]])
	elif w >= 9.5:
		_wall(false, z - d / 2.0 + t, z + d / 2.0 - t, x, fy, h, 0.2, wall.darkened(0.08), [[z + (d * 0.25 if door_side == 0 else -d * 0.25), 1.5, 0.0, 2.4]])
	_furnish(inner, fy, door_side, h)
	for k in randi_range(2, 3):
		var p := Vector3(randf_range(inner.position.x + 0.9, inner.end.x - 0.9), fy + 0.02, randf_range(inner.position.y + 0.9, inner.end.y - 0.9))
		interior_spots.append({"pos": p, "via": via, "rect": inner.grow(0.2)})
	loot_spots.append(Vector3(via.x, -999, via.z))
	# лампа
	cyl(Vector3(x, fy + h - 0.15, z), 0.22, 0.12, Color("#FFE8B0"), false, 12, 0.3, 0.0, 3.0)
	var l := OmniLight3D.new()
	l.position = Vector3(x, fy + h - 0.5, z)
	l.light_color = Color("#FFD6A0")
	l.light_energy = 1.1
	l.omni_range = maxf(w, d) * 0.8
	add_child(l)
	lamps.append(l)

## Мебель по углам и в центре комнаты
func _furnish(r: Rect2, y: float, door_side: int, h: float) -> void:
	var wood := Color(FURN.pick_random())
	var fab := Color(FABRIC.pick_random())
	var corners := [Vector2(r.position.x + 1.1, r.position.y + 0.8), Vector2(r.end.x - 1.1, r.position.y + 0.8), Vector2(r.position.x + 1.1, r.end.y - 0.8), Vector2(r.end.x - 1.1, r.end.y - 0.8)]
	# не ставим мебель у двери
	var blocked: Array = [[0, 1], [2, 3], [0, 2], [1, 3]][door_side]
	var kinds := ["bed", "shelf", "sofa", "chest", "kitchen", "plant"]
	kinds.shuffle()
	var ki := 0
	for i in 4:
		if i in blocked and randf() < 0.75:
			continue
		var c: Vector2 = corners[i]
		var k: String = kinds[ki % kinds.size()]
		ki += 1
		match k:
			"bed":
				_solid(Vector3(c.x, y + 0.25, c.y), Vector3(1.9, 0.5, 1.1), wood)
				_deco(Vector3(c.x, y + 0.56, c.y), Vector3(1.8, 0.14, 1.0), Color("#F4F1EA"), 0.9)
				_deco(Vector3(c.x + 0.6, y + 0.68, c.y), Vector3(0.4, 0.12, 0.8), Color("#FFFFFF"), 0.9)
				_deco(Vector3(c.x - 0.25, y + 0.64, c.y), Vector3(1.0, 0.04, 1.02), fab, 0.9)
			"shelf":
				_solid(Vector3(c.x, y + 0.95, c.y), Vector3(1.4, 1.9, 0.45), wood)
				for sh in 3:
					for b in 5:
						if randf() < 0.75:
							_deco(Vector3(c.x - 0.55 + b * 0.27, y + 0.45 + sh * 0.55, c.y - 0.12), Vector3(0.16, 0.36, 0.3), Color(FABRIC.pick_random()), 0.8)
			"sofa":
				var cm := CapsuleMesh.new()
				cm.radius = 0.28
				cm.height = 1.9
				var s1 := mesh_node(cm, mat(fab, 0.95), Vector3(c.x, y + 0.32, c.y))
				s1.rotation.z = PI / 2.0
				var s2 := mesh_node(cm, mat(fab.darkened(0.15), 0.95), Vector3(c.x, y + 0.72, c.y + (0.32 if c.y > r.get_center().y else -0.32)))
				s2.rotation.z = PI / 2.0
				static_box(Vector3(c.x, y + 0.45, c.y), Vector3(1.9, 0.9, 0.9))
			"chest":
				chests.append(Vector3(c.x, y, c.y))
			"kitchen":
				_solid(Vector3(c.x, y + 0.45, c.y), Vector3(1.6, 0.9, 0.6), Color("#E9EEF2"))
				_deco(Vector3(c.x, y + 0.92, c.y), Vector3(1.65, 0.05, 0.65), Color("#5C6B73"), 0.3)
				_deco(Vector3(c.x - 0.4, y + 0.95, c.y), Vector3(0.4, 0.04, 0.3), Color("#8D99AE"), 0.2)
			"plant":
				cyl(Vector3(c.x, y + 0.25, c.y), 0.25, 0.5, Color("#B5651D"), true, 12)
				var sp := SphereMesh.new()
				sp.radius = 0.45
				sp.height = 0.9
				mesh_node(sp, mat(Color("#4FA83D"), 0.9), Vector3(c.x, y + 0.85, c.y))
	# стол со стульями и ковёр
	var cc := r.get_center()
	if r.size.x > 4.5 and r.size.y > 3.5:
		_deco(Vector3(cc.x, y + 0.03, cc.y), Vector3(minf(r.size.x * 0.5, 3.2), 0.02, minf(r.size.y * 0.5, 2.2)), fab.lightened(0.15), 0.95)
		_deco(Vector3(cc.x, y + 0.76, cc.y), Vector3(1.5, 0.08, 0.85), wood.lightened(0.1), 0.6)
		for lx in [-0.65, 0.65]:
			for lz in [-0.35, 0.35]:
				_deco(Vector3(cc.x + lx, y + 0.37, cc.y + lz), Vector3(0.08, 0.74, 0.08), wood, 0.6)
		static_box(Vector3(cc.x, y + 0.4, cc.y), Vector3(1.5, 0.8, 0.85))
		for sx in [-1.15, 1.15]:
			_deco(Vector3(cc.x + sx, y + 0.24, cc.y), Vector3(0.45, 0.48, 0.45), wood.darkened(0.1), 0.7)
			_deco(Vector3(cc.x + sx * 1.18, y + 0.75, cc.y), Vector3(0.08, 0.6, 0.45), wood.darkened(0.1), 0.7)

func crates(x: float, z: float, y: float, n: int) -> void:
	for i in n:
		var cx := x + randf_range(-2, 2)
		var cz := z + randf_range(-2, 2)
		if not is_free(cx, cz, 1.3, 1.3, 0.2):
			continue
		var stack := 2 if randf() < 0.35 else 1
		for s in stack:
			box(Vector3(cx, y + 0.65 + s * 1.3, cz), Vector3(1.3, 1.3, 1.3), Color("#B5835A") if s else Color("#A8754C"), true, 0.0, 0.9)
		loot_spots.append(Vector3(cx, y + stack * 1.3, cz))

func container(x: float, z: float, y: float, rot: bool, stack: int) -> void:
	var w := 6.2
	var d := 2.5
	if rot:
		w = 2.5
		d = 6.2
	if not is_free(x, z, w, d, 0.6):
		return
	for s in stack:
		var c := Color(CONT.pick_random())
		box(Vector3(x, y + 1.3 + s * 2.6, z), Vector3(w, 2.6, d), c, true, 0.0, 0.5)
		box(Vector3(x, y + 0.35 + s * 2.6, z), Vector3(w + 0.05, 0.12, d + 0.05), c.darkened(0.4), false)
		box(Vector3(x, y + 2.3 + s * 2.6, z), Vector3(w + 0.05, 0.12, d + 0.05), c.darkened(0.4), false)
	loot_spots.append(Vector3(x, y + stack * 2.6, z))
	loot_spots.append(Vector3(x + (2.0 if rot else 0.0), -999, z + (0.0 if rot else 2.0)))

func sandbags(x: float, z: float, y: float, rot: bool) -> void:
	var w := 0.8 if rot else 4.0
	var d := 4.0 if rot else 0.8
	if not is_free(x, z, w, d, 0.4):
		return
	# мешки — ряд скруглённых капсул
	var cm := CapsuleMesh.new()
	cm.radius = 0.32
	cm.height = 1.1
	var m := mat(Color("#C9B48A"), 0.95)
	for row in 2:
		for k in 4:
			var o := -1.5 + k * 1.0 + (0.5 if row == 1 else 0.0)
			if row == 1 and k == 3:
				continue
			var mi := mesh_node(cm, m, Vector3(x + (0.0 if rot else o), y + 0.3 + row * 0.55, z + (o if rot else 0.0)))
			mi.rotation = Vector3(0, 0 if rot else PI / 2.0, PI / 2.0)
			mi.rotation = Vector3(PI / 2.0, 0, 0) if rot else Vector3(0, 0, PI / 2.0)
	static_box(Vector3(x, y + 0.6, z), Vector3(w, 1.2, d))
	footprints.append(Rect2(x - w / 2.0, z - d / 2.0, w, d))
	loot_spots.append(Vector3(x + (1.2 if rot else 0.0), -999, z + (0.0 if rot else 1.2)))

func add_pad(x: float, z: float) -> void:
	pads.append(Vector3(x, height_at(x, z), z))

func _build_town(t: Dictionary) -> void:
	var y: float = t.h
	var tx: float = t.x
	var tz: float = t.z
	var tr: float = t.r
	match t.kind:
		"fort":
			var s := 17.0
			var stone := Color("#A39B90")
			for f in [Vector2(0, -1), Vector2(0, 1), Vector2(-1, 0), Vector2(1, 0)]:
				for seg in [-1, 1]:
					var ln := s - 3.0
					if f.x == 0:
						box(Vector3(tx + seg * (ln / 2.0 + 2.5), y + 1.7, tz + f.y * s), Vector3(ln, 3.4, 1.4), stone)
					else:
						box(Vector3(tx + f.x * s, y + 1.7, tz + seg * (ln / 2.0 + 2.5)), Vector3(1.4, 3.4, ln), stone)
			for c in [Vector2(-1, -1), Vector2(1, -1), Vector2(-1, 1), Vector2(1, 1)]:
				cyl(Vector3(tx + c.x * s, y + 3.25, tz + c.y * s), 2.4, 6.5, Color("#8A8178"), true, 20, 0.95)
				var cone := CylinderMesh.new()
				cone.top_radius = 0.0
				cone.bottom_radius = 2.9
				cone.height = 2.6
				cone.radial_segments = 20
				mesh_node(cone, mat(Color("#9C3D54"), 0.7), Vector3(tx + c.x * s, y + 7.8, tz + c.y * s))
			house(tx, tz, y, 9, 7, 4.5, false)
			for i in 4:
				crates(tx + randf_range(-12, 12), tz + randf_range(-12, 12), y, 2)
			for i in 6:
				loot_spots.append(Vector3(tx + randf_range(-13, 13), -999, tz + randf_range(-13, 13)))
			add_pad(tx + 24, tz)
		"oil":
			for o in [Vector2(-10, -8), Vector2(8, -10), Vector2(-6, 10)]:
				cyl(Vector3(tx + o.x, y + 3.25, tz + o.y), 4.6, 6.5, Color("#D7DCE0"), true, 32, 0.35, 0.6)
				cyl(Vector3(tx + o.x, y + 6.6, tz + o.y), 4.8, 0.3, Color("#B33A3A"), false, 32)
				loot_spots.append(Vector3(tx + o.x, y + 6.75, tz + o.y))
			for i in 10:
				container(tx + randf_range(-24, 24), tz + randf_range(-24, 24), y, randf() < 0.5, 2 if randf() < 0.3 else 1)
			house(tx + 14, tz + 10, y, 8, 6, 4, true)
			add_pad(tx + 1, tz - 1.5)
			add_pad(tx - 18, tz + 18)
		"light":
			for i in 7:
				var cm := CylinderMesh.new()
				cm.top_radius = 2.6 - (i + 1) * 0.12
				cm.bottom_radius = 2.6 - i * 0.12
				cm.height = 3.0
				cm.radial_segments = 28
				mesh_node(cm, mat(Color("#F4F1EA") if i % 2 else Color("#D62828"), 0.6), Vector3(tx, y + 1.5 + i * 3.0, tz))
			static_cyl(Vector3(tx, y + 10.5, tz), 2.5, 21)
			footprints.append(Rect2(tx - 2.6, tz - 2.6, 5.2, 5.2))
			cyl(Vector3(tx, y + 22, tz), 1.6, 1.8, Color("#FFE08A"), false, 20, 0.2, 0.0, 2.5)
			var lamp := OmniLight3D.new()
			lamp.position = Vector3(tx, y + 22.5, tz)
			lamp.light_color = Color("#FFD27A")
			lamp.omni_range = 18
			lamp.light_energy = 2.0
			add_child(lamp)
			house(tx + 9, tz - 4, y, 7, 6, 3.8, false)
			for i in 3:
				crates(tx + randf_range(-12, 12), tz + randf_range(-12, 12), y, 2)
			add_pad(tx - 8, tz - 6)
		_:
			var n := 7 if t.kind == "city" else 5
			var placed := 0
			var tries := 0
			while tries < 60 and placed < n:
				tries += 1
				var a := randf() * TAU
				var rr := randf_range(tr * 0.2, tr * 0.8)
				var x := tx + cos(a) * rr
				var z := tz + sin(a) * rr
				var w := randf_range(7, 12 if t.kind == "city" else 9.5)
				var d := randf_range(6, 8.5)
				var h := randf_range(4.4, 5.2) if (t.kind == "city" and randf() < 0.4) else randf_range(3.4, 3.9)
				var rot := randf() < 0.5
				if not is_free(x, z, d if rot else w, w if rot else d, 3.2):
					continue
				house(x, z, y, w, d, h, rot)
				placed += 1
			for i in (4 if t.kind == "city" else 2):
				container(tx + randf_range(-tr, tr) * 0.8, tz + randf_range(-tr, tr) * 0.8, y, randf() < 0.5, 1)
			for i in 4:
				crates(tx + randf_range(-tr, tr) * 0.7, tz + randf_range(-tr, tr) * 0.7, y, 2)
			for i in 4:
				sandbags(tx + randf_range(-tr, tr) * 0.8, tz + randf_range(-tr, tr) * 0.8, y, randf() < 0.5)
			if t.kind == "fish":
				for i in 3:
					var a := randf() * TAU
					var px := tx + cos(a) * (tr + 4)
					var pz := tz + sin(a) * (tr + 4)
					if height_at(px, pz) < 0.5:
						box(Vector3(px, -0.05, pz), Vector3(3, 0.5, 9), Color("#8B6B4A"))
			add_pad(tx + randf_range(-6, 6), tz + randf_range(-6, 6))

func _build_wild() -> void:
	for i in 26:
		var a := randf() * TAU
		var r := randf_range(20, ISLAND * 0.82)
		var x := cos(a) * r
		var z := sin(a) * r
		var h := height_at(x, z)
		if h < 2.5 or town_at(x, z, 1.4) != null:
			continue
		var sl := absf(height_at(x + 4, z) - height_at(x - 4, z)) + absf(height_at(x, z + 4) - height_at(x, z - 4))
		if sl > 2.2:
			continue
		var r2 := randf()
		if r2 < 0.4 and is_free(x, z, 9, 9, 3):
			house(x, z, h - 0.3, randf_range(6, 8), randf_range(5, 7), randf_range(3.3, 3.7), randf() < 0.5)
		elif r2 < 0.7:
			crates(x, z, h - 0.1, 3)
		else:
			container(x, z, h - 0.2, randf() < 0.5, 1)
	for i in 4:
		var a := randf() * TAU
		var r := randf_range(30, 120)
		var x := cos(a) * r
		var z := sin(a) * r
		if height_at(x, z) > 3.0 and town_at(x, z, 1.2) == null:
			add_pad(x, z)

# ------------------------------------------------------------------ природа
func _mm(mesh: Mesh, m: Material, xforms: Array, colors: Array, shadow := true) -> MultiMeshInstance3D:
	var mm := MultiMesh.new()
	mm.transform_format = MultiMesh.TRANSFORM_3D
	mm.use_colors = true
	mm.mesh = mesh
	mm.instance_count = xforms.size()
	for i in xforms.size():
		mm.set_instance_transform(i, xforms[i])
		mm.set_instance_color(i, colors[i])
	var mi := MultiMeshInstance3D.new()
	mi.multimesh = mm
	mi.material_override = m
	mi.cast_shadow = GeometryInstance3D.SHADOW_CASTING_SETTING_ON if shadow else GeometryInstance3D.SHADOW_CASTING_SETTING_OFF
	add_child(mi)
	return mi

func _vc_mat(rough := 0.9) -> StandardMaterial3D:
	var m := StandardMaterial3D.new()
	m.vertex_color_use_as_albedo = true
	m.roughness = rough
	return m

func _rock_mesh(seed_v: int) -> ArrayMesh:
	var sm := SphereMesh.new()
	sm.radial_segments = 14
	sm.rings = 8
	var arr := sm.get_mesh_arrays()
	var v: PackedVector3Array = arr[Mesh.ARRAY_VERTEX]
	var nz := FastNoiseLite.new()
	nz.seed = seed_v
	nz.frequency = 1.6
	for i in v.size():
		var p := v[i]
		var k := 1.0 + nz.get_noise_3d(p.x, p.y, p.z) * 0.35
		p *= k
		p.y *= 0.72
		if p.y < -0.15:
			p.y = -0.15
		v[i] = p
	var st := SurfaceTool.new()
	st.begin(Mesh.PRIMITIVE_TRIANGLES)
	var idx: PackedInt32Array = arr[Mesh.ARRAY_INDEX]
	for i in idx:
		st.add_vertex(v[i])
	st.generate_normals()
	return st.commit()

func _palm_crown() -> ArrayMesh:
	# 7 изогнутых листьев из полос треугольников
	var st := SurfaceTool.new()
	st.begin(Mesh.PRIMITIVE_TRIANGLES)
	for l in 7:
		var ang := l * TAU / 7.0
		var dir := Vector3(cos(ang), 0, sin(ang))
		var side := Vector3(-dir.z, 0, dir.x)
		var segs := 6
		for s in segs:
			var t0 := float(s) / segs
			var t1 := float(s + 1) / segs
			var p0 := dir * t0 * 3.2 + Vector3.UP * (sin(t0 * 2.2) * 0.9 - t0 * t0 * 1.6)
			var p1 := dir * t1 * 3.2 + Vector3.UP * (sin(t1 * 2.2) * 0.9 - t1 * t1 * 1.6)
			var w0 := sin(t0 * PI) * 0.55 + 0.05
			var w1 := sin(t1 * PI) * 0.55 + 0.05
			var a := p0 - side * w0
			var b := p0 + side * w0
			var c := p1 - side * w1
			var d := p1 + side * w1
			for q in [a, b, c, b, d, c]:
				st.add_vertex(q)
	st.generate_normals()
	return st.commit()

func _build_nature() -> void:
	var trunks := []
	var trunk_c := []
	var crowns := []
	var crown_c := []
	var pines := []
	var pine_c := []
	var palms := []
	var palm_c := []
	var leaf := [Color("#4FA83D"), Color("#3E8E3A"), Color("#69B84A"), Color("#2F7D3B"), Color("#7CC24B")]
	var count := 0
	var tries := 0
	while count < 480 and tries < 6000:
		tries += 1
		var a := randf() * TAU
		var r := sqrt(randf()) * ISLAND * 0.98
		var x := cos(a) * r
		var z := sin(a) * r
		var h := height_at(x, z)
		if h < 1.0 or h > 30.0 or town_at(x, z, 1.05) != null:
			continue
		if not is_free(x, z, 0.6, 0.6, 1.6):
			continue
		var kind := "palm" if h < 3.2 else ("pine" if n_color.get_noise_2d(x * 0.4 + 40, z * 0.4) > 0.05 else "round")
		var s := randf_range(0.85, 1.35)
		var rot := randf() * TAU
		var th := 7.5 if kind == "palm" else (3.0 if kind == "pine" else 3.6)
		var lean := randf_range(-0.14, 0.14) if kind == "palm" else 0.0
		var tb := Basis(Vector3.UP, rot) * Basis(Vector3.RIGHT, lean)
		trunks.append(Transform3D(tb.scaled(Vector3(s, th * s, s)), Vector3(x, h - 0.2 + th * s * 0.5, z)))
		trunk_c.append(Color("#A98458") if kind == "palm" else Color("#6E4B32"))
		var top := Vector3(x, h - 0.2, z) + tb * Vector3(0, th * s, 0)
		match kind:
			"round":
				for k in 4:
					var off := Vector3(randf_range(-0.9, 0.9), randf_range(-0.3, 0.6) + (0.9 if k == 0 else 0.0), randf_range(-0.9, 0.9)) * s
					var cs := randf_range(1.5, 2.1) * s * (1.2 if k == 0 else 1.0)
					crowns.append(Transform3D(Basis().scaled(Vector3(cs, cs * 0.85, cs)), top + Vector3(0, 0.9 * s, 0) + off))
					crown_c.append(Color(leaf.pick_random()))
			"pine":
				for k in 3:
					var ps := (2.2 - k * 0.55) * s
					pines.append(Transform3D(Basis(Vector3.UP, rot).scaled(Vector3(ps, 2.6 * s, ps)), Vector3(x, h - 0.2 + (2.4 + k * 1.6) * s, z)))
					pine_c.append(Color("#2E6B3A").lightened(k * 0.08))
			"palm":
				palms.append(Transform3D(Basis(Vector3.UP, rot).scaled(Vector3(s, s, s)), top))
				palm_c.append(Color(["#5DBB46", "#4CA03A", "#79C653"].pick_random()))
		static_cyl(Vector3(x, h + 3.0, z), 0.4 * s, 6.0)
		count += 1
	var trunk := CylinderMesh.new()
	trunk.top_radius = 0.16
	trunk.bottom_radius = 0.3
	trunk.height = 1.0
	trunk.radial_segments = 10
	_mm(trunk, _vc_mat(), trunks, trunk_c)
	var sph := SphereMesh.new()
	sph.radius = 1.0
	sph.height = 2.0
	sph.radial_segments = 16
	sph.rings = 10
	_mm(sph, _vc_mat(0.85), crowns, crown_c)
	var cone := CylinderMesh.new()
	cone.top_radius = 0.0
	cone.bottom_radius = 1.0
	cone.height = 1.0
	cone.radial_segments = 14
	_mm(cone, _vc_mat(0.85), pines, pine_c)
	var palm_m := _vc_mat(0.8)
	palm_m.cull_mode = BaseMaterial3D.CULL_DISABLED
	_mm(_palm_crown(), palm_m, palms, palm_c)
	# камни: 3 формы, деформированные шумом
	var rock_meshes := [_rock_mesh(1), _rock_mesh(7), _rock_mesh(23)]
	var rocks := [[], [], []]
	var rock_c := [[], [], []]
	count = 0
	tries = 0
	while count < 150 and tries < 3000:
		tries += 1
		var a := randf() * TAU
		var r := sqrt(randf()) * ISLAND
		var x := cos(a) * r
		var z := sin(a) * r
		var h := height_at(x, z)
		if h < 0.3 or town_at(x, z, 1.0) != null:
			continue
		var s := randf_range(0.8, 3.2)
		var v := randi() % 3
		rocks[v].append(Transform3D(Basis(Vector3.UP, randf() * TAU).scaled(Vector3(s, s * randf_range(0.7, 1.0), s * randf_range(0.9, 1.2))), Vector3(x, h - 0.1, z)))
		rock_c[v].append(Color(["#8E8A84", "#A39E96", "#7C786F", "#948C80"].pick_random()))
		var b := StaticBody3D.new()
		b.collision_layer = L_WORLD
		b.collision_mask = 0
		var csh := CollisionShape3D.new()
		var sp := SphereShape3D.new()
		sp.radius = s * 0.78
		csh.shape = sp
		b.add_child(csh)
		b.position = Vector3(x, h + s * 0.05, z)
		add_child(b)
		count += 1
	for v in 3:
		if rocks[v].size():
			_mm(rock_meshes[v], _vc_mat(0.95), rocks[v], rock_c[v])
	# трава с качанием на ветру
	var gx := []
	var gc := []
	tries = 0
	while gx.size() < 7000 and tries < 40000:
		tries += 1
		var a := randf() * TAU
		var r := sqrt(randf()) * ISLAND
		var x := cos(a) * r
		var z := sin(a) * r
		var h := height_at(x, z)
		if h < 2.2 or h > 22.0 or town_at(x, z, 0.85) != null:
			continue
		var s := randf_range(0.55, 1.15)
		var flower := randf() < 0.07
		gx.append(Transform3D(Basis(Vector3.UP, randf() * TAU).scaled(Vector3(s, s * (0.7 if flower else 1.0), s)), Vector3(x, h - 0.05, z)))
		gc.append(Color(["#FFE066", "#FF8FAB", "#FFFFFF", "#C77DFF"].pick_random()) if flower else Color(["#6CC24A", "#58B03C", "#8FD15C"].pick_random()))
	var st := SurfaceTool.new()
	st.begin(Mesh.PRIMITIVE_TRIANGLES)
	for k in 3:
		var ang := k * PI / 3.0
		var o := Vector3(cos(ang), 0, sin(ang)) * 0.09
		st.set_uv(Vector2(0, 1)); st.add_vertex(-o)
		st.set_uv(Vector2(1, 1)); st.add_vertex(o)
		st.set_uv(Vector2(0.5, 0)); st.add_vertex(Vector3(0, 0.8, 0) + o * 0.2)
	st.generate_normals()
	var gm := ShaderMaterial.new()
	gm.shader = load("res://scripts/grass.gdshader")
	grass_mm = _mm(st.commit(), gm, gx, gc, false)
	grass_mm.visibility_range_end = 260

func _build_pads() -> void:
	var base := CylinderMesh.new()
	base.top_radius = 1.6
	base.bottom_radius = 1.8
	base.height = 0.35
	base.radial_segments = 28
	var tor := TorusMesh.new()
	tor.inner_radius = 1.2
	tor.outer_radius = 1.38
	var glow := mat(Color("#5EF2FF"), 0.3, 0.0, 3.0)
	for p in pads:
		var g := Node3D.new()
		g.position = p
		add_child(g)
		mesh_node(base, mat(Color("#2B2D42"), 0.4, 0.5), Vector3(0, 0.15, 0), g)
		var disc := CylinderMesh.new()
		disc.top_radius = 1.2
		disc.bottom_radius = 1.2
		disc.height = 0.04
		disc.radial_segments = 28
		mesh_node(disc, glow, Vector3(0, 0.34, 0), g, false)
		var ring := mesh_node(tor, glow, Vector3(0, 0.5, 0), g, false)
		pad_rings.append(ring)

func _build_clouds() -> void:
	var xs := []
	var cs := []
	for i in 16:
		var a := randf() * TAU
		var r := randf_range(60, 420)
		var c := Vector3(cos(a) * r, randf_range(150, 210), sin(a) * r)
		for k in 6:
			var s := randf_range(10, 22)
			xs.append(Transform3D(Basis().scaled(Vector3(s, s * 0.5, s * 0.8)), c + Vector3(randf_range(-22, 22), randf_range(-4, 6), randf_range(-12, 12))))
			cs.append(Color("#FFF4EA"))
	var sph := SphereMesh.new()
	sph.radial_segments = 16
	sph.rings = 8
	var m := StandardMaterial3D.new()
	m.vertex_color_use_as_albedo = true
	m.emission_enabled = true
	m.emission = Color("#FFD9C0")
	m.emission_energy_multiplier = 0.35
	m.roughness = 1.0
	var mi := _mm(sph, m, xs, cs, false)
	mi.name = "Clouds"

func _build_minimap() -> void:
	var N := 256
	var img := Image.create(N, N, false, Image.FORMAT_RGBA8)
	for j in N:
		for i in N:
			var x := -HM_SIZE / 2.0 + float(i) / N * HM_SIZE
			var z := -HM_SIZE / 2.0 + float(j) / N * HM_SIZE
			var h := height_at(x, z)
			var c: Color
			if h < -2.0:
				c = Color8(22, 98, 140)
			elif h < 0.0:
				c = Color8(44, 150, 180)
			elif h < 2.0:
				c = Color8(232, 210, 150)
			elif h < 20.0:
				c = Color8(110, 190, 80).lerp(Color8(70, 140, 60), h / 20.0)
			else:
				c = Color8(160, 150, 138)
			if h > 2.0 and town_at(x, z, 0.9) != null:
				c = Color8(190, 170, 135)
			img.set_pixel(i, j, c)
	var s := N / HM_SIZE
	for f in footprints:
		var r: Rect2 = f
		img.fill_rect(Rect2i(int((r.position.x + HM_SIZE / 2.0) * s), int((r.position.y + HM_SIZE / 2.0) * s), maxi(1, int(r.size.x * s)), maxi(1, int(r.size.y * s))), Color8(70, 60, 55))
	island_tex = ImageTexture.create_from_image(img)
