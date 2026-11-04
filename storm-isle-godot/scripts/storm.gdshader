shader_type spatial;
render_mode unshaded, cull_disabled, depth_draw_never, blend_mix, fog_disabled;
// Стена шторма: бегущие фиолетовые полосы, прозрачнее к верху.
uniform float t = 0.0;

void fragment() {
	float s = sin(UV.x * 420.0 + t * 1.5 + sin(UV.y * 30.0 + t) * 3.0) * 0.5 + 0.5;
	float b = sin(UV.y * 90.0 - t * 4.0) * 0.5 + 0.5;
	vec3 c = mix(vec3(0.42, 0.16, 0.95), vec3(0.95, 0.5, 1.0), s * b);
	float a = (0.14 + 0.26 * s * b) * smoothstep(0.75, 0.25, 1.0 - UV.y) * smoothstep(0.0, 0.03, 1.0 - UV.y);
	ALBEDO = c;
	ALPHA = a;
}
