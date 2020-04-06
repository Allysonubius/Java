/* *
 * JS - Vinculando um documento JS
 * @author Allyson de OLiveira Brandao
 * */
/*Tabuada*/

function on() {
    document.getElementById("lamp").src = "img/lampada-on.jpg";
}

function off() {
    document.getElementById("lamp").src = "img/lampada-off.png";
}

function blinck() {
    var intervalo = 0;
    var contador = 0;
    while (contador < 100) {
        intervalo += 500;
        setTimeout("document.getElementById('lamp').src='img/lampada-on.jpg';", intervalo);
        intervalo += 500;
        setTimeout("document.getElementById('lamp').src='img/lampada-off.png';", intervalo);
        contador++;
    }
}