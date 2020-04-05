/* *
 * JS - Vinculando um documento JS
 * @author Allyson de OLiveira Brandao
 * */
/*calculadora Flex*/
var etanol, gasolina;

function calcular() {
    /*ETANOL*/
    etanol = parseFloat(frmFlex.txtEtanol.value.replace(",", "."));
    /*GASOLINA*/
    gasolina = parseFloat(frmFlex.txtGasolina.value.replace(",", "."));
    /*COMPARAÇÂO*/
    if (etanol < 0.7 * gasolina) {
        //verdadeiro
        document.getElementById("status").src = "img/etanol.png";
    } else {
        //falso
        document.getElementById("status").src = "img/gasoline.jpg";
    }
}