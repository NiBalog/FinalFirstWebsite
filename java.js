var opacity = 1;
var animationTimes = 0;
var frame = 1;
var margin = 250;
var opacity2 = 0
var pos = 300;
var textsize = 20;
var colorList = ["#0073e6","#ff6ec7","#39FF14","#ff073a"]
var imageList = ["1.png","2.png","3.png","4.png","5.png","6.png","7.png","8.png","9.png","10.png",
"11.png","12.png","13.png","14.png","15.png","16.png"]
var colorChoice = 0
var flickerTimer = setInterval(flicker,5000, flickerTimer);

function flicker() {
  document.getElementById("the-proj-website").style.textShadow = "0 0 0px #fff";
  document.getElementById("the-proj-website").style.color = "#333333";
  setTimeout(function(){
    document.getElementById("the-proj-website").style.textShadow = "0 0 20px" + colorList[colorChoice] + ", 0 0 25px" + colorList[colorChoice] + ", 0 0 30px" + colorList[colorChoice] + ", 0 0 40px" + colorList[colorChoice] + ", 0 0 50px" + colorList[colorChoice];
    document.getElementById("the-proj-website").style.color = "white";
  }, 200);
  setTimeout(function(){
    document.getElementById("the-proj-website").style.textShadow = "0 0 0px #fff";
    document.getElementById("the-proj-website").style.color = "#333333";
  }, 400);
  setTimeout(function(){
    document.getElementById("the-proj-website").style.textShadow = "0 0 20px" + colorList[colorChoice] + ", 0 0 25px" + colorList[colorChoice] + ", 0 0 30px" + colorList[colorChoice] + ", 0 0 40px" + colorList[colorChoice];
    document.getElementById("the-proj-website").style.color = "white";
  }, 550);
  setTimeout(function(){
    document.getElementById("the-proj-website").style.textShadow = "0 0 0px #fff";
    document.getElementById("the-proj-website").style.color = "#333333";
  }, 700);
  setTimeout(function(){
    document.getElementById("the-proj-website").style.textShadow = "0 0 20px" + colorList[colorChoice] + ", 0 0 25px" + colorList[colorChoice] + ", 0 0 30px" + colorList[colorChoice];
    document.getElementById("the-proj-website").style.color = "white";
  }, 825);
  setTimeout(function(){
    document.getElementById("the-proj-website").style.textShadow = "0 0 0px #fff";
    document.getElementById("the-proj-website").style.color = "#333333";
  }, 950);
  setTimeout(function(){
    document.getElementById("the-proj-website").style.textShadow = "0 0 20px" + colorList[colorChoice] + ", 0 0 25px" + colorList[colorChoice];
    document.getElementById("the-proj-website").style.color = "white";
  }, 1025);
  setTimeout(function(){
    document.getElementById("the-proj-website").style.textShadow = "0 0 0px #fff";
    document.getElementById("the-proj-website").style.color = "#333333";
  }, 1075);
  setTimeout(function(){
      colorChoice += 1;
      console.log(colorList[colorChoice])
      if (colorChoice > 3) {colorChoice = 0}
  }, 1500);

  setTimeout(function(){
    document.getElementById("the-proj-website").style.textShadow = "0 0 20px" + colorList[colorChoice] + ", 0 0 25px" + colorList[colorChoice];
    document.getElementById("the-proj-website").style.color = "white";
  }, 2000);
  setTimeout(function(){
    document.getElementById("the-proj-website").style.textShadow = "0 0 20px" + colorList[colorChoice] + ", 0 0 25px" + colorList[colorChoice] + ", 0 0 30px" + colorList[colorChoice];
    document.getElementById("the-proj-website").style.color = "white";
  }, 2150);
  setTimeout(function(){
    document.getElementById("the-proj-website").style.textShadow = "0 0 20px" + colorList[colorChoice] + ", 0 0 25px" + colorList[colorChoice] + ", 0 0 30px" + colorList[colorChoice] + ", 0 0 40px" + colorList[colorChoice];
    document.getElementById("the-proj-website").style.color = "white";
  }, 2300);
  setTimeout(function(){
    document.getElementById("the-proj-website").style.textShadow = "0 0 20px" + colorList[colorChoice] + ", 0 0 25px" + colorList[colorChoice] + ", 0 0 30px" + colorList[colorChoice] + ", 0 0 40px" + colorList[colorChoice] + ", 0 0 50px" + colorList[colorChoice];
    document.getElementById("the-proj-website").style.color = "white";
  }, 2450);
  setTimeout(function(){
    document.getElementById("the-proj-website").style.textShadow = "0 0 5px #fff, 0 0 20px" + colorList[colorChoice] + ", 0 0 25px" + colorList[colorChoice] + ", 0 0 30px" + colorList[colorChoice] + ", 0 0 40px" + colorList[colorChoice] + ", 0 0 50px" + colorList[colorChoice];
    document.getElementById("the-proj-website").style.color = "white";
  }, 2600);





}
function GamingProjectorPage() {
  document.getElementById("home-page").style.display = 'none';
  document.getElementById("gaming-page").style.display = 'block';
  document.getElementById("4k-page").style.display = 'none';
  var timerId = setInterval(backgroundChange,10, timerId);
  document.getElementById("proj-title").style.display = 'none';

  function backgroundChange() {
    opacity -= 0.025;
    document.getElementById("game-proj-image-div").style.backgroundColor = "rgba(255, 255, 255,"+opacity+")";
    document.getElementById("game-proj-image").style.opacity = "1";

    if (opacity <= 0) {
      clearInterval(timerId);
      var timerId2 = setInterval(textAppear,10, timerId2);

      function textAppear() {
        opacity2 += 0.06;
        pos -= 5;
        textsize += 1;
        console.log("opacity: " + opacity2);
        console.log("marginTop: " + pos);
        console.log("textsize: " + textsize);
        document.getElementById("sub-proj-title").style.opacity = opacity2;
        document.getElementById("sub-proj-title").style.marginTop = pos + "px";
        document.getElementById("sub-proj-title").style.fontSize = textsize + "px";

        if (textsize >= 40) {
          clearInterval(timerId2);
        }

      }
      }
    }
  }
function highResProjectorPage() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  document.getElementById("home-page").style.display = 'none';
  document.getElementById("gaming-page").style.display = 'none';
  document.getElementById("4k-page").style.display = 'block';
  if (animationTimes == 0) {
  var animation = setInterval(thing,70, animation);
  function thing() {
    document.getElementById("animation").src = imageList[frame];
    frame += 1;
    if (frame == 16){
      clearInterval(animation)
      animationTimes = 1;
    }
    }
  }
}
