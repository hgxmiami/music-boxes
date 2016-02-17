$("#c").click(playC);
   
function playC() {
        
    $("#c_note")[0].currentTime = 0;  
    $("#c_note")[0].play();
}

$("#d").click(playD);
   
function playD() {
        
    $("#d_note")[0].currentTime = 0;  
    $("#d_note")[0].play();
}

$("#e").click(playE);
   
function playE() {
        
    $("#e_note")[0].currentTime = 0;  
    $("#e_note")[0].play();
}

$("#f").click(playF);
   
function playF() {
        
    $("#f_note")[0].currentTime = 0;  
    $("#f_note")[0].play();
}

$("#g").click(playG);
   
function playG() {
        
    $("#g_note")[0].currentTime = 0;  
    $("#g_note")[0].play();
}

$("#a").click(playA);
   
function playA() {
        
    $("#a_note")[0].currentTime = 0;  
    $("#a_note")[0].play();
}

$("#b").click(playB);
   
function playB() {
        
    $("#b_note")[0].currentTime = 0;  
    $("#b_note")[0].play();
}

$(document).keypress(function(e) {
    console.log(e.keyCode); 
    if (e.keyCode === 99) {
        playC();
    }
    else if (e.keyCode === 97){
        playA();
    }
    else if (e.keyCode === 98){
        playB();
    }
    else if (e.keyCode === 100){
        playD();
    }
    else if (e.keyCode === 101){
        playE();
    }
    else if (e.keyCode === 103){
        playG();
    }
    else playF();
    aaa
});