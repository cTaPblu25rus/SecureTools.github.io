class_name Fighter
extends CharacterBody3D
## Боец: игрок или бот. Гладкая модель из капсул и сфер, процедурная анимация,
## стрельба лучами, способности (рывок, лечащий купол), прыжок с парашютом.

const L_WORLD := 1
const L_CHAR := 2
const L_DOME := 4

var game  # Game
var fname := ""
var is_player := false
var hp := 100.0
var armor := 0.0
var alive := true
var slots: Array = [null, null]
var cur := 0
var reserve := 0
var meds := 0
var grenades := 0
var fire_cd := 0.0
var reload_t := 0.0
var reload_max := 1.0
var heal_t := 0.0
var dash_cd := 0.0
var dome_cd := 0.0
var dash_t := 0.0
var state := "sky"
var kills := 0
var dmg_dealt := 0.0
var flash_t := 0.0
var dead_t := 0.0
var step_phase := 0.0
var glide := false
var punch_t := 0.0
var last_hit_t := -9.0
var last_shot_t := -9.0
var swimming := false
var killer = null
var placed := 0
var yaw := 0.0
var aim_pitch := 0.0
var in_move := Vector2.ZERO
var in_jump := false
var in_ads := false
var ai := {}

var model: Node3D
var hips: Node3D
var torso: Node3D
var head: Node3D
var arm_l: Node3D
var arm_r: Node3D
var leg_l: Node3D
var leg_r: Node3D
var gun_holder: Node3D
var chute: Node3D
var mats: Array = []
var gun_len := 0.3

static var meshes := {}

static func _cap(r: float, h: float) -> CapsuleMesh:
	var key := "c%.3f_%.3f" % [r, h]
	if not meshes.has(key):
		var m := CapsuleMesh.new()
		m.radius = r
		m.height = h
		m.radial_segments = 16
		m.rings = 6
		meshes[key] = m
	return meshes[key]

static func _sph(r: float, hemi := false) -> SphereMesh:
	var key := "s%.3f_%s" % [r, hemi]
	if not meshes.has(key):
		var m := SphereMesh.new()
		m.radius = r
		m.height = r * (1.0 if hemi else 2.0)
		m.is_hemisphere = hemi
		m.radial_segments = 18
		m.rings = 9
		meshes[key] = m
	return meshes[key]

static func _cyl(r: float, h: float, top := -1.0) -> CylinderMesh:
	var key := "y%.3f_%.3f_%.3f" % [r, h, top]
	if not meshes.has(key):
		var m := CylinderMesh.new()
		m.bottom_radius = r
		m.top_radius = r if top < 0.0 else top
		m.height = h
		m.radial_segments = 14
		meshes[key] = m
	return meshes[key]

func _part(mesh: Mesh, m: Material, pos: Vector3, parent: Node3D, rot := Vector3.ZERO, scl := Vector3.ONE) -> MeshInstance3D:
	var mi := MeshInstance3D.new()
	mi.mesh = mesh
	mi.material_override = m
	mi.position = pos
	mi.rotation = rot
	mi.scale = scl
	parent.add_child(mi)
	return mi

func setup(g, n: String, player: bool) -> void:
	game = g
	fname = n
	is_player = player
	collision_layer = L_CHAR
	collision_mask = L_WORLD | L_CHAR
	floor_snap_length = 0.45
	floor_max_angle = deg_to_rad(52)
	var cs := CollisionShape3D.new()
	var cap := CapsuleShape3D.new()
	cap.radius = 0.36
	cap.height = 1.8
	cs.shape = cap
	cs.position.y = 0.9
	add_child(cs)
	var outfit: Array = [Color("#FFB627"), Color("#14213D")] if player else Data.OUTFITS.pick_random()
	var skin: Color = Data.SKINS.pick_random()
	_build_model(outfit[0], outfit[1], skin)
	if not player:
		ai = {"skill": randf_range(0.3, 0.88), "state": "roam", "target": null, "think": randf() * 0.3, "move": Vector3.ZERO,
			"strafe": 1.0, "strafe_t": 0.0, "react": 0.0, "last_seen": -99.0, "seen": Vector3.ZERO, "stuck": 0, "last_pos": Vector3.ZERO,
			"jump_at": 0.5, "land": Vector3.ZERO, "los": false, "roam_t": 0.0, "nade_t": 5.0, "burst_t": 0.0, "stuck_dir": 0.0, "stuck_till": -1.0}

