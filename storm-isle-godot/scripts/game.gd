class_name Game
extends Node3D
## Матч «Остров Шторма»: дирижабль, лут, шторм, боты, камера, управление.

const L_WORLD := 1
const L_CHAR := 2
const L_DOME := 4

var world: World
var sfx: Sfx
var fx: Fx
var hud: Hud
var cam: Camera3D
var sun: DirectionalLight3D
var fighters: Array = []
var player: Fighter
var loot: Array = []
var domes: Array = []
var grenades: Array = []
var drops: Array = []
var mode := "menu"
var time := 0.0
var end_timer := 0.0
var streak := {"count": 0, "t": -99.0}
var font_display: Font
var font_body: Font
var autotest := false

# камера и ввод игрока
var cam_yaw := 0.0
var cam_pitch := -0.1
var look_delta := Vector2.ZERO
var joy := Vector2.ZERO
var fire_held := false
var ads_toggle := false
var ads_held := false
var shake := 0.0
var cross_kick := 0.0
var cur_fov := 72.0
var near_weapon = null
var menu_ang := 0.0
var cfg := Settings.new()
var is_touch := false
var view: SubViewport
var screen: TextureRect
var screen_mat: ShaderMaterial
var listener: AudioListener3D
var smokes_active: Array = []
var chests_live: Array = []
var lobby_pos := Vector3.ZERO
var lobby_yaw := 0.0
var loading: CanvasLayer
var loading_bar: ColorRect
var loading_label: Label
var paused := false
var ready_done := false

# дирижабль
var ship: Node3D
var ship_prop: Node3D
var ship_a := Vector3.ZERO
var ship_b := Vector3.ZERO
var ship_t := 0.0
const SHIP_DUR := 34.0

# шторм
const PHASES := [
	{"wait": 70.0, "shrink": 32.0, "r": 118.0, "dps": 1.0},
	{"wait": 38.0, "shrink": 28.0, "r": 74.0, "dps": 2.0},
	{"wait": 32.0, "shrink": 24.0, "r": 42.0, "dps": 4.0},
	{"wait": 28.0, "shrink": 20.0, "r": 18.0, "dps": 7.0},
	{"wait": 22.0, "shrink": 18.0, "r": 2.0, "dps": 11.0},
]
var storm := {}
var storm_mesh: MeshInstance3D
var storm_mat: ShaderMaterial
var next_mesh: MeshInstance3D


func _ready() -> void:
	process_mode = Node.PROCESS_MODE_PAUSABLE
	is_touch = DisplayServer.is_touchscreen_available() or OS.has_feature("mobile") or "--touch" in OS.get_cmdline_user_args()
	autotest = "--autotest" in OS.get_cmdline_user_args()
	cfg.load_cfg(is_touch)
	font_display = load("res://fonts/RussoOne-Regular.ttf")
	font_body = load("res://fonts/Rubik-Medium.ttf")
	_setup_buses()
	_show_loading()
	await _step(0.05, "Поднимаем остров из океана…")
	world = World.new()
	add_child(world)
	await _step(0.25, "Выращиваем горы и пляжи…")
	world.build_env(self)
	world.build_terrain()
	await _step(0.4, "Строим города и обставляем дома…")
	world.build_towns()
	await _step(0.6, "Сажаем пальмы и ёлки…")
	world.build_nature()
	await _step(0.75, "Заряжаем оружие…")
	_setup_view()
	sun = DirectionalLight3D.new()
	sun.light_color = Color("#FFE0B5")
	sun.light_energy = 1.9
	sun.shadow_enabled = true
	sun.directional_shadow_max_distance = 80.0
	sun.directional_shadow_mode = DirectionalLight3D.SHADOW_PARALLEL_2_SPLITS
	sun.shadow_bias = 0.05
	sun.rotation = Vector3(deg_to_rad(-38), deg_to_rad(-125), 0)
	add_child(sun)
	sfx = Sfx.new()
	add_child(sfx)
	fx = Fx.new()
	add_child(fx)
	fx.setup(font_display)
	_build_storm()
	_build_ship()
	await _step(0.88, "Будим соперников…")
	player = _new_fighter("Ты", true)
	apply_skin()
	var nicks: Array = Data.NICKS.duplicate()
	nicks.shuffle()
	for i in 19:
		_new_fighter(nicks[i], false)
	hud = Hud.new()
	add_child(hud)
	hud.setup(self)
	_reset_storm()
	_scatter_loot()
	_pick_lobby()
	apply_settings()
	await _step(1.0, "Готово!")
	ready_done = true
	_hide_loading()
	if "--shots" in OS.get_cmdline_user_args():
		_shots()
	if autotest:
		Engine.time_scale = 6.0
		Engine.max_physics_steps_per_frame = 64
		start_match()
		jump_from(player)
	else:
		to_menu()

# ------------------------------------------------------------------ экран загрузки
func _show_loading() -> void:
	loading = CanvasLayer.new()
	loading.layer = 50
	add_child(loading)
	var bg := ColorRect.new()
	bg.set_anchors_preset(Control.PRESET_FULL_RECT)
	bg.color = Color("#0B1224")
	loading.add_child(bg)
	var c := CenterContainer.new()
	c.set_anchors_preset(Control.PRESET_FULL_RECT)
	loading.add_child(c)
	var box := VBoxContainer.new()
	box.alignment = BoxContainer.ALIGNMENT_CENTER
	box.add_theme_constant_override("separation", 18)
	c.add_child(box)
	var icon := TextureRect.new()
	icon.texture = load("res://icon.svg")
	icon.custom_minimum_size = Vector2(150, 150)
	icon.expand_mode = TextureRect.EXPAND_IGNORE_SIZE
	icon.stretch_mode = TextureRect.STRETCH_KEEP_ASPECT_CENTERED
	icon.texture_filter = CanvasItem.TEXTURE_FILTER_NEAREST
	box.add_child(icon)
	var t := Label.new()
	t.text = "ОСТРОВ ШТОРМА"
	t.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	t.add_theme_font_override("font", font_display)
	t.add_theme_font_size_override("font_size", 56)
	t.add_theme_color_override("font_color", Color("#FFB627"))
	t.add_theme_color_override("font_outline_color", Color("#6B2A00"))
	t.add_theme_constant_override("outline_size", 10)
	box.add_child(t)
	var frame := ColorRect.new()
	frame.custom_minimum_size = Vector2(420, 14)
	frame.color = Color(1, 1, 1, 0.12)
	box.add_child(frame)
	loading_bar = ColorRect.new()
	loading_bar.color = Color("#FFB627")
	loading_bar.size = Vector2(0, 14)
	frame.add_child(loading_bar)
	loading_label = Label.new()
	loading_label.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	loading_label.add_theme_font_override("font", font_body)
	loading_label.add_theme_font_size_override("font_size", 18)
	loading_label.add_theme_color_override("font_color", Color("#A9B6CC"))
	box.add_child(loading_label)

func _step(k: float, text: String) -> void:
	loading_bar.size.x = 420.0 * k
	loading_label.text = text
	await get_tree().process_frame
	await get_tree().process_frame

func _hide_loading() -> void:
	var tw := create_tween()
	for ch in loading.get_children():
		if ch is CanvasItem:
			tw.parallel().tween_property(ch, "modulate:a", 0.0, 0.45)
	tw.tween_callback(loading.queue_free)

# ------------------------------------------------------------------ пиксельный рендер
func _setup_view() -> void:
	view = SubViewport.new()
	view.render_target_update_mode = SubViewport.UPDATE_ALWAYS
	view.msaa_3d = Viewport.MSAA_DISABLED
	view.audio_listener_enable_3d = false
	add_child(view)
	cam = Camera3D.new()
	cam.fov = 72
	cam.far = 3200
	view.add_child(cam)
	cam.current = true
	listener = AudioListener3D.new()
	add_child(listener)
	listener.make_current()
	var layer := CanvasLayer.new()
	layer.layer = -1
	add_child(layer)
	screen = TextureRect.new()
	screen.set_anchors_preset(Control.PRESET_FULL_RECT)
	screen.texture = view.get_texture()
	screen.expand_mode = TextureRect.EXPAND_IGNORE_SIZE
	screen.stretch_mode = TextureRect.STRETCH_SCALE
	screen.texture_filter = CanvasItem.TEXTURE_FILTER_NEAREST
	screen.mouse_filter = Control.MOUSE_FILTER_IGNORE
	screen_mat = ShaderMaterial.new()
	screen_mat.shader = load("res://scripts/pixel.gdshader")
	screen.material = screen_mat
	layer.add_child(screen)
	get_viewport().size_changed.connect(_resize_view)
	_resize_view()

func _resize_view() -> void:
	if view == null:
		return
	var px: int = maxi(1, int(cfg.v.pixel))
	var ws := DisplayServer.window_get_size()
	var sz := Vector2i(maxi(64, ws.x / px), maxi(64, ws.y / px))
	view.size = sz
	screen_mat.set_shader_parameter("px", Vector2(1.0 / sz.x, 1.0 / sz.y))
	screen_mat.set_shader_parameter("retro", bool(cfg.v.retro) and px > 1)

func _setup_buses() -> void:
	for n in ["Music", "SFX"]:
		if AudioServer.get_bus_index(n) < 0:
			AudioServer.add_bus()
			var i := AudioServer.bus_count - 1
			AudioServer.set_bus_name(i, n)
			AudioServer.set_bus_send(i, "Master")

