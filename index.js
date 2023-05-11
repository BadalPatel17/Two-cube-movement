//Play with Player Movement

//Set up Canvas and Graphics Context

let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

//Global Variables
let player = {
  x: 75,
  y: 392,
  w: 50,
  h: 50,
  // xSpeed: 0,
  // ySpeed: 0,
  speed: 3,
};

let player2 = {
  x: 600,
  y: 392,
  w: 50,
  h: 50,
  // xSpeed: 0,
  // ySpeed: 0,
  speed: 3,
};

let ArrowRightPressed = false;
let ArrowLeftPressed = false;
let ArrowUpPressed = false;
let ArrowDownPressed = false;
let KeyD = false;
let KeyA = false;
let KeyW = false;
let KeyS = false;

// Main progrm loop
requestAnimationFrame(draw);

function draw() {
  //Logic

  //Move playerBlue based on what key is pressed / held down
  if (ArrowRightPressed) {
    player.x += player.speed;
  } else if (ArrowLeftPressed) {
    player.x += -player.speed;
  }

  if (ArrowUpPressed) {
    player.y += -player.speed;
  } else if (ArrowDownPressed) {
    player.y += player.speed;
  }

  if (KeyD) {
    player2.x += player.speed;
  } else if (KeyA) {
    player2.x += -player.speed;
  }

  if (KeyW) {
    player2.y += -player.speed;
  } else if (KeyS) {
    player2.y += player.speed;
  }

  //Drawing
  ctx.clearRect(0, 0, cnv.width, cnv.height);

  //Draw Player
  ctx.fillStyle = "green";
  ctx.fillRect(player.x, player.y, player.w, player.h);

  //Draw Player2
  ctx.fillStyle = "blue";
  ctx.fillRect(player2.x, player2.y, player2.w, player2.h);

  //Request another Animation Frame
  requestAnimationFrame(draw);
}

//Key Event Stuff

document.addEventListener("keydown", keydownHandler);
document.addEventListener("keyup", keyupHandler);

function keydownHandler(event) {
  //KeyIsPressed movement Blue
  if (!event.repeat) {
    if (event.code == "ArrowRight") {
      ArrowRightPressed = true;
    } else if (event.code == "ArrowLeft") {
      ArrowLeftPressed = true;
    } else if (event.code == "ArrowUp") {
      ArrowUpPressed = true;
    } else if (event.code == "ArrowDown") {
      ArrowDownPressed = true;
    }
  }
  if (!event.repeat) {
    if (event.code == "KeyD") {
      KeyD = true;
    } else if (event.code == "KeyA") {
      KeyA = true;
    } else if (event.code == "KeyW") {
      KeyW = true;
    } else if (event.code == "KeyS") {
      KeyS = true;
    }
  }
  if (player2.x > 750) {
    player2.x = 740;
  } else if (player2.x < 12) {
    player2.x = 12;
  } else if (player2.y < 12) {
    player2.y = 12;
  } else if (player2.y > 534) {
    player2.y = 534;
  }

  if (player.x > 770) {
    player.x = 75;
  } else if (player.x < -20) {
    player.x = 700;
  } else if (player.y < 0) {
    player.y = 500;
  } else if (player.y > 600) {
    player.y = 0;
  }
  console.log(player2.y);
}

function keyupHandler(event) {
  if (event.code == "ArrowRight") {
    ArrowRightPressed = false;
  } else if (event.code == "ArrowLeft") {
    ArrowLeftPressed = false;
  } else if (event.code == "ArrowUp") {
    ArrowUpPressed = false;
  } else if (event.code == "ArrowDown") {
    ArrowDownPressed = false;
  }
  //KeyIsPressed movement Blue

  if (event.code == "KeyD") {
    KeyD = false;
  } else if (event.code == "KeyA") {
    KeyA = false;
  } else if (event.code == "KeyW") {
    KeyW = false;
  } else if (event.code == "KeyS") {
    KeyS = false;
  }
}

//    //Key Pressed - Key relased movement
//    if (!event.repeat) {
//     if (event.code == "ArrowRight") {
//       player.xSpeed = player.speed;
//       player.ySpeed = 0;
//     } else if (event.code == "ArrowLeft") {
//       player.xSpeed = -player.speed;
//       player.ySpeed = 0;
//     } else if (event.code == "ArrowUp") {
//       player.xSpeed = 0;
//       player.ySpeed = -player.speed;
//     } else if (event.code == "ArrowDown") {
//       player.xSpeed = 0;
//       player.ySpeed = player.speed;
//     }
//   }
// }

// function keyupHandler(event) {
//   if (event.code == "ArrowRight") {
//     player.xSpeed = 0;
//   } else if (event.code == "ArrowLeft") {
//     player.xSpeed = 0;
//   } else if (event.code == "ArrowUp") {
//     player.ySpeed = 0;
//   } else if (event.code == "ArrowDown") {
//     player.ySpeed = 0;
//   }
