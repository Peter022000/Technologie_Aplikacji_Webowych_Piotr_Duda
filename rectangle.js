"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.move = function (dx, dy) {
        this.x += dx;
        this.y += dy;
    };
    return Point;
}());
exports.Point = Point;
var Rectangle = /** @class */ (function () {
    function Rectangle(a, b, c, d) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }
    Rectangle.prototype.move = function (dx, dy) {
        this.a.move(dx, dy);
        this.b.move(dx, dy);
        this.c.move(dx, dy);
        this.d.move(dx, dy);
    };
    Rectangle.prototype.getArea = function () {
        var width = Math.sqrt(Math.pow((this.b.x - this.a.x), 2) + Math.pow((this.b.y - this.a.y), 2));
        var height = Math.sqrt(Math.pow((this.c.x - this.b.x), 2) + Math.pow((this.c.y - this.b.y), 2));
        return width * height;
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;
