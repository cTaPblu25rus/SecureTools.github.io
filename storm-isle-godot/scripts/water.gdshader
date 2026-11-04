shader_type spatial;
render_mode cull_disabled, specular_schlick_ggx;
// Вода: волны в вершинах, бирюзовая лагуна у берега, френель и блики.
uniform vec3 deep : source_color = vec3(0.0, 0.17, 0.36);
uniform vec3 shallow : source_color = vec3(0.1, 0.72, 0.78);

varying vec3 wpos;

float wave(vec2 p, float t) {
	return sin(p.x * 0.045 + t * 1.1) * 0.28 + cos(p.y * 0.06 + t * 1.4) * 0.22 + sin((p.x + p.y) * 0.11 + t * 2.0) * 0.08;
}

void vertex() {
	vec3 w = (MODEL_MATRIX * vec4(VERTEX, 1.0)).xyz;
	float t = TIME;
	float h = wave(w.xz, t);
	float hx = wave(w.xz + vec2(0.5, 0.0), t) - h;
	float hz = wave(w.xz + vec2(0.0, 0.5), t) - h;
	VERTEX.y += h;
	NORMAL = normalize(vec3(-hx * 2.0, 1.0, -hz * 2.0));
	wpos = w;
}

void fragment() {
	float d = length(wpos.xz);
	float sh = 1.0 - smoothstep(125.0, 205.0, d);
	float fres = pow(1.0 - clamp(dot(NORMAL, VIEW), 0.0, 1.0), 4.0);
	vec3 c = mix(deep, shallow, sh * 0.85);
	float sparkle = pow(max(sin(wpos.x * 0.9 + TIME * 2.0) * sin(wpos.z * 0.8 - TIME * 1.7), 0.0), 40.0);
	ALBEDO = c + sparkle * 0.12;
	ROUGHNESS = 0.14;
	METALLIC = 0.0;
	SPECULAR = 0.35;
	ALPHA = clamp(mix(1.0, 0.78, sh) + fres * 0.2, 0.0, 1.0);
}
