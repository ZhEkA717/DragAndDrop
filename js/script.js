"use strict";
window.addEventListener('load', documentReady);
function documentReady(EO) {
    EO=EO||window.event;
    let imageBox = document.getElementById('imageBox');
    let balls = imageBox.children;
    for(let i=0; i<balls.length;i++){
        balls[i].style.top = balls[i].offsetTop+'px';
        balls[i].style.left = balls[i].offsetLeft+'px';
    }
    for(let i=0;i<balls.length;i++){
        balls[i].style.position = "absolute";
        balls[i].addEventListener("mousedown", ballMouseDown);
        balls[i].addEventListener("mouseup", ballMouseUp);
        balls[i].addEventListener("mouseover", ballMouseOver);
    }
}

let x = 0;
let y = 0;
let glob;
function ballMouseDown(EO) {
    EO.preventDefault();
    let ball = EO.target;
    imageBox.appendChild(ball);
    x = EO.pageX - ball.offsetLeft;
    y = EO.pageY - ball.offsetTop;

    window.addEventListener("mousemove", ballMouseMove);
    function ballMouseMove(EO) {
        EO.preventDefault();
        ball.style.left = (EO.pageX - x) + 'px';
        ball.style.top = (EO.pageY - y) + 'px';
    }
    glob = ballMouseMove;
}
function ballMouseUp(EO) {
    EO=EO||window.event;
    EO.preventDefault();
    window.removeEventListener('mousemove', glob);
}

function ballMouseOver(EO) {
    EO = EO || window.event;
    EO.preventDefault();
    EO.target.style.cursor = "move";
}

