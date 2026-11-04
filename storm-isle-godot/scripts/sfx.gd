class_name Sfx
extends Node
## Все звуки синтезируются при запуске — в игре нет ни одного аудиофайла.

const SR := 22050
var streams := {}
var pool3d: Array[AudioStreamPlayer3D] = []
var pool2d: Array[AudioStreamPlayer] = []
var i3 := 0
var i2 := 0
var music: AudioStreamPlayer
var wind: AudioStreamPlayer
var storm: AudioStreamPlayer
var enabled := true

func _ready() -> void:
	_generate()
	for i in 28:
		var p := AudioStreamPlayer3D.new()
		p.unit_size = 9.0
		p.max_distance = 260.0
		p.attenuation_model = AudioStreamPlayer3D.ATTENUATION_INVERSE_DISTANCE
		p.max_polyphony = 1
		p.bus = "SFX"
		add_child(p)
		pool3d.append(p)
	for i in 10:
		var p := AudioStreamPlayer.new()
		p.bus = "SFX"
		add_child(p)
		pool2d.append(p)
	music = _loop_player("music", -9.0)
	wind = _loop_player("wind", -80.0)
	storm = _loop_player("storm", -80.0)

func _loop_player(n: String, db: float) -> AudioStreamPlayer:
	var p := AudioStreamPlayer.new()
	p.stream = streams[n]
	p.volume_db = db
	p.bus = "Music" if n == "music" else "SFX"
	add_child(p)
	return p

func set_enabled(on: bool) -> void:
	enabled = on

func play3(n: String, pos: Vector3, db := 0.0, pitch_var := 0.06) -> void:
	if not enabled or not streams.has(n):
		return
	var p := pool3d[i3]
	i3 = (i3 + 1) % pool3d.size()
	p.stream = streams[n]
	p.global_position = pos
	p.volume_db = db
	p.pitch_scale = 1.0 + randf_range(-pitch_var, pitch_var)
	p.play()

func play(n: String, db := 0.0, pitch := 1.0) -> void:
	if not enabled or not streams.has(n):
		return
	var p := pool2d[i2]
	i2 = (i2 + 1) % pool2d.size()
	p.stream = streams[n]
	p.volume_db = db
	p.pitch_scale = pitch
	p.play()

func set_loop(p: AudioStreamPlayer, vol: float) -> void:
	# vol 0..1
	if vol <= 0.01:
		if p.playing:
			p.volume_db = lerpf(p.volume_db, -60.0, 0.1)
			if p.volume_db < -55.0:
				p.stop()
		return
	if not p.playing:
		p.play()
	p.volume_db = lerpf(p.volume_db, linear_to_db(vol), 0.08)

# ------------------------------------------------------------------ синтез
func _noise(dur: float, f0: float, f1: float, gain: float, attack := 0.002, hp := false, decay_pow := 2.0) -> PackedFloat32Array:
	var n := int(dur * SR)
	var out := PackedFloat32Array()
	out.resize(n)
	var y1 := 0.0
	var y2 := 0.0
	for i in n:
		var t := float(i) / SR
		var k := t / dur
		var fc := f0 * pow(f1 / f0, k)
		var a := 1.0 - exp(-TAU * fc / SR)
		var x := randf() * 2.0 - 1.0
		y1 += a * (x - y1)
		y2 += a * (y1 - y2)
		var s := (x - y2) if hp else y2 * 1.6
		var env := minf(t / attack, 1.0) * pow(1.0 - k, decay_pow)
		out[i] = s * env * gain
	return out

func _tone(dur: float, f0: float, f1: float, gain: float, wave := "sine", decay_pow := 2.0, delay := 0.0) -> PackedFloat32Array:
	var n := int((dur + delay) * SR)
	var out := PackedFloat32Array()
	out.resize(n)
	var ph := 0.0
	var d0 := int(delay * SR)
	for i in range(d0, n):
		var t := float(i - d0) / SR
		var k := t / dur
		var f := f0 * pow(f1 / f0, k)
		ph += f / SR
		var v := 0.0
		match wave:
			"sine": v = sin(ph * TAU)
			"square": v = 1.0 if fmod(ph, 1.0) < 0.5 else -1.0
			"saw": v = fmod(ph, 1.0) * 2.0 - 1.0
			"tri": v = absf(fmod(ph, 1.0) * 4.0 - 2.0) - 1.0
		var env := minf(t / 0.004, 1.0) * pow(maxf(1.0 - k, 0.0), decay_pow)
		out[i] = v * env * gain
	return out

