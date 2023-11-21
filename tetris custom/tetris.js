
// tetris shapes
const SHAPES = [
	[
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[0, 1, 0, 0],
		[0, 1, 0, 0]
	],
	[
		[0, 1, 0],
		[0, 1, 0],
		[1, 1, 0]
	],
	[
		[1, 1, 0],
		[0, 1, 0],
		[0, 1, 1]
	],
	[
		[0, 1, 1],
		[1, 1, 0],
		[0, 0, 0]
	],
	[
		[0, 1, 0],
		[0, 1, 0],
		[0, 1, 1]
	],
	[
		[1, 1, 1],
		[0, 1, 0],
		[0, 0, 0]
	],
	[
		[1, 1],
		[1, 1]
	]
];
// color of SHAPES
const COLORS = [
	"#fff", // white
	"#0000ff", //blue
	"#00ff00", // green
	"#ffff00", // yellow
	"#9900ff", // purple
	"#ff9902", //orange
	"#ff33cc", // pink
	"#ff0000" //red
];
// ***********CHANGE ICONS HERE ***********
// falling Icons
const ICONS = [
	"./images/ballOfYarnIcon.jpg",
	"./images/momicon.jpg",
	"./images/shipicon.jpg",
	"./images/orangeflowericon.jpg",
	"./images/yinyangicon.jpg",
	"./images/dragonflyicon1.jpg",
	"./images/dndicon.jpg",
	"./images/pinklotusicon.jpg",
	"./images/peaceicon.jpg",
	"./images/blank.png",
	"./images/SmileyfaceIcon.jpg",
	"./images/fortnitechesticon.jpg",
	"./images/aquamarineroundicon.jpg"
];
const ROW = 20;
const COL = 10;
var icon = new Image();
icon.src = ICONS[0];
let score = 0;
let scoreBoard = document.querySelector("h2");
let canvas = document.querySelector("#tetris");
let ctx = canvas.getContext("2d");
// size of each block
// 30 x 20 = 600 (height of canvas) 30 x10 = 300 (width of canvas)
ctx.scale(30, 30);

let pieceObj = null;
let grid = generateGrid();
//console.log(grid);
//console.log(pieceObj);

//inital speed
let speed = 500;
let paused = false;
// repeats new game state redrawing the piece on the canvas
//sets initial speed of the game 
let interval = setInterval(newGameState, speed);
function pause() {
	if (paused) {
		interval = setInterval(newGameState, speed);
		paused = false;
	} else {
		clearInterval(interval);
		paused = true;
	}
	console.log(speed);
	console.log(paused);
	console.log(interval);
}

