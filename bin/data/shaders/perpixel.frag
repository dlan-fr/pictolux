#version 150

// this is how we receive the texture
uniform sampler2D tex;

in vec2 fragtex;

in  vec3 eposition;
in  vec3 fnormal;
in vec3 diffuseColor;
in vec3 ambientColor;
in vec3 lightpos;

out vec4 outputColor;

void main()
{
  /*  float n = 2;
    float k = 2;

 float finalDiffuse = 0;
    vec3 finalColor = vec3(0, 0, 0);

 float u_DiffuseIntensivity = 12;
 float ambientStrength = 0.1;

    const vec3 lightColor = vec3(1, 1, 1);
    const vec3 globalAmbient = vec3(0.2, 0.2, 0.2);

// Will be used for attenuation.
    float dist = length(lightpos - eposition);

    // Get a lighting direction vector from the light to the vertex.
    vec3 lightVector = normalize(lightpos - eposition);

    // Calculate the dot product of the light vector and vertex normal. If the normal and light vector are
    // pointing in the same direction then it will get max illumination.
    float diffuse = max(dot(fnormal, lightVector), 0.1);

    // Add attenuation.
    diffuse = diffuse / (1 + pow(dist, n));

    // Calculate final diffuse for fragment
    finalDiffuse += diffuse;

    // Calculate final light color
    finalColor += lightColor / (1 + pow(dist, k));

    vec3 ambient = ambientStrength * globalAmbient;

float var = (1 + pow(dist, n));

    vec3 diffusevec =  finalColor * finalDiffuse * u_DiffuseIntensivity;*/

    float dist = length(eposition - lightpos);

    float ndist = 1.0 - (dist * 0.001);

    vec4 texturecolor = texture(tex, fragtex);


   /* if(lightpos.x > 0.0)
        outputColor = vec4(1.0,0.0,0.0,1.0);
    else
        outputColor = vec4(0.0,1.0,0.0,1.0); */

    //outputColor = vec4(test,test,test, 1) ;//* texture2D(u_TextureUnit, v_Texture);

    vec4 cursorcolor = vec4(1.0, 0.0, 0.0, 1.0);

    //outputColor = texturecolor + (cursorcolor * (1.0 - smoothstep(0.0,0.5,ndist))); 

    outputColor = vec4(ndist,ndist,ndist,1.0);

  
}

