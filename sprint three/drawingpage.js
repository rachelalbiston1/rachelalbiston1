console.log("Control object js")

class DrawingPage{
    constructor(x,y,w,h,c1,c2,c3){
        this.objectSet = [];
        this.x=x; 
        this.y=y;
        this.w=w;
        this.h=h;
        // these variables define the width and the height of the rectangle drawn on the screen 
        this.fill=c1;
        this.stroke=c2;
        this.over=c3;

        this.xMouse = 0;
        this.yMouse = 0;
        this.xMouseStart = 0;
        this.yMouseStart = 0;
        this.mouseDown = false;
        // variables define the measurements for the boundary rectangle that is drawn on the screen
        this.insideBoundary = false;

        this.dw = 0;
        this.dh = 0;
        this.selectedcolourR = 'rgb(250, 100, 100, 0.3)';
        this.selectedcolourE = 'rgb(200, 255, 90, 0.7)';

        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));
    }
    
    mDown(e){
        
        this.xMouseStart = e.offsetX;
        this.yMouseStart = e.offsetY;
        if(this.insideBoundary == true){
            this.mouseDown = true;}
        
    }

    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        this.insideBoundary = this.boundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
    }

    mUp(e){
        console.log(Button.selectedShape);
        if(this.mouseDown == true && this.insideBoundary == true)
        if(Button.selectedShape == "Rectangle"){
            var rect = new Rectangle(this.xMouseStart, this.yMouseStart, this.dw, this.dh, this.selectedcolourR);

        this.objectSet.push(rect);}
        else if (Button.selectedShape == "Ellipse"){
            var ellip = new Ellipse(this.xMouseStart, this.yMouseStart, this.dw, this.dh, this.selectedcolourE);
       this.objectSet.push(ellip);}
            
        // create rectangle -- crete instance of the rectangle with the parameters
        // push this new object into the array (which will be constantly looped through in the 
        // update function)
        this.mouseDown = false;
    }

    update(){
        // calling function for background rectangle
        this.drawRect(this.x, this.y, this.w, this.h);
        this.drawStrokeRect(this.x, this.y, this.w, this.h);

        for(var i =0; i<this.objectSet.length; i++){
           this.objectSet[i].update();
        }

        this.dw = this.xMouse - this.xMouseStart;
        this.dh = this.yMouse - this.yMouseStart;
        if(this.mouseDown == true && this.insideBoundary == true){
            this.draw();
        }
    }

    draw(){ 
        // for drawing rectangle 
        this.drawRect(this.xMouseStart, this.yMouseStart, this.dw, this.dh);
    }

    drawRect(x,y,w,h){
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.lineWidth = 2;
        ctx.strokeStyle = colArray[2][6];
        ctx.stroke();
    }

    drawStrokeRect(){
        ctx.fillStyle = 'rgb(260, 110, 150, 0.2)';
        ctx.fill();
    }

    boundsCheck(xM, yM, x, y, w, h){ 
        if(xM > x && xM < (x + w) && yM > y && yM < (y+ h)){
            return true;
        }else{
            return false;
        }
}
}
