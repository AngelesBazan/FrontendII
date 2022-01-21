window.addEventListener('load', function(){
    
    /* -------------- variables ------------- */
    const piedraH = document.querySelector('#piedra');
    const papelH = document.querySelector('#papel');
    const tijeraH = document.querySelector('#tijera');
    const iniciar = document.querySelector('#iniciar');
    const opciones = document.querySelector('#opciones');
    const redes = document.querySelector('#redes');
    const volver = document.querySelector('#volver');
    const fakefooter = document.querySelector('.fakefooter');
    const vos = document.querySelector('#vos');
    const pc = document.querySelector('#pc');
    const resultado = document.querySelector('#resolucion');
    const verResultado = document.querySelector('.resultado');
    const calcular = document.querySelector('#calcular');
    let computadora;
    let numeroRandom;
    let puntoVos=1;
    let puntoPc=1;


    /* ------------ listeners ----------- */
    iniciar.addEventListener('click', inicio);
    volver.addEventListener('click', inicio);
    piedraH.addEventListener('click', opcionPiedra);
    papelH.addEventListener('click', opcionPapel);
    tijeraH.addEventListener('click', opcionTijera);

    /* ------------ funciones ----------- */
    
    function inicio(){ // cambia de "pantalla"
        iniciar.classList.toggle('oculto');
        opciones.classList.toggle('oculto');
        redes.classList.toggle('oculto');
        fakefooter.classList.toggle('oculto');
    }

    function juegaPc(){ // opción que juega la pc
        let opciones = ["piedra", "papel", "tijera"];
        numeroRandom = parseInt(Math.random() * (3 - 0) + 0);
        computadora = opciones[numeroRandom];
        console.log("La PC eligió: "+computadora);
    }

    function ganar(){
        vos.innerHTML = puntoVos++;
        calcular.innerHTML = "¡Ganaste! Vos +1";
    }
    
    function perder(){
        pc.innerHTML = puntoPc++;
        calcular.innerHTML = "¡Perdiste! Pc +1";
    }

    function empate(){
        calcular.innerHTML = "¡Empataron!";
    }

    function mostrarResultado(){
        verResultado.classList.toggle('oculto');
    }

    function opcionPiedra(){
        juegaPc();
        let opcionA = "piedra";
        if(opcionA == computadora){
            empate();
            console.log("Empate");
        } else if(computadora == "papel"){
                perder();
                console.log("Perdiste 😪");
            } else{
                ganar();
                console.log("Ganaste");
            }
        resultado.innerHTML = computadora;
        mostrarResultado();
        setTimeout(mostrarResultado, 2000);
    }

    function opcionPapel(){
        juegaPc();
        let opcionB = "papel";
        if(opcionB == computadora){
            empate();
            console.log("Empate");
        } else if(computadora == "piedra"){
                ganar();
                console.log("Ganaste");
            } else {
                perder();
                console.log("Perdiste 😪");
            }
        resultado.innerHTML = computadora;
        mostrarResultado();
        setTimeout(mostrarResultado, 2000);
    }
            
    function opcionTijera() {
        juegaPc();
        let opcionC = "tijera";
        if(opcionC == computadora){
            empate();
            console.log("Empate");
        } else if(computadora == "piedra"){
                perder();
                console.log("Perdiste 😪")
            } else{
                ganar();
                console.log("Ganaste")
            }
        resultado.innerHTML = computadora;
        mostrarResultado();
        setTimeout(mostrarResultado, 2000);
    }
        
    
})
