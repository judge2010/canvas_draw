var mouseEvent="";
var lastpositionofX,lastpositionofY;
var canvas=document.getElementById("myCanvas");
var ctx=canvas.getContext("2d");
canvas.addEventListener("mousedown",myMouseDown);
function myMouseDown(e){
mouseEvent="mousedown";
};
canvas.addEventListener("mouseup",myMouseUp);
function myMouseUp(e){
    mouseEvent="mouseup";
};
canvas.addEventListener("mouseleave",myMouseLeave);
function myMouseLeave(e){
mouseEvent="mouseleave";
};
canvas.addEventListener("mousemove",myMouseMove);
function myMouseMove(e){
    console.log("mousemove");
    currentPositionofX= e.clientX-canvas.offsetLeft;
    currentPositionofY= e.clientY-canvas.offsetTop;
    if (mouseEvent=="mousedown"){
        console.log("mouse is draging currently");
        ctx.beginPath();
        ctx.strokeStyle="red";
        ctx.lineWidth=2;
        ctx.moveTo(lastpositionofX,lastpositionofY);
        ctx.lineTo(currentPositionofX,currentPositionofY);
        ctx.stroke();
    };
    lastpositionofX=currentPositionofX;
    lastpositionofY=currentPositionofY;
};