func _mat(c: Color, rough := 0.6, metal := 0.0) -> StandardMaterial3D:
	var m := StandardMaterial3D.new()
	m.albedo_color = c
	m.roughness = rough
	m.metallic = metal
	m.rim_enabled = true
	m.rim = 0.35
	m.rim_tint = 0.6
	mats.append(m)
	return m

func _build_model(c1: Color, c2: Color, skin: Color) -> void:
	model = Node3D.new()
	add_child(model)
	var shirt := _mat(c1)
	var pants := _mat(c2, 0.8)
	var sk := _mat(skin, 0.55)
	var dark := _mat(Color("#20222A"), 0.5, 0.2)
	var visor := _mat(Color("#121820"), 0.08, 0.8)
	var vest := _mat(c2.lerp(Color("#3B4252"), 0.5), 0.7)
	hips = Node3D.new()
	hips.position.y = 0.95
	model.add_child(hips)
	_part(_cap(0.19, 0.5), pants, Vector3(0, 0.02, 0), hips, Vector3(0, 0, PI / 2))
	torso = Node3D.new()
	torso.position.y = 0.04
	hips.add_child(torso)
	_part(_cap(0.23, 0.74), shirt, Vector3(0, 0.34, 0), torso, Vector3.ZERO, Vector3(1.05, 1, 0.82))
	_part(_cap(0.245, 0.5), vest, Vector3(0, 0.33, 0), torso, Vector3.ZERO, Vector3(1.05, 1, 0.86))
	_part(_cap(0.17, 0.42), pants, Vector3(0, 0.34, 0.22), torso)
	_part(_sph(0.08), sk, Vector3(0, 0.68, 0), torso)
	head = Node3D.new()
	head.position.y = 0.84
	torso.add_child(head)
	_part(_sph(0.17), sk, Vector3.ZERO, head, Vector3.ZERO, Vector3(1, 1.08, 1))
	_part(_sph(0.185, true), (_mat(Color("#FFB627"), 0.4) if is_player else pants), Vector3(0, 0.03, 0.01), head)
	_part(_cap(0.055, 0.28), visor, Vector3(0, 0.02, -0.145), head, Vector3(0, 0, PI / 2))
	arm_r = _arm(0.29, shirt, sk)
	arm_l = _arm(-0.29, shirt, sk)
	leg_r = _leg(0.12, pants, dark)
	leg_l = _leg(-0.12, pants, dark)
	gun_holder = Node3D.new()
	gun_holder.position = Vector3(0.13, 0.44, -0.3)
	torso.add_child(gun_holder)
	chute = Node3D.new()
	model.add_child(chute)
	var cm := _mat(c1, 0.8)
	cm.cull_mode = BaseMaterial3D.CULL_DISABLED
	_part(_sph(2.4, true), cm, Vector3(0, 4.2, 0), chute, Vector3.ZERO, Vector3(1, 0.5, 1))
	var line := _mat(Color("#EEEEEE"), 0.5)
	for c in [Vector2(-1, -1), Vector2(1, -1), Vector2(-1, 1), Vector2(1, 1)]:
		_part(_cyl(0.015, 2.9), line, Vector3(c.x * 0.9, 2.75, c.y * 0.9), chute, Vector3(c.y * 0.36, 0, -c.x * 0.36))
	chute.visible = false

func _arm(x: float, shirt: Material, sk: Material) -> Node3D:
	var a := Node3D.new()
	a.position = Vector3(x, 0.58, 0)
	torso.add_child(a)
	_part(_cap(0.075, 0.38), shirt, Vector3(0, -0.15, 0), a)
	_part(_cap(0.066, 0.34), sk, Vector3(0, -0.42, 0), a)
	_part(_sph(0.072), sk, Vector3(0, -0.6, 0), a)
	return a

