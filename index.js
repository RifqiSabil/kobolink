const audio = document.querySelector("audio");

function play(){
    console.log("Playing BGM");
    audio.play();
}
function pause(){
    console.log("Pausing BGM");
    audio.pause();
}