console.log("Welcome to music tut:");

window.addEventListener("load",() => {
    const sounds=document.querySelectorAll(".sounds");
    const pads= document.querySelectorAll(".pads div");
    const  visual=document.querySelector('.visual');
    const colors =[
        "black",
        "blue",
        "blueviolet",
        "chartreuse",
        "rgb(15, 26, 4)",
        "cornflowerblue",
    ]
    //console.log(pads);
    //Lets get going with the sound here
    pads.forEach((pad , index)  => {
     pad.addEventListener('click',function(){
         sounds[index].currentTime =0;
         sounds[index].play();
         createBubbles(index);
     });
    });
    //create a function that make bubbles
    const createBubbles =function(index){
        const bubble=document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor=colors[index];
        bubble.style.animation='jump 1s ease';
        bubble.addEventListener('animationend',function(){
            visual.removeChild(this);
        })
    };
});
const photo=document.getElementById("photo");
const text=document.getElementById('para');
function music1(){
    photo.src='music1.jpg';
    text.innerHTML="Gaddi pe chaahe hum rahein ya Munna, niyam same hoga..";
    
}
function music2(){
    photo.src='music2.jpg';
    text.innerHTML="Succes ky hai?? Failure ke baad ka naya chapter:"
}
function music3(){
    photo.src='music3.jpg';
    text.innerHTML='Hindi philam ke hero hain hum, humein koi nahi maar sakta, hum amar hain…';
}
function music4(){
    photo.src='music4.jpg';
    text.innerHTML='If you think you are bad ... I am your dad';
}
function music5(){
    photo.src='music5.jpg';
    text.innerHTML='भविष्य का ज्ञान तो श्री कृष्णा को भी था पर क्या वो युद्ध के विनाश को रोक पाए थे';
}
function music6(){
    photo.src='music6.jpg';
    text.innerHTML='I love you 3000.';
}