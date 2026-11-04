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
var quality := 1
var sens := 1.0
var is_touch := false

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

var best := {"wins": 0, "place": 0, "kills": 0}

func _ready() -> void:
	is_touch = DisplayServer.is_touchscreen_available() or OS.has_feature("mobile")
	autotest = "--autotest" in OS.get_cmdline_user_args()
	quality = 1 if is_touch else 2
	_load_settings()
	font_display = load("res://fonts/RussoOne-Regular.ttf")
	font_body = load("res://fonts/Rubik-Medium.ttf")
	world = World.new()
	add_child(world)
	world.build(self)
	sun = DirectionalLight3D.new()
	sun.light_color = Color("#FFE0B5")
	sun.light_energy = 1.9
	sun.shadow_enabled = true
	sun.directional_shadow_max_distance = 80.0
	sun.directional_shadow_mode = DirectionalLight3D.SHADOW_PARALLEL_2_SPLITS
	sun.shadow_bias = 0.05
	sun.rotation = Vector3(deg_to_rad(-38), deg_to_rad(-125), 0)
	add_child(sun)
	cam = Camera3D.new()
	cam.fov = 72
	cam.far = 3200
	add_child(cam)
	cam.make_current()
	sfx = Sfx.new()
	add_child(sfx)
	sfx.set_enabled(_setting("sound", true))
	fx = Fx.new()
	add_child(fx)
	fx.setup(font_display)
	_build_storm()
	_build_ship()
	player = _new_fighter("Ты", true)
	var nicks: Array = Data.NICKS.duplicate()
	nicks.shuffle()
	for i in 19:
		_new_fighter(nicks[i], false)
	hud = Hud.new()
	add_child(hud)
	hud.setup(self)
	_reset_storm()
	_scatter_loot()
	apply_quality()
	if "--shots" in OS.get_cmdline_user_args():
		_shots()
	if autotest:
		Engine.time_scale = 6.0
		Engine.max_physics_steps_per_frame = 64
		start_match()
		jump_from(player)
	else:
		sfx.music.play()

func _new_fighter(n: String, p: bool) -> Fighter:
	var f := Fighter.new()
	add_child(f)
	f.setup(self, n, p)
	f.reset()
	fighters.append(f)
	return f

# ------------------------------------------------------------------ настройки
var _cfg := ConfigFile.new()
func _load_settings() -> void:
	_cfg.load("user://settings.cfg")
	quality = int(_cfg.get_value("s", "quality", quality))
	sens = float(_cfg.get_value("s", "sens", 1.0))
	for k in best.keys():
		best[k] = int(_cfg.get_value("best", k, 0))

func _setting(k: String, def):
	return _cfg.get_value("s", k, def)

func save_settings() -> void:
	_cfg.set_value("s", "quality", quality)
	_cfg.set_value("s", "sens", sens)
	_cfg.set_value("s", "sound", sfx.enabled)
	for k in best.keys():
		_cfg.set_value("best", k, best[k])
	_cfg.save("user://settings.cfg")

func apply_quality() -> void:
	var vp := get_viewport()
	vp.scaling_3d_scale = [0.6, 0.8, 1.0][quality]
	vp.msaa_3d = Viewport.MSAA_DISABLED if quality == 0 else Viewport.MSAA_2X
	sun.shadow_enabled = quality > 0
	sun.directional_shadow_max_distance = 60.0 if quality == 1 else 90.0
	if world.grass_mm:
		world.grass_mm.multimesh.visible_instance_count = [0, 3000, -1][quality]

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
	var it := {"kind": kind, "wid": opts.get("wid", ""), "rarity": opts.get("rarity", 0), "amount": opts.get("amount", 1), "ammo": opts.get("ammo", -1), "pos": pos, "alive": true, "phase": randf() * TAU}
	var n := _loot_visual(it)
	n.position = pos + Vector3(0, 0.55, 0)
	add_child(n)
	it.node = n
	loot.append(it)
	return it

func _random_loot(pos: Vector3) -> void:
	var kind: String = Data.weighted([["weapon", 40], ["ammo", 26], ["med", 14], ["shield", 12], ["grenade", 8]])
	if kind == "weapon":
		spawn_loot("weapon", pos, {"wid": Data.weighted([["pistol", 20], ["smg", 24], ["shotgun", 20], ["rifle", 24], ["sniper", 12]]), "rarity": Data.weighted([[0, 50], [1, 30], [2, 15], [3, 5]])})
	else:
		spawn_loot(kind, pos, {"amount": randi_range(30, 60) if kind == "ammo" else 1})

