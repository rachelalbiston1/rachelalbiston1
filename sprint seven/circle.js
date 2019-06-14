console.log("ellipse js is called")

class Circle{
constructor(xS, yS, xM, yM, c1){
    this.xC = (xS + xM)/2; // centre x
    this.yC = (yS + yM)/2; // centre y
    this.rX = Math.abs( (xM - xS)/2 ); //Math.abs is to make the values always positive
    this.rY = Math.abs( (yM - yS)/2 );
    this.r = 0;
    if(this.rX <this.rY){
        this.r = this.rX;
    }
        else{
            this.r = this.rY;
        }
    this.fill = c1;
}
    
    update(){
        this.draw();
    }
    
    draw(){
        ctx.beginPath();
        ctx.arc(this.xC, this.yC, this.r, 0, 2*Math.PI);
        ctx.fillStyle = this.fill;
        ctx.fill();
    }
}