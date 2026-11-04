shader_type spatial;
// Рельеф: цвет из вершин + мягкая детализация шумом, без «плиток».
uniform sampler2D detail : filter_linear_mipmap, repeat_enable;

varying vec3 wpos;

void vertex() {
	wpos = (MODEL_MATRIX * vec4(VERTEX, 1.0)).xyz;
}

void fragment() {
	float d1 = texture(detail, wpos.xz * 0.045).r;
	float d2 = texture(detail, wpos.xz * 0.23).r;
	float k = mix(0.82, 1.14, d1 * 0.6 + d2 * 0.4);
	ALBEDO = COLOR.rgb * k;
	ROUGHNESS = 0.95;
	SPECULAR = 0.2;
}
