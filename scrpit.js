function playSound()
{
    audio = new Audio('start.mp3');
    audio.play();
}
function hide()
{
    loadingScreen = document.getElementById("loading");

    loadingScreen.classList.remove("loading");
    loadingScreen.classList.remove("loadingHide");
    loadingScreen.classList.add("loadingDelete");
}
function loadSite()
{
    loadingScreen = document.getElementById("loading");
    
    loadingScreen.classList.add("loadingHide");
    setTimeout(hide, 1400)
    setTimeout(playSound, 800);
}