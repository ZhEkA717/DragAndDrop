"use strict";

const ball = document.getElementById("ball");

ball.addEventListener("mousedown", ballMouseDown);
ball.addEventListener("mouseup", ballMouseUp);

let x = 0;
let y = 0;
let glob;
function ballMouseDown(EO) {
    EO.preventDefault();
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
    EO.preventDefault();
    window.removeEventListener('mousemove', glob);
}




