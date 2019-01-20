#version 150

// this is how we receive the texture
uniform sampler2D tex;

in vec2 fragtex;

in  vec4 eposition;
in  vec3 fnormal;
in vec3 diffuseColor;
in vec3 ambientColor;
in vec3 lightpos;

out vec4 outputColor;

void main()
{

    const vec3 lightColor = vec3(1, 1, 1);
    const vec3 globalAmbient = vec3(0.2, 0.2, 0.2);

  // Position in eye space
    vec3 P = vec3(eposition);

  // Normalize normal in eye space
    vec3 N = normalize(fnormal);

  // Compute the ambient term
    vec3 ambient = ambientColor * globalAmbient;

  // Compute the diffuse term
  // Normalized vector toward the light source
    vec3 L = normalize(vec3(lightpos) - P);
    float diffuseLight = max(dot(N, L), 0);
    vec3 diffuse = diffuseColor * lightColor * diffuseLight;

  
  // Define the final vertex color
    outputColor.rgb =  ambient + diffuse;
    outputColor.a = 1.0;
}

