function preload(){
}

function setup(){
canvas = createCanvas(650,450);
canvas.center();
video = createCapture(VIDEO);
video.hide();

colour = "";
}

function draw(){
image(video,100,100,450,250);

fill("red");
stroke("red");
circle(50,50,80);
circle(600,50,80);
circle(50,400,80);
circle(600,400,80);

fill("green");
stroke("green");
rect(90,40,473,20);
rect(90,390,473,20);
rect(40,89,20,270);
rect(589,89,20,270)
}

function take_snapshot() {
    save("Nice Picture.png");
}