func _leg(x: float, pants: Material, dark: Material) -> Node3D:
	var l := Node3D.new()
	l.position = Vector3(x, 0, 0)
	hips.add_child(l)
	_part(_cap(0.1, 0.52), pants, Vector3(0, -0.22, 0), l)
	_part(_cap(0.088, 0.46), pants, Vector3(0, -0.6, 0), l)
	_part(_sph(0.1), dark, Vector3(0, -0.86, -0.05), l, Vector3.ZERO, Vector3(1.05, 0.75, 1.55))
	return l

static func make_gun(id: String, rarity: int) -> Node3D:
	var g := Node3D.new()
	var w: Dictionary = Data.WEAPONS[id]
	var L: float = w.len
	var body := StandardMaterial3D.new()
	body.albedo_color = Color("#2B2F36")
	body.metallic = 0.6
	body.roughness = 0.35
	var acc := StandardMaterial3D.new()
	var rc: Color = Data.RAR[rarity].color
	acc.albedo_color = rc
	acc.roughness = 0.35
	if rarity >= 2:
		acc.emission_enabled = true
		acc.emission = rc
		acc.emission_energy_multiplier = 0.6
	var add := func(mesh: Mesh, m: Material, pos: Vector3, rot := Vector3.ZERO, scl := Vector3.ONE):
		var mi := MeshInstance3D.new()
		mi.mesh = mesh
		mi.material_override = m
		mi.position = pos
		mi.rotation = rot
		mi.scale = scl
		g.add_child(mi)
	add.call(_cap(0.06, L), body, Vector3(0, 0, -L / 2.0 + 0.08), Vector3(PI / 2, 0, 0), Vector3(1, 1, 1.25))
	add.call(_cyl(0.025, L * 0.5), body, Vector3(0, 0.02, -L - L * 0.18 + 0.08), Vector3(PI / 2, 0, 0))
	add.call(_cap(0.045, L * 0.6), acc, Vector3(0, 0.06, -L * 0.42), Vector3(PI / 2, 0, 0))
	var mag := BoxMesh.new()
	mag.size = Vector3(0.05, 0.18 if id in ["smg", "rifle"] else 0.12, 0.08)
	add.call(mag, acc, Vector3(0, -0.11, -L * 0.35), Vector3(0.2, 0, 0))
	if id != "pistol" and id != "smg":
		add.call(_cap(0.05, 0.26), body, Vector3(0, -0.03, 0.17), Vector3(PI / 2, 0, 0))
	if id == "sniper" or id == "rifle":
		add.call(_cyl(0.035, 0.22 if id == "sniper" else 0.12), body, Vector3(0, 0.12, -L * 0.4), Vector3(PI / 2, 0, 0))
	if id == "shotgun":
		var wood := StandardMaterial3D.new()
		wood.albedo_color = Color("#7A4E2D")
		add.call(_cap(0.05, 0.28), wood, Vector3(0, -0.06, -L * 0.7), Vector3(PI / 2, 0, 0))
	return g

# ------------------------------------------------------------------ состояние
func reset() -> void:
	hp = 100.0; armor = 0.0; alive = true; slots = [null, null]; cur = 0; reserve = 0; meds = 0; grenades = 0
	fire_cd = 0.0; reload_t = 0.0; heal_t = 0.0; dash_cd = 0.0; dome_cd = 0.0; dash_t = 0.0; state = "sky"
	kills = 0; dmg_dealt = 0.0; flash_t = 0.0; dead_t = 0.0; glide = false; punch_t = 0.0
	last_hit_t = -9.0; last_shot_t = -9.0; swimming = false; killer = null; placed = 0
	velocity = Vector3.ZERO
	visible = false
	model.rotation = Vector3.ZERO
	model.position = Vector3.ZERO
	chute.visible = false
	collision_layer = 0
	refresh_gun()
	for m in mats:
		m.emission_enabled = false

func weapon():
	return slots[cur]

func refresh_gun() -> void:
	for c in gun_holder.get_children():
		c.queue_free()
	var w = weapon()
	if w != null:
		gun_holder.add_child(make_gun(w.id, w.rarity))
		gun_len = float(Data.WEAPONS[w.id].len) * 1.2 + 0.1
	else:
		gun_len = 0.3

func switch_to(i: int) -> void:
	if i == cur or slots[i] == null or heal_t > 0.0:
		return
	cur = i
	reload_t = 0.0
	fire_cd = 0.3
	refresh_gun()

