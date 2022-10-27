//Variables 
const boxes = document.querySelectorAll(".box");
const playerX = "X";
const playerO = "O";
let turn = playerX;
let p1Win = document.getElementById("p1Win");
let p2Win = document.getElementById("p2Win");

function findWinner() {
    if (allBoxes [0] != null && allBoxes [0] === allBoxes [1] && allBoxes [1] === allBoxes [2]) {
        if (turn === "O") {
            console.log ('Player 1 won')
            
        }
        else{
            console.log('Player 2 won')
        }
        
    }
    else if (allBoxes [3] != null && allBoxes [3] === allBoxes [4] && allBoxes [4] === allBoxes [5]) {
        console.log("winner")
        
    }
    else if (allBoxes [6] != null && allBoxes [6] === allBoxes [7] && allBoxes [7] === allBoxes [8]) {
        console.log("winner")
    }
    else if (allBoxes [0] != null && allBoxes [0] === allBoxes [3] && allBoxes [3] === allBoxes [6]) {
        console.log("winner")
    }
    else if (allBoxes [1] != null && allBoxes [1] === allBoxes [4] && allBoxes [4] === allBoxes [7]) {
        console.log("winner")
    }
    else if (allBoxes [2] != null && allBoxes [2] === allBoxes [5] && allBoxes [5] === allBoxes [8]) {
        console.log("winner")
    }
    else if (allBoxes [0] != null && allBoxes [0] === allBoxes [4] && allBoxes [4] === allBoxes [8]) {
        console.log("winner")
    }
    else if (allBoxes [2] != null && allBoxes [2] === allBoxes [4] && allBoxes [4] === allBoxes [6]) {
        console.log("winner")
    }
    else{
        console.log("nothing")
    }
    
}

//Arry for each box
const allBoxes = Array(boxes.length);
allBoxes.fill(null);


boxes.forEach(box => box.addEventListener('click', boxClick));

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
        document.getElementById("text").innerText = 'PLAYER 2s TURN'
        turn = playerO
        findWinner()
    }
    else {
        if (turn === playerO) {
            box.innerText = playerO;
            allBoxes[boxNum - 1] = playerO;
            document.getElementById("text").innerText = 'PLAYER 1s TURN'
            turn = playerX;
            findWinner()
        }
    }

}

//Winning combination
const winnerCombo = [
    { combination: [1, 2, 3] },
    { combination: [4, 5, 6] },
    { combination: [7, 8, 9] },
    { combination: [1, 4, 7] },
    { combination: [2, 5, 8] },
    { combination: [3, 6, 9] },
    { combination: [1, 5, 9] },
    { combination: [3, 5, 7] }
]


//Reset game button
document.getElementById("resetGame").onclick = function () {
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
    turn = playerX
};

//set up reset score button
document.getElementById("resetScore").onclick = function () {
    p1Win.textContent = 0
    p2Win.textContent = 0
    drawCount.textContent = 0
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
    turn = playerX
    

};




