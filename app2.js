//Variables 
const boxes = document.querySelectorAll(".box");
const playerX = "X";
const playerO = "O";
let turn = playerX;
let p1Win = document.getElementById("p1Win");
let p2Win = document.getElementById("p2Win");
let draw = document.getElementById("drawCount")
let message = document.getElementById("text")
let myAudio = document.getElementById("clickSound")

//Click sound function

function ding () {
    myAudio.play()
}

//Each time a box is clicked the turn changes 
function boxClick(event) {
    const box = event.target;
    const boxNum = box.dataset.index
    if (box.innerText != '') {
        return;
    }
    if (turn === playerX) {
        box.innerText = playerX;
        allBoxes[boxNum - 1] = playerX
        message.innerText = 'PLAYER 2s TURN'
        turn = playerO
       // ding()
        findWinner()
        return
    }
    else {
        if (turn === playerO) {
            box.innerText = playerO;
            allBoxes[boxNum - 1] = playerO;
            message.innerText = 'PLAYER 1s TURN'
            turn = playerX;
            //ding()
            findWinner()
            return
        }
    }

}


//function for ending game (draw not included)
function endGame() {
    if (turn === "O") {
        ding()
        console.log('Player 1 won')
        message.innerHTML = "X WINS";
        p1Win.innerText++;
        
    }
    else if (turn === "X") {
        ding()
        console.log('Player 2 won')
        message.innerHTML = "O WINS";
        p2Win.innerText++
        
    }

}

//Going though the function till a win or draw is made
function findWinner() {
    if ((allBoxes[0] != null && allBoxes[0] === allBoxes[1] && allBoxes[1] === allBoxes[2])
        || (allBoxes[3] != null && allBoxes[3] === allBoxes[4] && allBoxes[4] === allBoxes[5])
        || (allBoxes[6] != null && allBoxes[6] === allBoxes[7] && allBoxes[7] === allBoxes[8])
        || (allBoxes[0] != null && allBoxes[0] === allBoxes[3] && allBoxes[3] === allBoxes[6])
        || (allBoxes[0] != null && allBoxes[0] === allBoxes[3] && allBoxes[3] === allBoxes[6])
        || (allBoxes[1] != null && allBoxes[1] === allBoxes[4] && allBoxes[4] === allBoxes[7])
        || (allBoxes[2] != null && allBoxes[2] === allBoxes[5] && allBoxes[5] === allBoxes[8])
        || (allBoxes[0] != null && allBoxes[0] === allBoxes[4] && allBoxes[4] === allBoxes[8])
        || (allBoxes[2] != null && allBoxes[2] === allBoxes[4] && allBoxes[4] === allBoxes[6])){
        console.log("winner")
        endGame();
        allBoxes.fill(null)
        
    }
    else if  ((allBoxes[0] != null && allBoxes[1] != null && allBoxes[2] != null &&
        allBoxes[3] != null && allBoxes[4] != null && allBoxes[5] != null &&
        allBoxes[6] != null && allBoxes[7] != null && allBoxes[8] != null)) {
        draw.innerText++
        message.innerHTML = "It's a DRAW";
        console.log("draw")
        allBoxes.fill(null)
    }
}

//Arry for each box
const allBoxes = Array(boxes.length);

//Makes boxes clickable
boxes.forEach(box => box.addEventListener('click', boxClick));

//restart function
function restart() {
    document.getElementById("box1").innerHTML = null;
    document.getElementById("box2").innerHTML = null;
    document.getElementById("box3").innerHTML = null;
    document.getElementById("box4").innerHTML = null;
    document.getElementById("box5").innerHTML = null;
    document.getElementById("box6").innerHTML = null;
    document.getElementById("box7").innerHTML = null;
    document.getElementById("box8").innerHTML = null;
    document.getElementById("box9").innerHTML = null;
    document.getElementById("text").innerText = 'PLAYER 1s TURN';
    turn = playerX;
    allBoxes.fill(null)

}

//Reset game button
document.getElementById("resetGame").onclick = function () {
    restart()

};

//Reset score button
document.getElementById("resetScore").onclick = function () {
    p1Win.textContent = 0
    p2Win.textContent = 0
    drawCount.textContent = 0
    restart()

}