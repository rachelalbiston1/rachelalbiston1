console.log("buttons is called");

class Button{
    constructor(text, x, y,w, h, stroke, fill, textC,over,canvas ){
        this.x = x;
        this.y =y;
        this.w = w;
        this.h = h;
        this.stroke =stroke;
        this.fill = fill;
        this.textC= textC;
        this.text = text;
        this.over =  over;

        this.xMouse = 0;
        this.yMouse = 0;
        this.insideBoundary= false;
        this.selected = false;

        this.element = canvas;
        this.element.addEventListener('mousedown', this.mDown.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
    }

    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        this.insideBoundary = this.boundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
    }

    mDown(e){
        if(this.insideBoundary){
            this.selected = true;
            Button.selected = this;
            Button.selectedShape = this.text;
        }
        else{
            this.selected = false;
        }
    }

    update(){
        this.draw();
        this.writeText();
    }

    draw(){
        if(Button.selected == this){
            ctx.fillStyle = "rgba(134, 179, 209, 1)"; //colour when button selected
            
        }
        else if(this.insideBoundary){
            ctx.fillStyle = this.over;
            ctx.fillStyle = colArray[0][0];

        }
        else{
            ctx.fillStyle = this.fill;
        }
        
        ctx.beginPath();
        ctx.rect(this.x,this.y,this.w,this.h);
        ctx.strokeStyle = this.stroke;
        ctx.fill();
        ctx.stroke();
        
    }
    writeText(){
        ctx.fillStyle = this.textC;
        ctx.font = "17px Tahoma"; // size and font of text in buttons
        //centering the text in my buttons
        ctx.textAlign = "center"; 
        const baseline = ['middle'];
        ctx.textBaseline = baseline;
        ctx.fillText(this.text,this.x + this.w/2,this.y + this.h/2);
    }
    boundsCheck(xM, yM, x, y, w, h){ 
        if(xM > x && xM < x + w && yM > y && yM < y+ h){
            return true;
        }else{
            return false;
        }       
}
}
Button.selected ="";
Button.selectedShape ="";


class mini_Button{
    constructor(text, x, y, w, h, width, stroke, fill, textC, over, canvas){
        // size of mini_Button
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.width = width; //size of line
        this.stroke = stroke; //border colour of mini_Button
        this.fill = fill; // colour of mini_Button
        this.textC = textC; // colour of text in mini_Button
        this.text = text;
        this.over = over;

        //delcare that the mouse location starts at 0
        this.xMouse = 0;
        this.yMouse = 0;
        this.insideBoundary = false;
        this.click = false;

        this.element = canvas;
        this.element.addEventListener('mousedown', this.mClick.bind(this));
        this.element.addEventListener('mousemove', this.mMove.bind(this));
    }

    mClick(e){
        if(this.insideBoundary == true){
            mini_Button.selected = this;
            mini_Button.selectedW = this.width;
        }
    }
    mMove(e){
        this.xMouse = e.offsetX;
        this.yMouse = e.offsetY;
        this.insideBoundary = this.boundsCheck(this.xMouse, this.yMouse, this.x, this.y, this.w, this.h);
    }

    update(){
        this.draw();
        this.writeText();
        }

    draw(){
        if(this.insideBoundary){
            ctx.fillStyle = this.over;  
        }
        
        else{
            ctx.fillStyle = this.fill
        }
        
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.strokeStyle = this.stroke;
        ctx.lineWidth = 2;
        ctx.fill();
        ctx.stroke();

    }

    writeText(){
        ctx.fillStyle = this.textC;
        ctx.font = "17px Tahoma";
        ctx.textAlign = "center";
        const baseline = ['middle'];
        ctx.textBaseline = baseline;
        ctx.fillText(this.text,this.x + this.w/2,this.y + this.h/2);
    }

    boundsCheck(xM, yM, x, y, w, h){ 
    if(xM > x && xM < x + w && yM > y && yM < y+ h){
        return true;
    }else{
        return false;
    }
    }

}
mini_Button.selected = ""; //universal
mini_Button.selectedW = ""; //universal