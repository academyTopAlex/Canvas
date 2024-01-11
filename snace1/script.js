const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
let score = 0;
let box = 50;
let napravlrenie;


const ground = new Image();
ground.src = "1.jpg";

const food = new Image();
food.src = "food.png"

let foodCoodr = {
    x: getFoodCord(12),
    y: getFoodCord(10)
}

let snakeCord = {
    x: 5,
    y: 5
}


let arr = [snakeCord]

function game(){
    ctx.drawImage(ground, 0, 0);
    ctx.drawImage(food, foodCoodr.x*box, foodCoodr.y*box);

    for (let i = 0; i < arr.length; i++) {
        ctx.fillStyle = 'green'
        ctx.fillRect(arr[i].x*box, arr[i].y*box, box, box)
    }
    
    let x = arr[0].x;
    let y = arr[0].y;

    if (foodCoodr.x === x && foodCoodr.y === y ){
        score++;
        foodCoodr.x = getFoodCord(12);
        foodCoodr.y = getFoodCord(10);
    }else{
        arr.pop()
    }


    ctx.fillStyle = 'white'
    ctx.font = "50px Arial";
    ctx.fillText(score, 10, 45)

    if (napravlrenie == 37){
        // left
        x--;
    }else if (napravlrenie == 39){
        //right
        x++;
    }else if(napravlrenie == 38){
        // up
        y--;
    }
    else if(napravlrenie == 40){
        // down
        y++;
    }
    if (napravlrenie == 27){
        clearInterval(gameInterval)
    }

    let newHead = {
        x: x,
        y: y
    }

    arr.unshift(newHead);
    console.log(x, y );
    console.log(arr);
}

let gameInterval = setInterval(game, 1000)

function getFoodCord(num) {
   return Math.floor(Math.random() * num + 1);
}

document.body.addEventListener("keydown", () =>{
    napravlrenie = event.keyCode;
    console.log(napravlrenie);
});