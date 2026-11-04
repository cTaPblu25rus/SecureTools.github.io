class_name Hud
extends CanvasLayer
## Интерфейс: меню, HUD, мультитач-управление (джойстик, обзор, кнопки), мини-карта, итоги.

var game  # Game
var fd: Font
var fb: Font
var canvas: HudCanvas
var map_view: MapView
var menu: Control
var end_screen: Control
var end_title: Label
var end_sub: Label
var end_stats: Array = []
var best_label: Label
var q_buttons: Array = []
var snd_buttons: Array = []

# ввод
var touches := {}
var joy_index := -1
var joy_origin := Vector2.ZERO
var fire_touches := 0
var buttons: Array = []
var big_map := false

# сообщения
var feed: Array = []
var ann_text := ""
var ann_sub := ""
var ann_t := 0.0
var toast_text := ""
var toast_t := 0.0
var hit_t := 0.0
var hit_kill := false
var dmg_dir_t := 0.0
var dmg_dir_a := 0.0

const AMBER := Color("#FFB627")
const DANGER := Color("#FF4D5E")
const SHIELD := Color("#3DD6FF")
const STORM := Color("#A45CFF")
const GLASS := Color(0.03, 0.05, 0.1, 0.56)
const INK := Color("#F4F7FB")
const MUTED := Color("#A9B6CC")

func setup(g) -> void:
	game = g
	fd = g.font_display
	fb = g.font_body
	var th := Theme.new()
	th.default_font = fb
	th.default_font_size = 18
	canvas = HudCanvas.new()
	canvas.hud = self
	canvas.set_anchors_preset(Control.PRESET_FULL_RECT)
	canvas.mouse_filter = Control.MOUSE_FILTER_IGNORE
	canvas.theme = th
	add_child(canvas)
	map_view = MapView.new()
	map_view.hud = self
	map_view.clip_contents = true
	map_view.mouse_filter = Control.MOUSE_FILTER_IGNORE
	canvas.add_child(map_view)
	_build_menu(th)
	_build_end(th)
	show_mode("menu")

# ------------------------------------------------------------------ меню
func _btn(text: String, size: int, bg: Color, fg: Color, font: Font) -> Button:
	var b := Button.new()
	b.text = text
	b.add_theme_font_override("font", font)
	b.add_theme_font_size_override("font_size", size)
	for st in ["normal", "hover", "pressed", "focus"]:
		var sb := StyleBoxFlat.new()
		sb.bg_color = bg if st != "pressed" else bg.darkened(0.2)
		sb.set_corner_radius_all(14)
		sb.content_margin_left = 22
		sb.content_margin_right = 22
		sb.content_margin_top = 10
		sb.content_margin_bottom = 10
		if st == "focus":
			sb.draw_center = false
			sb.border_color = AMBER
			sb.set_border_width_all(2)
		b.add_theme_stylebox_override(st, sb)
	for c in ["font_color", "font_hover_color", "font_pressed_color", "font_focus_color"]:
		b.add_theme_color_override(c, fg)
	return b

func _label(text: String, font: Font, size: int, color: Color) -> Label:
	var l := Label.new()
	l.text = text
	l.add_theme_font_override("font", font)
	l.add_theme_font_size_override("font_size", size)
	l.add_theme_color_override("font_color", color)
	return l

