/* *
 * JS - Vinculando um documento JS
 * @author Allyson de OLiveira Brandao
 * */
/*Tabuada*/

var check = false;

function xequeMate() {
    if (check == false) {
        var timer1 = setInterval(function() { start() }, 1000);
        var count = 10;

        function start() {
            soundBeep();
            document.getElementById("time").innerHTML = count;
            if (count == 0) {
                clearInterval(timer1);
                soundgokuaaa();
                document.getElementById("fire").src = "gif/gokuaaa.gif";
                document.getElementById("time").innerHTML = "AAAAAAAAAAAAAAAAAAAAAA";
            }
            count--;
        }
        check = true;
    }
}

function soundgokuaaa() {
    var beep = new Audio();
    beep.src = "sound/gokuaaa.mp3";
    beep.play();

}

function soundBeep() {
    var beep = new Audio();
    beep.src = "sound/Beep.mp3";
    beep.play();

}