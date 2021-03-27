class Drop{
    constructor(x, y){
        var options={
          restitution:0.1,
          friction:0.001,
        }
        this.rain=Bodies.circle(x,y,5,options)
        this.rain=5
        this.x=x
        this.y=y
        World.add(world,this.rain)
        }
        updateY(){
          if(this.rain.position.y>height){
            Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
          }
        }
        display(){
          fill("blue")
          ellipseMode(CENTER)
          ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius)
          
        }
    }