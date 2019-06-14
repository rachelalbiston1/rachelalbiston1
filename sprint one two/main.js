console.log("main js is called");
var oSet = [];

var myControlObject = new ControlObject(350,40,400,530, colArray[2][6], colArray[2][3], colArray[2][4]);
oSet.push(myControlObject);

function animate(){
    ctx.clearRect(0,0,width,height);
    
    for(var i =0; i<oSet.length; i++){
        oSet[i].update();
    }

    window.requestAnimationFrame(animate);

}
animate();