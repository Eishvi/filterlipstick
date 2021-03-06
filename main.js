lipsX=0;
lipsY=0;
function preload(){
img=loadImage('https://i.postimg.cc/wj6xkHPQ/lipstickpng.png');
}
function setup(){
    canvas=createCanvas(300, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300, 300);
    video.hide();
    poseNet= ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log('poseNet Is Inistialized');
}
function gotPoses(results){
if(results.length>0){
    console.log(results);
    lipsX=results[0].pose.nose.x;
    lipsY=results[0].pose.nose.y;
    console.log("nose x="+results[0].pose.nose.x);
    console.log("nose y="+results[0].pose.nose.y); 
}
}
function draw(){
image(video, 0, 0, 300, 300);
image(img, lipsX-15, lipsY+10, 30, 30);
}
function take_snapshot(){
    save('FilterSelfie.png');}