var opacity = 1;

function GamingProjectorPage() {
  document.getElementById("home-page").style.display = 'none';
  document.getElementById("gaming-page").style.display = 'block';
  var timerId = setInterval(backgroundChange,10, timerId);
  document.getElementById("proj-title").style.display = 'none';

  function backgroundChange() {
    opacity -= 0.025;
    console.log(opacity);
    document.getElementById("game-proj-image-div").style.backgroundColor = "rgba(255, 255, 255,"+opacity+")";
    document.getElementById("game-proj-image").style.opacity = "1";

    if (opacity <= 0) {
      clearInterval(timerId);
    }
  }
}