func ground_y(x: float, z: float, from_y := 60.0) -> float:
	var h: Dictionary = raycast(Vector3(x, from_y, z), Vector3(x, -5, z), null, L_WORLD)
	if h:
		return h.position.y
	return maxf(world.height_at(x, z), World.WATER_FLOOR)

func _scatter_loot() -> void:
	for it in loot:
		it.node.queue_free()
	loot.clear()
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
		"shield": return "+50 брони"
		"grenade": return "+1 граната"
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
	var h := raycast(a.eye(), b.global_position + Vector3(0, 1.2, 0), null, L_WORLD | L_DOME)
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
func spawn_grenade(owner: Fighter, pos: Vector3, vel: Vector3) -> void:
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
	world.mesh_node(sm, world.mat(Color("#4F772D"), 0.5), Vector3.ZERO, rb)
	add_child(rb)
	rb.global_position = pos
	rb.linear_velocity = vel
	rb.angular_velocity = Vector3(randf(), randf(), randf()) * 8.0
	grenades.append({"rb": rb, "t": 2.2, "owner": owner})

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
	return b.slots[0] == null or b.slots[1] == null or b.reserve < 45 or b.meds < 2 or b.armor < 50.0

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
		"shield": return b.armor < 100.0
		"grenade": return b.grenades < 3
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
	if b.hp < 45.0 and b.meds > 0 and not (ai.los and bd < 35.0):
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
		for d in drops:
			if d.landed and Vector2(d.x - bp.x, d.z - bp.z).length_squared() < 80.0 * 80.0:
				ai.state = "loot"
				ai.move = Vector3(d.x, 0, d.z)
				return
		if bi != null:
			ai.state = "loot"
			ai.move = bi.pos
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
			ai.nade_t -= dt
			if b.grenades > 0 and d > 7.0 and d < 24.0 and ai.nade_t <= 0.0:
				ai.nade_t = randf_range(5, 10)
				if randf() < 0.4:
					b.throw_grenade(Vector3(dv.x, d * 0.35, dv.y).normalized())
			var rng: float = float(Data.WEAPONS[w.id].range) * 0.92 if w != null else 2.2
			if ai.react <= 0.0 and absf(angle_difference(b.yaw, want)) < 0.3 and d < rng:
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
	var k: float = (0.0058 if is_touch else 0.0032) * sens / sqrt(zoom)
	cam_yaw -= look_delta.x * k
	cam_pitch = clampf(cam_pitch - look_delta.y * k, -1.15, 1.05)
	look_delta = Vector2.ZERO
	if is_touch and w != null and pl.state == "ground":
		_aim_assist(dt)
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
	if fire_held and pl.state == "ground" and pl.alive:
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
	menu_ang += dt * 0.05
	cam.global_position = Vector3(cos(menu_ang) * 210, 85, sin(menu_ang) * 210)
	cam.look_at(Vector3(0, 8, 0))
	cam.fov = 60

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
		best.wins += 1
	if best.place == 0 or place < best.place:
		best.place = place
	best.kills = maxi(best.kills, player.kills)
	save_settings()
	hud.show_end(win, place)
	Input.mouse_mode = Input.MOUSE_MODE_VISIBLE

func to_menu() -> void:
	mode = "menu"
	for f in fighters:
		f.visible = false
	ship.visible = false
	hud.show_mode("menu")
	sfx.music.play()

func _physics_process(dt: float) -> void:
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
	is_touch = "--touch" in OS.get_cmdline_user_args()
	hud._mark()
	await get_tree().create_timer(2.0).timeout
	await _snap("menu")
	start_match()
	await get_tree().create_timer(3.0).timeout
	await _snap("ship")
	jump_from(player)
	await get_tree().create_timer(2.5).timeout
	await _snap("fall")
	Engine.time_scale = 6.0
	await get_tree().create_timer(7.0).timeout
	Engine.time_scale = 1.0
	# дать игроку оружие и поставить рядом бота для кадра «бой»
	give_item(player, spawn_loot("weapon", player.global_position, {"wid": "rifle", "rarity": 2}))
	player.armor = 50.0
	var b: Fighter = fighters[1]
	if b.state == "sky":
		jump_from(b)
	b.global_position = player.global_position + Vector3(-sin(cam_yaw), 0, -cos(cam_yaw)) * 7.0 + Vector3(0, 1, 0)
	b.state = "ground"
	b.ai.state = "roam"
	cam_pitch = -0.12
	await get_tree().create_timer(1.0).timeout
	await _snap("ground")
	fire_held = true
	await get_tree().create_timer(0.35).timeout
	await _snap("fight")
	fire_held = false
	spawn_dome(player)
	await get_tree().create_timer(0.8).timeout
	await _snap("dome")
	get_tree().quit()
