class_name Data
extends RefCounted
## Игровые данные: оружие, редкость, имена ботов, палитры.

static var WEAPONS := {
	"pistol": {"name": "Пистолет «Шершень»", "short": "Пистолет", "dmg": 19.0, "rate": 0.24, "mag": 12, "spread": 0.016, "range": 80.0, "pellets": 1, "reload": 1.1, "zoom": 1.25, "recoil": 0.012, "len": 0.32, "pref": 16.0, "score": 1.0, "sound": "pistol"},
	"smg": {"name": "ПП «Оса»", "short": "ПП", "dmg": 12.0, "rate": 0.072, "mag": 30, "spread": 0.042, "range": 55.0, "pellets": 1, "reload": 1.6, "zoom": 1.3, "recoil": 0.007, "len": 0.42, "pref": 11.0, "score": 2.2, "sound": "smg"},
	"shotgun": {"name": "Дробовик «Гром»", "short": "Дробовик", "dmg": 10.0, "rate": 0.8, "mag": 6, "spread": 0.1, "range": 26.0, "pellets": 9, "reload": 2.1, "zoom": 1.2, "recoil": 0.05, "len": 0.62, "pref": 6.0, "score": 2.1, "sound": "shotgun"},
	"rifle": {"name": "Автомат «Шторм»", "short": "Автомат", "dmg": 20.0, "rate": 0.112, "mag": 30, "spread": 0.02, "range": 120.0, "pellets": 1, "reload": 1.9, "zoom": 1.7, "recoil": 0.01, "len": 0.64, "pref": 24.0, "score": 3.0, "sound": "rifle"},
	"sniper": {"name": "Снайперка «Игла»", "short": "Снайперка", "dmg": 90.0, "rate": 1.25, "mag": 5, "spread": 0.0012, "range": 320.0, "pellets": 1, "reload": 2.5, "zoom": 4.2, "recoil": 0.07, "len": 0.82, "pref": 55.0, "score": 2.6, "sound": "sniper"},
}

static var RAR := [
	{"name": "обычное", "color": Color("#D7DEE6"), "mul": 1.0},
	{"name": "редкое", "color": Color("#3DA5FF"), "mul": 1.1},
	{"name": "эпическое", "color": Color("#B062FF"), "mul": 1.2},
	{"name": "легендарное", "color": Color("#FFB627"), "mul": 1.35},
]

static var NICKS := ["ГрозаКустов", "Тапок", "NeoKiller", "Бабуля_Pro", "ШашлыкМастер", "Кибер_Ёж", "Пельмень", "ZloyKot", "Молния", "ТихийДед", "Snaiper2009", "Ракета", "Пиксель", "Ватрушка", "Кактус", "ДжонЧай", "Буря", "Самурай", "Гоша_007", "Фантом", "Йети", "Барсук", "Лимонад"]

static var OUTFITS := [
	[Color("#FF6B35"), Color("#1F2A44")], [Color("#2EC4B6"), Color("#2B2D42")], [Color("#E63946"), Color("#E8EDF2")],
	[Color("#FFD23F"), Color("#3D348B")], [Color("#7BE05A"), Color("#1B4332")], [Color("#C9184A"), Color("#2D1E2F")],
	[Color("#4CC9F0"), Color("#3A0CA3")], [Color("#F77F00"), Color("#003049")], [Color("#F1FAEE"), Color("#22223B")],
	[Color("#90BE6D"), Color("#5A3E2B")], [Color("#FF8FAB"), Color("#4A4E69")],
]
static var SKINS := [Color("#F2C9A0"), Color("#D9A57B"), Color("#B07A52"), Color("#7A4B32"), Color("#F5D6B8")]

static func weapon_score(w) -> float:
	if w == null:
		return 0.0
	return float(WEAPONS[w.id]["score"]) * float(RAR[w.rarity]["mul"])

static func weighted(list: Array):
	var s := 0.0
	for e in list:
		s += float(e[1])
	var r := randf() * s
	for e in list:
		r -= float(e[1])
		if r <= 0.0:
			return e[0]
	return list[0][0]

static func fmt_time(sec: float) -> String:
	var s := maxi(0, ceili(sec))
	return "%d:%02d" % [s / 60, s % 60]
