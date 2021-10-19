function uDed() {
    new Audio('aud/uDed.mp3').play();
}

let progress = document.getElementById('scrollBar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function() {
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + '%';
}

/* document.querySelector('.container').addEventListener('click', (e, checkbox = document.querySelector('input')) => { 
    if (checkbox.checked) { checkbox.checked = false; e.stopPropagation(); }
  }); */

let img = new Image();
img.src = '/gifs/stormtrooper-Sheet.png';
img.onload = function(){
    init();
};

let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');

const scale = 1;
const width = 48;
const height = 64;
const scaledW = scale*width;
const scaledH = scale*height;

function drawFrame(frameX, frameY, canvasX, canvasY){
    ctx.drawImage(img, frameX*width, frameY*height, width, height, canvasX, canvasY, scaledW, scaledH);
}

function init(){
    window.requestAnimationFrame(step);
}

const cycleLoop = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 19, 19, 19, 19];
let currentLoopIndex = 0;
let frameCount = 0;

function step(){
    frameCount++;
    if (frameCount < 7){
        window.requestAnimationFrame(step);
        return;
    }
    frameCount = 0;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFrame(cycleLoop[currentLoopIndex], 0, 0, 0);
    currentLoopIndex++;
    if (currentLoopIndex >= cycleLoop.length){
        currentLoopIndex = 0;
    }
    window.requestAnimationFrame(step);
}