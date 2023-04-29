export class Point {
    constructor(public x: number, public y: number) {}

    public move(dx: number, dy: number): void {
        this.x += dx;
        this.y += dy;
    }
}

export class Rectangle {
    constructor(public a: Point, public b: Point, public c: Point, public d: Point) {}

    public move(dx: number, dy: number): void {
        this.a.move(dx, dy);
        this.b.move(dx, dy);
        this.c.move(dx, dy);
        this.d.move(dx, dy);
    }

    public getArea(): number {
        const width = Math.sqrt((this.b.x - this.a.x) ** 2 + (this.b.y - this.a.y) ** 2);
        const height = Math.sqrt((this.c.x - this.b.x) ** 2 + (this.c.y - this.b.y) ** 2);
        return width * height;
    }
}
