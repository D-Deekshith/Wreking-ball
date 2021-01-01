class SlingShot{
    constructor(bodyA,bodyB,offsetX,offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA: bodyA,
            bodyB:bodyB,
            pointB:{x:this.offsetX, y:this.offsetY},
        }
        this.sling = Constraint.create(options);
        this.bodyB = bodyB;
  
        World.add(world,this.sling);
    }

    display(){
        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.bodyB.position;

            strokeWeight(5);
            stroke("black");

            var Anchor1X=pointB.x+this.offsetX
            var Anchor1Y=pointB.y+this.offsetY
             line(pointA.x,pointA.y,Anchor1X,Anchor1Y);
        }
    }
}