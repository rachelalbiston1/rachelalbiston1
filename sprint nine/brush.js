console.log("Brush js is called")

class Brush{
    constructor(xMouse, yMouse, r, c1){
        this.xC = xMouse; // centre x
        this.yC = yMouse; // centre y
        this.r = r;
        this.fill = c1;
    }

    update(){
        // drawing brush
        this.draw();
    }

    draw(){
        ctx.beginPath();
        ctx.arc(this.xC, this.yC, this.r, 0, 2*Math.PI);
        ctx.fillStyle = this.fill;
        ctx.fill();
    }

}

