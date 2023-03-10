varying vec3 vertexNormal;
void main() {
float intensity = pow(0.9 - dot(vertexNormal, vec3(0.0549, 0.0235, 0.0431)), 2.0);
gl_FragColor = vec4(0.6706, 0.2784, 0.6, 0.563) * intensity;
}





