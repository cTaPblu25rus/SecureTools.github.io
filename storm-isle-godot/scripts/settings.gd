class_name Settings
extends RefCounted
## Настройки игрока: графика, управление, звук, образ. Хранятся в user://settings.cfg.

const PATH := "user://settings.cfg"

var v := {
	# графика
	"quality": 1, "pixel": 3, "retro": true, "fps": 60, "show_fps": false,
	# управление
	"sens": 1.0, "ads_sens": 0.7, "invert_y": false, "aim_assist": true, "autofire": false,
	"btn_size": 1.0, "btn_alpha": 0.45, "left_fire": true, "dyn_joy": true,
	# звук
	"vol_master": 0.85, "vol_music": 0.6, "vol_sfx": 1.0,
	# профиль
	"skin": 0,
}
var best := {"wins": 0, "place": 0, "kills": 0, "matches": 0}

func load_cfg(is_touch: bool) -> void:
	if not is_touch:
		v.quality = 2
		v.pixel = 3
	var c := ConfigFile.new()
	if c.load(PATH) != OK:
		return
	for k in v.keys():
		v[k] = c.get_value("s", k, v[k])
	for k in best.keys():
		best[k] = int(c.get_value("best", k, 0))

func save_cfg() -> void:
	var c := ConfigFile.new()
	for k in v.keys():
		c.set_value("s", k, v[k])
	for k in best.keys():
		c.set_value("best", k, best[k])
	c.save(PATH)

func g(k: String):
	return v[k]
