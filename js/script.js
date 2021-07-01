var verificar = window.document.getElementById('verificador')
verificar.addEventListener('click', verif)
    function verif(){
        var data = new Date()
        var anoatual = data.getFullYear()
        var anodigitado = window.document.getElementById('nascimento')
        var res = window.document.getElementById('res')
        if (anodigitado.value == 0 || Number(anodigitado.value) > anoatual){
            window.alert('[ERRO]: COLOQUE UM ANO DE NASCIMENTO VÁLIDO')
        } else {
            var sexoselect = window.document.getElementsByName('rsex')
            var idade = anoatual - Number(anodigitado.value)
            var genero = ''
            var img = document.createElement('img')
            img.setAttribute('id', 'foto')
            if(sexoselect[0].checked) {
                genero = `Homem`
                if( idade >= 0 && idade < 10){
                    img.setAttribute('src', 'images/foto-bebe-m.png')
                } else if(idade < 21){
                    img.setAttribute('src', 'images/foto-jovem-m.png')
                } else if (idade < 50){
                    img.setAttribute('src', 'images/foto-adulto-m.png')
                } else {
                    img.setAttribute('src', 'images/foto-idoso-m.png')
                }
                    }else if(sexoselect[1].checked){
                        genero = `Mulher`
                    if(idade >= 0 && idade < 10){
                        img.setAttribute('src' , 'images/foto-bebe-f.png')
                    } else if (idade < 21){
                        img.setAttribute('src' , 'images/foto-jovem-f.png')
                    } else if (idade < 50){
                        img.setAttribute('src' , 'images/foto-adulto-f.png')
                    } else {
                        img.setAttribute('src' , 'images/foto-idoso-f.png')
                    }
                }
        res.innerHTML = `<p> Detectamos ${genero} de ${idade} anos.</p>`
        res.appendChild(img)
    }
}