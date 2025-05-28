
/* This is a comment when the page loads this is ignored */
// This is also a comment notice the two different ways to
// write comments. the two slashes is a single line comment

/* While the slash-star '/*' star-slash '*''/' is a multi-lined comment ..
 developers use comments to describe their code to each other or
 as a note to myself to remind me why I wrote something. */


 /* ROW is a variable, it stores a single piece of information.
 Variables in javaScript (js) are declared by using the var, let or const
 keywords. 'const ROW = 20;' means that I'm making a variable named ROW 
 that is going to be a const (not supposed to change) and it's going to store
 the number 20. The semi colon ';' at the end of the line is like putting 
 period at the end of a sentence. It tells the compiler "ok I'm done with 
 that statement."  */
const ROW = 20;
const COL = 10;
var icon = new Image();
icon.src = ICONS[0];
let score = 0;
let scoreBoard = document.querySelector("h2");
let canvas = document.querySelector("#tetris");
let ctx = canvas.getContext("2d");

//mobile settings
let lastTap = 0;  // Time of last tap for double-tap detection
let startX = 0;   // Starting X position for swipe detection
let isDoubleTap = false; // Flag to prevent rotation on double tap

// size of each block
// 30 x 20 = 600 (height of canvas) 30 x10 = 300 (width of canvas)
ctx.scale(30, 30);

let pieceObj = null;
let grid = generateGrid();


//inital speed
let speed = 500;
let paused = false;

// repeats new game state redrawing the piece on the canvas
//sets initial speed of the game 
let interval = setInterval(newGameState, speed);
// Updated pause function
function pause() {
    if (paused) {
        interval = setInterval(newGameState, speed);  // Resume the game
        paused = false;
    } else {
        clearInterval(interval);  // Pause the game
        paused = true;
    }
}

// Function to resume the game (called when returning from background)
function resumeGame() {
    if (!paused) {
        interval = setInterval(newGameState, speed);  // Resume the game
    }
}


function generateRandomPiece() {
	// random number from 0 to 6
	let random = Math.floor(Math.random() * 7);
	let piece = SHAPES[random];
	let colorIndex = random + 1;
	// top left corner of canvas coordinates are (x,y) = (0,0) 
	// x = width y = length
	let x = 4;
	let y = 0;
	// return a pieceObj object
	return { piece, x, y, colorIndex };
}

// draws game piece onto canvas specified in generateRandomPiece
function renderPiece() {
	// get array SHAPES[i]
	if (pieceObj != null) {
		let piece = pieceObj.piece;
		// loop through rows
		for (let i = 0; i < piece.length; i++) {
			// loop through integers 1 or 0 
			for (let j = 0; j < piece[i].length; j++) {
				if (piece[i][j] == 1) {
					ctx.fillStyle = COLORS[pieceObj.colorIndex];
					ctx.fillRect(pieceObj.x + j, pieceObj.y + i, 1, 1);
					ctx.drawImage(icon, pieceObj.x + j, pieceObj.y + i, 1, 1);

				}
			}

		}
	}
}

// initializes game 
function newGameState() {
	checkGrid();
	if (pieceObj == null) {
		pieceObj = generateRandomPiece();
		icon.onload = renderPiece();
	}
	moveDown();
}
//generates a grid to cover the canvas
function generateGrid() {
	let grid = [];
	for (let i = 0; i < ROW; i++) {
		grid.push([]);
		for (let j = 0; j < COL; j++) {
			grid[i].push(0);
		}
	}
	return grid;
}

