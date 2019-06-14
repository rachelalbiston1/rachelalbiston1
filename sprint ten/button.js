console.log("buttons is called");

class Button{
    constructor(text, x, y, w, h, stroke, fill, textC,over,canvas ){
        //declaring the variables 
        this.x = x; //button x value
        this.y =y; //button y value 
        this.w = w; //width of button
        this.h = h; //height of button
        this.stroke = stroke; //stroke of button colour
        this.fill = fill; //button fill colour
        this.textC= textC; //button text colour
        this.text = text; //text written on button
        this.over =  over; //when mouse is over button change colour

        //declare mouse location starts at 0
        this.xMouse = 0; //where mouse starts x
        this.yMouse = 0; //where mouse starts y
        this.insideBoundary= false; //set insideBoundary to false
        this.selected = false; //set button selected to false 

        //event listeners are called (function)
        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
    }

    mMove(e){
        this.xMouse = e.offsetX; //gets x position of the mouse enabling us to call when positioned
        this.yMouse = e.offsetY; //gets y position of the mouse enabling us to call when positioned
        this.insideBoundary = this.boundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h); //setting the box to have boundaries to create 'boundary box' 
    }

    mDown(e){
        if(this.insideBoundary){
            this.selected = true; //button selected if insideBoundary and mouseDown
            Button.selected = this;
            Button.selectedShape = this.text; //linking button with text to know when button is selected
        }
        else{
            this.selected = false; //button not selected if mouse is not down
        }
    }

    update(){
        this.draw(); //call to draw shapes
        this.writeText(); //calling text function
    }

    draw(){
        if(Button.selected == this){
            ctx.fillStyle = "rgba(134, 179, 209,1)"; //colour when button selected
            
        }
        else if(this.insideBoundary){ //mouse inside button boundary change button colour
            ctx.fillStyle = this.over; //colour when mouse is insideBoundary

        }
        else{ //if none of the conditions above apply fill oringal colour of button
            ctx.fillStyle = this.fill; 
        }
        
        ctx.beginPath(); //begin program
        ctx.rect(this.x,this.y,this.w,this.h); //parameters for buttons
        ctx.strokeStyle = this.stroke; //colour of stroke
        ctx.fill(); //run button fill colour
        ctx.stroke(); //run button stroke colour
        
    }
    writeText(){
        ctx.fillStyle = this.textC; //text colour in buttons
        ctx.font = "17px Tahoma"; // size and font of text in buttons
        //centering the text in my buttons
        ctx.textAlign = "center"; //text in center of button
        const baseline = ['middle']; // text in middle of button
        ctx.textBaseline = baseline; //set text to baseline 
        ctx.fillText(this.text,this.x + this.w/2,this.y + this.h/2); //parameters for text on button
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
Button.selected =""; //universal
Button.selectedShape =""; //universal


class mini_Button{
    constructor(text, x, y, w, h, width, radius, degrees, stroke, fill, textC, over, canvas){
        // variables for mini_Button
        this.x = x; //mini_Button x value 
        this.y = y; //mini_Button y value 
        this.w = w; //mini_Button width value 
        this.h = h; //mini_Button height value 
        this.radius = radius; //size of brush
        this.width = width; //size of line
        this.degrees = degrees; //degrees of rotated rectangle 
        this.stroke = stroke; //border colour of mini_Button
        this.fill = fill; // colour of mini_Button
        this.textC = textC; // colour of text in mini_Button
        this.text = text; //text written on button
        this.over =  over; //when mouse is over button change colour

        //delcare that the mouse location starts at 0
        this.xMouse = 0;
        this.yMouse = 0;
        this.insideBoundary = false; //set insideBoundary to false
        this.click = false; //set click to false

        //event listeners are called (function)
        this.element = canvas;
        this.element.addEventListener('mousedown', this.mClick.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
    }

    mClick(e){
        if(this.insideBoundary == true){ //if mouse insideBoundary
            mini_Button.selected = this;
            mini_Button.selectedW = this.width; //variable for width size (line)
            mini_Button.selectedR = this.radius; //variable for radius size (brush)
            mini_Button.selectedD = this.degrees; //variable for degrees (rotated rectangle)
        }
    }
    mMove(e){
        this.xMouse = e.offsetX; //gets x position of the mouse enabling us to call when positioned
        this.yMouse = e.offsetY; //gets y position of the mouse enabling us to call when positioned
        this.insideBoundary = this.boundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h); //setting the box to have boundaries to create 'boundary box' 
    }

    update(){
        this.draw(); //call to draw 
        this.writeText(); //calling text function
        }

    draw(){
        if(mini_Button.selected == this){
            ctx.fillStyle = "rgba(134, 179, 209,1)"; //colour when button selected 
        }

        else if(this.insideBoundary){ //mouse inside button boundary change button colour
            ctx.fillStyle = this.over; //colour when mouse is insideBoundary
           
        }else{
            ctx.fillStyle = this.fill //if not selected or insideBoundary then fill oringal colour of button
        }
        
        ctx.beginPath(); //begin program 
        ctx.rect(this.x, this.y, this.w, this.h); //parameters for mini_Button
        ctx.strokeStyle = this.stroke; //setting stroke colour 
        ctx.lineWidth = 2; //starting line size 
        ctx.fill(); //run fill 
        ctx.stroke(); //run stroke
    }

    writeText(){
        ctx.fillStyle = this.textC; //text colour in mini_Buttons
        ctx.font = "17px Tahoma"; // size and font of text in mini_Buttons
        //centering the text in my buttons
        ctx.textAlign = "center"; //text in center of button
        const baseline = ['middle']; // text in middle of button
        ctx.textBaseline = baseline; //set text to baseline
        ctx.fillText(this.text,this.x + this.w/2,this.y + this.h/2); //parameters for text in mini_Button
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
mini_Button.selected = ""; //universal
mini_Button.selectedW = ""; //universal
mini_Button.selectedR = ""; //universal
mini_Button.selectedD = ""; //universal