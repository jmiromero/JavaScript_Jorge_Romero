//Declaracion de variables globales
var valor1 = "", valor2 ="", total = "", ig=false, operador=""; 

//Escuchadores de Clicks
document.getElementById("1").addEventListener ("click", function(){document.getElementById("display").innerHTML = CeroALaIzq(document.getElementById("display").innerHTML,1)});
document.getElementById("2").addEventListener ("click", function(){document.getElementById("display").innerHTML = CeroALaIzq(document.getElementById("display").innerHTML,2)});
document.getElementById("3").addEventListener ("click", function(){document.getElementById("display").innerHTML = CeroALaIzq(document.getElementById("display").innerHTML,3)});
document.getElementById("4").addEventListener ("click", function(){document.getElementById("display").innerHTML = CeroALaIzq(document.getElementById("display").innerHTML,4)});
document.getElementById("5").addEventListener ("click", function(){document.getElementById("display").innerHTML = CeroALaIzq(document.getElementById("display").innerHTML,5)});
document.getElementById("6").addEventListener ("click", function(){document.getElementById("display").innerHTML = CeroALaIzq(document.getElementById("display").innerHTML,6)});
document.getElementById("7").addEventListener ("click", function(){document.getElementById("display").innerHTML = CeroALaIzq(document.getElementById("display").innerHTML,7)});
document.getElementById("8").addEventListener ("click", function(){document.getElementById("display").innerHTML = CeroALaIzq(document.getElementById("display").innerHTML,8)});
document.getElementById("9").addEventListener ("click", function(){document.getElementById("display").innerHTML = CeroALaIzq(document.getElementById("display").innerHTML,9)});
document.getElementById("0").addEventListener ("click", function(){document.getElementById("display").innerHTML = CeroALaIzq(document.getElementById("display").innerHTML,0)});
document.getElementById("on").addEventListener ("click", function(){document.getElementById("display").innerHTML = On()});
document.getElementById("sign").addEventListener ("click", function(){document.getElementById("display").innerHTML = Calcular(document.getElementById("display").innerHTML,"sign")});
document.getElementById("mas").addEventListener ("click", function(){document.getElementById("display").innerHTML = Calcular(document.getElementById("display").innerHTML,"mas")});
document.getElementById("menos").addEventListener ("click", function(){document.getElementById("display").innerHTML = Calcular(document.getElementById("display").innerHTML,"menos")});
document.getElementById("por").addEventListener ("click", function(){document.getElementById("display").innerHTML = Calcular(document.getElementById("display").innerHTML,"por")});
document.getElementById("dividido").addEventListener ("click", function(){document.getElementById("display").innerHTML = Calcular(document.getElementById("display").innerHTML,"dividido")});
document.getElementById("punto").addEventListener ("click", function(){document.getElementById("display").innerHTML = Calcular(document.getElementById("display").innerHTML,"punto")});
document.getElementById("igual").addEventListener ("click", function(){document.getElementById("display").innerHTML = Calcular(document.getElementById("display").innerHTML,"igual")});
document.getElementById("raiz").addEventListener ("click", function(){document.getElementById("display").innerHTML = Calcular(document.getElementById("display").innerHTML,"raiz")});

//Funcion que pone en cero todo
function On(){
    AnimarBoton("on");
    valor1 = "", valor2 ="", total = "", ig=false , operador=""; 
    console.log("valor1: "+valor1+" - valor2: "+valor2+" - Total: "+total+" - ig: "+ig+" - operador: "+operador);
    return "0";
}

//Funcion que Valida el Cero a la Izquierda 
function CeroALaIzq (pantalla,tec){ 
    AnimarBoton(tec);
    if(ig==false){
        if (LargoDigitos() == false){   
            var resultado = "";
            if (pantalla == "0"){
                resultado = tec;
            }else{
                resultado = pantalla+tec;
            }
            return resultado;
        }else{
            return pantalla;
        }
    }else{
        On();
        return tec;
    }
}

//Controla la cantidad de digitos en pantalla
function LargoDigitos(){
    var resultado = false;
    if(document.getElementById("display").innerHTML.length > 7){
        resultado = true;
    }
    return resultado;
}

/*function LargoResultado(valor){
    var resultado="";
    console.log(typeof(valor));
    if(valor.length>7){
        resultado = "E";
        console.log("resultado tiene mas de 8 caracteres / resultado: "+resultado); //BORRAR!!!
    }else{
        resultado = total;
        console.log("pase por control de resultado menor de 8 caracteres");
    }
    return resultado;*/
}

//Anima los Botones
function AnimarBoton(tec){
    document.getElementById(tec).style.transform = "scale(0.85,0.85)";
    setTimeout(function(){document.getElementById(tec).style.transform = "scale(1,1)";}, 50);
}

function Calcular(pantalla,operacion){
    AnimarBoton(operacion);
    var resultado = 0;
    switch(operacion){ //Reconoce que operacion se esta realizando y guarda el primer valor
        case "sign":
            resultado = -1 * pantalla;
            break;     
        
        case "mas":
            valor1=pantalla;
            resultado="0";
            operador=operacion;
            ig=false;
        break;     
        
        case "menos":
            valor1=pantalla;
            resultado="0";
            operador=operacion;
            ig=false;
        break;     
        
        case "por":
            valor1=pantalla;
            resultado="0";
            operador=operacion;
            ig=false;
        break;     

        case "dividido":
            valor1=pantalla;
            resultado="0";
            operador=operacion;
            ig=false;
        break;     

        case "igual":
            switch (operador){  //Resuelve la operacion
                case "mas":
                    if (ig==true){  //valida si se preciono nuevamente el igual para recalcular con el último digito ingresado
                        valor1=pantalla;
                    }else{
                        valor2=pantalla;
                    }
                    total=parseFloat(valor1) + parseFloat(valor2);
                    resultado=total;       
                break;

                case "menos":
                    if (ig==true){
                        valor1=pantalla;
                    }else{
                        valor2=pantalla;
                    }
                    total=parseFloat(valor1) -parseFloat(valor2);
                    resultado=total;             
                break;

                case "por":
                    if (ig==true){
                        valor1=pantalla;
                    }else{
                        valor2=pantalla;
                    }
                    total=parseFloat(valor1) * parseFloat(valor2);
                    resultado=total;
                break;

                case "dividido":
                    if (ig==true){
                        valor1=pantalla;
                    }else{
                        valor2=pantalla;
                    }
                    total=parseFloat(valor1) / parseFloat(valor2);
                    resultado=total;
                break;
            }
            ig=true;
        
        break;
        
        case "punto":
            var pto=false;
            for(i=0; i<pantalla.length; i++){
                if(pantalla[i]=="."){
                    pto=true;
                }
            }
            if(pto==false){
                resultado=pantalla+".";
            }else{
                resultado=pantalla;
            }
        break;

        case "raiz":
            resultado = Math.sqrt(pantalla);
        break;
    }
    return resultado;
}

