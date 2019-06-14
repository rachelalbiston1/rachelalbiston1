console.log("main.js called")
var objectSet = []; //empty list

//creating Drawing Page to store drawings 
var myDrawingPage = new DrawingPage(290,30,500,550, colArray[2][2], canvas);
//creating myBackground to be a white background for the colour swatches
var myBackground = new Background (20,200,247,363, colArray[2][2], colArray[0][2]);

//creating first row of buttons - Rectangle and Ellipse
var butRect = new Button("Rectangle", 30, 40, 100, 40, colArray[0][2], colArray[2][2], colArray[0][2], colArray[1][0], canvas);
var butElli = new Button("Ellipse", 160, 40, 100, 40, colArray[0][2], colArray[2][2], colArray[0][2], colArray[1][0], canvas);

//creating second row of buttons - Colour Edit and Diamond
var butDye = new Button("Colour Edit", 30, 90, 100, 40, colArray[0][2], colArray[2][2], colArray[0][2], colArray[1][0], canvas);
var butDiam = new Button("Diamond", 160, 90, 100, 40, colArray[0][2], colArray[2][2], colArray[0][2], colArray[1][0], canvas);

//creating third row of buttons - Circle and Sqaure
var butCirc = new Button("Circle", 30, 140, 100, 40, colArray[0][2], colArray[2][2], colArray[0][2], colArray[1][0], canvas);
var butSquar = new Button("Square", 160, 140, 100, 40, colArray[0][2], colArray[2][2], colArray[0][2], colArray[1][0], canvas);

//creating fourth collum of buttons - Brush, Line and Rotate
var butBrush = new Button("Brush", 850, 40, 100, 40, colArray[0][2], colArray[2][2], colArray[0][2], colArray[1][0], canvas);
var butLine = new Button("Line", 850, 170, 100, 40, colArray[0][2], colArray[2][2], colArray[0][2], colArray[1][0], canvas);
var butRotate = new Button("Rotation", 850, 300, 100, 40, colArray[0][2], colArray[2][2], colArray[0][2], colArray[1][0], canvas);

//creating fifth row of buttons - Undo and Reset
var butUndo = new Button("Undo", 850, 480, 100, 40, colArray[2][2], colArray[0][2], colArray[2][2], colArray[1][0], canvas);
var butReset = new Button("Reset", 850, 530, 100, 40, colArray[2][2], colArray[0][2], colArray[2][2], colArray[1][0], canvas);
objectSet.push(myDrawingPage,myBackground,butRect,butElli,butDiam,butLine,butCirc,butSquar,butDye,butBrush,butRotate,butUndo,butReset);

//radius button for the size of brush
//width button for the size of the line
//degree button for the rotation of the rectangle 
for ( var j=0 ; j<3 ;j++){
    for (var i=0 ; i<5 ;i++){
        var temp = new mini_Button((3+3*i).toString(),800+40*i, 100+130*j, 30, 30, 3+3*i, 3+3*i, 1+2*i, colArray[0][2], colArray[2][2], colArray[0][2], colArray[1][0], canvas);
        objectSet.push(temp); 
    }
}

// colour swatch array loop
for( var j=0 ; j<7 ;j++){
    for( var i=0 ; i<3 ;i++){
        var temp = new Swatch(30+80*i, 210+50*j, 65, 40, colArray[1][1], colArray[i][2+j], canvas);
        objectSet.push(temp);
    }
}

//loop for objectSet
function animate(){
    ctx.clearRect(0,0,width,height);
    
    //pushes objectSet onto string
    for(var i =0; i<objectSet.length; i++){ //clear rectangle
        objectSet[i].update();
    }

    window.requestAnimationFrame(animate);
}
animate();