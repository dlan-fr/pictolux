#version 150

// this is how we receive the texture
uniform sampler2D tex;

in vec2 fragtex;
in vec3 fragcursor;

in float dist;

out vec4 outputColor;

void main()
{
    /*float windowWidth = 1024.0;
    float windowHeight = 768.0;
    
	float r = gl_FragCoord.x / windowWidth;
	float g = gl_FragCoord.y / windowHeight;*/

    vec4 cursorcolor = vec4(1.0, 0.0, 0.0, 1.0);

// * dist;
    //cursorcolor.a = 1.0;

    vec4 texturecolor = texture(tex, fragtex);

    outputColor = texturecolor + (cursorcolor * smoothstep(0.2,1.0,dist));
}

/*

//exemple shader toy sur l'affichage de la position de la souris en 2D

void mainImage( out vec4 fragColor, in vec2 fragCoord )
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
