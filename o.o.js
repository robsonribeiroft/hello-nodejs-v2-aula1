class shape{
  constructor (id, x, y){
    this.id = id;
    this.move(x,y);
  }
  move(x, y){
    this.x = x;
    this.y = y;
  }
}

let s = new shape(1,0,0);
s.move(3,3);


class Rectangle extends Shape {
    constructor (id, x, y, width, height) {
        super(id, x, y)
        this.width  = width
        this.height = height
    }
}
class Circle extends Shape {
    constructor (id, x, y, radius) {
        super(id, x, y)
        this.radius = radius
    }
}

let r = new Rectangle(2,0,0,5,5);
let c = new Circle(3,0,0,6);
console.log(r instanceof Shape);
console.log(c instanceof Shape);
console.log(r instanceof Rectangle);
console.log(c instanceof Circle);
console.log(c instanceof Rectangle);
// true, true, true, true, false
