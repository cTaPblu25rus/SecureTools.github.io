shader_type spatial;
render_mode diffuse_toon, specular_toon;
// Рельеф в пиксель-арте: мир разбит на «тексели» 25 см, у каждого свой оттенок,
// изредка — светлые травинки, цветы и камушки. Свет — ступеньками (toon).
uniform sampler2D detail : filter_nearest, repeat_enable;

varying vec3 wpos;

float h21(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }

void vertex() {
	wpos = (MODEL_MATRIX * vec4(VERTEX, 1.0)).xyz;
}

void fragment() {
	vec2 cell = floor(wpos.xz * 4.0);
	float r = h21(cell);
	float big = texture(detail, floor(wpos.xz * 0.5) / 128.0).r;
	vec3 c = COLOR.rgb * (0.9 + r * 0.14) * mix(0.9, 1.08, big);
	float g = COLOR.g - max(COLOR.r, COLOR.b);
	if (g > 0.05) {
		if (r > 0.94) c = mix(c, vec3(0.75, 0.95, 0.45), 0.6);       // светлая травинка
		else if (r < 0.012) c = vec3(1.0, 0.85, 0.3);                  // цветок
		else if (r > 0.925 && r < 0.93) c = vec3(0.95, 0.5, 0.6);
	} else if (r > 0.96) {
		c *= 0.8;                                                      // камушек на песке
	}
	ALBEDO = c;
	ROUGHNESS = 1.0;
	SPECULAR = 0.0;
}