func apply_settings() -> void:
	var v: Dictionary = cfg.v
	var q: int = v.quality
	sun.shadow_enabled = q > 0
	sun.directional_shadow_max_distance = 60.0 if q == 1 else 90.0
	if world.grass_mm:
		world.grass_mm.multimesh.visible_instance_count = [0, 3000, -1][q]
	for l in world.lamps:
		l.visible = q > 0
	Engine.max_fps = int(v.fps)
	_resize_view()
	AudioServer.set_bus_volume_db(0, linear_to_db(maxf(float(v.vol_master), 0.001)))
	AudioServer.set_bus_volume_db(AudioServer.get_bus_index("Music"), linear_to_db(maxf(float(v.vol_music), 0.001)))
	AudioServer.set_bus_volume_db(AudioServer.get_bus_index("SFX"), linear_to_db(maxf(float(v.vol_sfx), 0.001)))
	AudioServer.set_bus_mute(0, float(v.vol_master) < 0.01)

func apply_skin() -> void:
	var o: Array = Data.OUTFITS[int(cfg.v.skin) % Data.OUTFITS.size()]
	player.set_outfit(o[0], o[1])

func save_settings() -> void:
	cfg.save_cfg()

func _pick_lobby() -> void:
	# красивая точка на пляже для лобби
	for i in 400:
		var a := randf() * TAU
		var r := World.ISLAND * randf_range(0.45, 0.85)
		var x := cos(a) * r
		var z := sin(a) * r
		var h := world.height_at(x, z)
		var sl := absf(world.height_at(x + 3, z) - world.height_at(x - 3, z)) + absf(world.height_at(x, z + 3) - world.height_at(x, z - 3))
		if h > 1.6 and h < 7.0 and sl < 1.6 and world.town_at(x, z, 1.3) == null and world.is_free(x, z, 4, 4, 9):
			lobby_pos = Vector3(x, ground_y(x, z, 40.0), z)
			lobby_yaw = atan2(x, z)   # лицом к морю
			return
	lobby_pos = Vector3(0, ground_y(0, 0), 0)

func _new_fighter(n: String, p: bool) -> Fighter:
	var f := Fighter.new()
	add_child(f)
	f.setup(self, n, p)
	f.reset()
	fighters.append(f)
	return f

# ------------------------------------------------------------------ шторм
func _build_storm() -> void:
	var cm := CylinderMesh.new()
	cm.top_radius = 1.0
	cm.bottom_radius = 1.0
	cm.height = 320.0
	cm.radial_segments = 96
	cm.cap_top = false
	cm.cap_bottom = false
	storm_mat = ShaderMaterial.new()
	storm_mat.shader = load("res://scripts/storm.gdshader")
	storm_mesh = MeshInstance3D.new()
	storm_mesh.mesh = cm
	storm_mesh.material_override = storm_mat
	storm_mesh.cast_shadow = GeometryInstance3D.SHADOW_CASTING_SETTING_OFF
	add_child(storm_mesh)
	var nm := CylinderMesh.new()
	nm.top_radius = 1.0
	nm.bottom_radius = 1.0
	nm.height = 90.0
	nm.radial_segments = 96
	nm.cap_top = false
	nm.cap_bottom = false
	var m := StandardMaterial3D.new()
	m.shading_mode = BaseMaterial3D.SHADING_MODE_UNSHADED
	m.transparency = BaseMaterial3D.TRANSPARENCY_ALPHA
	m.cull_mode = BaseMaterial3D.CULL_DISABLED
	m.albedo_color = Color(1, 1, 1, 0.09)
	m.no_depth_test = false
	next_mesh = MeshInstance3D.new()
	next_mesh.mesh = nm
	next_mesh.material_override = m
	next_mesh.cast_shadow = GeometryInstance3D.SHADOW_CASTING_SETTING_OFF
	add_child(next_mesh)

func _reset_storm() -> void:
	storm = {"phase": 0, "t": 0.0, "shrinking": false, "c": Vector2.ZERO, "r": 260.0, "from_c": Vector2.ZERO, "from_r": 260.0, "to_c": Vector2.ZERO, "to_r": 118.0, "dps": 1.0, "tick": 0.0}
	_plan_storm()

func _plan_storm() -> void:
	var ph: Dictionary = PHASES[storm.phase]
	storm.from_c = storm.c
	storm.from_r = storm.r
	storm.to_r = ph.r
	for i in 20:
		var a := randf() * TAU
		var m: float = maxf(0.0, storm.r - ph.r) * sqrt(randf()) * (0.5 if storm.phase == 0 else 0.8)
		var c: Vector2 = storm.c + Vector2(cos(a), sin(a)) * m
		if world.height_at(c.x, c.y) > 1.5 or i == 19:
			storm.to_c = c
			break

func storm_time_left() -> float:
	if storm.phase >= PHASES.size():
		return 0.0
	var ph: Dictionary = PHASES[storm.phase]
	return (ph.shrink - storm.t) if storm.shrinking else (ph.wait - storm.t)

func outside_storm(p: Vector3) -> bool:
	return Vector2(p.x, p.z).distance_squared_to(storm.c) > storm.r * storm.r

func _update_storm(dt: float) -> void:
	if storm.phase < PHASES.size():
		var ph: Dictionary = PHASES[storm.phase]
		storm.t += dt
		storm.dps = ph.dps
		if not storm.shrinking and storm.t >= ph.wait:
			storm.shrinking = true
			storm.t = 0.0
			hud.announce("ЗОНА СУЖАЕТСЯ", "Беги в белый круг")
			sfx.play("alarm", -4.0)
		if storm.shrinking:
			var k: float = minf(storm.t / ph.shrink, 1.0)
			storm.c = storm.from_c.lerp(storm.to_c, k)
			storm.r = lerpf(storm.from_r, storm.to_r, k)
			if k >= 1.0:
				storm.phase += 1
				storm.shrinking = false
				storm.t = 0.0
				if storm.phase < PHASES.size():
					_plan_storm()
					if storm.phase == 1 or storm.phase == 3:
						_spawn_drop()
	storm.tick += dt
	if storm.tick >= 1.0:
		storm.tick -= 1.0
		for f in fighters:
			if f.alive and f.state == "ground" and outside_storm(f.global_position):
				var a: float = f.armor
				f.armor = 0.0
				apply_damage(f, storm.dps, null, false, "шторм")
				f.armor = a

func _update_storm_visual() -> void:
	storm_mesh.visible = mode != "menu"
	var r: float = maxf(storm.r, 0.5)
	storm_mesh.position = Vector3(storm.c.x, 100, storm.c.y)
	storm_mesh.scale = Vector3(r, 1, r)
	var show_next: bool = storm.phase < PHASES.size() and mode != "menu"
	next_mesh.visible = show_next
	if show_next:
		var tr: float = maxf(storm.to_r, 1.0)
		next_mesh.position = Vector3(storm.to_c.x, 30, storm.to_c.y)
		next_mesh.scale = Vector3(tr, 1, tr)

# ------------------------------------------------------------------ дирижабль
func _build_ship() -> void:
	ship = Node3D.new()
	add_child(ship)
	var body := SphereMesh.new()
	body.radius = 1.0
	body.height = 2.0
	body.radial_segments = 32
	body.rings = 16
	var white := world.mat(Color("#F1F1F1"), 0.5)
	var orange := world.mat(Color("#FF6B35"), 0.5)
	var b := world.mesh_node(body, white, Vector3.ZERO, ship)
	b.scale = Vector3(5, 5, 17)
	var band := SphereMesh.new()
	band.radius = 1.0
	band.height = 2.0
	band.radial_segments = 32
	band.rings = 16
	var bb := world.mesh_node(band, orange, Vector3.ZERO, ship)
	bb.scale = Vector3(5.05, 1.2, 17.1)
	var gon := CapsuleMesh.new()
	gon.radius = 1.4
	gon.height = 7.0
	var g := world.mesh_node(gon, world.mat(Color("#2B2D42"), 0.4, 0.3), Vector3(0, -5.4, 0), ship)
	g.rotation.x = PI / 2
	for f in [Vector3(0, 4.2, 14), Vector3(0, -4.2, 14), Vector3(4.2, 0, 14), Vector3(-4.2, 0, 14)]:
		var fin := BoxMesh.new()
		fin.size = Vector3(0.4 if f.x == 0 else 3.6, 3.6 if f.x == 0 else 0.4, 4.0)
		world.mesh_node(fin, orange, f, ship)
	ship_prop = Node3D.new()
	ship_prop.position = Vector3(0, -5.4, 4.2)
	ship.add_child(ship_prop)
	var blade := BoxMesh.new()
	blade.size = Vector3(0.3, 4.0, 0.12)
	world.mesh_node(blade, world.mat(Color("#333333")), Vector3.ZERO, ship_prop)
	var blade2 := world.mesh_node(blade, world.mat(Color("#333333")), Vector3.ZERO, ship_prop)
	blade2.rotation.z = PI / 2
	ship.visible = false

func _reset_ship() -> void:
	var ang := randf() * TAU
	var off := randf_range(-50, 50)
	var d := Vector3(cos(ang), 0, sin(ang))
	var n := Vector3(-d.z, 0, d.x)
	ship_a = -d * 250 + n * off + Vector3(0, 125, 0)
	ship_b = d * 250 + n * off + Vector3(0, 125, 0)
	ship_t = 0.0
	ship.position = ship_a
	ship.look_at(ship_b)
	ship.visible = true

func ship_pos(t: float) -> Vector3:
	return ship_a.lerp(ship_b, t)

func jump_from(f: Fighter) -> void:
	if f.state != "sky":
		return
	f.state = "fall"
	f.global_position = ship_pos(ship_t) + Vector3(randf_range(-2, 2), -7, randf_range(-2, 2))
	f.velocity = (ship_b - ship_a).normalized() * 6.0 + Vector3(0, -5, 0)
	f.collision_layer = L_CHAR
	f.visible = true