func _mix(list: Array) -> PackedFloat32Array:
	var n := 0
	for b in list:
		n = maxi(n, b.size())
	var out := PackedFloat32Array()
	out.resize(n)
	for b in list:
		for i in b.size():
			out[i] += b[i]
	return out

func _echo(b: PackedFloat32Array, delay: float, fb: float, taps := 3) -> PackedFloat32Array:
	var d := int(delay * SR)
	var out := PackedFloat32Array()
	out.resize(b.size() + d * taps)
	for i in b.size():
		out[i] += b[i]
	var g := fb
	for t in range(1, taps + 1):
		for i in b.size():
			out[i + d * t] += b[i] * g
		g *= fb
	return out

func _wav(s: PackedFloat32Array, loop := false) -> AudioStreamWAV:
	var w := AudioStreamWAV.new()
	w.format = AudioStreamWAV.FORMAT_16_BITS
	w.mix_rate = SR
	w.stereo = false
	var b := PackedByteArray()
	b.resize(s.size() * 2)
	for i in s.size():
		b.encode_s16(i * 2, int(clampf(s[i], -1.0, 1.0) * 32000.0))
	w.data = b
	if loop:
		w.loop_mode = AudioStreamWAV.LOOP_FORWARD
		w.loop_begin = 0
		w.loop_end = s.size()
	return w

func _generate() -> void:
	var S := streams
	S["pistol"] = _wav(_echo(_mix([_noise(0.16, 4200, 500, 0.7), _tone(0.09, 190, 60, 0.3, "square")]), 0.09, 0.3))
	S["smg"] = _wav(_echo(_mix([_noise(0.08, 3600, 900, 0.6), _tone(0.05, 240, 90, 0.22, "square")]), 0.07, 0.25, 2))
	S["shotgun"] = _wav(_echo(_mix([_noise(0.42, 2600, 160, 0.95, 0.002, false, 1.6), _tone(0.22, 110, 38, 0.6)]), 0.11, 0.3))
	S["rifle"] = _wav(_echo(_mix([_noise(0.14, 5200, 700, 0.75), _tone(0.1, 150, 50, 0.32, "square")]), 0.09, 0.3))
	S["sniper"] = _wav(_echo(_mix([_noise(0.8, 6000, 220, 0.95, 0.002, false, 1.5), _tone(0.45, 90, 28, 0.6)]), 0.16, 0.4, 4))
	S["fist"] = _wav(_noise(0.09, 900, 180, 0.6))
	S["boom"] = _wav(_echo(_mix([_noise(1.4, 1600, 60, 1.0, 0.005, false, 1.4), _tone(0.9, 70, 22, 0.8)]), 0.2, 0.35))
	S["hit"] = _wav(_tone(0.06, 1500, 1500, 0.4, "tri"))
	S["head"] = _wav(_mix([_tone(0.06, 2300, 2300, 0.4, "tri"), _tone(0.16, 3400, 3400, 0.25, "sine", 2.0, 0.03)]))
	S["shield_hit"] = _wav(_tone(0.07, 900, 1400, 0.3))
	S["shield_break"] = _wav(_mix([_noise(0.35, 6000, 1500, 0.4, 0.002, true), _tone(0.3, 1600, 300, 0.3, "tri")]))
	S["hurt"] = _wav(_mix([_noise(0.18, 500, 120, 0.6), _tone(0.15, 160, 90, 0.15, "saw")]))
	S["kill"] = _wav(_echo(_mix([_tone(0.35, 880, 880, 0.25, "tri"), _tone(0.35, 1108, 1108, 0.25, "tri", 2.0, 0.07), _tone(0.35, 1318, 1318, 0.25, "tri", 2.0, 0.14)]), 0.12, 0.3))
	S["pickup"] = _wav(_mix([_tone(0.09, 660, 660, 0.3, "tri"), _tone(0.14, 990, 990, 0.3, "tri", 2.0, 0.07)]))
	S["reload"] = _wav(_mix([_noise(0.05, 3000, 3000, 0.4, 0.002, true), _tone(0.05, 2200, 1800, 0.15, "square", 2.0, 0.35), _noise(0.06, 2200, 2200, 0.3, 0.002, true, 2.0)]))
	S["empty"] = _wav(_noise(0.03, 4000, 4000, 0.35, 0.001, true))
	S["step"] = _wav(_noise(0.07, 700, 200, 0.35))
	S["splash"] = _wav(_noise(0.25, 2500, 400, 0.4))
	S["jump"] = _wav(_noise(0.1, 900, 300, 0.25))
	S["pad"] = _wav(_echo(_mix([_tone(0.45, 180, 980, 0.4), _noise(0.5, 400, 3000, 0.25)]), 0.1, 0.3))
	S["dash"] = _wav(_noise(0.3, 300, 4000, 0.5, 0.02, false, 1.2))
	S["dome"] = _wav(_echo(_mix([_tone(0.7, 220, 440, 0.35, "sine", 1.2), _tone(0.7, 330, 660, 0.25, "sine", 1.2, 0.05)]), 0.13, 0.35))
	S["dome_block"] = _wav(_tone(0.12, 1200, 600, 0.3, "tri"))
	S["heal"] = _wav(_echo(_tone(0.4, 520, 780, 0.3), 0.1, 0.3))
	S["throw"] = _wav(_noise(0.2, 700, 2400, 0.35, 0.02))
	S["chute"] = _wav(_noise(0.35, 300, 1200, 0.5, 0.03))
	S["impact"] = _wav(_noise(0.05, 2500, 800, 0.3))
	S["click"] = _wav(_tone(0.04, 900, 900, 0.25, "tri"))
	S["alarm"] = _wav(_mix([_tone(0.22, 520, 380, 0.2, "saw"), _tone(0.22, 520, 380, 0.2, "saw", 2.0, 0.25), _tone(0.22, 520, 380, 0.2, "saw", 2.0, 0.5)]))
	S["victory"] = _wav(_echo(_mix([_tone(0.5, 523, 523, 0.22, "tri", 2.0, 0.0), _tone(0.5, 659, 659, 0.22, "tri", 2.0, 0.12), _tone(0.5, 784, 784, 0.22, "tri", 2.0, 0.24), _tone(0.9, 1046, 1046, 0.25, "tri", 2.0, 0.36)]), 0.15, 0.35))
	S["defeat"] = _wav(_echo(_mix([_tone(0.6, 392, 392, 0.2, "tri", 2.0, 0.0), _tone(0.6, 349, 349, 0.2, "tri", 2.0, 0.2), _tone(0.6, 311, 311, 0.2, "tri", 2.0, 0.4), _tone(1.0, 262, 262, 0.22, "tri", 2.0, 0.6)]), 0.15, 0.3))
	# петли
	var wn := _noise(3.0, 600, 600, 0.5, 0.001, false, 0.0)
	S["wind"] = _wav(_crossfade(wn), true)
	var sn := _noise(3.0, 180, 180, 0.9, 0.001, false, 0.0)
	S["storm"] = _wav(_crossfade(sn), true)
	S["music"] = _wav(_music(), true)

