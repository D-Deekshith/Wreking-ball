class Ball{
    constructor(x,y,radius){
        var options = {
            'density': 500000,
            'isStatic':false
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;

        push();
        ellipseMode(RADIUS);
        fill(0,255,255);
        strokeWeight(3);
        stroke(128,0,128);
        circle(pos.x,pos.y,this.radius);
        pop();
    }
}