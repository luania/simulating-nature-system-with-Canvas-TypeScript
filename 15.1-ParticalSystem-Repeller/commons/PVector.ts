import { PolarVector } from "./PolarVector";

export class PVector {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    add(p: PVector) {
        this.x += p.x;
        this.y += p.y;
        return this;
    }

    sub(p: PVector) {
        this.x -= p.x;
        this.y -= p.y;
        return this;
    }

    mult(n: number) {
        this.x *= n;
        this.y *= n;
        return this;
    }

    div(n: number) {
        if (n != 0) {
            this.x /= n;
            this.y /= n;
        }
        return this;
    }

    mag() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }

    normalize() {
        this.div(this.mag());
        return this;
    }

    setMag(mag: number) {
        this.normalize();
        this.mult(mag);
        return this;
    }

    rotate(angle: number) {
        let newP = this.toPolarVector().rotate(angle).toPVector();
        this.x = newP.x;
        this.y = newP.y;
        return this;
    }

    toPolarVector() {
        return new PolarVector(this.mag(), Math.atan2(this.y, this.x));
    }

    static add(p1: PVector, p2: PVector) {
        return new PVector(p1.x + p2.x, p1.y + p2.y);
    }

    static sub(p1: PVector, p2: PVector) {
        return new PVector(p1.x - p2.x, p1.y - p2.y);
    }

    static mult(p: PVector, n: number) {
        return new PVector(p.x * n, p.y * n);
    }

    static div(p: PVector, n: number) {
        return new PVector(p.x / n, p.y / n);
    }

    static normal(p: PVector) {
        let mag = p.mag();
        return new PVector(p.x / mag, p.y / mag);
    }

    static random() {
        return new PVector((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 20);
    }

    static rotate(p: PVector, angle: number) {
        return p.toPolarVector().rotate(angle).toPVector();
    }

    static copy(p: PVector) {
        return new PVector(p.x, p.y);
    }
}