# ------------------------------------------------------------------ лут
func _loot_visual(it: Dictionary) -> Node3D:
	var g := Node3D.new()
	var beam_c := Color(0, 0, 0, 0)
	match it.kind:
		"weapon":
			var gun := Fighter.make_gun(it.wid, it.rarity)
			gun.scale = Vector3.ONE * 1.5
			gun.rotation.z = 0.15
			g.add_child(gun)
			if it.rarity >= 1:
				beam_c = Data.RAR[it.rarity].color
		"ammo":
			var bm := BoxMesh.new()
			bm.size = Vector3(0.5, 0.32, 0.36)
			world.mesh_node(bm, world.mat(Color("#C8A23A"), 0.5, 0.3), Vector3.ZERO, g)
			var cm := CylinderMesh.new()
			cm.top_radius = 0.035
			cm.bottom_radius = 0.035
			cm.height = 0.22
			for k in 3:
				world.mesh_node(cm, world.mat(Color("#E9C46A"), 0.3, 0.7), Vector3(-0.12 + k * 0.12, 0.26, 0), g)
		"med":
			var cm := CapsuleMesh.new()
			cm.radius = 0.18
			cm.height = 0.55
			var mi := world.mesh_node(cm, world.mat(Color("#F4F4F4"), 0.4), Vector3.ZERO, g)
			mi.rotation.z = PI / 2
			var cr := BoxMesh.new()
			cr.size = Vector3(0.08, 0.26, 0.26)
			world.mesh_node(cr, world.mat(Color("#E63946"), 0.4, 0.0, 0.8), Vector3(0, 0, 0), g).scale = Vector3(1.0, 1.0, 0.3)
			beam_c = Color("#6BE38C")
		"shield":
			var cm := CylinderMesh.new()
			cm.top_radius = 0.24
			cm.bottom_radius = 0.24
			cm.height = 0.5
			cm.radial_segments = 6
			world.mesh_node(cm, world.mat(Color("#3DD6FF"), 0.2, 0.3, 1.2), Vector3.ZERO, g)
			beam_c = Color("#3DD6FF")
		"grenade":
			var sm := SphereMesh.new()
			sm.radius = 0.2
			sm.height = 0.4
			world.mesh_node(sm, world.mat(Color("#4F772D"), 0.6), Vector3.ZERO, g)
		"smoke":
			var cm := CylinderMesh.new()
			cm.top_radius = 0.13
			cm.bottom_radius = 0.13
			cm.height = 0.42
			world.mesh_node(cm, world.mat(Color("#9AA0A6"), 0.5, 0.4), Vector3.ZERO, g)
			var band := CylinderMesh.new()
			band.top_radius = 0.135
			band.bottom_radius = 0.135
			band.height = 0.1
			world.mesh_node(band, world.mat(Color("#FFD23F"), 0.5), Vector3(0, 0.08, 0), g)
		"bandage":
			var cm := CylinderMesh.new()
			cm.top_radius = 0.16
			cm.bottom_radius = 0.16
			cm.height = 0.18
			var mi := world.mesh_node(cm, world.mat(Color("#F6EFE4"), 0.9), Vector3.ZERO, g)
			mi.rotation.x = PI / 2
			beam_c = Color("#6BE38C")
		"shield_s":
			var cm := CylinderMesh.new()
			cm.top_radius = 0.17
			cm.bottom_radius = 0.17
			cm.height = 0.34
			cm.radial_segments = 6
			world.mesh_node(cm, world.mat(Color("#7FDBFF"), 0.2, 0.3, 0.8), Vector3.ZERO, g)
			beam_c = Color("#7FDBFF")
		"energy":
			var cm := CylinderMesh.new()
			cm.top_radius = 0.1
			cm.bottom_radius = 0.1
			cm.height = 0.36
			world.mesh_node(cm, world.mat(Color("#C6FF3D"), 0.3, 0.6, 0.6), Vector3.ZERO, g)
			beam_c = Color("#C6FF3D")
	if beam_c.a > 0.0:
		var bm := CylinderMesh.new()
		bm.top_radius = 0.1
		bm.bottom_radius = 0.1
		bm.height = 7.0
		bm.cap_top = false
		bm.cap_bottom = false
		var m := StandardMaterial3D.new()
		m.shading_mode = BaseMaterial3D.SHADING_MODE_UNSHADED
		m.transparency = BaseMaterial3D.TRANSPARENCY_ALPHA
		m.blend_mode = BaseMaterial3D.BLEND_MODE_ADD
		m.albedo_color = Color(beam_c.r, beam_c.g, beam_c.b, 0.3)
		var b := MeshInstance3D.new()
		b.mesh = bm
		b.material_override = m
		b.position.y = 3.1
		b.cast_shadow = GeometryInstance3D.SHADOW_CASTING_SETTING_OFF
		g.add_child(b)
	return g

func spawn_loot(kind: String, pos: Vector3, opts := {}) -> Dictionary:
	var it := {"kind": kind, "wid": opts.get("wid", ""), "rarity": opts.get("rarity", 0), "amount": opts.get("amount", 1), "ammo": opts.get("ammo", -1), "pos": pos, "alive": true, "phase": randf() * TAU, "via": opts.get("via", null), "rect": opts.get("rect", null)}
	var n := _loot_visual(it)
	n.position = pos + Vector3(0, 0.55, 0)
	add_child(n)
	it.node = n
	loot.append(it)
	return it

func _random_loot(pos: Vector3, extra := {}, rich := false) -> void:
	var kind: String = Data.weighted([["weapon", 34], ["ammo", 22], ["med", 8], ["bandage", 10], ["shield", 7], ["shield_s", 8], ["energy", 4], ["grenade", 5], ["smoke", 4]])
	var o := extra.duplicate()
	if kind == "weapon":
		o.wid = Data.weighted(Data.WEAPON_WEIGHTS)
		o.rarity = Data.weighted([[0, 25], [1, 40], [2, 25], [3, 10]] if rich else [[0, 50], [1, 30], [2, 15], [3, 5]])
	else:
		o.amount = randi_range(30, 60) if kind == "ammo" else 1
	spawn_loot(kind, pos, o)

func _build_chest(p: Vector3) -> Node3D:
	var g := Node3D.new()
	var bm := BoxMesh.new()
	bm.size = Vector3(1.0, 0.55, 0.62)
	world.mesh_node(bm, world.mat(Color("#8A5A2B"), 0.7), Vector3(0, 0.28, 0), g)
	var lid := CylinderMesh.new()
	lid.top_radius = 0.31
	lid.bottom_radius = 0.31
	lid.height = 1.0
	var l := world.mesh_node(lid, world.mat(Color("#A0692F"), 0.7), Vector3(0, 0.55, 0), g)
	l.rotation.z = PI / 2
	l.scale = Vector3(1, 1, 0.6)
	var band := BoxMesh.new()
	band.size = Vector3(1.04, 0.9, 0.08)
	for x in [-0.32, 0.32]:
		world.mesh_node(band, world.mat(Color("#E0B04A"), 0.3, 0.7), Vector3(x, 0.45, 0), g).rotation.y = PI / 2
	var lock := BoxMesh.new()
	lock.size = Vector3(0.12, 0.16, 0.06)
	world.mesh_node(lock, world.mat(Color("#FFD23F"), 0.3, 0.8, 0.6), Vector3(0, 0.45, -0.34), g)
	add_child(g)
	g.position = p
	return g

func ground_y(x: float, z: float, from_y := 60.0) -> float:
	var h: Dictionary = raycast(Vector3(x, from_y, z), Vector3(x, -5, z), null, L_WORLD)
	if h:
		return h.position.y
	return maxf(world.height_at(x, z), World.WATER_FLOOR)

func _scatter_loot() -> void:
	for it in loot:
		it.node.queue_free()
	loot.clear()
	for c in chests_live:
		c.node.queue_free()
	chests_live.clear()
	for sp in world.interior_spots:
		if randf() < 0.15:
			continue
		_random_loot(sp.pos, {"via": sp.via, "rect": sp.rect})
	for p in world.chests:
		var cp: Vector3 = p
		chests_live.append({"pos": cp, "node": _build_chest(cp), "open": false})
	for s in world.loot_spots:
		var v: Vector3 = s
		if randf() < 0.12:
			continue
		var y := ground_y(v.x, v.z) if v.y < -900 else v.y
		_random_loot(Vector3(v.x, y, v.z))
		if randf() < 0.25:
			var x2 := v.x + randf_range(-1.5, 1.5)
			var z2 := v.z + randf_range(-1.5, 1.5)
			_random_loot(Vector3(x2, ground_y(x2, z2) if v.y < -900 else y, z2))
	for i in 50:
		var a := randf() * TAU
		var r := sqrt(randf()) * World.ISLAND * 0.9
		var x := cos(a) * r
		var z := sin(a) * r
		if world.height_at(x, z) < 1.0:
			continue
		_random_loot(Vector3(x, ground_y(x, z), z))

func remove_loot(it: Dictionary) -> void:
	it.alive = false
	it.node.queue_free()
	loot.erase(it)

func item_label(it: Dictionary) -> String:
	match it.kind:
		"ammo": return "+%d патронов" % it.amount
		"med": return "+1 аптечка"
		"bandage": return "+1 бинт"
		"shield": return "+50 брони"
		"shield_s": return "+25 брони"
		"energy": return "Энергетик: скорость +35%"
		"grenade": return "+1 граната"
		"smoke": return "+1 дымовая граната"
	return Data.WEAPONS[it.wid].name

