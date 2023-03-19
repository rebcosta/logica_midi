
function playSom(seletorAudio){
    const elemento = document.querySelector(seletorAudio);
    
    if(elemento && elemento.localName === 'audio'){
        elemento.play();
    }else{
        console.log('Elemento ou seletor não encontrado')
    }
    
}

    const listTeclas = document.querySelectorAll('.tecla');


for(let c = 0; c < listTeclas.length; c++) {

        const tecla = listTeclas[c]
    const instrumento = tecla.classList[1];
    
    
    const idAudio = `#som_${instrumento}`; //template string

    //console.log(idAudio);  

        tecla.onclick = function () {
            playSom(idAudio);
        }
    
    // console.log(c);
        tecla.onkeydown =  function (event) {
            console.log()
            
            if(event.code ==='Space'|| event.code === "Enter"){
                tecla.classList.add('ativa');
            }
            
        }
        tecla.onkeyup = function (){
            tecla.classList.remove('ativa')
        }
};