func muzzle() -> Vector3:
	return gun_holder.global_transform * Vector3(0, 0.03, -gun_len)

func eye() -> Vector3:
	return global_position + Vector3(0, 1.55, 0)

func start_reload() -> void:
	var w = weapon()
	if w == null or reload_t > 0.0 or heal_t > 0.0:
		return
	var d: Dictionary = Data.WEAPONS[w.id]
	if w.ammo >= int(d.mag) or reserve <= 0:
		if reserve <= 0 and w.ammo <= 0 and is_player:
			game.sfx.play("empty")
			game.hud.toast("Нет патронов")
		return
	reload_t = float(d.reload)
	reload_max = reload_t
	game.sfx.play3("reload", global_position, -4.0)

func start_heal() -> bool:
	if meds <= 0 or heal_t > 0.0 or hp >= 100.0:
		return false
	heal_t = 2.3
	reload_t = 0.0
	if is_player:
		game.sfx.play("click")
	return true

func try_fire(from: Vector3, dir: Vector3) -> bool:
	if reload_t > 0.0 or fire_cd > 0.0 or heal_t > 0.0 or state != "ground":
		return false
	last_shot_t = game.time
	var w = weapon()
	if w == null:
		fire_cd = 0.5
		punch_t = 0.25
		game.sfx.play3("fist", global_position)
		var h: Dictionary = game.raycast(from, from + dir * 2.4, self)
		if h and h.collider is Fighter:
			game.apply_damage(h.collider, 16.0, self, false, "кулак")
		return true
	if w.ammo <= 0:
		start_reload()
		return false
	var d: Dictionary = Data.WEAPONS[w.id]
	w.ammo -= 1
	fire_cd = float(d.rate)
	var moving := Vector2(velocity.x, velocity.z).length() > 1.0
	var spread: float = float(d.spread) * (0.45 if in_ads else 1.0) * (1.6 if moving else 1.0) * (1.0 if is_on_floor() else 2.0)
	var mz := muzzle()
	var rng: float = d.range
	for i in int(d.pellets):
		var dd := dir
		if spread > 0.0:
			dd = (dir + Vector3(randf_range(-1, 1), randf_range(-1, 1), randf_range(-1, 1)) * spread).normalized()
		var h: Dictionary = game.raycast(from, from + dd * rng, self)
		var end: Vector3 = h.position if h else from + dd * rng
		if i < 3:
			game.fx.tracer(mz, end, Color(1, 0.82, 0.45) if w.rarity == 3 else Color(1, 0.92, 0.65))
		if h:
			if h.collider is Fighter:
				var f: Fighter = h.collider
				var dist := from.distance_to(end)
				var fall := 1.0
				if dist > rng * 0.6:
					fall = lerpf(1.0, 0.65, (dist - rng * 0.6) / (rng * 0.4))
				var head_hit: bool = end.y - f.global_position.y > 1.42
				var dmg: float = float(d.dmg) * float(Data.RAR[w.rarity].mul) * fall * (1.0 if is_player else 0.8)
				if head_hit:
					dmg *= 2.4 if w.id == "sniper" else 1.75
				game.apply_damage(f, dmg, self, head_hit, d.short)
			else:
				game.impact(end, h.normal, h.collider)
	game.fx.flash(mz, w.id == "shotgun" or w.id == "sniper", is_player or mz.distance_to(game.cam.global_position) < 30.0)
	game.sfx.play3(d.sound, global_position, 0.0 if is_player else -2.0)
	game.alert_bots(self)
	if is_player:
		game.on_player_recoil(float(d.recoil), w.id)
	if w.ammo == 0:
		get_tree().create_timer(0.25).timeout.connect(func():
			if alive and weapon() == w:
				start_reload())
	return true

func throw_grenade(dir: Vector3) -> void:
	if grenades <= 0 or state != "ground" or heal_t > 0.0:
		return
	grenades -= 1
	game.sfx.play3("throw", global_position)
	game.spawn_grenade(self, eye() + dir * 0.6, dir * 17.0 + Vector3(0, 5, 0))

