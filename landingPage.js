const startBtn = document.querySelector(".start");
const tutorialBtn=document.querySelector(".tutorial");
const popUp=document.querySelector(".popup");
const overlay=document.querySelector(".overlay");
const closeBtn=document.querySelector(".close");

startBtn.addEventListener('click', () => {
     window.location.href = "game.html";
})

tutorialBtn.addEventListener('click',()=>{
    popUp.style.visibility="visible";
    overlay.style.visibility = "visible";
    overlay.style.opacity='1';
})

closeBtn.addEventListener('click',()=>{
    popUp.style.visibility="hidden";
    overlay.style.visibility = "hidden";
    overlay.style.opacity='0';
})