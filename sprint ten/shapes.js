console.log("background js is called")

class Background{
    constructor(x,y,w,h,c1,c2){
    //define variables 
    this.x = x; //background x value 
    this.y = y; //background y value 
    this.w = w; //background width value
    this.h = h; //background height value 
    this.fill = c1; //background colour 
    this.stroke = c2; //stroke colour 
    }
    
    update(){
        this.drawRect(); //draw background
        this.drawStrokeRect(); //draw stroke 
    }

    drawRect(){
        ctx.beginPath(); //begin program 
        ctx.rect(this.x, this.y, this.w,this.h); //parameters for background 
        ctx.lineWidth = 2; //stroke width 
        ctx.strokeStyle = this.stroke; //stroke colour
        ctx.stroke(); //draw stroke
    }

    drawStrokeRect(){
        ctx.fillStyle = this.fill; //set fill colour 
        ctx.fill(); //fill background 
    }
}


console.log("rectangle js is called")

class Rectangle{
constructor(x,y,w,h,c1){
    //define variables 
    this.x = x; //rectangle x value
    this.y = y; //rectangle y value 
    this.w = w; //rectangle width value 
    this.h = h; //rectangle height value 
    this.fill = c1; //fill colour
    }
    
    update(){
        this.draw(); //draw rectangle 
    }
    
    draw(){
        ctx.beginPath(); //begin program
        ctx.rect(this.x, this.y, this.w, this.h); //parameters for rectangle  
        ctx.fillStyle = this.fill; //set fill colour
        ctx.fill(); //fill rectangle 
    } 
}


console.log("ellipse js is called")

class Ellipse{
constructor(x,y,w,h,c1){
    //define variables 
    this.x = x+w/2;
    this.y = y+h/2;
    this.rX = Math.abs(w/2);
    this.rY = Math.abs(h/2);
    this.fill = c1; //fill colour
}
    
    update(){
        this.draw(); //draw ellipse 
    }
    
    draw(){
        ctx.beginPath(); //begin program
        ctx.ellipse(this.x, this.y, this.rX, this.rY, 0, 0, 2 * Math.PI); //parameters for rectangle  
        ctx.fillStyle = this.fill; //set fill colour
        ctx.fill(); //fill rectangle 
    }
}


console.log("Colour edit js is called")

class Dye{
    constructor(){
        //define the varibales 
        this.fill = Swatch.selectedcolour; //fill colour
    }

    update(){
        this.draw(); //colour edit 
    }

    draw(){
        ctx.fillStyle = this.fill; //set fill colour 
        ctx.fill(); //fill colour edit
    }
}


console.log("Diamond js is called")

class Diamond{
    constructor(xS, yS,dw, dh, c1){
        //define variables 
        this.xC = xS+dw/2
        this.yC = yS+dh/2;
        this.s = (dw+dh)/2;
        this.ang = 45; //set angle to 45 degrees 
        this.fill = c1; //fill colour
}
    
    update(){
        this.draw(); //draw diamond 
    }
    
    draw(){
        ctx.save() 
        ctx.translate(this.xC, this.yC); //selected variables to rotate object
        ctx.rotate(this.ang*Math.PI/180); //rotates object 180 degrees to create diamond 
    
        ctx.beginPath(); //run program
        ctx.rect(0 - this.s/2, 0 - this.s/2, this.s, this.s); //parameters for rectangle  
        ctx.fillStyle = this.fill; //set fill colour
        ctx.fill(); //fill diamond 
        ctx.restore(); //restores recently saved canvas 
        }
}


console.log("circle js is called")

class Circle{
constructor(xS, yS, xM, yM, c1){
    //define variables 
    this.xC = (xS + xM)/2; // centre x
    this.yC = (yS + yM)/2; // centre y
    //Math.abs is to make the values always positive
    this.rX = Math.abs( (xM - xS)/2 ); 
    this.rY = Math.abs( (yM - yS)/2 );
    this.r = 0; //set this.r to 0
    if(this.rX <this.rY){
        this.r = this.rX;
    }
        else{
            this.r = this.rY;
        }
    this.fill = c1; //fill colour
}
    
