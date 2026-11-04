shader_type spatial;
render_mode cull_disabled;
// Трава: качается на ветру, к кончику светлее.
varying float tip;

void vertex() {
	tip = 1.0 - UV.y;
	vec3 w = (MODEL_MATRIX * vec4(0.0, 0.0, 0.0, 1.0)).xyz;
	float sway = sin(TIME * 1.8 + w.x * 0.35 + w.z * 0.27) * 0.12 + sin(TIME * 3.1 + w.z * 0.6) * 0.04;
	VERTEX.x += sway * tip * tip;
	VERTEX.z += sway * 0.6 * tip * tip;
}

void fragment() {
	ALBEDO = COLOR.rgb * mix(0.65, 1.15, tip);
	ROUGHNESS = 0.9;
	SPECULAR = 0.1;
}
