let slides = document.querySelectorAll(".slide");
let current = 0;
let busy = false;

window.addEventListener("wheel", move);
window.addEventListener("touchstart", startTouch);
window.addEventListener("touchend", endTouch);

let y = 0;

function startTouch(e){
    y = e.changedTouches[0].clientY;
}

function endTouch(e){
    let diff = y - e.changedTouches[0].clientY;

    if(diff > 50) next();
    if(diff < -50) prev();
}

function move(e){
    if(e.deltaY > 0) next();
    else prev();
}

function next(){
    if(busy || current >= slides.length-1) return;
    busy = true;
    current++;
    slides[current].scrollIntoView({behavior:"smooth"});
    setTimeout(()=>busy=false,500);
}

function prev(){
    if(busy || current <=0) return;
    busy = true;
    current--;
    slides[current].scrollIntoView({behavior:"smooth"});
    setTimeout(()=>busy=false,500);
}
