class Square{
    constructor(xS, yS, w, h, c1){
        this.xC = xS + w/2;
        this.yC = yS + h/2;
        this.s = (w + h)/2;
        this.ang = 45;
        this.fill = c1;
}
    
    update(){
        // drawing out a square
        this.draw();
    }
    
    draw(){
        ctx.save()
        ctx.translate(this.xC, this.yC);
    
        ctx.beginPath();
        ctx.rect(0 - this.s/2, 0 - this.s/2, this.s, this.s);
        ctx.fillStyle = this.fill;
        ctx.fill();
        ctx.restore();
        }
}