func _build_menu(th: Theme) -> void:
	menu = Control.new()
	menu.set_anchors_preset(Control.PRESET_FULL_RECT)
	menu.theme = th
	add_child(menu)
	var shade := ColorRect.new()
	shade.set_anchors_preset(Control.PRESET_FULL_RECT)
	shade.mouse_filter = Control.MOUSE_FILTER_IGNORE
	var gm := ShaderMaterial.new()
	var sh := Shader.new()
	sh.code = "shader_type canvas_item; void fragment(){ COLOR = vec4(0.03,0.05,0.1, mix(0.9, 0.0, smoothstep(0.0, 0.72, UV.x))); }"
	gm.shader = sh
	shade.material = gm
	menu.add_child(shade)
	var box := VBoxContainer.new()
	box.position = Vector2(48, 40)
	box.add_theme_constant_override("separation", 12)
	menu.add_child(box)
	box.add_child(_label("КОРОЛЕВСКАЯ БИТВА · 20 ИГРОКОВ", fb, 16, AMBER))
	var title := _label("Остров Шторма", fd, 76, AMBER)
	title.add_theme_color_override("font_outline_color", Color("#6B2A00"))
	title.add_theme_constant_override("outline_size", 10)
	title.add_theme_color_override("font_shadow_color", Color(0, 0, 0, 0.45))
	title.add_theme_constant_override("shadow_offset_y", 6)
	box.add_child(title)
	var tag := _label("Прыгай с дирижабля, собирай оружие, ставь лечащий купол\nи делай рывки. Фиолетовый шторм сжимает остров.\nОстанется один.", fb, 19, MUTED)
	box.add_child(tag)
	var play := _btn("ИГРАТЬ", 34, Color("#FF9A1F"), Color("#2A1400"), fd)
	play.custom_minimum_size = Vector2(260, 74)
	play.size_flags_horizontal = Control.SIZE_SHRINK_BEGIN
	play.pressed.connect(func(): game.sfx.play("click"); game.start_match())
	box.add_child(play)
	var grid := GridContainer.new()
	grid.columns = 2
	grid.add_theme_constant_override("h_separation", 16)
	grid.add_theme_constant_override("v_separation", 10)
	box.add_child(grid)
	grid.add_child(_label("Графика", fb, 18, MUTED))
	var qrow := HBoxContainer.new()
	for i in 3:
		var b := _btn(["Низкая", "Средняя", "Высокая"][i], 17, GLASS, INK, fb)
		b.pressed.connect(func(): game.quality = i; game.apply_quality(); game.save_settings(); _mark())
		qrow.add_child(b)
		q_buttons.append(b)
	grid.add_child(qrow)
	grid.add_child(_label("Чувствит.", fb, 18, MUTED))
	var sl := HSlider.new()
	sl.min_value = 0.4
	sl.max_value = 2.2
	sl.step = 0.1
	sl.value = game.sens
	sl.custom_minimum_size = Vector2(300, 32)
	sl.value_changed.connect(func(v): game.sens = v; game.save_settings())
	grid.add_child(sl)
	grid.add_child(_label("Звук", fb, 18, MUTED))
	var srow := HBoxContainer.new()
	for i in 2:
		var b := _btn(["Вкл", "Выкл"][i], 17, GLASS, INK, fb)
		b.pressed.connect(func():
			game.sfx.set_enabled(i == 0)
			if i == 0 and not game.sfx.music.playing:
				game.sfx.music.play()
			game.save_settings()
			_mark())
		srow.add_child(b)
		snd_buttons.append(b)
	grid.add_child(srow)
	best_label = _label("", fb, 16, MUTED)
	box.add_child(best_label)
	var hint := _label("Слева — джойстик, справа — обзор. Тяни кнопку огня, чтобы целиться на ходу." if game.is_touch else "WASD — бег, мышь — прицел, ЛКМ — огонь, ПКМ — прицел. Shift рывок, Q купол, G граната, H аптечка, F взять.", fb, 15, MUTED)
	box.add_child(hint)
	_mark()

func _mark() -> void:
	for i in 3:
		_set_sel(q_buttons[i], i == game.quality)
	_set_sel(snd_buttons[0], game.sfx.enabled)
	_set_sel(snd_buttons[1], not game.sfx.enabled)
	var b: Dictionary = game.best
	best_label.text = ("Побед: %d · Лучшее место: #%d · Рекорд убийств: %d" % [b.wins, b.place, b.kills]) if b.place > 0 else "Первый матч ждёт тебя"

func _set_sel(b: Button, on: bool) -> void:
	for st in ["normal", "hover"]:
		var sb: StyleBoxFlat = b.get_theme_stylebox(st).duplicate()
		sb.bg_color = AMBER if on else GLASS
		b.add_theme_stylebox_override(st, sb)
	b.add_theme_color_override("font_color", Color("#241300") if on else INK)
	b.add_theme_color_override("font_hover_color", Color("#241300") if on else INK)

func _build_end(th: Theme) -> void:
	end_screen = Control.new()
	end_screen.set_anchors_preset(Control.PRESET_FULL_RECT)
	end_screen.theme = th
	add_child(end_screen)
	var bg := ColorRect.new()
	bg.color = Color(0.03, 0.05, 0.1, 0.82)
	bg.set_anchors_preset(Control.PRESET_FULL_RECT)
	end_screen.add_child(bg)
	var c := CenterContainer.new()
	c.set_anchors_preset(Control.PRESET_FULL_RECT)
	end_screen.add_child(c)
	var box := VBoxContainer.new()
	box.alignment = BoxContainer.ALIGNMENT_CENTER
	box.add_theme_constant_override("separation", 16)
	c.add_child(box)
	end_title = _label("ЧЕМПИОН ОСТРОВА", fd, 64, AMBER)
	end_title.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	end_title.add_theme_constant_override("outline_size", 10)
	end_title.add_theme_color_override("font_outline_color", Color("#6B2A00"))
	box.add_child(end_title)
	end_sub = _label("", fb, 19, MUTED)
	end_sub.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
	box.add_child(end_sub)
	var row := HBoxContainer.new()
	row.alignment = BoxContainer.ALIGNMENT_CENTER
	row.add_theme_constant_override("separation", 10)
	box.add_child(row)
	for n in ["Место", "Убийства", "Урон", "Время"]:
		var p := PanelContainer.new()
		var sb := StyleBoxFlat.new()
		sb.bg_color = GLASS
		sb.set_corner_radius_all(12)
		sb.content_margin_left = 18
		sb.content_margin_right = 18
		sb.content_margin_top = 10
		sb.content_margin_bottom = 10
		p.add_theme_stylebox_override("panel", sb)
		var v := VBoxContainer.new()
		var val := _label("0", fd, 32, INK)
		val.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
		var lab := _label(n.to_upper(), fb, 13, MUTED)
		lab.horizontal_alignment = HORIZONTAL_ALIGNMENT_CENTER
		v.add_child(val)
		v.add_child(lab)
		p.add_child(v)
		p.custom_minimum_size = Vector2(130, 0)
		row.add_child(p)
		end_stats.append(val)
	var brow := HBoxContainer.new()
	brow.alignment = BoxContainer.ALIGNMENT_CENTER
	brow.add_theme_constant_override("separation", 12)
	box.add_child(brow)
	var again := _btn("ЕЩЁ РАЗ", 24, Color("#FF9A1F"), Color("#2A1400"), fd)
	again.pressed.connect(func(): game.start_match())
	brow.add_child(again)
	var tm := _btn("В МЕНЮ", 24, GLASS, INK, fd)
	tm.pressed.connect(func(): game.to_menu())
	brow.add_child(tm)