func give_item(f: Fighter, it: Dictionary, force_replace := false) -> bool:
	match it.kind:
		"ammo":
			if f.reserve >= 300: return false
			f.reserve = mini(300, f.reserve + int(it.amount))
		"med":
			if f.meds >= 5: return false
			f.meds += 1
		"shield":
			if f.armor >= 100.0: return false
			f.armor = minf(100.0, f.armor + 50.0)
		"grenade":
			if f.grenades >= 4: return false
			f.grenades += 1
		"smoke":
			if f.smokes >= 3: return false
			f.smokes += 1
		"bandage":
			if f.bandages >= 8: return false
			f.bandages += 1
		"shield_s":
			if f.armor >= 100.0: return false
			f.armor = minf(100.0, f.armor + 25.0)
		"energy":
			f.boost_t = 12.0
			f.hp = minf(100.0, f.hp + 10.0)
			fx.burst("pad", f.global_position + Vector3(0, 1, 0), Color("#C6FF3D"))
		"weapon":
			var mag: int = Data.WEAPONS[it.wid].mag
			var w := {"id": it.wid, "rarity": it.rarity, "ammo": it.ammo if it.ammo >= 0 else mag}
			var slot := 0 if f.slots[0] == null else (1 if f.slots[1] == null else -1)
			if slot < 0:
				if not force_replace:
					return false
				slot = f.cur
				var old = f.slots[slot]
				spawn_loot("weapon", f.global_position + Vector3(randf_range(-0.6, 0.6), 0, randf_range(-0.6, 0.6)), {"wid": old.id, "rarity": old.rarity, "ammo": old.ammo})
			f.slots[slot] = w
			f.reserve = mini(300, f.reserve + mag)
			f.cur = slot
			f.reload_t = 0.0
			f.refresh_gun()
	remove_loot(it)
	if f.is_player:
		sfx.play("pickup", -3.0)
		hud.toast(item_label(it))
	return true

# ------------------------------------------------------------------ бой
func raycast(from: Vector3, to: Vector3, ignore: Fighter, mask := L_WORLD | L_CHAR | L_DOME) -> Dictionary:
	var q := PhysicsRayQueryParameters3D.create(from, to, mask)
	if ignore:
		q.exclude = [ignore.get_rid()]
	return get_world_3d().direct_space_state.intersect_ray(q)

func can_see(a: Fighter, b: Fighter) -> bool:
	var to := b.global_position + Vector3(0, 1.2, 0)
	if smoke_blocks(a.eye(), to):
		return false
	var h := raycast(a.eye(), to, null, L_WORLD | L_DOME)
	return h.is_empty()

func impact(p: Vector3, n: Vector3, col: Object) -> void:
	if col is StaticBody3D and col.has_meta("dome"):
		fx.burst("shield", p)
		sfx.play3("dome_block", p, -4.0)
		return
	if p.y < 0.4 and world.height_at(p.x, p.z) < 0.0:
		fx.burst("splash", Vector3(p.x, 0.1, p.z))
		sfx.play3("splash", p, -6.0)
		return
	fx.burst("dust" if p.y - world.height_at(p.x, p.z) < 0.4 else "spark", p)
	sfx.play3("impact", p, -10.0, 0.2)

func apply_damage(f: Fighter, amount: float, attacker, head: bool, wname: String) -> void:
	if not f.alive or amount <= 0.0:
		return
	var total := amount
	var hit_pos := f.global_position + Vector3(0, 1.7 if head else 1.25, 0)
	var shield_hit := false
	if f.armor > 0.0:
		var a := minf(f.armor, amount * 0.75)
		f.armor -= a
		amount -= a
		shield_hit = true
		if f.armor <= 0.5:
			f.armor = 0.0
			fx.burst("shield", hit_pos)
			if attacker != null and attacker.is_player:
				sfx.play("shield_break", -2.0)
	f.hp -= amount
	f.flash_t = 0.2
	f.last_hit_t = time
	f.heal_t = 0.0
	fx.burst("shield" if shield_hit else "blood", hit_pos)
	if attacker != null:
		attacker.dmg_dealt += total
		if attacker.is_player:
			fx.number(hit_pos, total, "head" if head else ("shield" if shield_hit else ""))
			hud.hit_marker(f.hp <= 0.0)
			sfx.play("shield_hit" if shield_hit else ("head" if head else "hit"), -2.0)
		if not f.ai.is_empty() and attacker != f:
			f.ai.target = attacker
			f.ai.last_seen = time
			f.ai.seen = attacker.global_position
			f.ai.react = minf(f.ai.react, 0.25)
	if f.is_player:
		sfx.play("hurt", -3.0)
		shake = maxf(shake, 0.18)
		if attacker != null and attacker != f:
			hud.show_damage_dir(attacker.global_position)
	if f.hp <= 0.0:
		_kill(f, attacker, wname, head)

func _kill(f: Fighter, attacker, wname: String, head: bool) -> void:
	f.alive = false
	f.hp = 0.0
	f.dead_t = 0.0
	f.heal_t = 0.0
	f.reload_t = 0.0
	f.chute.visible = false
	f.killer = attacker
	f.collision_layer = 0
	f.placed = alive_count() + 1
	var p := f.global_position
	for w in f.slots:
		if w != null:
			spawn_loot("weapon", p + Vector3(randf_range(-1, 1), 0, randf_range(-1, 1)), {"wid": w.id, "rarity": w.rarity, "ammo": w.ammo})
	if f.reserve > 0 or randf() < 0.6:
		spawn_loot("ammo", p + Vector3(randf_range(-1, 1), 0, randf_range(-1, 1)), {"amount": clampi(f.reserve, 30, 90)})
	if f.meds > 0:
		spawn_loot("med", p + Vector3(randf_range(-1, 1), 0, randf_range(-1, 1)))
	if f.grenades > 0:
		spawn_loot("grenade", p + Vector3(randf_range(-1, 1), 0, randf_range(-1, 1)))
	if f.bandages > 0:
		spawn_loot("bandage", p + Vector3(randf_range(-1, 1), 0, randf_range(-1, 1)))
	if f.smokes > 0:
		spawn_loot("smoke", p + Vector3(randf_range(-1, 1), 0, randf_range(-1, 1)))
	fx.burst("confetti", p + Vector3(0, 1, 0), Color(1, 0.9, 0.5))
	if attacker != null and attacker != f:
		attacker.kills += 1
	hud.add_feed(attacker, f, wname, head)
	if attacker != null and attacker.is_player and attacker != f:
		sfx.play("kill", -2.0)
		streak.count = streak.count + 1 if time - streak.t < 9.0 else 1
		streak.t = time
		var names := ["", "УНИЧТОЖЕН", "ДВОЙНОЕ!", "ТРОЙНОЕ!", "БУЙСТВО!", "НЕУДЕРЖИМ!"]
		hud.announce(names[mini(streak.count, 5)], f.fname + (" · в голову" if head else ""))
	if f.is_player:
		_on_player_death()
	_check_win()

func alive_count() -> int:
	var n := 0
	for f in fighters:
		if f.alive:
			n += 1
	return n

func alert_bots(shooter: Fighter) -> void:
	for b in fighters:
		if b.ai.is_empty() or not b.alive or b == shooter or b.state != "ground":
			continue
		if b.ai.target != null and b.ai.los:
			continue
		if b.global_position.distance_squared_to(shooter.global_position) < 55.0 * 55.0:
			b.ai.target = shooter
			b.ai.last_seen = time
			b.ai.seen = shooter.global_position
			b.ai.react = maxf(b.ai.react, randf_range(0.4, 0.9))

func on_player_recoil(r: float, wid: String) -> void:
	cam_pitch += r * (0.6 if player.in_ads else 1.0)
	cam_yaw += randf_range(-1, 1) * r * 0.35
	cross_kick = minf(cross_kick + float(Data.WEAPONS[wid].spread) * 260.0, 26.0)
	if wid == "sniper" or wid == "shotgun":
		shake = maxf(shake, 0.25)

# гранаты и купола
func spawn_grenade(owner: Fighter, pos: Vector3, vel: Vector3, is_smoke := false) -> void:
	var rb := RigidBody3D.new()
	rb.collision_layer = 0
	rb.collision_mask = L_WORLD
	rb.mass = 0.4
	var pm := PhysicsMaterial.new()
	pm.bounce = 0.35
	pm.friction = 0.8
	rb.physics_material_override = pm
	var cs := CollisionShape3D.new()
	var sp := SphereShape3D.new()
	sp.radius = 0.15
	cs.shape = sp
	rb.add_child(cs)
	var sm := SphereMesh.new()
	sm.radius = 0.16
	sm.height = 0.32
	world.mesh_node(sm, world.mat(Color("#9AA0A6") if is_smoke else Color("#4F772D"), 0.5), Vector3.ZERO, rb)
	add_child(rb)
	rb.global_position = pos
	rb.linear_velocity = vel
	rb.angular_velocity = Vector3(randf(), randf(), randf()) * 8.0
	grenades.append({"rb": rb, "t": 1.6 if is_smoke else 2.2, "owner": owner, "smoke": is_smoke})

