#version 150

uniform mat4 modelViewProjectionMatrix;

uniform mat4 modelViewMatrix; 

uniform vec3 cursor;

in vec4 position;
in vec2 texcoord;


out vec2 fragtex;
out vec4 fragcursor;

void main(){
    fragtex = texcoord;

    fragcursor = modelViewProjectionMatrix * vec4(cursor,1.0);

	gl_Position = modelViewProjectionMatrix * position;

    
}

