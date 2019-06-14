console.log("main.js called")
var objectSet = []; //empty list

var myDrawingPage = new DrawingPage(290,30,500,550);
var myBackground = new Background (20,200,247,363, colArray[2][0], colArray[2][2]);
var butRect = new Button("Rectangle", 30, 40, 100, 40, colArray[2][2], colArray[2][0], colArray[2][2], colArray[2][4],canvas);
var butElli = new Button("Ellipse", 160, 40, 100, 40, colArray[2][2], colArray[2][0], colArray[2][2], colArray[2][4],canvas);
var butDiam = new Button("Diamond", 160, 90, 100, 40, colArray[2][2], colArray[2][0], colArray[2][2], colArray[2][4], canvas);
var butLine = new Button("Line", 850, 80, 100, 40, colArray[2][2], colArray[2][0], colArray[2][2], colArray[2][4], canvas);
var butCirc = new Button("Circle", 90, 140, 110, 40, colArray[2][2], colArray[2][0], colArray[2][2], colArray[2][4], canvas);
var butSquar = new Button("Square", 30, 90, 100, 40, colArray[2][2], colArray[2][0], colArray[2][2], colArray[1][0], canvas);
var butUndo = new Button("Undo", 850, 480, 100, 40, colArray[2][0], colArray[2][2], colArray[2][0], colArray[1][0], canvas);
var butReset = new Button("Reset", 850, 530, 100, 40, colArray[2][0], colArray[2][2], colArray[2][0], colArray[1][0], canvas);
objectSet.push(myDrawingPage,myBackground,butRect,butElli,butDiam,butLine,butCirc,butSquar,butUndo,butReset);

//width button for the size of the line
var mbutF = new mini_Button("2", 800, 140, 30, 30, 2, colArray[2][2], colArray[2][0], colArray[2][2], colArray[1][0], canvas);
var mbutG = new mini_Button("5", 840, 140, 30, 30, 5, colArray[2][2], colArray[2][0], colArray[2][2], colArray[1][0], canvas);
var mbutH = new mini_Button("10", 880, 140, 30, 30, 10, colArray[2][2], colArray[2][0], colArray[2][2], colArray[1][0], canvas);
var mbutI = new mini_Button("15", 920, 140, 30, 30, 15, colArray[2][2], colArray[2][0], colArray[2][2], colArray[1][0], canvas);
var mbutJ = new mini_Button("20", 960, 140, 30, 30, 20, colArray[2][2], colArray[2][0], colArray[2][2], colArray[1][0], canvas);
objectSet.push(mbutF, mbutG, mbutH, mbutI, mbutJ);

// colour swatch array
for( var i=0 ; i<3 ;i++){
    var temp = new Swatch(30+80*i, 510, 65, 40, colArray[1][1], colArray[i][0], canvas);
    objectSet.push(temp);
}

for( var i=0 ; i<3 ;i++){
    var temp = new Swatch(30+80*i, 210, 65, 40, colArray[1][1], colArray[i][3], canvas);
    objectSet.push(temp);
}

for( var i=0 ; i<3 ;i++){
    var temp = new Swatch(30+80*i, 260, 65, 40, colArray[1][1], colArray[i][4], canvas);
    objectSet.push(temp);
}

for( var i=0 ; i<3 ;i++){
    var temp = new Swatch(30+80*i, 310, 65, 40, colArray[1][1], colArray[i][5], canvas);
    objectSet.push(temp);
}

for( var i=0 ; i<3 ;i++){
    var temp = new Swatch(30+80*i, 360, 65, 40, colArray[1][1], colArray[i][6], canvas);
    objectSet.push(temp);
}

for( var i=0 ; i<3 ;i++){
    var temp = new Swatch(30+80*i, 410, 65, 40, colArray[1][1], colArray[i][7], canvas);
    objectSet.push(temp);
}

for( var i=0 ; i<3 ;i++){
    var temp = new Swatch(30+80*i, 460, 65, 40, colArray[1][1], colArray[i][8], canvas);
    objectSet.push(temp);
}

function animate(){
    ctx.clearRect(0,0,width,height);
    
    for(var i =0; i<objectSet.length; i++){
        objectSet[i].update();
    }

    window.requestAnimationFrame(animate);
}
animate();