/* *
 * JS - Vinculando um documento JS
 * @author Allyson de OLiveira Brandao
 * */
/*slide show*/
var intervalo = 3000;

function slide1() {
    document.getElementById("banner").src = "img/slide-1.jpg";
    setTimeout("slide2()", intervalo);
}

function slide2() {
    document.getElementById("banner").src = "img/slide-2.jpg";
    setTimeout("slide3()", intervalo);
}

function slide3() {
    document.getElementById("banner").src = "img/slide-3.jpg";
    setTimeout("slide1()", intervalo);
}