func show_mode(m: String) -> void:
	menu.visible = m == "menu"
	end_screen.visible = m == "end"
	canvas.visible = m == "play"
	touches.clear()
	joy_index = -1
	fire_touches = 0
	if m == "menu":
		_mark()
	if m == "play" and not game.is_touch:
		Input.mouse_mode = Input.MOUSE_MODE_CAPTURED

func show_end(win: bool, place: int) -> void:
	show_mode("end")
	var p = game.player
	end_title.text = "ЧЕМПИОН ОСТРОВА" if win else "ТЫ ВЫБЫЛ"
	end_title.add_theme_color_override("font_color", AMBER if win else INK)
	if win:
		end_sub.text = "Девятнадцать соперников — и ни одного выше тебя."
	elif p.killer != null and p.killer != p:
		end_sub.text = "Тебя победил %s. Реванш?" % p.killer.fname
	else:
		end_sub.text = "Шторм догнал тебя. Следи за белым кругом."
	end_stats[0].text = "#%d" % place
	end_stats[1].text = str(p.kills)
	end_stats[2].text = str(int(p.dmg_dealt))
	end_stats[3].text = Data.fmt_time(game.time)

# ------------------------------------------------------------------ сообщения
func announce(t: String, sub := "") -> void:
	ann_text = t
	ann_sub = sub
	ann_t = 2.4

func toast(t: String) -> void:
	toast_text = t
	toast_t = 1.4

func hit_marker(kill: bool) -> void:
	hit_t = 0.25
	hit_kill = kill

func show_damage_dir(from: Vector3) -> void:
	var pp: Vector3 = game.player.global_position
	var ang := atan2(-(from.x - pp.x), -(from.z - pp.z))
	dmg_dir_a = angle_difference(game.cam_yaw, ang)
	dmg_dir_t = 0.9

func add_feed(att, vic, w: String, head: bool) -> void:
	var an: String = att.fname if (att != null and att != vic) else ("Шторм" if w == "шторм" else "—")
	feed.push_front({"a": an, "w": " [" + w + (" · голова" if head else "") + "] ", "v": vic.fname, "am": att != null and att.is_player, "vm": vic.is_player, "t": 5.5})
	if feed.size() > 4:
		feed.resize(4)

# ------------------------------------------------------------------ раскладка кнопок
func _layout() -> void:
	var vs := canvas.size
	var pl = game.player
	buttons = [
		{"id": "fire", "c": Vector2(vs.x - 150, vs.y - 104), "r": 50.0},
		{"id": "fire_l", "c": Vector2(70, vs.y * 0.5), "r": 34.0},
		{"id": "jump", "c": Vector2(vs.x - 50, vs.y - 182), "r": 34.0, "lbl": "прыжок"},
		{"id": "reload", "c": Vector2(vs.x - 50, vs.y - 86), "r": 30.0},
		{"id": "scope", "c": Vector2(vs.x - 152, vs.y - 214), "r": 30.0, "lbl": "прицел"},
		{"id": "nade", "c": Vector2(vs.x - 240, vs.y - 58), "r": 29.0, "cnt": pl.grenades},
		{"id": "heal", "c": Vector2(vs.x - 240, vs.y - 130), "r": 29.0, "cnt": pl.meds},
		{"id": "dash", "c": Vector2(vs.x - 240, vs.y - 202), "r": 29.0, "lbl": "рывок", "cd": clampf(pl.dash_cd / 5.0, 0, 1)},
		{"id": "dome", "c": Vector2(vs.x - 322, vs.y - 92), "r": 29.0, "lbl": "купол", "cd": clampf(pl.dome_cd / 22.0, 0, 1)},
	]

func _slot_rect(i: int) -> Rect2:
	var vs := canvas.size
	return Rect2(vs.x * 0.5 - 230 + i * 116, vs.y - 116, 108, 50)

func _prompt_rect() -> Rect2:
	var vs := canvas.size
	return Rect2(vs.x * 0.5 - 220, vs.y - 196, 360, 48)

func _jump_rect() -> Rect2:
	var vs := canvas.size
	return Rect2(vs.x * 0.5 - 140, vs.y * 0.66, 280, 70)

func _map_rect() -> Rect2:
	var vs := canvas.size
	if big_map:
		var s := minf(vs.x, vs.y) * 0.74
		return Rect2((vs.x - s) * 0.5, (vs.y - s) * 0.5, s, s)
	return Rect2(vs.x - 150, 12, 136, 136)

