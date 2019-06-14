console.log("init js file has been called");
// ----------------- set up code includes resolution management
var myScale = 0;

function setupCanvas(canvas) {
// Get the device pixel ratio, falling back to 1.
var dpr = window.devicePixelRatio || 1;
myScale=dpr;
// Get the size of the canvas in CSS pixels.
var rect = canvas.getBoundingClientRect();
console.log(rect.width);
console.log(rect.height);
// Give the canvas pixel dimensions of their CSS
// size * the device pixel ratio.
canvas.width = rect.width * dpr;
canvas.height = rect.height * dpr;
var ctx = canvas.getContext('2d');
// Scale all drawing operations by the dpr, so you
// don't have to worry about the difference.
ctx.scale(dpr, dpr);
return ctx;
}
// basic drawing on the canvas with no functions


// Now this line will be the same size on the page
// but will look sharper on high-DPI devices!
var ctx = setupCanvas(document.querySelector('#myCanvas'));
canvas = document.querySelector('#myCanvas');
const width = canvas.width/myScale;
const height = canvas.height/myScale;

var colArray=[
    [ "rgba(255,255,1,1)", "rgba(153,153,1)", "rgba(220,150,90,1)", 
      "rgba(204,0,0,1)","rgba(255,204,51,1)","rgba(51,51,255,1)",
      "rgba(255,102,102,1)","rgba(255,255,153,1)", "rgba(0,153,204,1)"
    ],
    [ "rgba(255,255,255,0.67)", "rgba(153,153,153,0.67)", "rgba(0,0,0,0.67)", 
       "rgba(204,0,0,0.67)","rgba(255,204,51,0.67)","rgba(51,51,255,0.67)",
       "rgba(255,102,102,0.67)","rgba(255,255,153,0.67)", "rgba(0,153,204,0.67)"
     ],
     [ "rgba(255,255,255,0.33)", "rgba(153,153,153,0.33)", "rgba(0,0,0,0.33)", 
       "rgba(204,0,0,0.33)","rgba(255,204,51,0.33)","rgba(51,51,255,0.33)",
       "rgba(255,102,102,0.33)","rgba(255,255,153,0.33)", "rgba(0,153,204,0.33)"
      ],
        [ "rgba(246,148,193,0.33)", "rgba(169, 222, 249,0.33)", "rgba(255,216,228,0.33)", 
        "rgba(165,226,233,0.33)","rgba(76,133,119,0.33)","rgba(187,184,145,0.33)",
        "rgba(198, 151, 252, 0.33)","rgba(39,48,67,0.33)", "rgba(97, 99, 44, 0.22)"
       ],
       ["rgba(243,179,166,0.33)", "rgba(69,74,222,0.33)", "rgba(245,100,169,0.33)", 
       "rgba(143,213,166,0.33)","rgba(204,63,12,0.33)"]
]