const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let isMouseDown = false;
let rad;
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

document.body.addEventListener("mousedown", () => {
    isMouseDown = true;
    rad = parseInt(document.querySelector("input").value)
    ctx.lineWidth = rad * 2;

})

document.body.addEventListener("mouseup", () => {
    isMouseDown = false;
    ctx.beginPath()
})
document.body.addEventListener('keydown', () =>{
    if (event.keyCode == 67){
        ctx.fillStyle = "white";
        ctx.fillRect(0,0, canvas.width, canvas.height);

        ctx.beginPath();
        ctx.fillStyle = 'black'
    }
});
canvas.addEventListener("mousemove", () =>{
    if (isMouseDown){

        ctx.lineTo(event.clientX, event.clientY);
        ctx.stroke();

        ctx.beginPath();
        ctx.arc(event.clientX, event.clientY, rad, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(event.clientX, event.clientY);
    }
 
});