func _hit_ui(p: Vector2) -> String:
	if game.player.state == "sky" and _jump_rect().has_point(p):
		return "ship_jump"
	if _map_rect().has_point(p):
		return "map"
	if game.near_weapon != null and _prompt_rect().has_point(p):
		return "pickup"
	for i in 2:
		if _slot_rect(i).has_point(p):
			return "slot%d" % i
	if game.is_touch:
		for b in buttons:
			if p.distance_to(b.c) < b.r + 8.0:
				return b.id
	return ""

func _press(id: String) -> void:
	var pl = game.player
	match id:
		"fire", "fire_l":
			fire_touches += 1
		"jump": pl.in_jump = true
		"reload": pl.start_reload()
		"scope": game.ads_toggle = not game.ads_toggle
		"nade": pl.throw_grenade(_throw_dir())
		"heal": pl.start_heal()
		"dash": pl.dash(pl.in_move.x, pl.in_move.y)
		"dome": pl.dome()
		"slot0": pl.switch_to(0)
		"slot1": pl.switch_to(1)
		"pickup": game.try_pickup_weapon()
		"map": big_map = not big_map
		"ship_jump": game.jump_from(pl)

func _throw_dir() -> Vector3:
	var p: float = game.cam_pitch + 0.12
	var y: float = game.cam_yaw
	return Vector3(-sin(y) * cos(p), sin(p), -cos(y) * cos(p))

# ------------------------------------------------------------------ ввод
func _input(e: InputEvent) -> void:
	if game.mode != "play":
		return
	if e is InputEventScreenTouch:
		var p: Vector2 = e.position
		if e.pressed:
			var id := _hit_ui(p)
			if id != "":
				touches[e.index] = {"kind": "btn", "id": id, "pos": p}
				_press(id)
			elif p.x < canvas.size.x * 0.42 and joy_index < 0:
				joy_index = e.index
				joy_origin = p
				touches[e.index] = {"kind": "joy", "pos": p}
			else:
				touches[e.index] = {"kind": "look", "pos": p}
		else:
			var t = touches.get(e.index)
			if t != null:
				if t.kind == "btn" and (t.id == "fire" or t.id == "fire_l"):
					fire_touches = maxi(0, fire_touches - 1)
				if t.kind == "joy":
					joy_index = -1
					game.joy = Vector2.ZERO
			touches.erase(e.index)
		game.fire_held = fire_touches > 0 or Input.is_mouse_button_pressed(MOUSE_BUTTON_LEFT)
		get_viewport().set_input_as_handled()
	elif e is InputEventScreenDrag:
		var t = touches.get(e.index)
		if t == null:
			return
		if t.kind == "joy":
			var d: Vector2 = e.position - joy_origin
			if d.length() > 60.0:
				d = d.normalized() * 60.0
			game.joy = d / 60.0
			t.pos = e.position
		elif t.kind == "look" or (t.kind == "btn" and (t.id == "fire" or t.id == "fire_l")):
			game.look_delta += e.relative
		get_viewport().set_input_as_handled()
	elif e is InputEventMouseMotion:
		if e.device == InputEvent.DEVICE_ID_EMULATION:
			return
		if Input.mouse_mode == Input.MOUSE_MODE_CAPTURED:
			game.look_delta += e.relative * 0.8
	elif e is InputEventMouseButton:
		if e.device == InputEvent.DEVICE_ID_EMULATION:
			return
		if e.pressed and Input.mouse_mode != Input.MOUSE_MODE_CAPTURED:
			var id := _hit_ui(e.position)
			if id != "":
				_press(id)
				return
			Input.mouse_mode = Input.MOUSE_MODE_CAPTURED
		if e.button_index == MOUSE_BUTTON_LEFT:
			game.fire_held = e.pressed
		elif e.button_index == MOUSE_BUTTON_RIGHT:
			game.ads_held = e.pressed
		elif e.pressed and (e.button_index == MOUSE_BUTTON_WHEEL_UP or e.button_index == MOUSE_BUTTON_WHEEL_DOWN):
			var pl = game.player
			if pl.slots[0] != null and pl.slots[1] != null:
				pl.switch_to(1 - pl.cur)
	elif e is InputEventKey and e.pressed and not e.echo:
		var pl = game.player
		match e.physical_keycode:
			KEY_SPACE:
				if pl.state == "sky":
					game.jump_from(pl)
				else:
					pl.in_jump = true
			KEY_R: pl.start_reload()
			KEY_F, KEY_E: game.try_pickup_weapon()
			KEY_1: pl.switch_to(0)
			KEY_2: pl.switch_to(1)
			KEY_SHIFT: pl.dash(pl.in_move.x, pl.in_move.y)
			KEY_Q: pl.dome()
			KEY_G: pl.throw_grenade(_throw_dir())
			KEY_H: pl.start_heal()
			KEY_M: big_map = not big_map
			KEY_ESCAPE: Input.mouse_mode = Input.MOUSE_MODE_VISIBLE

func _process(dt: float) -> void:
	if not canvas.visible:
		return
	ann_t -= dt
	toast_t -= dt
	hit_t -= dt
	dmg_dir_t -= dt
	for f in feed:
		f.t -= dt
	feed = feed.filter(func(f): return f.t > 0.0)
	game.cross_kick = maxf(0.0, game.cross_kick - dt * 60.0)
	_layout()
	var mr := _map_rect()
	map_view.position = mr.position
	map_view.size = mr.size
	canvas.queue_redraw()
	map_view.queue_redraw()


