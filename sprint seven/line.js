console.log("line js is called")

class Line{
constructor(xS,yS,xM,yM,c1){
    // variables required for a line
    this.xStart = xS;
    this.yStart = yS;
    this.xMouse = xM;
    this.yMouse = yM;
    this.fill = c1;
    }
    
    update(){
        // calling for line to be drawn
        this.draw();
    }
    
    draw(){
    ctx.strokeStyle = this.fill;
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(this.xStart, this.yStart);
    ctx.lineTo(this.xMouse, this.yMouse);
    ctx.stroke();
}
}