func spawn_dome(owner: Fighter) -> void:
	var body := StaticBody3D.new()
	body.collision_layer = L_DOME
	body.collision_mask = 0
	body.set_meta("dome", true)
	var cs := CollisionShape3D.new()
	var sp := SphereShape3D.new()
	sp.radius = 3.3
	cs.shape = sp
	body.add_child(cs)
	var sm := SphereMesh.new()
	sm.radius = 1.0
	sm.height = 1.0
	sm.is_hemisphere = true
	sm.radial_segments = 32
	sm.rings = 12
	var m := StandardMaterial3D.new()
	m.albedo_color = Color(0.37, 0.95, 1.0, 0.28)
	m.transparency = BaseMaterial3D.TRANSPARENCY_ALPHA
	m.emission_enabled = true
	m.emission = Color("#1FA3C9")
	m.emission_energy_multiplier = 0.8
	m.cull_mode = BaseMaterial3D.CULL_DISABLED
	m.rim_enabled = true
	m.rim = 1.0
	m.roughness = 0.15
	var mi := MeshInstance3D.new()
	mi.mesh = sm
	mi.material_override = m
	mi.cast_shadow = GeometryInstance3D.SHADOW_CASTING_SETTING_OFF
	body.add_child(mi)
	add_child(body)
	body.global_position = owner.global_position
	mi.scale = Vector3.ONE * 0.1
	domes.append({"body": body, "mi": mi, "m": m, "t": 7.0, "grow": 0.0})

func _update_smoke_chests(dt: float) -> void:
	for i in range(smokes_active.size() - 1, -1, -1):
		var sm: Dictionary = smokes_active[i]
		sm.t -= dt
		sm.puff -= dt
		if sm.puff <= 0.0 and sm.t > 1.0:
			sm.puff = 0.45
			fx.burst("bigsmoke", sm.pos + Vector3(randf_range(-1.5, 1.5), randf_range(-0.6, 0.6), randf_range(-1.5, 1.5)))
		if sm.t <= 0.0:
			smokes_active.remove_at(i)
	for c in chests_live:
		if c.open:
			continue
		for f in fighters:
			if f.alive and f.state == "ground" and f.global_position.distance_squared_to(c.pos) < 2.6:
				_open_chest(c, f)
				break

func _open_chest(c: Dictionary, f: Fighter) -> void:
	c.open = true
	var lid: Node3D = c.node.get_child(1)
	var tw := create_tween()
	tw.tween_property(lid, "rotation:x", -1.2, 0.35)
	tw.tween_interval(6.0)
	tw.tween_property(c.node, "scale", Vector3(1, 0.01, 1), 0.4)
	fx.burst("confetti", c.pos + Vector3(0, 0.8, 0), Color(1, 0.85, 0.3))
	sfx.play3("pickup", c.pos, 0.0)
	for k in 3:
		var a := randf() * TAU
		_random_loot(c.pos + Vector3(cos(a) * 0.9, 0.02, sin(a) * 0.9), {}, true)
	if f.is_player:
		hud.toast("Сундук открыт!")

func smoke_blocks(a: Vector3, b: Vector3) -> bool:
	for sm in smokes_active:
		if sm.t < 0.8:
			continue
		var c: Vector3 = sm.pos
		var ab := b - a
		var t := clampf((c - a).dot(ab) / maxf(ab.length_squared(), 0.001), 0.0, 1.0)
		if (a + ab * t).distance_to(c) < 3.6:
			return true
	return false

func _update_domes_grenades(dt: float) -> void:
	for i in range(domes.size() - 1, -1, -1):
		var d: Dictionary = domes[i]
		d.t -= dt
		d.grow = minf(1.0, d.grow + dt * 4.0)
		var s: float = 3.3 * ((d.t / 0.4) if d.t < 0.4 else d.grow)
		d.mi.scale = Vector3.ONE * maxf(s, 0.01)
		var c: Vector3 = d.body.global_position
		for f in fighters:
			if f.alive and f.state == "ground" and f.hp < 100.0 and Vector2(f.global_position.x - c.x, f.global_position.z - c.z).length_squared() < 3.3 * 3.3:
				f.hp = minf(100.0, f.hp + 7.0 * dt)
		if d.t <= 0.0:
			d.body.queue_free()
			domes.remove_at(i)
	for i in range(grenades.size() - 1, -1, -1):
		var g: Dictionary = grenades[i]
		g.t -= dt
		if g.t <= 0.0:
			var p: Vector3 = g.rb.global_position
			g.rb.queue_free()
			grenades.remove_at(i)
			if g.smoke:
				smokes_active.append({"pos": p + Vector3(0, 1.2, 0), "t": 13.0, "puff": 0.0})
				sfx.play3("dash", p, -2.0)
				continue
			fx.explosion(p, 3.2)
			sfx.play3("boom", p, 4.0)
			var cd := p.distance_to(cam.global_position)
			shake = maxf(shake, clampf(1.2 - cd / 30.0, 0.0, 1.0))
			for f in fighters:
				if not f.alive or f.state == "sky":
					continue
				var dd: float = f.global_position.distance_to(p)
				if dd < 6.5:
					apply_damage(f, 85.0 * (1.0 - dd / 6.5) * (0.5 if f == g.owner else 1.0), g.owner, false, "граната")

# аирдропы
func _spawn_drop() -> void:
	var a := randf() * TAU
	var r: float = sqrt(randf()) * maxf(storm.to_r * 0.8, 1.0)
	var x: float = storm.to_c.x + cos(a) * r
	var z: float = storm.to_c.y + sin(a) * r
	var g := Node3D.new()
	var bm := BoxMesh.new()
	bm.size = Vector3(1.6, 1.4, 1.6)
	world.mesh_node(bm, world.mat(Color("#C1121F"), 0.5), Vector3(0, 0.7, 0), g)
	var st := BoxMesh.new()
	st.size = Vector3(0.4, 1.45, 1.65)
	world.mesh_node(st, world.mat(Color("#FFB627"), 0.4, 0.0, 1.0), Vector3(0, 0.7, 0), g)
	var ch := SphereMesh.new()
	ch.radius = 2.6
	ch.height = 2.6
	ch.is_hemisphere = true
	var cm := world.mat(Color("#FF4D5E"), 0.7)
	var chm := world.mesh_node(ch, cm, Vector3(0, 5, 0), g)
	chm.scale = Vector3(1, 0.6, 1)
	add_child(g)
	g.position = Vector3(x, 110, z)
	drops.append({"x": x, "z": z, "y": 110.0, "node": g, "chute": chm, "landed": false, "smoke_t": 0.0})
	hud.announce("АИРДРОП!", "Легендарное оружие — отмечено на карте")
	sfx.play("alarm", -4.0)

func _update_drops(dt: float) -> void:
	for i in range(drops.size() - 1, -1, -1):
		var d: Dictionary = drops[i]
		if not d.landed:
			d.y -= 7.0 * dt
			var gy := ground_y(d.x, d.z, 120.0)
			if d.y <= gy:
				d.y = gy
				d.landed = true
				d.chute.visible = false
			d.node.position.y = d.y
			d.node.rotation.y += dt * 0.4
			continue
		d.smoke_t -= dt
		if d.smoke_t <= 0.0:
			d.smoke_t = 1.2
			fx.burst("redsmoke", Vector3(d.x, d.y + 1.6, d.z))
		for f in fighters:
			if f.alive and f.state == "ground" and Vector2(f.global_position.x - d.x, f.global_position.z - d.z).length_squared() < 4.5:
				d.node.queue_free()
				drops.remove_at(i)
				var y: float = d.y
				spawn_loot("weapon", Vector3(d.x + 1, y, d.z), {"wid": ["sniper", "rifle", "shotgun"].pick_random(), "rarity": 3})
				spawn_loot("shield", Vector3(d.x - 1, y, d.z))
				spawn_loot("shield", Vector3(d.x, y, d.z + 1))
				spawn_loot("med", Vector3(d.x, y, d.z - 1))
				spawn_loot("grenade", Vector3(d.x + 1, y, d.z + 1))
				spawn_loot("ammo", Vector3(d.x - 1, y, d.z - 1), {"amount": 90})
				fx.burst("confetti", Vector3(d.x, y + 1, d.z), Color(1, 0.8, 0.3))
				break

# ------------------------------------------------------------------ ИИ ботов
func _needs_loot(b: Fighter) -> bool:
	return b.slots[0] == null or b.slots[1] == null or b.reserve < 45 or b.meds + b.bandages < 3 or b.armor < 50.0

func _wants(b: Fighter, it: Dictionary) -> bool:
	match it.kind:
		"weapon":
			if b.slots[0] == null or b.slots[1] == null:
				for s in b.slots:
					if s != null and s.id == it.wid and s.rarity >= it.rarity:
						return false
				return true
			var worst := minf(Data.weapon_score(b.slots[0]), Data.weapon_score(b.slots[1]))
			return float(Data.WEAPONS[it.wid].score) * float(Data.RAR[it.rarity].mul) > worst + 0.3
		"ammo": return b.reserve < 250
		"med": return b.meds < 5
		"shield", "shield_s": return b.armor < 100.0
		"grenade": return b.grenades < 3
		"bandage": return b.bandages < 6
		"smoke": return b.smokes < 2
		"energy": return true
	return false

func _bot_pickup(b: Fighter, it: Dictionary) -> void:
	if it.kind == "weapon" and b.slots[0] != null and b.slots[1] != null:
		b.cur = 0 if Data.weapon_score(b.slots[0]) < Data.weapon_score(b.slots[1]) else 1
	give_item(b, it, true)
	if b.slots[0] != null and b.slots[1] != null:
		var i := 0 if Data.weapon_score(b.slots[0]) >= Data.weapon_score(b.slots[1]) else 1
		if i != b.cur:
			b.cur = i
			b.refresh_gun()

func _zone_point() -> Vector3:
	var shrink_left: bool = storm.phase < PHASES.size()
	var r: float = minf(storm.to_r, storm.r) if shrink_left else storm.r
	var c: Vector2 = storm.to_c if shrink_left else storm.c
	for i in 15:
		var a := randf() * TAU
		var m := sqrt(randf()) * maxf(r * 0.85, 1.0)
		var p := Vector3(c.x + cos(a) * m, 0, c.y + sin(a) * m)
		if world.height_at(p.x, p.z) > 0.8:
			return p
	return Vector3(c.x, 0, c.y)