# =====================================================================
#  Отрисовка HUD одним Control — без сотен нод
# =====================================================================
class HudCanvas extends Control:
	var hud

	func _txt(font: Font, pos: Vector2, s: String, size: int, c: Color, align := HORIZONTAL_ALIGNMENT_LEFT, width := -1.0, outline := 0) -> void:
		if outline > 0:
			draw_string_outline(font, pos, s, align, width, size, outline, Color(0, 0, 0, 0.55 * c.a))
		draw_string(font, pos, s, align, width, size, c)

	func _rrect(r: Rect2, c: Color, rad := 10.0, border := Color(0, 0, 0, 0), bw := 2.0) -> void:
		var sb := StyleBoxFlat.new()
		sb.bg_color = c
		sb.set_corner_radius_all(int(rad))
		if border.a > 0.0:
			sb.border_color = border
			sb.set_border_width_all(int(bw))
		draw_style_box(sb, r)

	func _draw() -> void:
		var h = hud
		var g = h.game
		var pl = g.player
		var vs := size
		var fd: Font = h.fd
		var fb: Font = h.fb
		# --- виньетки
		if pl.alive and pl.hp < 40.0:
			var a := clampf((40.0 - pl.hp) / 40.0, 0.0, 0.85)
			for i in 6:
				draw_rect(Rect2(Vector2.ZERO, vs).grow(-i * 18.0), Color(1, 0.12, 0.2, a * 0.12), false, 18.0)
		if pl.alive and pl.state == "ground" and g.outside_storm(pl.global_position):
			draw_rect(Rect2(Vector2.ZERO, vs), Color(0.5, 0.2, 1.0, 0.16))
			for i in 5:
				draw_rect(Rect2(Vector2.ZERO, vs).grow(-i * 20.0), Color(0.45, 0.15, 1.0, 0.13), false, 20.0)
		# --- снайперский прицел
		var w = pl.weapon()
		var scope: bool = pl.in_ads and w != null and w.id == "sniper"
		if scope:
			var c := vs * 0.5
			var r := vs.y * 0.36
			draw_arc(c, r + vs.x, 0, TAU, 64, Color(0, 0, 0, 0.93), vs.x * 2.0)
			draw_line(Vector2(c.x, c.y - r), Vector2(c.x, c.y + r), Color(0, 0, 0, 0.8), 1.5)
			draw_line(Vector2(c.x - r, c.y), Vector2(c.x + r, c.y), Color(0, 0, 0, 0.8), 1.5)
		# --- верхняя плашка
		var alive: int = g.alive_count()
		var tl: float = g.storm_time_left()
		var zone_txt: String = "Финал" if g.storm.phase >= g.PHASES.size() else (("Сужение " if g.storm.shrinking else "Зона ") + Data.fmt_time(tl))
		var pill := Rect2(vs.x * 0.5 - 200, 10, 400, 40)
		_rrect(pill, Color(0.03, 0.05, 0.1, 0.6), 20)
		_txt(fb, Vector2(pill.position.x + 18, 37), "Живых", 17, h.MUTED)
		_txt(fd, Vector2(pill.position.x + 80, 38), str(alive), 20, h.INK)
		_txt(fb, Vector2(pill.position.x + 122, 37), "Убийств", 17, h.MUTED)
		_txt(fd, Vector2(pill.position.x + 196, 38), str(pl.kills), 20, h.INK)
		var zr := Rect2(pill.position.x + 232, 15, 160, 30)
		var hot: bool = g.storm.shrinking
		_rrect(zr, h.STORM if hot else Color(0.64, 0.36, 1.0, 0.25), 15)
		_txt(fb, Vector2(zr.position.x, 36), zone_txt, 17, Color.WHITE, HORIZONTAL_ALIGNMENT_CENTER, zr.size.x)
		# --- лента убийств
		var fy := 14.0
		for f in h.feed:
			var al: float = clampf(f.t, 0.0, 1.0)
			var tw := fb.get_string_size(f.a + f.w + f.v, HORIZONTAL_ALIGNMENT_LEFT, -1, 15).x
			_rrect(Rect2(14, fy, tw + 20, 26), Color(0.03, 0.05, 0.1, 0.55 * al), 7)
			var x := 24.0
			_txt(fb, Vector2(x, fy + 19), f.a, 15, (h.AMBER if f.am else h.INK) * Color(1, 1, 1, al))
			x += fb.get_string_size(f.a, HORIZONTAL_ALIGNMENT_LEFT, -1, 15).x
			_txt(fb, Vector2(x, fy + 19), f.w, 15, h.MUTED * Color(1, 1, 1, al))
			x += fb.get_string_size(f.w, HORIZONTAL_ALIGNMENT_LEFT, -1, 15).x
			_txt(fb, Vector2(x, fy + 19), f.v, 15, (h.AMBER if f.vm else h.INK) * Color(1, 1, 1, al))
			fy += 30.0
		# --- прицел
		if pl.state == "ground" and pl.alive and not scope:
			var c := vs * 0.5
			var spr: float = (float(Data.WEAPONS[w.id].spread) * 300.0 if w != null else 6.0) * (0.45 if pl.in_ads else 1.0) * (1.6 if Vector2(pl.velocity.x, pl.velocity.z).length() > 1.0 else 1.0)
			var s: float = 4.0 + spr + g.cross_kick
			for d in [Vector2(0, -1), Vector2(0, 1), Vector2(-1, 0), Vector2(1, 0)]:
				draw_line(c + d * s, c + d * (s + 8.0), Color(0, 0, 0, 0.5), 4.0)
				draw_line(c + d * s, c + d * (s + 8.0), Color.WHITE, 2.0)
			draw_circle(c, 2.0, Color.WHITE)
		if h.hit_t > 0.0:
			var c := vs * 0.5
			var k: float = h.hit_t / 0.25
			var col: Color = h.DANGER if h.hit_kill else Color.WHITE
			col.a = k
			var s := 10.0 + (1.0 - k) * 4.0
			for d in [Vector2(-1, -1), Vector2(1, -1), Vector2(-1, 1), Vector2(1, 1)]:
				draw_line(c + d * s * 0.5, c + d * s * 1.3, col, 3.0)
		if h.dmg_dir_t > 0.0:
			var c := vs * 0.5
			var a: float = -PI / 2.0 - h.dmg_dir_a
			draw_arc(c, 120, a - 0.35, a + 0.35, 24, Color(1, 0.3, 0.37, clampf(h.dmg_dir_t, 0, 1)), 9.0)
		# --- полосы ХП/брони
		var bx := vs.x * 0.5 - 230
		var by := vs.y - 54
		var bw := 224.0
		_rrect(Rect2(bx, by, bw, 10), Color(0, 0, 0, 0.45), 5)
		if pl.armor > 0.0:
			_rrect(Rect2(bx, by, bw * pl.armor / 100.0, 10), h.SHIELD, 5)
		_rrect(Rect2(bx, by + 14, bw, 14), Color(0, 0, 0, 0.45), 7)
		if pl.hp > 0.0:
			_rrect(Rect2(bx, by + 14, bw * clampf(pl.hp, 0, 100) / 100.0, 14), h.DANGER if pl.hp < 35.0 else h.AMBER, 7)
		_txt(fb, Vector2(bx, by + 46), "Броня", 14, h.MUTED)
		_txt(fd, Vector2(bx + 50, by + 47), str(ceili(pl.armor)), 16, h.INK)
		_txt(fb, Vector2(bx + bw - 120, by + 46), "Здоровье", 14, h.MUTED)
		_txt(fd, Vector2(bx + bw - 40, by + 47), str(ceili(pl.hp)), 16, h.INK)
		# --- слоты оружия
		for i in 2:
			var r: Rect2 = h._slot_rect(i)
			var sw = pl.slots[i]
			var rc: Color = Data.RAR[sw.rarity].color if sw != null else Color.WHITE
			_rrect(r, Color(0.03, 0.05, 0.1, 0.8 if pl.cur == i else 0.5), 10, rc if pl.cur == i else Color(1, 1, 1, 0.25), 2)
			if sw != null:
				_txt(fb, r.position + Vector2(10, 19), Data.WEAPONS[sw.id].short, 14, rc)
				_txt(fd, r.position + Vector2(10, 42), str(sw.ammo), 18, h.INK)
				_txt(fb, r.position + Vector2(10 + fd.get_string_size(str(sw.ammo), HORIZONTAL_ALIGNMENT_LEFT, -1, 18).x + 4, 41), "/ %d" % pl.reserve, 13, h.MUTED)
			else:
				_txt(fb, r.position + Vector2(10, 30), "Пусто · кулаки" if i == 0 else "Пусто", 14, h.MUTED)
		# --- перезарядка / лечение / тост
		var cy := vs.y * 0.58
		if pl.reload_t > 0.0 or pl.heal_t > 0.0:
			var k: float = (1.0 - pl.reload_t / pl.reload_max) if pl.reload_t > 0.0 else (1.0 - pl.heal_t / 2.3)
			_rrect(Rect2(vs.x * 0.5 - 50, cy, 100, 6), Color(0, 0, 0, 0.5), 3)
			_rrect(Rect2(vs.x * 0.5 - 50, cy, 100 * k, 6), Color.WHITE if pl.reload_t > 0.0 else Color("#6BE38C"), 3)
			_txt(fb, Vector2(vs.x * 0.5 - 100, cy + 26), "Перезарядка" if pl.reload_t > 0.0 else "Лечение…", 15, h.MUTED, HORIZONTAL_ALIGNMENT_CENTER, 200, 4)
		elif h.toast_t > 0.0:
			_txt(fb, Vector2(vs.x * 0.5 - 200, cy + 26), h.toast_text, 17, Color(1, 1, 1, clampf(h.toast_t * 2.0, 0, 1)), HORIZONTAL_ALIGNMENT_CENTER, 400, 5)
		# --- подсказка подбора
		var nw = g.near_weapon
		if nw != null and pl.alive:
			var r: Rect2 = h._prompt_rect()
			var rc: Color = Data.RAR[nw.rarity].color
			_rrect(r, Color(0.03, 0.05, 0.1, 0.85), 12, rc, 2)
			_txt(fb, r.position + Vector2(14, 31), "ВЗЯТЬ: " + Data.WEAPONS[nw.wid].name, 17, h.INK)
			_txt(fb, r.position + Vector2(0, 31), Data.RAR[nw.rarity].name, 13, rc, HORIZONTAL_ALIGNMENT_RIGHT, r.size.x - 12)
		# --- кнопка прыжка с дирижабля
		if pl.state == "sky":
			var r: Rect2 = h._jump_rect()
			var pulse := 0.8 + sin(g.time * 6.0) * 0.2
			_rrect(r, Color(0.37, 0.9, 1.0, pulse), 16)
			_txt(fd, r.position + Vector2(0, 47), "ПРЫГНУТЬ", 32, Color("#00213A"), HORIZONTAL_ALIGNMENT_CENTER, r.size.x)
		# --- сенсорные кнопки
		if g.is_touch:
			_draw_touch()
		else:
			_txt(fb, Vector2(vs.x - 520, vs.y - 14), "WASD бег · мышь прицел · ЛКМ огонь · ПКМ прицел · Shift рывок · Q купол · G граната · H аптечка · F взять", 13, h.MUTED, HORIZONTAL_ALIGNMENT_RIGHT, 506)
		# --- объявление
		if h.ann_t > 0.0:
			var a := clampf(h.ann_t * 2.0, 0.0, 1.0)
			_txt(fd, Vector2(0, vs.y * 0.27), h.ann_text, 44, Color(1, 1, 1, a), HORIZONTAL_ALIGNMENT_CENTER, vs.x, 8)
			if h.ann_sub != "":
				_txt(fb, Vector2(0, vs.y * 0.27 + 34), h.ann_sub, 18, Color(h.MUTED.r, h.MUTED.g, h.MUTED.b, a), HORIZONTAL_ALIGNMENT_CENTER, vs.x, 4)
		if vs.y > vs.x:
			_txt(fb, Vector2(0, 80), "Поверни телефон горизонтально", 16, h.AMBER, HORIZONTAL_ALIGNMENT_CENTER, vs.x, 4)

	func _icon(id: String, c: Vector2, r: float) -> void:
		var col := Color.WHITE
		var s := r * 0.45
		match id:
			"fire", "fire_l":
				draw_arc(c, s * 0.75, 0, TAU, 28, col, 2.5)
				for d in [Vector2(0, -1), Vector2(0, 1), Vector2(-1, 0), Vector2(1, 0)]:
					draw_line(c + d * s * 0.4, c + d * s * 1.1, col, 2.5)
			"jump":
				draw_polyline([c + Vector2(-s, s * 0.2), c + Vector2(0, -s * 0.6), c + Vector2(s, s * 0.2)], col, 3.0)
				draw_polyline([c + Vector2(-s, s * 0.9), c + Vector2(0, s * 0.1), c + Vector2(s, s * 0.9)], col, 3.0)
			"reload":
				draw_arc(c, s * 0.8, 0.4, TAU - 0.3, 24, col, 3.0)
				draw_polyline([c + Vector2(s * 0.95, -s * 0.6), c + Vector2(s * 0.75, 0.05), c + Vector2(s * 0.1, -s * 0.1)], col, 3.0)
			"scope":
				draw_arc(c, s * 0.85, 0, TAU, 28, col, 2.5)
				draw_circle(c, s * 0.2, col)
			"nade":
				draw_arc(c + Vector2(0, s * 0.2), s * 0.65, 0, TAU, 24, col, 2.5)
				draw_line(c + Vector2(0, -s * 0.45), c + Vector2(0, -s * 0.9), col, 3.0)
				draw_line(c + Vector2(0, -s * 0.9), c + Vector2(s * 0.5, -s * 0.9), col, 3.0)
			"heal":
				draw_line(c + Vector2(0, -s * 0.7), c + Vector2(0, s * 0.7), Color("#6BE38C"), 4.0)
				draw_line(c + Vector2(-s * 0.7, 0), c + Vector2(s * 0.7, 0), Color("#6BE38C"), 4.0)
			"dash":
				draw_line(c + Vector2(-s, 0), c + Vector2(s * 0.5, 0), col, 3.0)
				draw_polyline([c + Vector2(0, -s * 0.6), c + Vector2(s * 0.6, 0), c + Vector2(0, s * 0.6)], col, 3.0)
				draw_line(c + Vector2(s * 0.95, -s * 0.7), c + Vector2(s * 0.95, s * 0.7), col, 3.0)
			"dome":
				draw_arc(c + Vector2(0, s * 0.5), s * 0.95, PI, TAU, 24, Color("#5EF2FF"), 3.0)
				draw_line(c + Vector2(-s, s * 0.5), c + Vector2(s, s * 0.5), Color("#5EF2FF"), 3.0)

	func _draw_touch() -> void:
		var h = hud
		var g = h.game
		for b in h.buttons:
			var c: Vector2 = b.c
			var r: float = b.r
			var pressed := false
			for t in h.touches.values():
				if t.kind == "btn" and t.id == b.id:
					pressed = true
			var bg := Color(1, 0.3, 0.37, 0.42) if b.id.begins_with("fire") else Color(0.03, 0.05, 0.1, 0.42)
			if pressed:
				bg = Color(1, 0.71, 0.15, 0.5)
			if b.id == "scope" and g.ads_toggle:
				bg = Color(1, 0.71, 0.15, 0.45)
			draw_circle(c, r, bg)
			draw_arc(c, r, 0, TAU, 40, Color(1, 1, 1, 0.42), 2.0)
			if b.has("cd") and b.cd > 0.0:
				draw_arc(c, r * 0.5, -PI / 2.0, -PI / 2.0 + TAU * b.cd, 32, Color(0, 0, 0, 0.6), r)
			_icon(b.id, c, r)
			if b.has("cnt"):
				var cc := c + Vector2(r * 0.72, -r * 0.72)
				draw_circle(cc, 10, h.AMBER)
				_txt(h.fb, cc + Vector2(-10, 5), str(b.cnt), 13, Color("#231300"), HORIZONTAL_ALIGNMENT_CENTER, 20)
			if b.has("lbl"):
				_txt(h.fb, c + Vector2(-40, r + 15), b.lbl, 12, h.MUTED, HORIZONTAL_ALIGNMENT_CENTER, 80, 3)
		if h.joy_index >= 0:
			draw_circle(h.joy_origin, 64, Color(0.03, 0.05, 0.1, 0.3))
			draw_arc(h.joy_origin, 64, 0, TAU, 40, Color(1, 1, 1, 0.35), 2.0)
			draw_circle(h.joy_origin + g.joy * 60.0, 26, Color(1, 1, 1, 0.55))
		else:
			var jc := Vector2(110, size.y - 110)
			for i in 24:
				var a0 := i * TAU / 24.0
				draw_arc(jc, 60, a0, a0 + TAU / 48.0, 4, Color(1, 1, 1, 0.22), 2.0)