//puts grid onto canvas (grid is not visible because both elements are white)
function renderGrid() {
	for (let i = 0; i < grid.length; i++) {
		for (let j = 0; j < grid[i].length; j++) {
			ctx.fillStyle = COLORS[grid[i][j]];
			ctx.fillRect(j, i, 1, 1);
			
		}
	}
	renderPiece();
}
// check to see if a row is complete and resets it to white space
// updates the score
function checkGrid() {
	let count = 0;
	for (let i = 0; i < grid.length; i++) {
		let allFilled = true;
		for (let j = 0; j < grid[i].length; j++) {
			if (grid[i][j] == 0) {
				allFilled = false;
			}
		}
		if (allFilled) {
			grid.splice(i, 1);
			grid.unshift([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
			count++;
		}
	}

	if (count == 1) {
		score += 10;

	}
	if (count == 2) {
		score += 30;
	}
	if (count == 3) {
		score += 50;
	}
	if (count > 3) {
		score += 100;
	}
	scoreBoard.innerHTML = "Score: " + score;
	if (count >= 1) {
		console.log("count " + count);
		//increaseSpeed(count);
	}
}

// todo: every 10 in score points decrease interval speed by 5
//until speed is at 300
function increaseSpeed(c) {
	c *= 5;
	if (speed > 100) {
		speed -= c;
	}
	console.log("speed " + speed)
	console.log("updated score" + score);
	interval = setInterval(newGameState, speed);
	console.log(interval);

}

// listens for keyboard key press 
document.addEventListener("keydown", function (e) {
	let key = e.code;
	if (key == "ArrowDown") {
		moveDown();
	} else if (key == "ArrowLeft") {
		moveLeft();
	} else if (key == "ArrowRight") {
		moveRight();
	} else if (key == "ArrowUp") {
		rotate();
	} else if (key == "Space") {
		pause();
	}
});


// user game controls
function moveDown() {
	if (pieceObj != null) {
		if (!collision(pieceObj.x, pieceObj.y + 1))
			pieceObj.y += 1;
		else {
			for (let i = 0; i < pieceObj.piece.length; i++) {
				for (let j = 0; j < pieceObj.piece[i].length; j++) {
					if (pieceObj.piece[i][j] == 1) {
						let p = pieceObj.x + j;
						let q = pieceObj.y + i;
						grid[q][p] = pieceObj.colorIndex;
					}
				}

			}
			if (pieceObj.y == 0) {
				alert("Game Over! \n Final Score: " + score );
				grid = generateGrid();
				score = 0;
				speed = 500;
			}
			pieceObj = null;
		}
		renderGrid();
	}
}
function moveLeft() {
	if (pieceObj != null) {
		if (!collision(pieceObj.x - 1, pieceObj.y))
			pieceObj.x -= 1;

		renderGrid();
	}
}
function moveRight() {
	if (pieceObj != null) {
		if (!collision(pieceObj.x + 1, pieceObj.y))
			pieceObj.x += 1;
		renderGrid();
	}
}

function rotate() {
	if (pieceObj != null) {
		let rotatedPiece = [];
		let piece = pieceObj.piece;
		//sets up the rotatedpiece 2d arrays
		for (let i = 0; i < piece.length; i++) {
			rotatedPiece.push([]);
			for (let j = 0; j < piece[i].length; j++) {
				rotatedPiece[i].push(0);
			}
		}
		// transversely copys values into rotated piece array 
		for (let i = 0; i < piece.length; i++) {
			for (let j = 0; j < piece[i].length; j++) {
				rotatedPiece[i][j] = piece[j][i];
			}
		}

		for (let i = 0; i < rotatedPiece.length; i++) {
			rotatedPiece[i] = rotatedPiece[i].reverse();
		}
		//keeps the piece from rotating off the screen
		if (!collision(pieceObj.x, pieceObj.y, rotatedPiece))
			pieceObj.piece = rotatedPiece;
		renderGrid();
	}
}
// prevents pieces from going off screen or overlapping on the grid
function collision(x, y, rotatedPiece) {
	let piece = rotatedPiece || pieceObj.piece;
	for (let i = 0; i < piece.length; i++) {
		for (let j = 0; j < piece[i].length; j++) {
			if (piece[i][j] == 1) {
				let p = x + j;
				let q = y + i;
				if (p >= 0 && p < COL && q >= 0 && q < ROW) {
					if (grid[q][p] > 0) {
						return true;
					}
				} else {
					return true;
				}
			}
		}
	}
	return false;
}

// Adding swipe and tap events for mobile interactivity


// Detect swipe 
canvas.addEventListener('touchstart', (e) => {
    const touch = e.touches[0];
    startX = touch.pageX; // Store initial touch position
});

canvas.addEventListener('touchmove', (e) => {
	e.preventDefault(); 
    const touch = e.touches[0];
    let diffX = touch.pageX - startX;
	
	//detect swipe right
    if (Math.abs(diffX) > 50) {
		e.preventDefault();
        if (diffX > 0) {
            
            moveRight();
        }else{
		moveLeft();
		}   
    
	startX = touch.pageX; // Reset starting position
	}
});


// Detect double-tap to pause/unpause the game
canvas.addEventListener('click', (e) => {
    const currentTap = new Date().getTime();

    // If time between taps is less than 500ms, it's a double-tap
    if (currentTap - lastTap < 500) {
		isDoubleTap = true;
        pause();  // Toggle pause on double-tap
    } else { 
	isDoubleTap = false; 
		rotate();
	}
    lastTap = currentTap;
});









