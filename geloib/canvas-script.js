// Definitions
var canvas = document.getElementById("hello-world-canvas"); // handle the canvas
var context = canvas.getContext("2d"); // handle the context 

// Blue rectangle
context.fillStyle = "blue";
context.fillRect(10,40,30,70);

// Yellow rectangle
context.fillStyle = "yellow";
context.fillRect(50,30,60,30);
