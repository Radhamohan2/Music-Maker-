window.addEventListener("load",()=>{
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector(".visual");
    const colors =[
        "#ff4000",
    "#ffff00",
    "#80ff00",
    "#00bfff",
    "#8000ff",
    "#ff0040"
    ];

    pads.forEach((pad,index) =>{
        pad.addEventListener('click', function() {
            createArt(index);
            sounds[index].currentTime=0;
            sounds[index].play();
        });
    });

    const createArt = ( (index)=>{
        const art = document.createElement("div");
        const art1 = document.createElement("div");
        const art2 = document.createElement("div");
        const art3 = document.createElement("div");
        const art4 = document.createElement("div");
        const art5 = document.createElement("div");
        visual.appendChild(art);
        visual.appendChild(art1);
        visual.appendChild(art2);
        visual.appendChild(art3);
        visual.appendChild(art4);
        visual.appendChild(art5);
        
        art.style.backgroundColor = colors[index];
        art1.style.backgroundColor = colors[index];
        art2.style.backgroundColor = colors[index];
        art3.style.backgroundColor = colors[index];
        art4.style.backgroundColor = colors[index];
        art5.style.backgroundColor = colors[index];
        art.style.animation ="jump 1.2s ease";
        art1.style.animation ="jump1 1.4s ease";
        art2.style.animation ="jump2 1.6s ease";
        art3.style.animation ="jump3 1.8s ease";
        art4.style.animation ="jump4 2s ease";
        art5.style.animation ="jump5 2.2s ease";
        art.addEventListener('animationend', function(){
            visual.removeChild(this);
        });
        art1.addEventListener('animationend', function(){
            visual.removeChild(this);
        });
        art2.addEventListener('animationend', function(){
            visual.removeChild(this);
        });
        art3.addEventListener('animationend', function(){
            visual.removeChild(this);
        });
        art4.addEventListener('animationend', function(){
            visual.removeChild(this);
        });
        art5.addEventListener('animationend', function(){
            visual.removeChild(this);
        });
    });
});