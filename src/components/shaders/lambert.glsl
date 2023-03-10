      // struct PointLight {
      //   vec3 color;
      //   vec3 position;
      //   float distance; 
      // };  

      // uniform vec3 colorA; 
      // uniform vec3 colorB; 
      // uniform PointLight pointLights[NUM_POINT_LIGHTS];
      // varying vec3 vUv;
      // varying vec4 modelViewPosition; 
      // varying vec3 vecNormal; 

      // void main() {
      //   vec3 addedLights = vec3(0.0, 0.0, 0.0);

      //   for(int l = 0; l < NUM_POINT_LIGHTS; l++) {
      //       vec3 lightDirection = normalize(modelViewPosition.xyz - pointLights[l].position);
      //       addedLights.rgb += clamp(dot(-lightDirection, vecNormal), 0.0, 1.0) * pointLights[l].color * 1.0;
      //   }

      //   vec3 redAndPoint = vec3(1.0 * addedLights.r, 0.0, 0.0);
      //   vec3 finalRed = vec3(redAndPoint.r + 0.3, 0.0, 0.0); 

      //   vec3 colorAndPointLight = mix(colorA, colorB, vUv.z) * addedLights.rgb;
      //   vec3 finalColor = vec3(colorAndPointLight.r + 0.3, colorAndPointLight.g + 0.3, colorAndPointLight.b + 0.3);

      //   gl_FragColor = vec4(finalRed, 1.0);
      // }