function generateRandomPiece() {
	// random number from 0 to 6
	let random = Math.floor(Math.random() * 7);
	//console.log(random);
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
			ctx.fillRect(j, i, 1, 1)
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
				alert("Game Over!");
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
// FUNCTION TO CHANGE IMAGES IN THEMES

function setTheme(e) {
	let player = e.target.value;

	console.log(player);
	switch (player) {
		case "mom":
			document.getElementById('theme-selector').href = './themes/mom.css';
			document.body.style.backgroundImage = "url('./images/fairybg.jpg')";
			document.getElementById('imgA').src = "./images/unicorn-hzt.png";
			document.getElementById('imgB').src = "./images/unicorn2.png";
			icon.src = ICONS[1];
			break;
		case "steve":
			document.getElementById('theme-selector').href = './themes/steve.css';
			document.body.style.backgroundImage = "url('./images/starwarsbg.jpg')";
			document.getElementById('imgA').src = "./images/darthimg.png";
			document.getElementById('imgB').src = "./images/lukeskywalkerimg.png";
			icon.src = ICONS[2];
			break;
		case "toni":
			document.getElementById('theme-selector').href = './themes/toni.css';
			document.body.style.backgroundImage = "url('./images/tealOrangeFlowerbg2.jpg')";
			document.getElementById('imgA').src = "./images/peacockimg.png";
			document.getElementById('imgB').src = "./images/peacockimg2.png";
			icon.src = ICONS[3];
			break;
		case "chris":
			document.getElementById('theme-selector').href = './themes/steve.css';
			document.body.style.backgroundImage = "url('./images/chrisbg.jpg')";
			document.getElementById('imgA').src = "";
			document.getElementById('imgB').src = "./images/treewomanimg.png";
			icon.src = ICONS[4];
			break;
		case "phounge":
			document.getElementById('theme-selector').href = './themes/phounge.css';
			document.body.style.backgroundImage = "url('./images/fairyforestbg.jpg')";
			document.getElementById('imgA').src = "./images/greenfairy.png";
			document.getElementById('imgB').src = "./images/autumnfairyimg.png";
			icon.src = ICONS[5];
			break;
		case "casey":
			document.getElementById('theme-selector').href = './themes/casey.css';
			document.body.style.backgroundImage = "url('./images/grndragoncavebg.jpg')";
			document.getElementById('imgA').src = "./images/wizardimg.png";
			document.getElementById('imgB').src = "./images/evilfairy.png";
			icon.src = ICONS[6];
			break;
		case "crystal":
			document.getElementById('theme-selector').href = './themes/crystal.css';
			document.body.style.backgroundImage = "url('./images/villagebg.jpg')";
			document.getElementById('imgA').src = "";
			document.getElementById('imgB').src = "./images/swancoupleimg.png";
			icon.src = ICONS[7];
			break;
		case "z":
			document.getElementById('theme-selector').href = './themes/steve.css';
			document.body.style.backgroundImage = "url('./images/anothercastlebg.jpg')";
			document.getElementById('imgB').src = "./images/blackdragonimg.png";
			document.getElementById('imgA').src = "./images/reddragon.png";
			icon.src = ICONS[6];
			break;
		case "rosie": //not good-todo fix
			document.getElementById('theme-selector').href = './themes/rosie.css';
			document.body.style.backgroundImage = "url('./images/blackdragoncave.jpg')";
			document.getElementById('imgB').src = "./images/blckknight.png";
			document.getElementById('imgA').src = "./images/femaleknight.png";
			icon.src = ICONS[8];
			break;
		case "beth":
			document.getElementById('theme-selector').href = './themes/beth.css';
			document.body.style.backgroundImage = "url('./images/mushroombg.jpg')";
			document.getElementById('imgA').src = "./images/peacebus.png";
			document.getElementById('imgB').src = "./images/hippyflower.png";
			icon.src= ICONS[8];
			break;
		case "emily":
			document.getElementById('theme-selector').href = './themes/emily.css';
			document.body.style.backgroundImage = "url('./images/smileybg.jpg')";
			document.getElementById('imgA').src = "./images/smileypoop.png";
			document.getElementById('imgB').src = "./images/smileytongue.png";
			icon.src= ICONS[10];
			break;
		case "lori":
			document.getElementById('theme-selector').href = './themes/beth.css';
			document.body.style.backgroundImage = "url('./images/TMNTNYCbg.jpg')";
			document.getElementById('imgA').src = "./images/tmntlfimg.png";
			document.getElementById('imgB').src = "./images/tmntrtimg.png";
			icon.src= ICONS[8];
			break;
		case "allizabeth":
			document.getElementById('theme-selector').href = './themes/beth.css';
			document.body.style.backgroundImage = "url('./images/fortnitebg.jpg')";
			document.getElementById('imgA').src = "./images/fortniteLlama.png";
			document.getElementById('imgB').src = "./images/fortnitepinkbear.png";
			icon.src= ICONS[11];
			break;
		case "aj":
			document.getElementById('theme-selector').href = './themes/steve.css';
			document.body.style.backgroundImage = "url('./images/robloxbg.jpg')";
			document.getElementById('imgA').src = "./images/robloxchar.png";
			document.getElementById('imgB').src = "./images/robloxcop.png";
			icon.src= ICONS[9];
			break;
		case "abby":
			document.getElementById('theme-selector').href = './themes/phounge.css';
			document.body.style.backgroundImage = "url('./images/gem.jpg')";
			document.getElementById('imgA').src = "./images/aquamarinegem.png";
			document.getElementById('imgB').src = "./images/aquamarinegirlimg.png";
			icon.src= ICONS[9];
			break; 

		default:
			document.getElementById('theme-selector').href = './themes/default.css';
			document.body.style.backgroundImage = "url('./images/defaultbg.jpg')";
			document.getElementById('imgA').src = "./images/basketOfYarnimg.png";
			document.getElementById('imgB').src = "./images/catimg.png";
			icon.src = ICONS[0];
	}


}


