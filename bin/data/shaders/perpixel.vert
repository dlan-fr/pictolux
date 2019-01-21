#version 150

//openframeworks uniforms : 
/*
static const string MODEL_MATRIX_UNIFORM="modelMatrix";
static const string VIEW_MATRIX_UNIFORM="viewMatrix";
static const string MODELVIEW_MATRIX_UNIFORM="modelViewMatrix";
static const string PROJECTION_MATRIX_UNIFORM="projectionMatrix";
static const string MODELVIEW_PROJECTION_MATRIX_UNIFORM="modelViewProjectionMatrix";
static const string TEXTURE_MATRIX_UNIFORM="textureMatrix";
static const string COLOR_UNIFORM="globalColor";

static const string USE_TEXTURE_UNIFORM="usingTexture";
static const string USE_COLORS_UNIFORM="usingColors";
static const string BITMAP_STRING_UNIFORM="bitmapText";
*/

uniform mat4 modelViewProjectionMatrix;

uniform mat4 modelViewMatrix;

uniform vec3 cursor;

in vec4 position;
in vec2 texcoord;
in vec3 normal;

out vec3 eposition;
out vec3 fnormal;
out vec3 diffuseColor;
out vec3 ambientColor;


out vec2 fragtex;
out vec3 lightpos;



void main(){
    // Position in clip space
      gl_Position = modelViewProjectionMatrix * position;

      fnormal = vec3(modelViewMatrix * vec4(normal, 0.0));
        eposition = vec3(modelViewMatrix * position);
    
    fragtex = texcoord;
    lightpos = vec3(modelViewMatrix * vec4(cursor,0.0));
}

