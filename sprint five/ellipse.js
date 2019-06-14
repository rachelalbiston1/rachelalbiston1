console.log("ellipse js is called")

class Ellipse{
constructor(x,y,w,h,c1){
    this.x = x+w/2;
    this.y = y+h/2;
    this.rx = Math.abs(w/2);
    this.ry = Math.abs(h/2);
    this.fill = c1;
}
    
    update(){
        this.draw();
    }
    
    draw(){
        ctx.beginPath();
        ctx.ellipse(this.x, this.y, this.rx, this.ry, 0, 0, 2 * Math.PI);
        ctx.fillStyle = this.fill;
        ctx.fill();
    }
    
}