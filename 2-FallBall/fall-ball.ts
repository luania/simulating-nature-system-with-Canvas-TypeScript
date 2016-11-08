import { PVector } from "../commons/script/PVector";
import { Ball } from "./Ball";

var canvas = <HTMLCanvasElement>document.getElementById("canvas")
var ctx = canvas.getContext("2d");
ctx.fillStyle = 'rgba(192, 80, 77, 1)';

var ball = new Ball(new PVector(10, 10), 10);
ball.setSpeed(new PVector(0.5, 0));
ball.setAcceleration(new PVector(0, 0.01));

function next() {
    ball.step();
    ball.checkBounds(canvas);
    ctx.beginPath();
    // ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.arc(ball.position.x, ball.position.y, ball.size, 0, 2 * Math.PI);
    ctx.fill();
    setTimeout(next, 0);
}
next();