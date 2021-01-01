class Holder{
    constructor(x,y,radius){
        var options = {
            'density': 1,
            'isStatic':true
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;

        push();
        ellipseMode(RADIUS);
        circle(pos.x,pos.y,this.radius);
        pop();
    }
}