func _ai_think(b: Fighter) -> void:
	var ai := b.ai
	var best_f = null
	var bd := 1e9
	var cand := []
	for f in fighters:
		if f == b or not f.alive or f.state != "ground":
			continue
		var d := b.global_position.distance_to(f.global_position)
		if d < 80.0:
			cand.append([d, f])
	cand.sort_custom(func(x, y): return x[0] < y[0])
	for i in mini(3, cand.size()):
		if can_see(b, cand[i][1]):
			best_f = cand[i][1]
			bd = cand[i][0]
			break
	if best_f != null:
		if ai.target != best_f or not ai.los:
			ai.react = lerpf(1.4, 0.55, ai.skill) + randf() * 0.45 + (0.35 if best_f.is_player else 0.0)
		ai.target = best_f
		ai.last_seen = time
		ai.seen = best_f.global_position
		ai.los = true
	else:
		ai.los = false
		if ai.target != null and (time - ai.last_seen > 5.0 or not ai.target.alive):
			ai.target = null
	var bp := b.global_position
	for it in loot:
		if it.alive and absf(it.pos.y - bp.y) < 1.8 and Vector2(it.pos.x - bp.x, it.pos.z - bp.z).length_squared() < 3.2 and _wants(b, it):
			_bot_pickup(b, it)
			break
	var zone_danger: bool = outside_storm(bp) or (storm.phase < PHASES.size() and Vector2(bp.x, bp.z).distance_squared_to(storm.to_c) > pow(storm.to_r * 0.95, 2) and storm_time_left() < 25.0)
	var w = b.weapon()
	var armed: bool = w != null and (w.ammo > 0 or b.reserve > 0)
	if b.hp < 45.0 and b.meds + b.bandages > 0 and not (ai.los and bd < 35.0):
		ai.state = "heal"
	elif ai.target != null and (bd < 9.0 if not armed else (bd < 45.0 or ai.state == "fight" or not _needs_loot(b))):
		ai.state = "fight"
	elif zone_danger and outside_storm(bp):
		ai.state = "zone"
		if ai.roam_t < time:
			ai.move = _zone_point()
			ai.roam_t = time + 10.0
	elif _needs_loot(b) and not (zone_danger and storm_time_left() < 12.0):
		var bi = null
		var bdist := 60.0 * 60.0
		for it in loot:
			if not it.alive:
				continue
			var d2 := Vector2(it.pos.x - bp.x, it.pos.z - bp.z).length_squared()
			if d2 < bdist and _wants(b, it):
				bdist = d2
				bi = it
		for c in chests_live:
			if not c.open and c.pos.distance_squared_to(bp) < 30.0 * 30.0 and bi == null:
				bi = {"pos": c.pos, "rect": null, "via": null}
		for d in drops:
			if d.landed and Vector2(d.x - bp.x, d.z - bp.z).length_squared() < 80.0 * 80.0:
				ai.state = "loot"
				ai.move = Vector3(d.x, 0, d.z)
				return
		if bi != null:
			ai.state = "loot"
			ai.move = bi.pos
			# лут в доме: сначала к двери, потом внутрь
			if bi.rect != null and not (bi.rect as Rect2).has_point(Vector2(bp.x, bp.z)) and Vector2(bp.x - bi.via.x, bp.z - bi.via.z).length() > 1.6:
				ai.move = bi.via
		else:
			ai.state = "roam"
			if ai.roam_t < time or Vector2(bp.x - ai.move.x, bp.z - ai.move.z).length() < 4.0:
				ai.move = _zone_point()
				ai.roam_t = time + randf_range(8, 16)
	else:
		ai.state = "zone" if zone_danger else "roam"
		if ai.roam_t < time or Vector2(bp.x - ai.move.x, bp.z - ai.move.z).length() < 4.0:
			ai.move = _zone_point()
			ai.roam_t = time + randf_range(8, 16)
	if ai.state == "fight" and b.slots[0] != null and b.slots[1] != null and b.reload_t <= 0.0:
		var sc := []
		for s in b.slots:
			var d: Dictionary = Data.WEAPONS[s.id]
			sc.append((1.0 if s.ammo > 0 else 0.3) * float(d.score) * float(Data.RAR[s.rarity].mul) / (1.0 + absf(bd - float(d.pref)) / 20.0))
		var bi2 := 0 if sc[0] >= sc[1] else 1
		if bi2 != b.cur:
			b.switch_to(bi2)
	if bp.distance_to(ai.last_pos) < 0.6 and ai.state != "heal" and ai.state != "fight":
		ai.stuck += 1
		if ai.stuck > 3:
			b.in_jump = true
			ai.strafe = -ai.strafe
			ai.stuck_dir = randf_range(-1.5, 1.5)
			ai.stuck_till = time + 1.2
			ai.stuck = 0
	else:
		ai.stuck = 0
	ai.last_pos = bp

func _ai_move_to(b: Fighter, target: Vector3, face: bool, dt: float) -> void:
	var ai := b.ai
	var bp := b.global_position
	var d := Vector2(target.x - bp.x, target.z - bp.z)
	if d.length() < 0.8:
		return
	d = d.normalized()
	if ai.stuck_till > time:
		d = d.rotated(ai.stuck_dir)
	if world.height_at(bp.x + d.x * 3.0, bp.z + d.y * 3.0) < -0.8 and world.height_at(bp.x, bp.z) > -0.5:
		d = -Vector2(bp.x, bp.z).normalized()
	b.in_move = d
	if face:
		b.yaw += angle_difference(b.yaw, atan2(-d.x, -d.y)) * clampf(dt * 6.0, 0, 1)
	b.aim_pitch = lerpf(b.aim_pitch, 0.0, dt * 3.0)

func _ai_act(b: Fighter, dt: float) -> void:
	var ai := b.ai
	b.in_move = Vector2.ZERO
	b.in_ads = false
	ai.think -= dt
	if ai.think <= 0.0:
		ai.think = 0.28
		_ai_think(b)
	if b.state == "sky":
		if ship_t >= ai.jump_at:
			jump_from(b)
		return
	if b.state == "fall" or b.state == "chute":
		var bp := b.global_position
		var d := Vector2(ai.land.x - bp.x, ai.land.z - bp.z)
		if d.length() > 2.0:
			b.in_move = d.normalized()
			b.yaw = atan2(-d.x, -d.y)
		return
	ai.react -= dt
	match ai.state:
		"heal":
			if not b.start_heal() and b.heal_t <= 0.0:
				ai.state = "roam"
			if b.dome_cd <= 0.0 and b.hp < 40.0 and ai.target != null:
				b.dome()
		"loot", "roam", "zone":
			_ai_move_to(b, ai.move, true, dt)
			var w = b.weapon()
			if w != null and w.ammo < int(Data.WEAPONS[w.id].mag) * 0.4 and b.reserve > 0:
				b.start_reload()
		"fight":
			var t = ai.target
			if t == null or not t.alive:
				ai.target = null
				ai.state = "roam"
				return
			var tp: Vector3 = t.global_position if ai.los else ai.seen
			var bp := b.global_position
			var dv := Vector2(tp.x - bp.x, tp.z - bp.z)
			var d := maxf(dv.length(), 0.01)
			var want := atan2(-dv.x, -dv.y)
			b.yaw += angle_difference(b.yaw, want) * clampf(dt * (3.0 + ai.skill * 6.0), 0, 1)
			var dy: float = (t.global_position.y + 1.2) - (bp.y + 1.55)
			b.aim_pitch = lerpf(b.aim_pitch, atan2(dy, d), dt * 5.0)
			if not ai.los:
				_ai_move_to(b, tp, false, dt)
				return
			var w = b.weapon()
			var pref: float = float(Data.WEAPONS[w.id].pref) if w != null else 1.5
			var radial := 1.0 if d > pref * 1.25 else (-0.8 if d < pref * 0.65 else 0.0)
			ai.strafe_t -= dt
			if ai.strafe_t <= 0.0:
				ai.strafe = -1.0 if randf() < 0.5 else 1.0
				ai.strafe_t = randf_range(0.7, 2.0)
				if randf() < ai.skill * 0.25:
					b.in_jump = true
			var fwd := dv / d
			var right := Vector2(-fwd.y, fwd.x)
			var mv: Vector2 = fwd * radial + right * ai.strafe * 0.85
			b.in_move = mv.normalized() if mv.length() > 0.01 else Vector2.ZERO
			if w != null and float(Data.WEAPONS[w.id].pref) > 40.0 and d > 30.0:
				b.in_move *= 0.2
				b.in_ads = true
			if time - b.last_hit_t < 0.3 and b.dash_cd <= 0.0 and randf() < ai.skill * 0.08:
				b.dash(right.x * ai.strafe, right.y * ai.strafe)
			if b.hp < 35.0 and b.dome_cd <= 0.0 and randf() < 0.02:
				b.dome()
			if b.hp < 40.0 and b.smokes > 0 and randf() < 0.01:
				b.throw_smoke(Vector3(dv.x, d * 0.3, dv.y).normalized())
			ai.nade_t -= dt
			if b.grenades > 0 and d > 7.0 and d < 24.0 and ai.nade_t <= 0.0:
				ai.nade_t = randf_range(5, 10)
				if randf() < 0.4:
					b.throw_grenade(Vector3(dv.x, d * 0.35, dv.y).normalized())
			var rng: float = float(Data.WEAPONS[w.id].range) * 0.92 if w != null else 2.2
			if ai.react <= 0.0 and absf(angle_difference(b.yaw, want)) < 0.3 and d < rng and not smoke_blocks(b.eye(), t.global_position + Vector3(0, 1.2, 0)):
				var tv: Vector3 = t.velocity
				var err: float = 0.02 + (1.0 - ai.skill) * 0.075 + d * 0.0008 + (0.03 if t.is_player else 0.0) + Vector2(tv.x, tv.z).length() * 0.005
				var head_aim := 0.45 if randf() < ai.skill * 0.18 else 0.0
				var e := b.eye()
				var aim: Vector3 = (t.global_position + Vector3(0, 1.15 + head_aim, 0) - e).normalized()
				aim = (aim + Vector3(randf_range(-1, 1), randf_range(-1, 1), randf_range(-1, 1)) * err).normalized()
				ai.burst_t -= dt
				if ai.burst_t <= -randf_range(0.45, 0.8):
					ai.burst_t = randf_range(0.5, 0.9)
				var semi: bool = w == null or float(Data.WEAPONS[w.id].rate) > 0.2
				if semi or ai.burst_t > 0.0:
					b.try_fire(e, aim)
			if w != null and w.ammo == 0:
				b.start_reload()

