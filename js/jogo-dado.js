/* *
 * JS - Vinculando um documento JS
 * @author Allyson de OLiveira Brandao
 * */
/*Jogo do dado*/
var sorteio = Math.floor(Math.random() * 6 + 1);

switch (sorteio) {
    /*Face do dado 1*/
    case 1:
        document.getElementById("face").src = "img/dado-1.png";
        break;
        /*face do dado 2*/
    case 2:
        document.getElementById("face").src = "img/dado-2.png";
        break;
        /*face do dado 3*/
    case 3:
        document.getElementById("face").src = "img/dado-3.png";
        break;
        /*Face do dado 4*/
    case 4:
        document.getElementById("face").src = "img/dado-4.png";
        break;
        /*face do dado 5*/
    case 5:
        document.getElementById("face").src = "img/dado-5.png";
        break;
        /*face do dado 6*/
    case 6:
        document.getElementById("face").src = "img/dado-6.jpg";
        break;
    default:
        //caso contrario
        break;
}