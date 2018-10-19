/*document.getElementById("1").addEventListener ("click",calculadora);

function calculadora(){   
    document.getElementById("display").innerHTML = "1"
};*/

/*var x = document.getElementsByClassName("tecla");

for (i=0;i<x.length;i++){
    console.log(i+" - "+x[i].id)
}
*/
var men = 0;

window.addEventListener("load",init,false);
 
/*function init()
{
    var divClass = document.querySelectorAll(".tecla");

    for (i=0;i<divClass.length;i++){ 
    divClass[i].addEventListener("click",mensaje);
    }
}*/

function init()
{
    var divClass = document.querySelectorAll(".tecla");
    divClass[0].addEventListener("click",mensaje(divClass[0].id));
    divClass[1].addEventListener("click",mensaje(divClass[1].id));
    divClass[2].addEventListener("click",mensaje(divClass[2].id));
    divClass[3].addEventListener("click",mensaje(divClass[3].id));
    divClass[4].addEventListener("click",mensaje(divClass[4].id));
    divClass[5].addEventListener("click",mensaje(divClass[5].id));
    divClass[6].addEventListener("click",mensaje);
    divClass[7].addEventListener("click",mensaje);
    divClass[8].addEventListener("click",mensaje);
    divClass[9].addEventListener("click",mensaje);
    divClass[10].addEventListener("click",mensaje);
}

function mensaje(valor){
   // console.log(men);
    men = men +2;
    console.log(valor)
    //document.getElementById("display").innerHTML = valor;
}