func dash(dx: float, dz: float) -> void:
	if dash_cd > 0.0 or state != "ground" or heal_t > 0.0:
		return
	var l := Vector2(dx, dz).length()
	if l < 0.1:
		dx = -sin(yaw)
		dz = -cos(yaw)
		l = 1.0
	velocity.x = dx / l * 19.0
	velocity.z = dz / l * 19.0
	velocity.y = maxf(velocity.y, 2.5)
	dash_t = 0.22
	dash_cd = 5.0
	game.sfx.play3("dash", global_position)
	game.fx.burst("puff", global_position + Vector3(0, 0.5, 0), Color(0.6, 0.9, 1.0, 0.5))

func dome() -> void:
	if dome_cd > 0.0 or state != "ground":
		return
	dome_cd = 22.0
	game.spawn_dome(self)
	game.sfx.play3("dome", global_position)

# ------------------------------------------------------------------ шаг симуляции
func tick(dt: float) -> void:
	if not alive:
		_death_anim(dt)
		return
	fire_cd -= dt; dash_cd -= dt; dome_cd -= dt; punch_t -= dt
	if flash_t > 0.0:
		flash_t -= dt
		var k := maxf(flash_t, 0.0) * 5.0
		for m in mats:
			m.emission_enabled = k > 0.01
			m.emission = Color(1.0, 0.2, 0.1) * k
	if reload_t > 0.0:
		reload_t -= dt
		if reload_t <= 0.0:
			var w = weapon()
			if w != null:
				var need: int = int(Data.WEAPONS[w.id].mag) - w.ammo
				var take := mini(need, reserve)
				w.ammo += take
				reserve -= take
	if heal_t > 0.0:
		heal_t -= dt
		if heal_t <= 0.0:
			hp = minf(100.0, hp + 50.0)
			meds -= 1
			game.fx.burst("heal", global_position + Vector3(0, 1, 0))
			if is_player:
				game.sfx.play("heal")
				game.hud.toast("+50 здоровья")
	if state == "sky":
		return
	var p := global_position
	if state == "fall" or state == "chute":
		var sp := 17.0 if state == "fall" else 9.5
		velocity.x = lerpf(velocity.x, in_move.x * sp, clampf(dt * 2.0, 0, 1))
		velocity.z = lerpf(velocity.z, in_move.y * sp, clampf(dt * 2.0, 0, 1))
		velocity.y = lerpf(velocity.y, -34.0, clampf(dt * 1.2, 0, 1)) if state == "fall" else lerpf(velocity.y, -6.5, clampf(dt * 3.0, 0, 1))
		in_jump = false
		var above: float = p.y - maxf(game.world.height_at(p.x, p.z), 0.0)
		if state == "fall" and above < 58.0:
			state = "chute"
			chute.visible = true
			game.sfx.play3("chute", p)
		move_and_slide()
		_clamp_world()
		if is_on_floor() or global_position.y <= World.WATER_FLOOR:
			state = "ground"
			chute.visible = false
			velocity = Vector3.ZERO
			game.fx.burst("dust", global_position)
		_animate(dt)
		return
	# ---- на земле ----
	swimming = game.world.height_at(p.x, p.z) < -0.55 and p.y < 0.2
	var speed := 6.4
	if in_ads:
		speed = 3.8
	if heal_t > 0.0:
		speed = 2.6
	if swimming:
		speed = 3.4
	var on_floor := is_on_floor() or swimming
	var accel := 14.0 if on_floor else 3.5
	if dash_t > 0.0:
		dash_t -= dt
	else:
		velocity.x = lerpf(velocity.x, in_move.x * speed, clampf(accel * dt, 0, 1))
		velocity.z = lerpf(velocity.z, in_move.y * speed, clampf(accel * dt, 0, 1))
	if glide and velocity.y < 0.0:
		velocity.y = maxf(velocity.y - 5.0 * dt, -4.5)
		velocity.x = lerpf(velocity.x, in_move.x * 11.0, dt * 2.0)
		velocity.z = lerpf(velocity.z, in_move.y * 11.0, dt * 2.0)
	elif not is_on_floor():
		velocity.y -= 24.0 * dt
	if in_jump and on_floor:
		velocity.y = 5.0 if swimming else 8.3
		game.sfx.play3("jump", p, -6.0)
	in_jump = false
	var fall_speed := velocity.y
	move_and_slide()
	if is_on_floor():
		if glide or fall_speed < -12.0:
			game.fx.burst("dust", global_position)
		glide = false
	_clamp_world()
	var gp := global_position
	if gp.y < World.WATER_FLOOR:
		gp.y = World.WATER_FLOOR
		global_position = gp
		velocity.y = maxf(velocity.y, 0.0)
	if is_on_floor() and not glide:
		for pd in game.world.pads:
			var pv: Vector3 = pd
			if Vector2(gp.x - pv.x, gp.z - pv.z).length_squared() < 2.4 and absf(gp.y - pv.y) < 1.2:
				velocity.y = 25.0
				glide = true
				game.sfx.play3("pad", gp)
				game.fx.burst("pad", pv + Vector3(0, 0.4, 0))
	_animate(dt)

