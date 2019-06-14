console.log("main.js called")
var objectSet = [];

var myDrawingPage = new DrawingPage(290,30,480,540, colArray[2][6], colArray[2][3], colArray[2][4]);
var butOne = new Button("Rectangle", 30, 50, 100, 40, colArray[1][3], colArray[2][6], colArray[1][3], colArray[2][4],canvas);
var butTwo = new Button("Ellipse", 30, 100, 100, 40, colArray[1][3], colArray[2][6], colArray[1][3], colArray[2][3],canvas);

objectSet.push(myDrawingPage,butOne,butTwo);

function animate(){
    ctx.clearRect(0,0,width,height);
    
    
    for(var i =0; i<objectSet.length; i++){
        objectSet[i].update();
    }

    window.requestAnimationFrame(animate);
}
animate();