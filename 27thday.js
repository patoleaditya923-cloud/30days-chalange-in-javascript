const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const scoreEl = document.getElementById('score');
const startScreen = document.getElementById('startScreen');
const gameOverScreen = document.getElementById('gameOverScreen');
const finalScoreEl = document.getElementById('finalScore');
const startBtn = document.getElementById('startBtn');
const restartBtn = document.getElementById('restartBtn');

const bird = {
  x: 80,
  y: 250,
  width: 34,
  height: 24,
  velocity: 0,
  gravity: 0.5,
  jump: -8
};

const pipeWidth = 60;
const pipeGap = 150;
const pipeSpeed = 2.5;

let pipes = [];
let score = 0;
let gameStarted = false;
let gameOver = false;
let frame = 0;

function resetGame() {
  bird.y = 250;
  bird.velocity = 0;
  pipes = [];
  score = 0;
  frame = 0;
  gameOver = false;
  scoreEl.textContent = '0';
  gameOverScreen.classList.add('hidden');
}

function startGame() {
  resetGame();
  gameStarted = true;
  startScreen.classList.add('hidden');
  requestAnimationFrame(gameLoop);
}

function flap() {
  if (!gameStarted) return;
  if (gameOver) return;
  bird.velocity = bird.jump;
}

function createPipe() {
  const minHeight = 60;
  const maxHeight = canvas.height - pipeGap - minHeight - 80;
  const topHeight = Math.floor(Math.random() * (maxHeight - minHeight + 1)) + minHeight;

  pipes.push({
    x: canvas.width,
    top: topHeight,
    bottom: canvas.height - topHeight - pipeGap,
    passed: false
  });
}

function update() {
  bird.velocity += bird.gravity;
  bird.y += bird.velocity;

  if (frame % 90 === 0) {
    createPipe();
  }

  pipes.forEach(pipe => {
    pipe.x -= pipeSpeed;

    if (!pipe.passed && pipe.x + pipeWidth < bird.x) {
      pipe.passed = true;
      score++;
      scoreEl.textContent = score;
    }
  });

  pipes = pipes.filter(pipe => pipe.x + pipeWidth > 0);

  // Ground and ceiling collision
  if (bird.y <= 0 || bird.y + bird.height >= canvas.height) {
    endGame();
  }

  // Pipe collision
  pipes.forEach(pipe => {
    const hitX =
      bird.x + bird.width > pipe.x &&
      bird.x < pipe.x + pipeWidth;

    const hitTop = bird.y < pipe.top;
    const hitBottom = bird.y + bird.height > canvas.height - pipe.bottom;

    if (hitX && (hitTop || hitBottom)) {
      endGame();
    }
  });

  frame++;
}

function drawBird() {
  ctx.fillStyle = '#ffd93d';
  ctx.beginPath();
  ctx.roundRect(bird.x, bird.y, bird.width, bird.height, 8);
  ctx.fill();

  // Eye
  ctx.fillStyle = '#000';
  ctx.beginPath();
  ctx.arc(bird.x + 24, bird.y + 8, 2.5, 0, Math.PI * 2);
  ctx.fill();

  // Beak
  ctx.fillStyle = '#ff8c42';
  ctx.beginPath();
  ctx.moveTo(bird.x + bird.width, bird.y + 10);
  ctx.lineTo(bird.x + bird.width + 10, bird.y + 14);
  ctx.lineTo(bird.x + bird.width, bird.y + 18);
  ctx.closePath();
  ctx.fill();
}

function drawPipes() {
  ctx.fillStyle = '#2ecc71';

  pipes.forEach(pipe => {
    // Top pipe
    ctx.fillRect(pipe.x, 0, pipeWidth, pipe.top);
    ctx.fillRect(pipe.x - 4, pipe.top - 18, pipeWidth + 8, 18);

    // Bottom pipe
    const bottomY = canvas.height - pipe.bottom;
    ctx.fillRect(pipe.x, bottomY, pipeWidth, pipe.bottom);
    ctx.fillRect(pipe.x - 4, bottomY, pipeWidth + 8, 18);
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Sky
  ctx.fillStyle = '#70c5ce';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  // Ground
  ctx.fillStyle = '#ded895';
  ctx.fillRect(0, canvas.height - 40, canvas.width, 40);

  drawPipes();
  drawBird();
}

function endGame() {
  if (gameOver) return;
  gameOver = true;
  finalScoreEl.textContent = score;
  gameOverScreen.classList.remove('hidden');
}

function gameLoop() {
  if (!gameStarted || gameOver) return;

  update();
  draw();

  requestAnimationFrame(gameLoop);
}

// Controls
document.addEventListener('keydown', e => {
  if (e.code === 'Space') {
    e.preventDefault();
    flap();
  }
});

canvas.addEventListener('click', flap);
startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', startGame);

// Initial draw
draw();