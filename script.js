
function carregar(){ //Cria a função carregar
    var msg = window.document.getElementById('msg') //msg recebe o Id msg
    var img = window.document.getElementById('imagem') //img recebe o Id imagem
    var data = new Date()
    var hora = data.getHours() //pega a hora do sistema
    if(hora >= 0 && hora < 12){
        //Bom dia
        msg.innerHTML = `Bom dia ! Agora são ${hora} horas !` //modifica o Id
        img.src = 'manha.png'
        document.body.style.background = '#fec4a6'
    }
    else if( hora >= 12 && hora <= 18){
        //Boa tarde
        msg.innerHTML = `Boa Tarde ! Agora são ${hora} horas !`
        img.src = 'tarde.png'
        document.body.style.background = '#a36767'
    }
    else{
        //Boa noite
        msg.innerHTML = `Boa Noite ! Agora são ${hora} horas !`
        img.src = 'noite.png'
        document.body.style.background = '#2a3544'
    }
}