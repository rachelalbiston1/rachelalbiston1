console.log("background js is called")

class Background{
    constructor(x,y,w,h,c1,c2){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.fill = c1;
    this.s = c2;
    }
    
    update(){
        this.drawRect();
        this.drawStrokeRect();
    }

    drawRect(){
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w,this.h);
        ctx.lineWidth = 2;
        ctx.strokeStyle = this.s;
        ctx.stroke();
    }

    drawStrokeRect(){
        ctx.fillStyle = this.fill;
        ctx.fill();
    }
}