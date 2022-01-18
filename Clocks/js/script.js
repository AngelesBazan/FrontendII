window.addEventListener('load', function(){

    /* ------------- Variables ------------- */

    let cronometro;
    let tempo;
    let blink;
    let segundos = 0;
    let unMinuto = 0;
    let segT = 0;
    let minT = 0;
    const valor = document.querySelector('#valor');
    const display = document.querySelector('#display');
    const botonIniciar = document.querySelector('.fa-play-circle');
    const botonPausar = document.querySelector('.fa-pause-circle');
    const botonStop = document.querySelector('.fa-stop-circle');
    const botonIniciarTemp = document.getElementById('temp-play');
    const botonPausarTemp = document.getElementById('temp-pause');
    const botonStopTemp = document.getElementById('temp-stop');
    const minUp = document.querySelector('#minUp');
    const segUp = document.querySelector('#segUp');
    const minDown = document.querySelector('#minDown');
    const segDown = document.querySelector('#segDown');


    /* ------------- Listeners ------------- */

    botonIniciar.addEventListener('click',play);
    botonPausar.addEventListener('click',pausa);
    botonStop.addEventListener('click',stop);
    botonIniciarTemp.addEventListener('click',playTemp);
    botonPausarTemp.addEventListener('click',pauseTemp);
    botonStopTemp.addEventListener('click',stopTemp);
    minUp.addEventListener('click',masMinutos);
    segUp.addEventListener('click',masSegundos);
    minDown.addEventListener('click',menosMinutos);
    segDown.addEventListener('click',menosSegundos);

    /* ------------- Funciones ------------- */
    
    /* ------------- CRONOMETRO ------------- */
    
    function play(){
        cronometro = setInterval(function(){ // c/1000 milisegundos setea 1seg
            segundos++;
            checkContador();
            renderizar();
        },1000);
    }
    
    function pausa(){
        clearInterval(cronometro);
    }
    
    function stop(){
        clearInterval(cronometro);
        segundos = 0;
        unMinuto = 0;
        renderizar();
    }
    
    function checkContador(){ // c/60seg agrega 1 minuto
        if(segundos >= 59){
            unMinuto++;
            segundos = 0;
        };
    }
    
    function renderizar(){
        valor.innerHTML = checkTime(unMinuto)+":"+checkTime(segundos);
    }
    
    /* ------------- TEMPORIZADOR ------------- */
    
    function playTemp(){
        tempo = setInterval(function(){ // c/1000 milisegundos setea 1seg
            if(segT==0 && minT==0){
                renderTemp();
                clearInterval(tempo);
                parpadeo();
            } else if(segT>0){
                segT--;
                renderTemp();
            } else{
                minT--;
                segT = 59;
                renderTemp();
            }
        },1000);
    }
    
    function pauseTemp(){
        clearInterval(tempo);
    }

    function stopTemp(){
        clearInterval(tempo);
        clearInterval(blink);
        display.style.color = 'black';
        segT = 0;
        minT = 0;
        renderTemp();
    }
    
    function renderTemp(){
        display.innerHTML = checkTime(minT)+":"+checkTime(segT);
    }
    
    function parpadeo(){
        blink = setInterval(function(){
            display.style.color = display.style.color == 'black' ? 'red' : 'black';
        }, 200);
    }

    /* Botoncitos flechas para setear temporizador */
    function masMinutos(){
        minT++;
        renderTemp();
    }
    function menosMinutos(){
        if(minT>0){
            minT--;
            renderTemp();
        }
    }
    function masSegundos(){
        if(segT<59){
            segT++;
        } else{
            minT++;
            segT=0;
        }
        renderTemp();
    }
    function menosSegundos(){
        if(segT>0){
            segT--;
        } else if(segT==0 && minT>0){
            minT--;
            segT=59;
        }
        renderTemp();
    }

    /* ------------- AHORA ------------- */
    function startTime() {
        const hoy = new Date(); // parte de la hora actual y guarda en variables los valores
        let h = hoy.getHours(); //obtiene hora actual
        let m = hoy.getMinutes();//minuto actual
        let s = hoy.getSeconds();//segundos actual
    
        let diaSemana = hoy.getDay();
        let dia = hoy.getDate();
        let mes = hoy.getMonth()+1; //porque va de 0 a 11
        let anio = hoy.getFullYear();
    
        let semana = ['DOMINGO', 'LUNES', 'MARTES', 'MIERCOLES', 'JUEVES', 'VIERNES', 'SABADO'];
        diaSemana = semana[diaSemana];
    
        // chequea que min y seg sean <10
        m = checkTime(m);
        s = checkTime(s);
        
        // setea la info con formato
        document.getElementById('now').innerHTML =  h + ":" + m + ":" + s;
        document.querySelector('.info').innerHTML = "HOY ES " + diaSemana + " " + dia + "/" + mes + "/" + anio;
        setTimeout(startTime, 1000);//update c/seg
    }
    
    // agrega 0 delante de numeros < 10
    function checkTime(i) {
        if (i < 10){
            i = "0" + i
        };
        return i;
    }
    
    // ejecuto para visualizar la función
    startTime();
})

