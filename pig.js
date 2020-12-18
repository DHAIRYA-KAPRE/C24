class pig {
    constructor(x,y){
       var options = {isStatic:false,restitution:1}
       this.body = Bodies.rectangle(x,y,15,15,options);
       this.width = 15
       this.height = 15
        World.add(world,this.body);
      

    }
display(){
    rectMode(CENTER)
    rect(this.body.position.x,this.body.position.y,this.width,this.height); 

}


}