import { PVector } from "../commons/script/PVector";
import { Ball } from "../commons/script/Ball";
import { ApplyForceBall } from "../commons/script/ApplyForceBall";
import { BallFactory } from "../commons/script/BallFactory";

var canvas = <HTMLCanvasElement>document.getElementById("canvas")
var ctx = canvas.getContext("2d");

const GRAVITITIONAL_CONST: number = 6;

let balls:ApplyForceBall[] = new BallFactory().random(1000, canvas);
let fingerBall = new ApplyForceBall(new PVector(canvas.width / 2, canvas.width / 2), 10)
    .setMass(1000)
    .setColor("rgba(80, 80, 80, 1)");

canvas.onmousemove = function(ev: MouseEvent) {
    fingerBall.position.x = ev.layerX;
    fingerBall.position.y = ev.layerY;
}

function drawBall(ball: Ball) {
    ctx.fillStyle = ball.color;
    ctx.beginPath();
    ctx.arc(ball.position.x, ball.position.y, ball.size, 0, 2 * Math.PI);
    ctx.fill();
}

function next() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let ball of balls) {
        let sub = PVector.sub(fingerBall.position, ball.position);
        let distance = sub.mag();
        let fingerForce = PVector.normal(sub).mult(
            GRAVITITIONAL_CONST * fingerBall.mass * ball.mass / distance / distance
        );
        ball.acceleration.mult(0);
        ball.applyForce(fingerForce);
        ball.step();
        // ball.checkBounds(canvas);
        drawBall(ball);
    }
    drawBall(fingerBall);
    setTimeout(next, 10);
}
next();
