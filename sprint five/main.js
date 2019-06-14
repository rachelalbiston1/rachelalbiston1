console.log("main.js called")
var objectSet = [];

var myDrawingPage = new DrawingPage(290,30,480,540, colArray[2][6], colArray[2][3], colArray[2][4]);
var butOne = new Button("Rectangle", 30, 50, 100, 40, colArray[1][3], colArray[2][6], colArray[1][3], colArray[2][4],canvas);
var butTwo = new Button("Ellipse", 30, 100, 100, 40, colArray[1][3], colArray[2][6], colArray[1][3], colArray[2][3],canvas);
var butNine = new Button("Diamond", 30, 150, 100, 40, colArray[1][3], colArray[2][6], colArray[1][3], colArray[2][2], canvas);

var butThree = new Swatch(30, 280, 65, 40, colArray[1][1], colArray[2][6], canvas); 
var butFour = new Swatch(110, 280, 65, 40, colArray[1][1], colArray[1][6], canvas); 
var butFive = new Swatch(190, 280, 65, 40, colArray[1][1], colArray[2][5], canvas); 
var butSix = new Swatch(30, 230, 65, 40, colArray[1][1], colArray[2][7], canvas); 
var butSeven = new Swatch(110, 230, 65, 40, colArray[1][1], colArray[2][1], canvas); 
var butEight = new Swatch(190, 230, 65, 40, colArray[1][1], colArray[2][8], canvas); 

objectSet.push(myDrawingPage,butOne,butTwo,butThree,butFour,butFive,butSix,butSeven,butEight,butNine);

function animate(){
    ctx.clearRect(0,0,width,height);
    
    
    for(var i =0; i<objectSet.length; i++){
        objectSet[i].update();
    }

    window.requestAnimationFrame(animate);
}
animate();