class Box{
    constructor(x,y,width,height){
        var options = {
            'restitution': 0.1,
            'friction': 500000000000000000,
            'density':500000000000000000,
            'isStatic':false
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
        this.image = loadImage('block.jpg');

        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;

        push();
        imageMode(CENTER);        
        fill(255);
        strokeWeight(1.5);
        stroke(128,255,128);
        image(this.image,pos.x,pos.y,this.width,this.height);
        pop();
    }
}