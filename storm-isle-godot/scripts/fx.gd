class_name Fx
extends Node3D
## Эффекты из пулов: частицы, трассеры, вспышки, взрывы, цифры урона.

var pools := {}
var tracers: Array = []
var ti := 0
var flashes: Array = []
var fi := 0
var fireballs: Array = []
var fbi := 0
var labels: Array = []
var li := 0
var light: OmniLight3D
var font: Font

func setup(f: Font) -> void:
	font = f
	_pool("spark", 10, Color(1, 0.88, 0.55), 0.04, 8, 0.28, 5.0, 12.0, 180.0, false)
	_pool("dust", 10, Color("#C9B28A"), 0.08, 7, 0.5, 2.4, 9.0, 60.0, false)
	_pool("blood", 10, Color("#D62839"), 0.05, 8, 0.4, 2.8, 9.0, 120.0, false)
	_pool("shield", 8, Color("#3DD6FF"), 0.05, 10, 0.45, 3.5, 4.0, 180.0, false)
	_pool("splash", 6, Color("#CFF6FF"), 0.08, 12, 0.6, 3.5, 9.0, 35.0, false)
	_pool("heal", 6, Color("#6BE38C"), 0.07, 14, 0.9, 1.4, -2.5, 180.0, false)
	_pool("fire", 4, Color("#FF9A3A"), 0.22, 30, 0.8, 9.0, 3.0, 180.0, false)
	_pool("smoke", 6, Color(0.55, 0.55, 0.55, 0.6), 0.7, 14, 2.6, 2.0, -1.2, 70.0, true)
	_pool("puff", 8, Color(0.85, 0.8, 0.7, 0.5), 0.35, 6, 0.9, 1.4, -0.6, 90.0, true)
	_pool("pad", 6, Color("#5EF2FF"), 0.06, 20, 0.7, 5.0, 3.0, 25.0, false)
	_pool("confetti", 4, Color(1, 1, 1), 0.07, 40, 1.4, 7.0, 6.0, 60.0, false)
	_pool("redsmoke", 4, Color(1, 0.3, 0.35, 0.55), 0.9, 10, 4.0, 3.0, -2.5, 15.0, true)
	var tm := BoxMesh.new()
	tm.size = Vector3(0.035, 0.035, 1.0)
	for i in 36:
		var root := Node3D.new()
		add_child(root)
		var mi := MeshInstance3D.new()
		mi.mesh = tm
		var m := StandardMaterial3D.new()
		m.shading_mode = BaseMaterial3D.SHADING_MODE_UNSHADED
		m.transparency = BaseMaterial3D.TRANSPARENCY_ALPHA
		m.blend_mode = BaseMaterial3D.BLEND_MODE_ADD
		m.albedo_color = Color(1, 0.9, 0.6)
		mi.material_override = m
		mi.position.z = -0.5
		mi.cast_shadow = GeometryInstance3D.SHADOW_CASTING_SETTING_OFF
		root.add_child(mi)
		root.visible = false
		tracers.append({"n": root, "m": m, "life": 0.0})
	var fm := SphereMesh.new()
	fm.radius = 0.16
	fm.height = 0.32
	fm.radial_segments = 8
	fm.rings = 4
	for i in 14:
		var mi := MeshInstance3D.new()
		mi.mesh = fm
		var m := StandardMaterial3D.new()
		m.shading_mode = BaseMaterial3D.SHADING_MODE_UNSHADED
		m.blend_mode = BaseMaterial3D.BLEND_MODE_ADD
		m.albedo_color = Color(1, 0.75, 0.35)
		mi.material_override = m
		mi.cast_shadow = GeometryInstance3D.SHADOW_CASTING_SETTING_OFF
		mi.visible = false
		add_child(mi)
		flashes.append({"n": mi, "life": 0.0})
	var bm := SphereMesh.new()
	bm.radial_segments = 20
	bm.rings = 10
	for i in 4:
		var mi := MeshInstance3D.new()
		mi.mesh = bm
		var m := StandardMaterial3D.new()
		m.shading_mode = BaseMaterial3D.SHADING_MODE_UNSHADED
		m.transparency = BaseMaterial3D.TRANSPARENCY_ALPHA
		m.albedo_color = Color(1, 0.55, 0.15)
		mi.material_override = m
		mi.cast_shadow = GeometryInstance3D.SHADOW_CASTING_SETTING_OFF
		mi.visible = false
		add_child(mi)
		fireballs.append({"n": mi, "m": m, "life": 9.0, "r": 1.0})
	for i in 16:
		var l := Label3D.new()
		l.billboard = BaseMaterial3D.BILLBOARD_ENABLED
		l.no_depth_test = true
		l.fixed_size = true
		l.pixel_size = 0.0011
		l.font_size = 46
		l.outline_size = 12
		if font:
			l.font = font
		l.visible = false
		add_child(l)
		labels.append({"n": l, "life": 0.0})
	light = OmniLight3D.new()
	light.light_energy = 0.0
	light.omni_range = 9.0
	light.light_color = Color("#FFB050")
	add_child(light)

