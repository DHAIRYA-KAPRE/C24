class slab {
    constructor(x,y,height,angle){
       var options = {isStatic:false,restitution:1}
       this.body = Bodies.rectangle(x,y,15,height,options);
       this.width = 15
       this.height = height
       Matter.Body.setAngle(this.body,angle)
        World.add(world,this.body);
      

    }
display(){
    rectMode(CENTER)
    rect(this.body.position.x,this.body.position.y,this.width,this.height); 

}


}