#version 150

// this is how we receive the texture
uniform sampler2D tex;

in vec2 fragtex;
in vec4 fragcursor;


float near = 0.1; 
float far  = 5.0; 

out vec4 outputColor;

float LinearizeDepth(float depth) 
{
    float z = depth * 2.0 - 1.0; // back to NDC 
    return (2.0 * near * far) / (far + near - z * (far - near));	
}


void main()
{
    float windowWidth = 1024.0;
    float windowHeight = 768.0;
    

    vec3 realcurs = vec3(fragcursor.x / windowWidth,fragcursor.y / windowHeight,LinearizeDepth(fragcursor.z) / far);
    vec4 cursorcolor = vec4(1.0, 0.0, 0.0, 1.0);

    float depth = LinearizeDepth(gl_FragCoord.z) / far;

    vec3 realcoord = vec3(gl_FragCoord.x / windowWidth,gl_FragCoord.y / windowHeight,depth);
    //vec3 coord = vec3(gl_FragCoord.rgb * factor;
   float dist = 1.0 - distance(realcoord,realcurs);



    vec4 texturecolor = texture(tex, fragtex);

    outputColor = texturecolor + (cursorcolor * smoothstep(0.2,1.0,dist)); 
    //outputColor = vec4(vec3(depth), 1.0);
    //outputColor = vec4(dist,0.0,0.0,1.0);
}

/*

//exemple shader toy sur l'affichage de la position de la souris en 2D

void mainImage( out vec4 fragColor, in vec2 fragCoordvec4( )
{
    // Normalized pixel coordinates (from 0 to 1)
    vec2 uv = fragCoord/iResolution.xy;

    vec2 colmouse = (iMouse.xy / iResolution.xy);
    
    //vec3 col = vec3(1.0,0.0,0.0) ;
    
    float res = step(0.9,1.0 - distance(colmouse,uv));
    
    // Output to screen
    fragColor = vec4(1.0*res,0.0,0.0,1.0);
}

*/
