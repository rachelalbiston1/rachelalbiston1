console.log("Control object js")

class DrawingPage{
    constructor(x,y,w,h,c1){
        this.objectSet = [];
        this.x=x; 
        this.y=y;
        this.w=w;
        this.h=h;
        // these variables define the width and the height of the rectangle drawn on the screen 
        this.fill=c1;

        this.xMouse = 0;
        this.yMouse = 0;
        this.xMouseStart = 0;
        this.yMouseStart = 0;
        this.mouseDown = false;
        // variables define the measurements for the boundary rectangle that is drawn on the screen
        this.insideBoundary = false;
        
        this.r = 0;
        this.dw = 0;
        this.dh = 0;
        
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

         // creating brush without a rectangle guide
         if(this.mouseDown == true && this.insideBoundary == true){
            this.r = mini_Button.selectedR; // radius = the different size buttons
            if(Button.selectedShape == "Brush"){
                var brush = new Brush(this.xMouse, this.yMouse, this.r, Swatch.selectedcolour);
                this.objectSet.push(brush);}
}
    }

// colArray here changes colours of shapes
    mUp(e){
        // creating undo button
        if(Button.selectedShape == "Undo"){
            this.objectSet.pop();
            Button.selectedShape ="";
        }

        // creating reset button
        else if(Button.selectedShape == "Reset"){
            this.objectSet = [];
            Button.selectedShape ="";
        }

        var objectColour = Swatch.selectedcolour; //setting objectColour to colour of chosen swatch by user
        if(this.mouseDown == true && this.insideBoundary == true){
        this.dx = mini_Button.selectedW;
        if(Button.selectedShape == "Rectangle"){
            var rect = new Rectangle(this.xMouseStart, this.yMouseStart, this.dw, this.dh, objectColour);
              this.objectSet.push(rect);}

        else if(Button.selectedShape == "Ellipse"){
            var ellip = new Ellipse(this.xMouseStart, this.yMouseStart, this.dw, this.dh, objectColour);
            this.objectSet.push(ellip);}

       else if(Button.selectedShape == "Diamond"){
           var diam = new Diamond(this.xMouseStart, this.yMouseStart, this.dw, this.dh, objectColour);
            this.objectSet.push(diam);}

        else if(Button.selectedShape == "Line"){
            var line = new Line(this.xMouseStart, this.yMouseStart, this.xMouse, this.yMouse, this.dx, objectColour);
            this.objectSet.push(line);}

        else if(Button.selectedShape == "Circle"){
            var circ = new Circle(this.xMouseStart, this.yMouseStart, this.xMouse, this.yMouse, objectColour);
            this.objectSet.push(circ);}

        else if(Button.selectedShape == "Square"){
            var squar = new Square(this.xMouseStart, this.yMouseStart, this.dw, this.dh, objectColour);
            this.objectSet.push(squar);}
            
        // create rectangle -- crete instance of the rectangle with the parameters
        // push this new object into the array (which will be constantly looped through in the 
        // update function
       
    }
    this.mouseDown = false;
}

    update(){
        // calling function for background rectangle
        ctx.save(); 
        // makes the rectangle for drawing canvas
        ctx.beginPath(); //begins program
        this.drawRect(this.x, this.y, this.w, this.h); // boundary 
        ctx.clip(); //prevent drawing from going outside boundary box 
        this.drawStrokeRect(this.x, this.y, this.w, this.h);

        for(var i =0; i<this.objectSet.length; i++){
           this.objectSet[i].update();
        }

        this.dw = this.xMouse - this.xMouseStart;
        this.dh = this.yMouse - this.yMouseStart;
        if(this.mouseDown == true && this.insideBoundary == true){ // this draws the guided rectangle
            this.draw();
        }
        ctx.restore();
    }
    

    draw(){ 
        // for drawing guided rectangle 
        if(Button.selectedShape == "Line" || Button.selectedShape == "Rectangle" || Button.selectedShape == "Ellipse"   
        || Button.selectedShape == "Circle" || Button.selectedShape == "Square" || Button.selectedShape == "Diamond"){
        this.drawRect(this.xMouseStart, this.yMouseStart, this.dw, this.dh);
    }
}

    // this function is to drag a rectangle out 
    drawRect(x,y,w,h){
        ctx.beginPath();
        ctx.rect(x,y,w,h);
        ctx.lineWidth = 2; //width of guided rectangle 
        ctx.strokeStyle = colArray[2][0]; // defining what colour the stroke is when we are drawing the rectangle
        ctx.stroke();
    }

    drawStrokeRect(){
        ctx.fillStyle = colArray[2][2]; // colour of boundary box
        ctx.fill(); //filling the boundary box with colour
    }

    // this is checking boundary
    boundsCheck(xM, yM, x, y, w, h){ 
        if(xM > x && xM < (x + w) && yM > y && yM < (y+ h)){
            return true;
        }else{
            return false;
        }
}
}