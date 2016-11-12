import { Ball } from "./Ball";
import { FluidArea } from "./FluidArea";
import { Block } from "./Block";
import { PVector } from "./PVector";
import { PolarVector } from "./PolarVector";

export class Painter {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
    }

    drawBall(ball: Ball) {
        this.ctx.fillStyle = ball.color;
        this.ctx.beginPath();
        this.ctx.arc(ball.position.x + ball.size, ball.position.y + ball.size, ball.size, 0, 2 * Math.PI);
        this.ctx.fill();
    }

    clearCanvas() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    drawFluidArea(fluidArea: FluidArea) {
        this.ctx.fillStyle = fluidArea.color;
        this.ctx.beginPath();
        this.ctx.rect(fluidArea.position.x, fluidArea.position.y, fluidArea.size.x, fluidArea.size.y);
        this.ctx.fill();
    }
    drawBlock(block: Block) {
        this.ctx.fillStyle = "#000";
        this.ctx.beginPath();
        let points = block.points();
        this.ctx.moveTo(points[0].x, points[0].y);
        for (let i: number = 1; i < points.length; i++) {
            this.ctx.lineTo(points[i].x, points[i].y);
        }
        this.ctx.fill();
    }
}
