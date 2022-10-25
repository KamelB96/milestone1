//Setting varibales 
let turns = document.getElementById("turn")
let board = document.querySelectorAll('#box1, #box2, #box3, #box4, #box5, #box6, #box7, #box8, #box9')
let p1Win = document.getElementById("p1Win");
let p2Win = document.getElementById("p2Win")
let drawCount = document.getElementById("drawCount")

//Set up reset game button
document.getElementById("resetGame").onclick = function () {
  document.getElementById("box1").innerHTML = "";
  document.getElementById("box2").innerHTML = "";
  document.getElementById("box3").innerHTML = "";
  document.getElementById("box4").innerHTML = "";
  document.getElementById("box5").innerHTML = "";
  document.getElementById("box6").innerHTML = "";
  document.getElementById("box7").innerHTML = "";
  document.getElementById("box8").innerHTML = "";
  document.getElementById("box9").innerHTML = "";
  document.getElementById("turn").innerText = 'PLAYER 1s TURN';
};

//set up reset score button
document.getElementById("resetScore").onclick = function () {
  p1Win.textContent = 0
  p2Win.textContent = 0
  drawCount.textContent = 0
  document.getElementById("box1").innerHTML = "";
  document.getElementById("box2").innerHTML = "";
  document.getElementById("box3").innerHTML = "";
  document.getElementById("box4").innerHTML = "";
  document.getElementById("box5").innerHTML = "";
  document.getElementById("box6").innerHTML = "";
  document.getElementById("box7").innerHTML = "";
  document.getElementById("box8").innerHTML = "";
  document.getElementById("box9").innerHTML = "";
  document.getElementById("turn").innerText = 'PLAYER 1s TURN';

};

// Players Turn Clicking
if (turns.textContent = 'PLAYER 1s TURN') {
  document.getElementById('box1').onclick = function () {
    document.getElementById("box1").innerHTML = "X";
    document.getElementById("turn").innerText = 'PLAYER 2s TURN';
  }
  document.getElementById('box2').onclick = function () {
    document.getElementById("box2").innerHTML = "X";
    document.getElementById("turn").innerText = 'PLAYER 2s TURN';
  }
  document.getElementById('box3').onclick = function () {
    document.getElementById("box3").innerHTML = "X";
    document.getElementById("turn").innerText = 'PLAYER 2s TURN';
  }
  document.getElementById('box4').onclick = function () {
    document.getElementById("box4").innerHTML = "X";
    document.getElementById("turn").innerText = 'PLAYER 2s TURN';
  }
  document.getElementById('box5').onclick = function () {
    document.getElementById("box5").innerHTML = "X";
    document.getElementById("turn").innerText = 'PLAYER 2s TURN';
  }
  document.getElementById('box6').onclick = function () {
    document.getElementById("box6").innerHTML = "X";
    document.getElementById("turn").innerText = 'PLAYER 2s TURN';
  }
  document.getElementById('box7').onclick = function () {
    document.getElementById("box7").innerHTML = "X";
    document.getElementById("turn").innerText = 'PLAYER 2s TURN';
  }
  document.getElementById('box8').onclick = function () {
    document.getElementById("box8").innerHTML = "X";
    document.getElementById("turn").innerText = 'PLAYER 2s TURN';
  }
  document.getElementById('box9').onclick = function () {
    document.getElementById("box9").innerHTML = "X";
    document.getElementById("turn").innerText = 'PLAYER 2s TURN';
  }
}


// else if (turns.textContent = 'PLAYER 2s TURN') {
//   document.getElementById('box1').onclick = function () {
//     document.getElementById("box1").innerHTML = "O";
//     document.getElementById("turn").innerText = 'PLAYER 1s TURN';
//   }
//   document.getElementById('box2').onclick = function () {
//     document.getElementById("box2").innerHTML = "O";
//     document.getElementById("turn").innerText = 'PLAYER 1s TURN';

//   }
//   document.getElementById('box3').onclick = function () {
//     document.getElementById("box3").innerHTML = "O";
//   }
//   document.getElementById('box4').onclick = function () {
//     document.getElementById("box4").innerHTML = "O";
//   }
//   document.getElementById('box5').onclick = function () {
//     document.getElementById("box5").innerHTML = "O";
//   }
//   document.getElementById('box6').onclick = function () {
//     document.getElementById("box6").innerHTML = "O";
//   }
//   document.getElementById('box7').onclick = function () {
//     document.getElementById("box7").innerHTML = "O";
//   }
//   document.getElementById('box8').onclick = function () {
//     document.getElementById("box8").innerHTML = "O";
//   }
//   document.getElementById('box9').onclick = function () {
//     document.getElementById("box9").innerHTML = "O";
//   }
// }

//Ways to win Player 1
if (box1.textContent && box2.textContent && box3.textContent == "X") {
  document.getElementById("p1Win").innerText++
  console.log("winner")
}
if (box4.textContent && box5.textContent && box6.textContent == "X") {
  document.getElementById("p1Win").innerText++
  console.log("winner")
}
if (box7.textContent && box8.textContent && box9.textContent == "X") {
  document.getElementById("p1Win").innerText++
  console.log("winner")
}
if (box1.textContent && box4.textContent && box7.textContent == "X") {
  document.getElementById("p1Win").innerText++
  console.log("winner")
}
if (box2.textContent && box5.textContent && box8.textContent == "X") {
  document.getElementById("p1Win").innerText++
  console.log("winner")
}
if (box3.textContent && box6.textContent && box9.textContent == "X") {
  document.getElementById("p1Win").innerText++
  console.log("winner")
}
if (box1.textContent && box5.textContent && box9.textContent == "X") {
  document.getElementById("p1Win").innerText++
  console.log("winner")
}
if (box3.textContent && box5.textContent && box7.textContent == "X") {
  document.getElementById("p1Win").innerText++
  console.log("winner")
}


//Ways to win Player 2
if (box1.textContent && box2.textContent && box3.textContent == "O") {
  document.getElementById("p2Win").innerText++
  console.log("winner")
}
if (box4.textContent && box5.textContent && box6.textContent == "O") {
  document.getElementById("p2Win").innerText++
  console.log("winner")
}
if (box7.textContent && box8.textContent && box9.textContent == "O") {
  document.getElementById("p2Win").innerText++
  console.log("winner")
}
if (box1.textContent && box4.textContent && box7.textContent == "O") {
  document.getElementById("p2Win").innerText++
  console.log("winner")
}
if (box2.textContent && box5.textContent && box8.textContent == "O") {
  document.getElementById("p2Win").innerText++
  console.log("winner")
}
if (box3.textContent && box6.textContent && box9.textContent == "O") {
  document.getElementById("p2Win").innerText++
  console.log("winner")
}
if (box1.textContent && box5.textContent && box9.textContent == "O") {
  document.getElementById("p2Win").innerText++
  console.log("winner")
}
if (box3.textContent && box5.textContent && box7.textContent == "O") {
  document.getElementById("p2Win").innerText++
  console.log("winner")
}