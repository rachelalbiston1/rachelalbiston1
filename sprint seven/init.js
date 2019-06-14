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
    [ "rgba(158,158,159,1)", "rgba(153,153,1)", "rgba(220,150,90,1)", 
      "rgba(254,53,53,1)","rgba(254,137,53,1)","rgba(255,254,130,1)",
      "rgba(112,255,82,1)","rgba(58,237,255,1)", "rgba(196,58,255,1)"
    ],
    [ "rgba(255,255,255,0.67)", "rgba(153,153,153,0.67)", "rgba(0,0,0,0.67)", 
       "rgba(255,129,129,0.67)","rgba(255,188,104,0.67)","rgba(255,255,181,0.67)",
       "rgba(163,255,133,0.67)","rgba(134,255,255,0.67)", "rgba(247,109,255,0.67)"
     ],
     [ "rgba(255,255,255,0.33)", "rgba(153,153,153,0.33)", "rgba(0,0,0,0.33)", 
       "rgba(255,206,206,0.33)","rgba(255,213,129,0.33)","rgba(255,255,206,0.33)",
       "rgba(188,255,191,0.33)","rgba(185,255,255,0.33)", "rgba(255,185,255,0.33)"
      ]
]

