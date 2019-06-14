console.log("swatch is called");

class Swatch{
    constructor(x, y,w, h, stroke, fill, canvas){
        this.x = x;
        this.y =y;
        this.w = w;
        this.h = h;
        this.stroke = stroke;
        this.swatchcolour = fill;

        this.xMouse = 0;
        this.yMouse = 0;
        this.insideBoundary= false;
        this.selected = false;
        this.over = 'rgb(255,255,153)';

        this.rectBound = false;

        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));

    }

    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        this.insideBoundary = this.boundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
    }

    mDown(e){
        if(this.insideBoundary){
            this.selected = this.swatchcolour;
            Swatch.selected = this;
            Swatch.selectedcolour = this.swatchcolour;
            this.stroke = this.over;
        }
        else{
            this.selected = false;
        }
    }

    mUp(e){
        //create the rectangle
        }


    update(){
        this.draw();
    }

    draw(){ 
        var toStroke = false;
        if(this.insideBoundary || Swatch.selected == this){
            ctx.fillStyle = this.swatchcolour;
            toStroke = true;
        }
        else{
            ctx.fillStyle = this.swatchcolour;
            ctx.strokeStyle = false;
        }
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.w,this.h);
        ctx.strokeStyle = this.over;
        ctx.fill();
        if (toStroke){
            ctx.stroke(); 
        }
        ctx.restore();       
}


    boundsCheck(xM, yM, x, y, w, h){ 
        if(xM > x && xM < x + w && yM > y && yM < y+ h){
            return true;
        }else{
            return false;
        }     
}



}
Swatch.selected ="";
Swatch.selectedcolour = "rgb(0,0,0)";