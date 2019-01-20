#version 150

uniform mat4 modelViewProjectionMatrix;

uniform vec3 cursor;

in vec4 position;
in vec2 texcoord;


out vec2 fragtex;
out vec3 fragcursor;
out float dist;

void main(){
    fragtex = texcoord;
    fragcursor = cursor;

	gl_Position = modelViewProjectionMatrix * position;

    dist = 1.0 - distance(cursor,position.xyz);
}

