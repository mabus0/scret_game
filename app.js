let maxi = 10;
let numeroalmacenados=[];
let numero_de_intentos =1;





function establesimiento_de_ambiente( etiqueta, parametro){
    let la_etiqueta= document.querySelector(etiqueta);
    la_etiqueta.innerHTML= parametro;
    return;
}
 function reinicioDeMensajes(){
    establesimiento_de_ambiente('h1','BIENVENIDO AL JUEGO');
    establesimiento_de_ambiente('p', 'incerte aqui el numero');
    adivinar=el_numero_que_se_debe_imaguinar();
    numero_de_intentos=1;
    console.log(adivinar);
    console.log(numeroalmacenados);
 }
 reinicioDeMensajes();

 

function el_numero_que_se_debe_imaguinar(){
    let adivinar= Math.floor(Math.random()*maxi)+1;
    if (numeroalmacenados.length==maxi){
        juegoreinicio();
    }else{

        if(numeroalmacenados.includes(adivinar)){
            return el_numero_que_se_debe_imaguinar();
        

        }else{
            numeroalmacenados.push(adivinar);
            return adivinar;
        }
    }
}


function VERIFICARINTENTO(){
    let numerodeUsuario =parseInt( document.getElementById('valorUsuario').value);
    console.log(numerodeUsuario===adivinar);
    if (numerodeUsuario===adivinar){
        alert('acertaste!!!');
        establesimiento_de_ambiente('p',`acertaste en ${numero_de_intentos} ${(numero_de_intentos==1) ? 'vez' :'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        alert("sigue intentando");
        if(numerodeUsuario>adivinar){
            establesimiento_de_ambiente('p',`el numero que seleccionaste es ${numerodeUsuario} y es mayor al que tienes que adivinar!!!`);
            alert(`el numero que seleccionaste es ${numerodeUsuario} y es mayor al que tienes que adivinar!!!`);
        }else{
            establesimiento_de_ambiente('p',`el numero que seleccionaste es ${numerodeUsuario} y es menor al que tienes que adivinar!!!`);
            alert(`el numero que seleccionaste es ${numerodeUsuario} y es menor al que tienes que adivinar!!!`);
        }
        numero_de_intentos ++;
        limpiar_caja();
    }
    return;

}
function limpiar_caja(){
    let valor = document.querySelector('#valorUsuario');;
    valor.value='';
}

function juegoreinicio(){
    limpiar_caja();
    reinicioDeMensajes();
    document.querySelector('#reiniciar').setAttribute('disabled','True');
    
}
