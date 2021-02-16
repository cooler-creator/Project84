canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
carwidth = 100;
carheight = 90;
carx = 10;
cary = 10;
backgroundimage = "https://gifandtell.files.wordpress.com/2015/10/endless_road.gif";
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = backgroundimage;

    car_imgTag = new Image();
    car_imgTag.onload = uploadcar;
    car_imgTag.src = carimage;
}
function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadrover() {
    ctx.drawImage(car_imgTag, carx, cary, carwidth, carheight);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
    keyPressed= e.keyCode;
    console.log(keyPressed);
    if(keyPressed=="38")
    {
        up();
        console.log("up is pressed");
    }
    if(keyPressed=="40")
    {
        down();
        console.log("down is pressed");
    }
    if(keyPressed=="37")
    {
        left();
        console.log("left is pressed");
    }if(keyPressed=="39")
    {
        right();
        console.log("right is pressed");
    }
}
function up()
{if(cary>0)
{
    cary=cary-10;
    console.log(carx+","+cary);
    uploadBackground();
    uploadcar();
}
function down()
{if(cary<500)
{
    cary=cary+10;
    console.log(carx+","+cary);
    uploadBackground();
    uploadcar();
}
}
function left()
{if(carx>0)
{
    carx=carx-10;
    console.log(carx+","+cary);
    uploadBackground();
    uploadcar();
}
}
function right()
{if(carx<700)
{
    carx=carx+10;
    console.log(carx+","+cary);
    uploadBackground();
    uploadcar();
}
}