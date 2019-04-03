// Definitions
var canvas = document.getElementById("hello-world-canvas"); // handle the canvas
var context = canvas.getContext("2d"); // handle the context .. we have 3 dimensional context too but here we use 2d context
// these are the core object that we will use in everywhere .

// Blue rectangle
context.fillStyle = "blue";
context.fillRect(15,45,30,70);

// Yellow rectangle
context.fillStyle = "yellow";
context.fillRect(50,30,60,30);