func _pool(n: String, count: int, color: Color, size: float, amount: int, life: float, speed: float, grav: float, spread: float, grow: bool) -> void:
	var arr := []
	var mesh := SphereMesh.new()
	mesh.radius = size
	mesh.height = size * 2.0
	mesh.radial_segments = 8
	mesh.rings = 4
	var m := StandardMaterial3D.new()
	m.vertex_color_use_as_albedo = true
	m.shading_mode = BaseMaterial3D.SHADING_MODE_UNSHADED if not grow else BaseMaterial3D.SHADING_MODE_PER_PIXEL
	if color.a < 1.0:
		m.transparency = BaseMaterial3D.TRANSPARENCY_ALPHA
	mesh.material = m
	var curve := Curve.new()
	if grow:
		curve.add_point(Vector2(0, 0.4))
		curve.add_point(Vector2(0.6, 1.0))
		curve.add_point(Vector2(1, 0.0))
	else:
		curve.add_point(Vector2(0, 1))
		curve.add_point(Vector2(1, 0))
	for i in count:
		var p := CPUParticles3D.new()
		p.mesh = mesh
		p.one_shot = true
		p.emitting = false
		p.amount = amount
		p.lifetime = life
		p.explosiveness = 0.95
		p.randomness = 0.5
		p.direction = Vector3.UP
		p.spread = spread
		p.initial_velocity_min = speed * 0.4
		p.initial_velocity_max = speed
		p.gravity = Vector3(0, -grav, 0)
		p.scale_amount_min = 0.6
		p.scale_amount_max = 1.3
		p.scale_amount_curve = curve
		p.color = color
		p.local_coords = false
		add_child(p)
		arr.append(p)
	pools[n] = {"arr": arr, "i": 0, "color": color}

func burst(n: String, pos: Vector3, color := Color(0, 0, 0, 0)) -> void:
	var pl: Dictionary = pools[n]
	var p: CPUParticles3D = pl.arr[pl.i]
	pl.i = (pl.i + 1) % pl.arr.size()
	p.global_position = pos
	p.color = color if color.a > 0.0 else pl.color
	p.restart()
	p.emitting = true

func tracer(from: Vector3, to: Vector3, c := Color(1, 0.9, 0.6)) -> void:
	var len := from.distance_to(to)
	if len < 0.5:
		return
	var t: Dictionary = tracers[ti]
	ti = (ti + 1) % tracers.size()
	var n: Node3D = t.n
	n.visible = true
	n.global_position = from
	if absf((to - from).normalized().y) > 0.999:
		n.look_at(to, Vector3.RIGHT)
	else:
		n.look_at(to)
	n.scale = Vector3(1, 1, len)
	t.m.albedo_color = c
	t.life = 0.07

func flash(pos: Vector3, big: bool, near_player: bool) -> void:
	var f: Dictionary = flashes[fi]
	fi = (fi + 1) % flashes.size()
	f.n.visible = true
	f.n.global_position = pos
	f.n.scale = Vector3.ONE * (2.0 if big else randf_range(0.9, 1.3))
	f.life = 0.05
	if near_player:
		light.global_position = pos
		light.light_energy = 3.0
		light.omni_range = 9.0

func explosion(pos: Vector3, r: float) -> void:
	var f: Dictionary = fireballs[fbi]
	fbi = (fbi + 1) % fireballs.size()
	f.n.visible = true
	f.n.global_position = pos
	f.life = 0.0
	f.r = r
	burst("fire", pos + Vector3(0, 0.5, 0))
	burst("smoke", pos + Vector3(0, 0.8, 0))
	burst("dust", pos)
	light.global_position = pos + Vector3.UP
	light.light_energy = 10.0
	light.omni_range = 24.0

func number(pos: Vector3, v: float, kind := "") -> void:
	var l: Dictionary = labels[li]
	li = (li + 1) % labels.size()
	var n: Label3D = l.n
	n.visible = true
	n.text = str(int(round(v)))
	n.global_position = pos + Vector3(randf_range(-0.3, 0.3), 0, 0)
	n.modulate = Color("#FFD23F") if kind == "head" else (Color("#3DD6FF") if kind == "shield" else Color.WHITE)
	n.font_size = 58 if kind == "head" else 46
	l.life = 0.9

func _process(dt: float) -> void:
	for t in tracers:
		if t.life > 0.0:
			t.life -= dt
			t.m.albedo_color.a = maxf(t.life / 0.07, 0.0)
			if t.life <= 0.0:
				t.n.visible = false
	for f in flashes:
		if f.life > 0.0:
			f.life -= dt
			if f.life <= 0.0:
				f.n.visible = false
	for f in fireballs:
		if f.life < 0.6:
			f.life += dt
			var k: float = f.life / 0.55
			f.n.scale = Vector3.ONE * f.r * (0.3 + k)
			f.m.albedo_color = Color(1, 0.6 - k * 0.4, 0.15, clampf(1.0 - k, 0.0, 1.0))
			if k >= 1.0:
				f.n.visible = false
	for l in labels:
		if l.life > 0.0:
			l.life -= dt
			l.n.position.y += dt * 1.3
			l.n.modulate.a = clampf(l.life * 2.5, 0.0, 1.0)
			if l.life <= 0.0:
				l.n.visible = false
	if light.light_energy > 0.0:
		light.light_energy = maxf(0.0, light.light_energy - dt * 50.0)