# ------------------------------------------------------------------ игрок
func _update_player(dt: float) -> void:
	var pl := player
	var w = pl.weapon()
	var ads: bool = (ads_toggle or ads_held) and w != null and pl.state == "ground"
	var zoom: float = float(Data.WEAPONS[w.id].zoom) if ads else 1.0
	var k: float = (0.0058 if is_touch else 0.0032) * float(cfg.v.sens) * (float(cfg.v.ads_sens) if ads else 1.0) / sqrt(zoom)
	cam_yaw -= look_delta.x * k
	cam_pitch = clampf(cam_pitch - look_delta.y * k * (-1.0 if cfg.v.invert_y else 1.0), -1.15, 1.05)
	look_delta = Vector2.ZERO
	if is_touch and bool(cfg.v.aim_assist) and w != null and pl.state == "ground":
		_aim_assist(dt)
	var auto_fire := false
	if is_touch and bool(cfg.v.autofire) and w != null and pl.state == "ground" and pl.alive:
		var af := _cam_fwd()
		var ah := raycast(cam.global_position, cam.global_position + af * float(Data.WEAPONS[w.id].range), pl)
		auto_fire = ah and ah.collider is Fighter and ah.collider.alive
	var ix := joy.x
	var iy := joy.y
	if Input.is_physical_key_pressed(KEY_W) or Input.is_physical_key_pressed(KEY_UP): iy -= 1.0
	if Input.is_physical_key_pressed(KEY_S) or Input.is_physical_key_pressed(KEY_DOWN): iy += 1.0
	if Input.is_physical_key_pressed(KEY_A) or Input.is_physical_key_pressed(KEY_LEFT): ix -= 1.0
	if Input.is_physical_key_pressed(KEY_D) or Input.is_physical_key_pressed(KEY_RIGHT): ix += 1.0
	var iv := Vector2(ix, iy)
	if iv.length() > 1.0:
		iv = iv.normalized()
	var sy := sin(cam_yaw)
	var cy := cos(cam_yaw)
	# вперёд = (-sin, -cos), вправо = (cos, -sin)
	pl.in_move = Vector2(cy * iv.x + sy * iv.y, -sy * iv.x + cy * iv.y)
	pl.in_ads = ads
	pl.yaw = cam_yaw
	pl.aim_pitch = cam_pitch
	if (fire_held or auto_fire) and pl.state == "ground" and pl.alive:
		if pl.heal_t > 0.0:
			pl.heal_t = 0.0
		var fwd := _cam_fwd()
		var h := raycast(cam.global_position, cam.global_position + fwd * 400.0, pl)
		var aim_pt: Vector3 = h.position if h else cam.global_position + fwd * 400.0
		var e := pl.eye() + Vector3(cos(cam_yaw), 0, -sin(cam_yaw)) * 0.2
		var dir := aim_pt - e
		dir = fwd if dir.length_squared() < 0.5 else dir.normalized()
		pl.try_fire(e, dir)
	near_weapon = null
	var nd := 2.6 * 2.6
	var pp := pl.global_position
	for it in loot.duplicate():
		if not it.alive:
			continue
		var d2 := Vector2(it.pos.x - pp.x, it.pos.z - pp.z).length_squared()
		if d2 > 9.0 or absf(it.pos.y - pp.y) > 1.8:
			continue
		if it.kind == "weapon":
			if d2 < nd:
				nd = d2
				near_weapon = it
		elif d2 < 2.4:
			if give_item(pl, it):
				break
	if near_weapon != null and (pl.slots[0] == null or pl.slots[1] == null) and nd < 2.2:
		give_item(pl, near_weapon)
		near_weapon = null

func try_pickup_weapon() -> void:
	if near_weapon != null and near_weapon.alive and player.alive:
		give_item(player, near_weapon, true)
		near_weapon = null

func _cam_fwd() -> Vector3:
	var cp := cos(cam_pitch)
	return Vector3(-sin(cam_yaw) * cp, sin(cam_pitch), -cos(cam_yaw) * cp)

func _aim_assist(dt: float) -> void:
	var fwd := _cam_fwd()
	var best_f = null
	var best_a := 0.07
	for f in fighters:
		if f == player or not f.alive or f.state != "ground":
			continue
		var v: Vector3 = f.global_position + Vector3(0, 1.2, 0) - cam.global_position
		var d := v.length()
		if d > 90.0:
			continue
		var a := fwd.angle_to(v)
		if a < best_a:
			best_a = a
			best_f = f
	if best_f == null:
		return
	var v: Vector3 = best_f.global_position + Vector3(0, 1.2, 0) - cam.global_position
	var ty := atan2(-v.x, -v.z)
	var tp := atan2(v.y, Vector2(v.x, v.z).length())
	var s := (4.5 if fire_held else 1.8) * dt
	cam_yaw += angle_difference(cam_yaw, ty) * s
	cam_pitch += (tp - cam_pitch) * s

func _update_camera(dt: float) -> void:
	var pl := player
	var fov := 72.0
	if pl.state == "sky":
		var t := ship_pos(ship_t)
		var cp := cos(minf(cam_pitch, -0.25))
		var f := Vector3(-sin(cam_yaw) * cp, sin(minf(cam_pitch, -0.25)), -cos(cam_yaw) * cp)
		var want := t - f * 48.0 + Vector3(0, 14, 0)
		cam.global_position = cam.global_position.lerp(want, clampf(dt * 4.0, 0, 1))
		cam.look_at(t)
	else:
		var p := pl.global_position
		var w = pl.weapon()
		var ads: bool = pl.in_ads and w != null
		var scope: bool = ads and w.id == "sniper"
		var falling := pl.state == "fall" or pl.state == "chute"
		if ads:
			fov = 72.0 / float(Data.WEAPONS[w.id].zoom)
		var fwd := _cam_fwd()
		var right := Vector3(cos(cam_yaw), 0, -sin(cam_yaw))
		var target := p + Vector3(0, 1.55, 0)
		var dist := 7.5 if falling else (1.6 if ads else 3.3)
		var side := 0.0 if falling else (0.55 if ads else 0.75)
		var up := 1.6 if falling else 0.3
		if not pl.alive:
			dist = 7.0
			side = 0.0
			up = 2.5
			cam_yaw += dt * 0.35
		if scope:
			dist = 0.0
			side = 0.15
			up = 0.05
		var want := target - fwd * dist + right * side + Vector3(0, up, 0)
		var h := raycast(target, want, pl, L_WORLD)
		if h:
			want = target + (want - target).normalized() * maxf(target.distance_to(h.position) - 0.25, 0.3)
		want.y = maxf(want.y, maxf(world.height_at(want.x, want.z) + 0.35, 0.35))
		cam.global_position = want
		if shake > 0.01:
			cam.global_position += Vector3(randf_range(-1, 1), randf_range(-1, 1), 0) * shake * 0.25
			shake *= pow(0.02, dt)
		cam.look_at(cam.global_position + fwd)
		pl.model.visible = not scope
	cur_fov = lerpf(cur_fov, fov, clampf(dt * 12.0, 0, 1))
	cam.fov = cur_fov

func _update_menu_camera(dt: float) -> void:
	# лобби: герой стоит на пляже, камера медленно облетает его
	menu_ang += dt * 0.12
	var p := lobby_pos
	player.global_position = p
	player.state = "ground"
	player.aim_pitch = 0.0
	player.velocity = Vector3.ZERO
	player.visible = true
	player._animate(dt)
	player.model.visible = true
	var ang := lobby_yaw + 0.55 + sin(menu_ang) * 0.35
	player.yaw = ang - 0.35 + sin(time * 0.5) * 0.12
	var off := Vector3(-sin(ang), 0, -cos(ang)) * 4.6
	cam.global_position = p + off + Vector3(0, 1.9, 0)
	cam.look_at(p + Vector3(0, 1.15, 0) + Vector3(-sin(ang + PI / 2), 0, -cos(ang + PI / 2)) * -1.6)
	cam.fov = 50

