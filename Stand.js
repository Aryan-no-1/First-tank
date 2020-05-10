class Stand{
    constructor(x, y, width, height) {
      this.body = Bodies.rectangle(x, y, width, height);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("blue");
      rect(100,315, this.width, this.height);
      pop();
    }
  };