class MapView extends Control:
	var hud

	func _draw() -> void:
		var h = hud
		var big: bool = h.big_map
		var r := Rect2(Vector2.ZERO, size)
		var g = h.game
		var pl = g.player
		var w = g.world
		draw_rect(r, Color("#1C5E80"))
		var c := r.get_center()
		var rot: float = 0.0 if big else g.cam_yaw
		var s: float = r.size.x / (World.ISLAND * 2.3) if big else r.size.x / 190.0
		var pp: Vector3 = pl.global_position
		var center := Vector2.ZERO if big else Vector2(pp.x, pp.z)
		# мир -> экран: сдвиг, поворот, масштаб
		var full := Transform2D(rot, c) * Transform2D().scaled(Vector2(s, s)) * Transform2D(0.0, -center)
		draw_set_transform_matrix(full)
		var hs := World.HM_SIZE / 2.0
		# обрезка: рисуем карту только внутри прямоугольника — через ограничение области
		draw_texture_rect(w.island_tex, Rect2(-hs, -hs, World.HM_SIZE, World.HM_SIZE), false)
		var sc: Vector2 = g.storm.c
		var sr: float = maxf(g.storm.r, 0.1)
		draw_arc(sc, sr + 300.0, 0, TAU, 64, Color(0.55, 0.24, 1.0, 0.38), 600.0)
		draw_arc(sc, sr, 0, TAU, 64, Color("#C08BFF"), 2.0 / s)
		if g.storm.phase < g.PHASES.size():
			draw_arc(g.storm.to_c, maxf(g.storm.to_r, 0.5), 0, TAU, 64, Color.WHITE, 1.6 / s)
		if pl.state == "sky":
			draw_line(Vector2(g.ship_a.x, g.ship_a.z), Vector2(g.ship_b.x, g.ship_b.z), Color(1, 1, 1, 0.8), 2.0 / s)
			var sp: Vector3 = g.ship_pos(g.ship_t)
			draw_circle(Vector2(sp.x, sp.z), 4.0 / s, Color("#FF6B35"))
		for d in g.drops:
			draw_rect(Rect2(d.x - 3.0 / s, d.z - 3.0 / s, 6.0 / s, 6.0 / s), Color("#FF4D5E"))
		for f in g.fighters:
			if f != pl and f.alive and f.state == "ground" and g.time - f.last_shot_t < 2.5 and f.global_position.distance_to(pp) < 110.0:
				draw_circle(Vector2(f.global_position.x, f.global_position.z), 3.0 / s, Color(1, 0.3, 0.37))
		if big:
			for t in w.towns:
				draw_string(h.fb, Vector2(t.x, t.z), t.name, HORIZONTAL_ALIGNMENT_CENTER, -1, int(12.0 / s), Color.WHITE)
		draw_set_transform_matrix(Transform2D())
		draw_rect(r, Color(1, 1, 1, 0.3), false, 2.0)
		var ppos := c if not big else c + Vector2(pp.x, pp.z).rotated(0) * s
		var ar: float = -g.cam_yaw if big else 0.0
		var tri := PackedVector2Array([Vector2(0, -9), Vector2(6, 6), Vector2(0, 3), Vector2(-6, 6)])
		var t2 := Transform2D(ar, ppos)
		for i in tri.size():
			tri[i] = t2 * tri[i]
		draw_colored_polygon(tri, h.AMBER)
