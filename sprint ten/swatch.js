console.log("swatch is called");

class Swatch{
    constructor(x, y,w, h, stroke, fill, canvas){
        //declaring the variables 
        this.x = x; //swatch x value
        this.y = y; //swatch y value 
        this.w = w; //swatch width value 
        this.h = h; //swatch height value 
        this.stroke = stroke; //stroke of button colour
        this.swatchcolour = fill; //swatch fill

        //declare mouse location starts at 0
        this.xMouse = 0;
        this.yMouse = 0;
        this.insideBoundary= false; //set insideBoundary to false
        this.selected = false; //set selected to false
        this.over = 'rgb(255,255,153)'; //when mouse is over swatch change stroke colour

        //event listeners are called (function)
        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));

    }

    mMove(e){
        this.xMouse = e.offsetX; //gets x position of the mouse enabling us to call when positioned
        this.yMouse = e.offsetY; //gets y position of the mouse enabling us to call when positioned
        this.insideBoundary = this.boundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h); //setting the box to have boundaries to create 'boundary box' 
    }

    mDown(e){
        if(this.insideBoundary){
            this.selected = this.swatchcolour; 
            Swatch.selected = this;
            Swatch.selectedcolour = this.swatchcolour;
            this.stroke = this.over; //linking this.over colour to stroke colour
        }
        else{
            this.selected = false; //button not selected if mouse is not down
        }
    }

    mUp(e){
        //create the rectangle
        }


    update(){
        this.draw(); //call to draw
    }

    draw(){ 
        var toStroke = false; //no stroke border 
        if(this.insideBoundary || Swatch.selected == this){
            ctx.fillStyle = this.swatchcolour; //if selected run swatch colour 
            toStroke = true; //if selected run yellow stroke border 
        }
        else{
            ctx.fillStyle = this.swatchcolour; //even if not selected run swatch colour 
            ctx.strokeStyle = false; //if not selected don't have yellow stroke  
        }
        ctx.beginPath(); //begin program
        ctx.rect(this.x,this.y,this.w,this.h); //parameters for swatches  
        ctx.strokeStyle = this.over; //linking over colour to stroke fill 
        ctx.fill(); //run fill
        if (toStroke){
            ctx.stroke(); //runs stroke
        }
        ctx.restore(); //restores recently saved canvas   
}

    //boundary check - checking the mouse is inside and not dragging outside the boundary box
    boundsCheck(xM, yM, x, y, w, h){ 
        if(xM > x && xM < x + w && yM > y && yM < y+ h){
            return true; //mouse in boundary
        }else{
            return false; //mouse not in boundary
        }     
}



}
Swatch.selected =""; //universal 
Swatch.selectedcolour = "rgb(0,0,0)"; //default colour when no swatch selected