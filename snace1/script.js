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
    // смерть об край
    if (x < 0 || x > 13 || y <= -1 || y > 11){
        end();
    }
    // смерть об хвост
    for (let i = 0; i < arr.length; i++) {
        if (x == arr[i].x && y == arr[i].y){
           end();
        }
    }

    arr.unshift(newHead);
    
}

let gameInterval = setInterval(game, 600)
function end() {
    clearInterval(gameInterval);
    alert("все")
}
function getFoodCord(num) {
   return Math.floor(Math.random() * num + 1);
}

document.body.addEventListener("keydown", () =>{
    let temp = event.keyCode;

    if(temp == 39 && napravlrenie != 37){
        napravlrenie = 39;
    }

    if (temp == 37 && napravlrenie != 39){
        napravlrenie = 37;
    }
    
    if(temp == 40 && napravlrenie != 38){
        napravlrenie = 40;
    }
    if (temp == 38 && napravlrenie != 40){
        napravlrenie = 38;
    }

    console.log(event.keyCode, napravlrenie);


});