func _crossfade(b: PackedFloat32Array) -> PackedFloat32Array:
	var n := b.size()
	var f := int(0.3 * SR)
	for i in f:
		var k := float(i) / f
		b[i] = b[i] * k + b[n - f + i] * (1.0 - k)
	b.resize(n - f)
	return b

func _music() -> PackedFloat32Array:
	var step := 0.13
	var steps := 64
	var n := int(step * steps * SR)
	var out := PackedFloat32Array()
	out.resize(n)
	var prog := [57, 53, 60, 55]
	var arp := [0, 7, 12, 15, 12, 7, 3, 7]
	for s in steps:
		var bar := s / 16
		var st := s % 16
		var root: int = prog[bar]
		var at := int(s * step * SR)
		if st % 2 == 0:
			_add(out, _tone(0.24, _mf(root + 12 + arp[(st / 2) % 8]), _mf(root + 12 + arp[(st / 2) % 8]), 0.09, "tri"), at)
		if st % 4 == 0:
			_add(out, _tone(0.4, _mf(root - 12), _mf(root - 12), 0.07, "saw", 1.5), at)
			_add(out, _tone(0.25, 120, 40, 0.45), at)
		if st % 8 == 4:
			_add(out, _noise(0.15, 3000, 1000, 0.18), at)
		if st % 2 == 1:
			_add(out, _noise(0.03, 8000, 8000, 0.06, 0.001, true), at)
	return out

func _add(out: PackedFloat32Array, b: PackedFloat32Array, at: int) -> void:
	for i in b.size():
		var j := (at + i) % out.size()
		out[j] += b[i]

func _mf(n: int) -> float:
	return 440.0 * pow(2.0, (n - 69) / 12.0)
