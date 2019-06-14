console.log("Control object js")

class DrawingPage{
    constructor(x,y,w,h,c1){
        //define variables 
        // these variables define the width and the height of the rectangle drawn on the screen 
        this.objectSet = []; // empty list 
        this.x=x; //drawingPage x value  
        this.y=y; //drawingPage y value
        this.w=w; //drawingPage width 
        this.h=h; //drawingPage height 
        this.fill=c1; //colour of drawingPage

        //declare mouse location starts at 0
        this.xMouse = 0;
        this.yMouse = 0;
        this.xMouseStart = 0;
        this.yMouseStart = 0;
        this.mouseDown = false; //mouse is not down so set as false
        // variables define the measurements for the boundary rectangle that is drawn on the screen
        this.insideBoundary = false; //set insideBoundary to false
        
        //set everything to 0
        this.degrees = 0; //declare degrees value starting at 0
        this.r = 0; //declare radius value starting at 0
        this.dw = 0;
        this.dh = 0;
        
        //event listeners are called (function)
        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
        this.element.addEventListener('mouseup', this.mUp.bind(this));
    }
    
    mDown(e){
        this.xMouseStart = e.offsetX; //gets x position of the mouse enabling us to call when positioned
        this.yMouseStart = e.offsetY; //gets y position of the mouse enabling us to call when positioned
        if(this.insideBoundary == true){ //testing to see if mouse recognises boundary box via true/false 
            this.mouseDown = true;} //testing to see if mouse recognises if mouse is down in box via true/false 

        // colour editing without a rectangle guide 
        if(this.mouseDown == true && this.insideBoundary == true){ //pushed shapes will appear only if mouse is down inside boundary box
            if(Button.selectedShape == "Colour Edit"){
                var dye = new Dye(Swatch.selectedcolour);
                this.objectSet.push(dye);} //pushing shape into objectSet to appear on canvas when conditions are true
        }
    }

    mMove(e){
        this.xMouse = e.offsetX; //gets x position of the mouse enabling us to call when positioned
        this.yMouse = e.offsetY; //gets y position of the mouse enabling us to call when positioned
        this.insideBoundary = this.boundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h); //setting the box to have boundaries to create 'boundary box' 

         // creating brush without a rectangle guide
         if(this.mouseDown == true && this.insideBoundary == true){ //pushed shapes will appear only if mouse is down inside boundary box
            this.r = mini_Button.selectedR; // radius = the different size buttons
            if(Button.selectedShape == "Brush"){
                var brush = new Brush(this.xMouse, this.yMouse, this.r, Swatch.selectedcolour);
                this.objectSet.push(brush);} //pushing shape into objectSet to appear on canvas when conditions are true
}
    }

