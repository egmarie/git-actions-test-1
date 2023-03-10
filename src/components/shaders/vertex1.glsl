varying vec3 vUv;
varying vec3 vNormal;
varying vec4 modelViewPosition; 
void main() {
    vUv = position;
    vNormal = normal;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
