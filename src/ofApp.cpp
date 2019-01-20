#include "ofApp.h"

//--------------------------------------------------------------
void ofApp::setup(){

    ofSetLogLevel(OF_LOG_VERBOSE);
    ofBackground(50, 0);


    //of utilise sampler2Drect par defaut, mais cela pose problème
    //pour les modèle 3D, par contre pour par exemple les plane primitives,
    //il faut commenter la ligne ci après, voir :
    //https://forum.openframeworks.cc/t/what-does-ofdisablearbtex-do/26377
    ofDisableArbTex(); // we need GL_TEXTURE_2D for our models coords.

    model.loadModel("assets/splash_Cube.obj", false);
    model.setPosition(ofGetWidth() * 0.5, (float)ofGetHeight() * 0.75 , 0);

    //notre modèle dispose d'un matériel par défaut, notre shader n'est alors
    //pas utilisé si on ne désactive pas le matériel
    model.disableMaterials();
    mesh = model.getMesh(0);

    img.load("assets/scene.png");

    cursor_pos.set(0,0,0);

    shader.load("shaders/shader");



}

//--------------------------------------------------------------
void ofApp::update(){
}

//--------------------------------------------------------------
void ofApp::draw(){

    ofSetColor(255);

     ofEnableDepthTest();

     img.getTexture().bind();

    shader.begin();

    shader.setUniform3fv("cursor",cursor_pos.getPtr());

    ofEnableBlendMode(OF_BLENDMODE_ALPHA);

   ofPushMatrix();
   ofTranslate(model.getPosition().x+100, model.getPosition().y, 0);
   ofRotateDeg(75.0f, 1, 0, 0);
   ofRotateDeg(-35.0f, 0, 0, 1);
   ofTranslate(-model.getPosition().x, -model.getPosition().y, 0);

   model.drawFaces();

   ofPopMatrix();

   shader.end();
   img.getTexture().unbind();

   ofDisableDepthTest();

   ofSetColor(127);

  std::stringstream debugpos;

  debugpos << "Cursor pos X :" << cursor_pos.x << " Y : " << cursor_pos.y <<  " Z : " << cursor_pos.z;

  ofDrawBitmapString(debugpos.str(),50,700);

}

//--------------------------------------------------------------
void ofApp::keyPressed(int key){

    float pas = 0.08f;

    switch(key) {
         case OF_KEY_LEFT:
            cursor_pos.x -= pas;
            break;

    case OF_KEY_RIGHT:
        cursor_pos.x += pas;
        break;

    case OF_KEY_UP:
         cursor_pos.z += pas;
        break;

    case OF_KEY_DOWN:
         cursor_pos.z -= pas;
        break;

    case OF_KEY_PAGE_DOWN:
         cursor_pos.y -= pas;
        break;

    case OF_KEY_PAGE_UP:
        cursor_pos.y += pas;
        break;

    }

}

//--------------------------------------------------------------
void ofApp::keyReleased(int key){

}

//--------------------------------------------------------------
void ofApp::mouseMoved(int x, int y ){

}

//--------------------------------------------------------------
void ofApp::mouseDragged(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mousePressed(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseReleased(int x, int y, int button){

}

//--------------------------------------------------------------
void ofApp::mouseEntered(int x, int y){

}

//--------------------------------------------------------------
void ofApp::mouseExited(int x, int y){

}

//--------------------------------------------------------------
void ofApp::windowResized(int w, int h){

}

//--------------------------------------------------------------
void ofApp::gotMessage(ofMessage msg){

}

//--------------------------------------------------------------
void ofApp::dragEvent(ofDragInfo dragInfo){

}