func _clamp_world() -> void:
	var gp := global_position
	var r := Vector2(gp.x, gp.z).length()
	var lim := World.ISLAND + 30.0
	if r > lim:
		gp.x *= lim / r
		gp.z *= lim / r
		global_position = gp

func _animate(dt: float) -> void:
	visible = true
	model.rotation.y = yaw
	if state == "fall":
		model.rotation.x = lerpf(model.rotation.x, -1.1, dt * 3.0)
		leg_r.rotation = Vector3(0.3, 0, 0)
		leg_l.rotation = Vector3(0.5, 0, 0)
		arm_r.rotation = Vector3(0, 0, 1.3)
		arm_l.rotation = Vector3(0, 0, -1.3)
		return
	model.rotation.x = lerpf(model.rotation.x, 0.0, clampf(dt * 6.0, 0, 1))
	if state == "chute":
		leg_r.rotation = Vector3(-0.2, 0, 0)
		leg_l.rotation = Vector3(0.2, 0, 0)
		arm_r.rotation = Vector3(0, 0, 2.6)
		arm_l.rotation = Vector3(0, 0, -2.6)
		return
	var hs := Vector2(velocity.x, velocity.z).length()
	var prev := step_phase
	step_phase += dt * hs * 1.55
	var amp := minf(hs / 6.0, 1.0)
	var sw := sin(step_phase) * amp * 0.85
	if is_on_floor() or swimming:
		leg_r.rotation = Vector3(sw, 0, 0)
		leg_l.rotation = Vector3(-sw, 0, 0)
		hips.position.y = 0.95 + absf(cos(step_phase)) * 0.05 * amp
		if hs > 1.0 and floori(prev / PI) != floori(step_phase / PI):
			game.sfx.play3("splash" if swimming else "step", global_position, -14.0 if swimming else -10.0, 0.15)
	else:
		leg_r.rotation = Vector3(-0.7, 0, 0)
		leg_l.rotation = Vector3(0.35, 0, 0)
	torso.rotation.x = aim_pitch * 0.3
	torso.rotation.y = 0.0
	head.rotation.x = aim_pitch * 0.35
	gun_holder.rotation.x = aim_pitch * 0.7
	var w = weapon()
	if heal_t > 0.0:
		arm_r.rotation = Vector3(0.9, 0, -0.3)
		arm_l.rotation = Vector3(0.9, 0, 0.3)
	elif w != null:
		var rk := 0.45 if reload_t > 0.0 else 0.0
		arm_r.rotation = Vector3(1.45 + aim_pitch * 0.7 - rk, 0, 0)
		arm_l.rotation = Vector3(1.3 + aim_pitch * 0.7 - rk, -0.5, 0)
	elif punch_t > 0.0:
		arm_r.rotation = Vector3(1.6, 0, 0)
		arm_l.rotation = Vector3(0.6, 0, 0)
	else:
		arm_r.rotation = Vector3(-sw * 0.8, 0, 0.08)
		arm_l.rotation = Vector3(sw * 0.8, 0, -0.08)
	gun_holder.visible = w != null and heal_t <= 0.0

func _death_anim(dt: float) -> void:
	dead_t += dt
	model.rotation.x = lerpf(model.rotation.x, -PI / 2.0, clampf(dt * 5.0, 0, 1))
	model.position.y = lerpf(model.position.y, 0.25, clampf(dt * 5.0, 0, 1))
	if dead_t > 5.0:
		model.position.y -= dt * 0.6
		if dead_t > 7.0:
			visible = false
