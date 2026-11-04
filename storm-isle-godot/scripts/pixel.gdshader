shader_type canvas_item;
// Пиксель-арт фильтр: 3D рисуется в низком разрешении, здесь — контуры,
// ограниченная палитра с дизерингом Байера и лёгкое усиление цвета.
uniform bool retro = true;
uniform vec2 px = vec2(0.003, 0.005);   // размер одного «пикселя» в UV
uniform float levels = 18.0;
uniform float outline = 0.65;

const float bayer[16] = float[16](0.0, 8.0, 2.0, 10.0, 12.0, 4.0, 14.0, 6.0, 3.0, 11.0, 1.0, 9.0, 15.0, 7.0, 13.0, 5.0);

float lum(vec3 c) { return dot(c, vec3(0.299, 0.587, 0.114)); }

void fragment() {
	vec3 c = texture(TEXTURE, UV).rgb;
	if (retro) {
		float l = lum(c);
		float lr = lum(texture(TEXTURE, UV + vec2(px.x, 0.0)).rgb);
		float ld = lum(texture(TEXTURE, UV + vec2(0.0, px.y)).rgb);
		float ll = lum(texture(TEXTURE, UV - vec2(px.x, 0.0)).rgb);
		float lu = lum(texture(TEXTURE, UV - vec2(0.0, px.y)).rgb);
		// тёмный контур только с «внешней», более светлой стороны перепада
		float e = max(max(lr - l, ld - l), max(ll - l, lu - l));
		c *= 1.0 - smoothstep(0.07, 0.22, e) * outline;
		// насыщенность
		float g = lum(c);
		c = mix(vec3(g), c, 1.18);
		// палитра + дизеринг
		ivec2 p = ivec2(floor(UV / px));
		int i = (p.x % 4) + (p.y % 4) * 4;
		float b = bayer[i] / 16.0 - 0.5;
		c = floor(c * levels + b * 0.85 + 0.5) / levels;
	}
	COLOR = vec4(c, 1.0);
}
