//set up reset game button


//set up reset score button
document.getElementById("resetScore").onclick = function() {
    document.getElementById("p1Win").innerHTML = "0";
    document.getElementById("p2Win").innerHTML = "0";
    document.getElementById("drawCount").innerHTML = "0";
  
  };

//set up X O trurn system

//set up buttons 1-9 

if (turn= 'PLAYER 1s TURN') {
    document.getElementById('btn1').onclick = function(){
        document.getElementById("box1").innerHTML = "X";    
    }
    document.getElementById('btn2').onclick = function(){
        document.getElementById("box2").innerHTML = "X";    
    }
    document.getElementById('btn3').onclick = function(){
        document.getElementById("box3").innerHTML = "X";    
    }
    document.getElementById('btn4').onclick = function(){
        document.getElementById("box4").innerHTML = "X";    
    }
    document.getElementById('btn5').onclick = function(){
        document.getElementById("box5").innerHTML = "X";    
    }
    document.getElementById('btn6').onclick = function(){
        document.getElementById("box6").innerHTML = "X";    
    }
    document.getElementById('btn7').onclick = function(){
        document.getElementById("box7").innerHTML = "X";    
    }
    document.getElementById('btn8').onclick = function(){
        document.getElementById("box8").innerHTML = "X";    
    }
    document.getElementById('btn9').onclick = function(){
        document.getElementById("box9").innerHTML = "X";  
}
}

else if (turn= 'PLAYER 2s TURN') {
    document.getElementById('btn1').onclick = function(){
        document.getElementById("box1").innerHTML = "O";    
    }
    document.getElementById('btn2').onclick = function(){
        document.getElementById("box2").innerHTML = "O";    
    }
    document.getElementById('btn3').onclick = function(){
        document.getElementById("box3").innerHTML = "O";    
    }
    document.getElementById('btn4').onclick = function(){
        document.getElementById("box4").innerHTML = "O";    
    }
    document.getElementById('btn5').onclick = function(){
        document.getElementById("box5").innerHTML = "O";    
    }
    document.getElementById('btn6').onclick = function(){
        document.getElementById("box6").innerHTML = "O";    
    }
    document.getElementById('btn7').onclick = function(){
        document.getElementById("box7").innerHTML = "O";    
    }
    document.getElementById('btn8').onclick = function(){
        document.getElementById("box8").innerHTML = "O";    
    }
    document.getElementById('btn9').onclick = function(){
        document.getElementById("box9").innerHTML = "O";  
}
}