// colArray here changes colours of shapes
    mUp(e){
        // creating undo button
        if(Button.selectedShape == "Undo"){
            this.objectSet.pop(); //remove latest object added to objectSet
            Button.selectedShape =""; //universal 
        }

        // creating reset button
        else if(Button.selectedShape == "Reset"){
            this.objectSet = []; //clear objectSet
            Button.selectedShape =""; //universal
        }

        var objectColour = Swatch.selectedcolour; //setting objectColour to colour of chosen swatch by user
        if(this.mouseDown == true && this.insideBoundary == true){ //pushed shapes will appear only if mouse is down inside boundary box
        this.dx = mini_Button.selectedW; //link width figure to variable to be included in the line class
        this.degrees = mini_Button.selectedD; //link degrees figure to variable to be included in the rotate class
        if(Button.selectedShape == "Rectangle"){
            var rect = new Rectangle(this.xMouseStart, this.yMouseStart, this.dw, this.dh, objectColour);
              this.objectSet.push(rect);} //pushing shape into objectSet to appear on canvas when conditions are true

        else if(Button.selectedShape == "Ellipse"){
            var ellip = new Ellipse(this.xMouseStart, this.yMouseStart, this.dw, this.dh, objectColour);
            this.objectSet.push(ellip);} //pushing shape into objectSet to appear on canvas when conditions are true

       else if(Button.selectedShape == "Diamond"){
           var diam = new Diamond(this.xMouseStart, this.yMouseStart, this.dw, this.dh, objectColour);
            this.objectSet.push(diam);} //pushing shape into objectSet to appear on canvas when conditions are true

        else if(Button.selectedShape == "Line"){
            var line = new Line(this.xMouseStart, this.yMouseStart, this.xMouse, this.yMouse, this.dx, objectColour);
            this.objectSet.push(line);} //pushing shape into objectSet to appear on canvas when conditions are true

        else if(Button.selectedShape == "Circle"){
            var circ = new Circle(this.xMouseStart, this.yMouseStart, this.xMouse, this.yMouse, objectColour);
            this.objectSet.push(circ);} //pushing shape into objectSet to appear on canvas when conditions are true

        else if(Button.selectedShape == "Square"){
            var squar = new Square(this.xMouseStart, this.yMouseStart, this.dw, this.dh, objectColour);
            this.objectSet.push(squar);} //pushing shape into objectSet to appear on canvas when conditions are true

        else if (Button.selectedShape == "Rotation"){
            var rotate = new Rotate(this.xMouse, this.yMouse, this.xMouseStart, this.yMouseStart, this.dw, this.dh, this.degrees, objectColour);
            this.objectSet.push(rotate);} //pushing shape into objectSet to appear on canvas when conditions are true
            
        // create rectangle -- crete instance of the rectangle with the parameters
        // push this new object into the array (which will be constantly looped through in the 
        // update function
       
    }
    this.mouseDown = false; //mouseDown set to false if not inside boundary
}

    update(){
        // calling function for background rectangle
        ctx.save(); //save() the default state and restore() to restore later on enabling to draw with default state later 
        // makes the rectangle for drawing canvas
        ctx.beginPath(); //begins program
        this.drawRect(this.x, this.y, this.w, this.h); // parameters for rectangle
        ctx.clip(); //prevent drawing from going outside boundary box 
        this.drawStrokeRect(this.x, this.y, this.w, this.h); //parameters for stroke

        //pushes objectSet onto string 
        for(var i =0; i<this.objectSet.length; i++){
           this.objectSet[i].update();
        }

        //calculation of guided rectangle 
        this.dw = this.xMouse - this.xMouseStart;
        this.dh = this.yMouse - this.yMouseStart;
        if(this.mouseDown == true && this.insideBoundary == true){ //checking conditions to ensure program can draw guided rectangle
            this.draw(); // this draws the guided rectangle
        }
        ctx.restore(); //restores objectSet
    }
    

    draw(){ 
        // for drawing guided rectangle, what shapes it'll run with
        if(Button.selectedShape == "Line" || Button.selectedShape == "Rectangle" || Button.selectedShape == "Ellipse"   
        || Button.selectedShape == "Circle" || Button.selectedShape == "Square" || Button.selectedShape == "Diamond" || Button.selectedShape == "Rotation"){
        //telling program how to draw the guided rectangle by defining variables 
        this.drawRect(this.xMouseStart, this.yMouseStart, this.dw, this.dh);
    }
}

    // this function is to drag a rectangle out 
    drawRect(x,y,w,h){
        ctx.beginPath(); //begin program
        ctx.rect(x,y,w,h); // parameters of the guided rectangle
        ctx.lineWidth = 2; //line width of guided rectangle 
        ctx.strokeStyle = colArray[2][2]; // defining what colour the stroke is when drawing the guided rectangle
        ctx.stroke(); //run guided rectangle stroke
    }

    // this function is to create the boundary box
    drawStrokeRect(){
        ctx.fillStyle = colArray[0][1]; // colour of boundary box
        ctx.fill(); //filling the boundary box with stated colour
    }

    //boundary check - checking the mouse is inside and not dragging outside the boundary box
    boundsCheck(xM, yM, x, y, w, h){ 
        if(xM > x && xM < (x + w) && yM > y && yM < (y+ h)){
            return true; //mouse in boundary
        }else{
            return false; //mouse not in boundary
        }
}
}