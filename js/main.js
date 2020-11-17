window.addEventListener('load', ()=> {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads > div"); //pads 1,2,3,4
    const visual = document.querySelector(".visual"); //
    const colors = [
        "#60d394",
        "#d36060",
        "#c060d3",
        "#d3d160",
        "#6860d3",
        "#6e6e6e"
    ];

    pads.forEach((pad, item) => {
        pad.addEventListener("click", function(){
            sounds[item].currentTime = 0;
            sounds[item].play();
            createBubbles(item);
        })
    })
    //creacion de buburgas
    const createBubbles = (item) => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[item];
        bubble.style.animation = `jump 1s ease`;
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        })
    }
})