    update(){
        this.draw(); //draw circle 
    }
    
    draw(){
        ctx.beginPath(); //begin program
        ctx.arc(this.xC, this.yC, this.r, 0, 2*Math.PI); //parameters for circle  
        ctx.fillStyle = this.fill; //set fill colour
        ctx.fill(); //fill circle
    }
}


console.log("sqaure js is called")

class Square{
    constructor(xS, yS, w, h, c1){
        //define variables
        this.xC = xS + w/2; //where x mouse starts add width value divided by 2
        this.yC = yS + h/2; //where y mouse starts add height value divided by 2
        this.s = (w + h)/2; //width value add height value divided by 2
        this.ang = 45; //set angle to 45 degrees
        this.fill = c1; //fill colour
}
    
    update(){
        // drawing out a square
        this.draw();
    }
    
    draw(){
        ctx.save() //save() the default state and restore() to restore later on enabling to draw with default state later 
        ctx.translate(this.xC, this.yC); //selected variables to rotate object
    
        ctx.beginPath(); //begin program
        ctx.rect(0 - this.s/2, 0 - this.s/2, this.s, this.s); //parameters for square   
        ctx.fillStyle = this.fill; //set fill colour
        ctx.fill(); //fill square 
        ctx.restore(); //restores objectSet
        }
}


console.log("Brush js is called")

class Brush{
    constructor(xMouse, yMouse, r, c1){
        //define the variables 
        this.xC = xMouse; // centre x
        this.yC = yMouse; // centre y
        this.r = r; //radius value 
        this.fill = c1; //fill colour
    }

    update(){
        this.draw(); // draw brush
    }

    draw(){
        ctx.beginPath(); //begin program
        ctx.arc(this.xC, this.yC, this.r, 0, 2*Math.PI); //parameters for brush  
        ctx.fillStyle = this.fill; //set fill colour
        ctx.fill(); //fill brush 
    }

}



console.log("line js is called")

class Line{
constructor(xS,yS,xM,yM,dx,c1){
    // variables required for a line
    this.xStart = xS; //where the mouse starts x value 
    this.yStart = yS; //where the mouse starts y value 
    this.xMouse = xM;
    this.yMouse = yM;
    this.dx = dx; //width of line value 
    this.fill = c1; //fill colour
    }
    
    update(){
        this.draw(); // calling for line to be drawn
    }
    
    draw(){
    ctx.strokeStyle = this.fill; //set stroke colour
    ctx.lineWidth = this.dx; //set line width to this.dx
    ctx.lineCap = "round"; //line cap set to round
    ctx.beginPath(); //begin program
    ctx.moveTo(this.xStart, this.yStart); //line starts at point x mouse start and y mouse start are at on canvas
    ctx.lineTo(this.xMouse, this.yMouse); //lines connects the starting point and mouse up point on canvas through x and y mouse values 
    ctx.stroke(); //runs stroke
}
}


class Rotate{
    constructor(xM,yM,xS,yS,w,h,d,c1){
        // define variables
        this.xC = (xS + xM)/2; //centre of x
        this.yC = (yS + yM)/2; // centre of y
        this.w = w; //rotate width value 
        this.h = h; //rotate height value 
        this.degrees = d; //amount the rotation shape rotates by
        this.degreeCount = 0; //starting angle in which it gets added onto 
        this.fill = c1; //fill colour 
    }


    update(){
        this.degreeCount += this.degrees; // the speed of rotation
        this.draw(); // drawing rectangle
    }

    draw(){
        ctx.save(); //save() the default state and restore() to restore later on enabling to draw with default state later 
        ctx.translate(this.xC, this.yC); //selected variables to rotate object
        ctx.rotate(this.degreeCount*Math.PI/180); // rotating the rectangle 
        ctx.beginPath(); //begin program 
        ctx.rect(-this.w/2 ,  -this.h/2, this.w, this.h); //parameter of rotate
        ctx.fillStyle = this.fill; //set fill colour 
        ctx.fill(); //fill rotation object 
        ctx.restore();  //restores objectSet
    }
}