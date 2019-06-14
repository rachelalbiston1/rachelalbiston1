console.log("Diamond js is called")

class Diamond{
    constructor(xS, yS,dw, dh, c1){
        this.xC = xS+dw/2
        this.yC = yS+dh/2;
        this.s = (dw+dh)/2;
        this.ang = 45;
        this.fill = c1;
}
    
    update(){
        this.draw();
    }
    
    draw(){
        ctx.save()
        ctx.translate(this.xC, this.yC);
        ctx.rotate(this.ang*Math.PI/180);
    
        ctx.beginPath();
        ctx.rect(0 - this.s/2, 0 - this.s/2, this.s, this.s);
        ctx.fillStyle = this.fill;
        ctx.fill();
        ctx.restore();
        }
}