# ------------------------------------------------------------------ ход матча
func start_match() -> void:
	sfx.music.stop()
	for d in drops:
		d.node.queue_free()
	drops.clear()
	for d in domes:
		d.body.queue_free()
	domes.clear()
	for g in grenades:
		g.rb.queue_free()
	grenades.clear()
	_scatter_loot()
	_reset_storm()
	_reset_ship()
	time = 0.0
	end_timer = 0.0
	streak = {"count": 0, "t": -99.0}
	cam_yaw = atan2(-(ship_b.x - ship_a.x), -(ship_b.z - ship_a.z)) + 0.8
	cam_pitch = -0.35
	ads_toggle = false
	fire_held = false
	for f in fighters:
		f.reset()
		f.global_position = ship_pos(0.0)
		if not f.ai.is_empty():
			var ai: Dictionary = f.ai
			ai.state = "roam"
			ai.target = null
			ai.react = 0.0
			ai.last_seen = -99.0
			ai.stuck = 0
			ai.roam_t = 0.0
			ai.nade_t = randf_range(3, 8)
			ai.skill = randf_range(0.3, 0.88)
			var l: Vector3
			if randf() < 0.55:
				var t: Dictionary = world.towns.pick_random()
				l = Vector3(t.x + randf_range(-t.r, t.r) * 0.7, 0, t.z + randf_range(-t.r, t.r) * 0.7)
			else:
				var a := randf() * TAU
				var r := sqrt(randf()) * World.ISLAND * 0.8
				l = Vector3(cos(a) * r, 0, sin(a) * r)
			ai.land = l
			ai.move = l
			var ab := ship_b - ship_a
			var tt := clampf(((l.x - ship_a.x) * ab.x + (l.z - ship_a.z) * ab.z) / Vector2(ab.x, ab.z).length_squared(), 0.05, 0.92)
			ai.jump_at = clampf(tt - 0.06 + randf_range(-0.04, 0.04), 0.03, 0.95)
	mode = "play"
	hud.show_mode("play")
	hud.announce("ОСТРОВ ШТОРМА", "Нажми «Прыгнуть», когда пролетаешь над целью" if is_touch else "Пробел — прыжок с дирижабля")

func _on_player_death() -> void:
	sfx.play("defeat", -2.0)
	end_timer = 3.2
	fire_held = false
	ads_toggle = false
	var k = player.killer
	hud.announce("ТЫ ВЫБЫЛ", ("Тебя победил " + k.fname) if (k != null and k != player) else "Шторм не прощает")
	Input.mouse_mode = Input.MOUSE_MODE_VISIBLE

func _check_win() -> void:
	if mode != "play":
		return
	if alive_count() == 1 and player.alive:
		player.placed = 1
		sfx.play("victory", -2.0)
		end_timer = 2.5
		hud.announce("ПОБЕДА!", "Ты последний на острове")
		for i in 3:
			fx.burst("confetti", player.global_position + Vector3(randf_range(-2, 2), 2.5, randf_range(-2, 2)), Color(randf(), randf(), randf()))

func _show_end() -> void:
	mode = "end"
	var win := player.alive
	var place := 1 if win else player.placed
	if win:
		cfg.best.wins += 1
	if cfg.best.place == 0 or place < cfg.best.place:
		cfg.best.place = place
	cfg.best.kills = maxi(cfg.best.kills, player.kills)
	cfg.best.matches += 1
	save_settings()
	hud.show_end(win, place)
	Input.mouse_mode = Input.MOUSE_MODE_VISIBLE

func to_menu() -> void:
	mode = "menu"
	set_paused(false)
	for f in fighters:
		f.visible = false
	player.reset()
	player.collision_layer = 0
	if player.slots[0] == null:
		player.slots[0] = {"id": "rifle", "rarity": 3, "ammo": 30}
		player.refresh_gun()
	ship.visible = false
	hud.show_mode("menu")
	if not sfx.music.playing:
		sfx.music.play()

func set_paused(on: bool) -> void:
	paused = on
	get_tree().paused = on
	hud.show_pause(on)

func _physics_process(dt: float) -> void:
	if not ready_done:
		return
	time += dt
	if mode == "menu":
		_update_menu_camera(dt)
	else:
		if ship_t < 1.0:
			ship_t = minf(1.0, ship_t + dt / SHIP_DUR)
			ship.global_position = ship_pos(ship_t)
			ship_prop.rotation.z += dt * 12.0
			if ship_t >= 1.0:
				for f in fighters:
					jump_from(f)
		elif ship.visible:
			ship.global_position += (ship_b - ship_a).normalized() * dt * 15.0
			if ship.global_position.length() > 420.0:
				ship.visible = false
		_update_storm(dt)
		if player.alive:
			_update_player(dt)
		for f in fighters:
			if not f.ai.is_empty() and f.alive:
				_ai_act(f, dt)
			f.tick(dt)
			if f.state == "sky":
				f.global_position = ship_pos(ship_t)
		_update_domes_grenades(dt)
		_update_smoke_chests(dt)
		_update_drops(dt)
		_update_camera(dt)
		if end_timer > 0.0:
			end_timer -= dt
			if end_timer <= 0.0:
				_show_end()
		var pp := player.global_position
		sun.global_position = pp
		var out: bool = player.alive and player.state == "ground" and outside_storm(pp)
		sfx.set_loop(sfx.storm, 0.5 if out else 0.0)
		var wv := 0.55 if player.state == "fall" else (0.25 if player.state == "chute" else (0.12 if player.state == "sky" else 0.0))
		sfx.set_loop(sfx.wind, wv)
	listener.global_transform = cam.global_transform
	var wn: MeshInstance3D = world.water_node
	wn.position = Vector3(snappedf(cam.global_position.x, 35.3), 0, snappedf(cam.global_position.z, 35.3))
	_update_storm_visual()
	storm_mat.set_shader_parameter("t", time)
	for r in world.pad_rings:
		var k := fmod(time * 1.2, 1.0)
		r.position.y = 0.4 + k * 1.6
		r.scale = Vector3.ONE * (1.0 - k * 0.3)
	var cl := world.get_node_or_null("Clouds")
	if cl:
		cl.rotation.y += dt * 0.004
	_update_loot_visuals()
	if autotest:
		_autotest_tick()

func _update_loot_visuals() -> void:
	var cp := cam.global_position
	for it in loot:
		var n: Node3D = it.node
		var vis: bool = Vector2(it.pos.x - cp.x, it.pos.z - cp.z).length_squared() < 85.0 * 85.0
		n.visible = vis
		if vis:
			n.rotation.y = time * 1.4 + it.phase
			n.position.y = it.pos.y + 0.55 + sin(time * 2.4 + it.phase) * 0.1

# ------------------------------------------------------------------ автотест (headless)
var _at_next := 10.0
func _autotest_tick() -> void:
	if time >= _at_next:
		_at_next += 20.0
		var states := {}
		var ai_states := {}
		var kills := 0
		for f in fighters:
			states[f.state] = states.get(f.state, 0) + 1
			kills += f.kills
			if not f.ai.is_empty() and f.alive:
				ai_states[f.ai.state] = ai_states.get(f.ai.state, 0) + 1
		print("AUTOTEST t=%d mode=%s alive=%d kills=%d storm=%d/%d states=%s ai=%s loot=%d player=%s hp=%d" % [time, mode, alive_count(), kills, storm.phase, storm.r, states, ai_states, loot.size(), player.state, player.hp])
	if time > 420.0 or (mode == "end" and alive_count() <= 1):
		print("AUTOTEST DONE alive=%d mode=%s" % [alive_count(), mode])
		get_tree().quit()


# ------------------------------------------------------------------ скриншоты для проверки (запуск с --shots)
func _snap(n: String) -> void:
	await RenderingServer.frame_post_draw
	get_viewport().get_texture().get_image().save_png("user://shot_%s.png" % n)
	print("SHOT ", n, " -> ", ProjectSettings.globalize_path("user://shot_%s.png" % n))

func _shots() -> void:
	await get_tree().create_timer(2.0).timeout
	await _snap("menu")
	hud.open_settings("menu")
	settings_tab_shot(1)
	await get_tree().create_timer(0.5).timeout
	await _snap("settings")
	hud.close_settings()
	start_match()
	await get_tree().create_timer(3.0).timeout
	await _snap("ship")
	jump_from(player)
	Engine.time_scale = 6.0
	await get_tree().create_timer(7.0).timeout
	Engine.time_scale = 1.0
	# заходим в дом
	var sp: Dictionary = world.interior_spots[0]
	var r: Rect2 = sp.rect
	player.global_position = Vector3(r.get_center().x, sp.pos.y + 0.2, r.get_center().y)
	player.state = "ground"
	player.chute.visible = false
	give_item(player, spawn_loot("weapon", player.global_position, {"wid": "lmg", "rarity": 2}))
	cam_yaw = atan2(-(sp.via.x - player.global_position.x), -(sp.via.z - player.global_position.z)) + PI
	cam_pitch = -0.15
	await get_tree().create_timer(1.2).timeout
	await _snap("interior")
	cam_yaw += PI
	await get_tree().create_timer(0.4).timeout
	await _snap("interior2")
	player.global_position = sp.via + Vector3(0, 0.3, 0)
	var b: Fighter = fighters[1]
	if b.state == "sky":
		jump_from(b)
	b.global_position = player.global_position + Vector3(-sin(cam_yaw), 0, -cos(cam_yaw)) * 7.0 + Vector3(0, 1, 0)
	b.state = "ground"
	await get_tree().create_timer(1.0).timeout
	fire_held = true
	await get_tree().create_timer(0.35).timeout
	await _snap("fight")
	fire_held = false
	smokes_active.append({"pos": player.global_position + Vector3(-sin(cam_yaw), 1.0, -cos(cam_yaw)) * 5.0, "t": 10.0, "puff": 0.0})
	await get_tree().create_timer(1.5).timeout
	await _snap("smoke")
	get_tree().quit()

func settings_tab_shot(i: int) -> void:
	hud.settings_tab = i
	hud._fill_settings()
