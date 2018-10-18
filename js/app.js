var acum=0;
var operador="";
var coma=false;

function uno(){
  document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "1";
  //status=status+"1";
 // document.getElementById("1");
}

function dos(){
 document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "2";
 //status=status+"2";
}

function tres(){
 document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "3";
 //status=status+"3";
}

function cuatro(){
 document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "4";
 //status=status+"4";
}

function cinco(){
 document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "5";
 //status=status+"5";
}

function seis(){
 document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "6";
 //status=status+"6";
}

function siete(){
 document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "7";
 //status=status+"7";
}

function ocho(){
 document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "8";
 //status=status+"8";
}

function nueve(){
 document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "9";
 //status=status+"9";
}

function cero(){
 document.getElementById("display").innerHTML = document.getElementById("display").innerHTML + "0";
 //status=status+"0";
}

function coma(){
  if (!coma){
    if (document.getElementById("display").innerHTML=="")
    document.getElementById("display").innerHTML="0";
    document.getElementById("display").innerHTML=document.getElementById("display").innerHTML+".";
   // status=status+".";
    coma=true ;
  }
}

function c(){
  document.getElementById("display").innerHTML="";
  coma=false;
  //status="";
}

function masmenos(){
  document.getElementById("display").innerHTML=(-1*(parseFloat(document.getElementById("display").innerHTML)));
  /*if (acum==0)
    status=document.getElementById("display").innerHTML;
  else
    status=acum + operador +document.getElementById("display").innerHTML;*/
}

function mas(){
  acum=parseFloat(document.getElementById("display").innerHTML);
  document.getElementById("display").innerHTML="";
  operador="+";
  coma=false;
  //status=status+"+";
}

function menos(){
  acum=parseFloat(document.getElementById("display").innerHTML);
  document.getElementById("display").innerHTML="";
  operador="-";
  coma=false;
  //status=status+"-";
}

function por()
{
 acum=parseFloat(document.getElementById("display").innerHTML);
 document.getElementById("display").innerHTML="";
 operador="*";
 coma=false;
 //status=status+"*";
}

function entre()
{
 acum=parseFloat(document.getElementById("display").innerHTML);
 document.getElementById("display").innerHTML="";
 operador="/";
 coma=false;
 //status=status+"/";
}

function raiz(){
  document.getElementById("display").innerHTML=Math.sqrt(document.getElementById("display").innerHTML).toPrecision(8);
}

function igual(){
  var resul = 0;
  switch (operador) {
    case "+":
      document.getElementById("display").innerHTML=acum+parseFloat(document.getElementById("display").innerHTML);
    break;
    case "-":
      document.getElementById("display").innerHTML=acum-parseFloat(document.getElementById("display").innerHTML);
    break;
    case "*":
      document.getElementById("display").innerHTML=acum*parseFloat(document.getElementById("display").innerHTML);
    break;
    case "/":
      resul= acum/parseFloat(document.getElementById("display").innerHTML);
      document.getElementById("display").innerHTML = resul.toPrecision(8);
  }  
}

/*function animacion (){
  document.getElementById('n1').style.webkitTransform = 'translate3d(500px, 0, 0)';
  document.getElementById('n1').style.webkitTransform = 'translate3d(0, 0, 0)';
  document.getElementById('n1').style="width:30%";
  document.getElementById('n1').style="height:70px";
}

document.getElementById('n1').onclick=animacion;*/
