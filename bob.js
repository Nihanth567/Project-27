class Bob{
    constructor(x,y,radius){
        var [options] = {
            isStatic:false,
            restitution:0.3,
            density:1.2

        }

        //this.paper.circle(x,y,radius,options);
        this.bob = Bodies.circle(x, y, radius, [options], [maxSides])
       this.radius = radius;

       World.add(world,this.bob)
        
       
    }

    display(){
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius);

        
    }

}