song1 = "";
song2 = "";
Status1 = "";
Status2 = "";
Cole = 0;
Kai = 0;
ScoreLeftWrist = "";
function preload()
{
    song1 = loadSound("music2.mp3");
    song2 = loadSound("music.mp3");
}

function setup()
{
    canvas = createCanvas(500, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("PoseNet is Initialized");
}

function draw()
{
    image(video, 0, 0, 600, 500);
Status1 = song1.isPlaying()
Status2 = song2.isPlaying()
    fill("#08fa00");
    stroke("#1d00fa");
    if (Cole > 0.2) {
        circle(LeftWristX, LeftwristY, 20);
        song1.stop();
        if(Status2 == false)
        {
          song2.play()
          document.getElementById("song").innerHTML = "Playing - Peter Pan Song"
        }
    }

    if (Kai > 0.2) {
        circle(RightWristX, RightWristY, 20);
        song2.stop();
        if(Status1 == false)
        {
          song1.play()
          document.getElementById("song").innerHTML = "Playing - Harry Potter Song"
        }
    }
}

function play()
{
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results)

        Cole = results[0].pose.keypoints[9].score;

        LeftWristX = results[0].pose.leftWrist.x;
        LeftwristY = results[0].pose.leftWrist.y;
        console.log("LeftwristX " + LeftWristX + " LeftwristY " + LeftwristY);

        Kai = results[0].pose.keypoints[10].score;

        RightWristX = results[0].pose.rightWrist.x;
        RightWristY = results[0].pose.rightWrist.y;
        console.log("RightWristX " + RightWristX + " RightWristY " + RightWristY);
    }
}
