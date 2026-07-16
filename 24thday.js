const canvas = document.getElementById("gameBoard");
const ctx = canvas.getContext("2d");

const scoreText = document.getElementById("score");

const box = 20;
const canvasSize = 400;

let snake = [
    {x:200,y:200}
];

let food = randomFood();

let direction = "RIGHT";

let score = 0;

function randomFood(){

    return{

        x:Math.floor(Math.random()*20)*box,

        y:Math.floor(Math.random()*20)*box

    };

}

document.addEventListener("keydown",changeDirection);

function changeDirection(event){

    const key = event.key;

    if(key=="ArrowUp" && direction!="DOWN")
        direction="UP";

    else if(key=="ArrowDown" && direction!="UP")
        direction="DOWN";

    else if(key=="ArrowLeft" && direction!="RIGHT")
        direction="LEFT";

    else if(key=="ArrowRight" && direction!="LEFT")
        direction="RIGHT";

}

function draw(){

    ctx.fillStyle="black";
    ctx.fillRect(0,0,400,400);

    ctx.fillStyle="red";
    ctx.fillRect(food.x,food.y,box,box);

    ctx.fillStyle="lime";

    snake.forEach(part=>{
        ctx.fillRect(part.x,part.y,box,box);
    });

    let headX = snake[0].x;
    let headY = snake[0].y;

    if(direction=="UP")
        headY-=box;

    if(direction=="DOWN")
        headY+=box;

    if(direction=="LEFT")
        headX-=box;

    if(direction=="RIGHT")
        headX+=box;

    const newHead={
        x:headX,
        y:headY
    };

    if(headX==food.x && headY==food.y){

        score++;

        scoreText.textContent=score;

        food=randomFood();

    }
    else{

        snake.pop();

    }

    if(
        headX<0||
        headY<0||
        headX>=canvasSize||
        headY>=canvasSize||
        collision(newHead)
    ){

        alert("Game Over!\nScore : "+score);

        restartGame();

        return;
    }

    snake.unshift(newHead);

}

function collision(head){

    for(let i=0;i<snake.length;i++){

        if(
            head.x==snake[i].x &&
            head.y==snake[i].y
        ){

            return true;

        }

    }

    return false;

}

function restartGame(){

    snake=[
        {x:200,y:200}
    ];

    direction="RIGHT";

    score=0;

    scoreText.textContent=0;

    food=randomFood();

}

setInterval(draw,120);