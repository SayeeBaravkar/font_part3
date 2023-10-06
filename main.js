nosex=0;
nosey=0;
difference = 0; 
rightWristX = 0; 
leftWristX = 0;

function setup()
{
    video = createCapture(VIDEO);
    video.size(450,500);
    video.position(200,75)
    
    canvas = createCanvas(280,280);
    canvas.position(750,75);
   
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#969A97');
    document.getElementById("text-size").innerHTML = "Font size of the text will be = "+difference+"px";
    fill("#FF0000");
    textSize(difference);
    text('Sayee',50,400)
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized!')
}

function gotPoses (results)
{
    if(results.length > 0)
{
   console.log(results);
    nosex = results[0].pose.nose.x;
    nosey = results[0].pose.nose.y;
    console.log("nosex = " + nosex + "nosey = " +nosey);
    rightWristX = results[0].pose.rightWrist.x;
    leftWristX = results[0].pose.leftWrist.x; 
    
    difference = floor(leftWristX - rightWristX);
 
    console.log("LeftWristX = " + leftWristX + "RightWristX = " + rightWristX + " difference = " + difference);
}
    
}
