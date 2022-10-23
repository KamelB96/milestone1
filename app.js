//set up reset game button
document.getElementById("resetGame").onclick = function() {
    document.getElementById("box1").innerHTML = "";
    document.getElementById("box2").innerHTML = "";
    document.getElementById("box3").innerHTML = "";
    document.getElementById("box4").innerHTML = "";
    document.getElementById("box5").innerHTML = "";
    document.getElementById("box6").innerHTML = "";
    document.getElementById("box7").innerHTML = "";
    document.getElementById("box8").innerHTML = "";
    document.getElementById("box9").innerHTML = "";
  };

//set up reset score button
document.getElementById("resetScore").onclick = function() {
    document.getElementById("p1Win").innerHTML = "0";
    document.getElementById("p2Win").innerHTML = "0";
    document.getElementById("drawCount").innerHTML = "0";
  
  };

//How to win


  //set up X O trurn system

//set up buttons 1-9 

if (turn= 'PLAYER 1s TURN') {
    document.getElementById('box1').onclick = function(){
        document.getElementById("box1").innerHTML = "X";  
        document.getElementById("turn").innerText ='PLAYER 2s TURN' ;
    }
    document.getElementById('box2').onclick = function(){
        document.getElementById("box2").innerHTML = "X";    
    }
    document.getElementById('box3').onclick = function(){
        document.getElementById("box3").innerHTML = "X";    
    }
    document.getElementById('box4').onclick = function(){
        document.getElementById("box4").innerHTML = "X";    
    }
    document.getElementById('box5').onclick = function(){
        document.getElementById("box5").innerHTML = "X";    
    }
    document.getElementById('box6').onclick = function(){
        document.getElementById("box6").innerHTML = "X";    
    }
    document.getElementById('box7').onclick = function(){
        document.getElementById("box7").innerHTML = "X";    
    }
    document.getElementById('box8').onclick = function(){
        document.getElementById("box8").innerHTML = "X";    
    }
    document.getElementById('box9').onclick = function(){
        document.getElementById("box9").innerHTML = "X";  
}
}

 else if (turn= 'PLAYER 2s TURN') {
    document.getElementById('box1').onclick = function(){
        document.getElementById("box1").innerHTML = "O";  
        document.getElementById("turn").innerText ='PLAYER 2s TURN' ;
    }
    document.getElementById('box2').onclick = function(){
        document.getElementById("box2").innerHTML = "O";    
    }
    document.getElementById('box3').onclick = function(){
        document.getElementById("box3").innerHTML = "O";    
    }
    document.getElementById('box4').onclick = function(){
        document.getElementById("box4").innerHTML = "O";    
    }
    document.getElementById('box5').onclick = function(){
        document.getElementById("box5").innerHTML = "O";    
    }
    document.getElementById('box6').onclick = function(){
        document.getElementById("box6").innerHTML = "O";    
    }
    document.getElementById('box7').onclick = function(){
        document.getElementById("box7").innerHTML = "O";    
    }
    document.getElementById('box8').onclick = function(){
        document.getElementById("box8").innerHTML = "O";    
    }
    document.getElementById('box9').onclick = function(){
        document.getElementById("box9").innerHTML = "O"; 
}
}
if (box1 = 'X') {
    console.log ("winner")
}
