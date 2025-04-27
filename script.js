function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
     window.alert('[ERRO] Verifique os dados e tente Novamente')
    } else {
         var fsex = document.getElementsByName('radsex')
         var idade = ano - Number(fano.value)
         var gênero = ''
         var img = document.createElement('img')
         img.setAttribute('id', 'foto')
         if (fsex[0].checked) {
             gênero = 'Homem'
             if (idade >= 0 && idade < 5){
                 // bebe
                 img.setAttribute('src', 'bebepngO250.png')
             } else if ( idade < 12){
                 // criança
                 img.setAttribute('src', 'crianca-m.png')
             } else if ( idade < 30){
                 //jovem
                 img.setAttribute('src', 'jovem-m.png')
             } else if ( idade < 50){
                 //adulto
                 img.setAttribute('src', 'adulto-m.png')
             } else {
                 img.setAttribute('src', 'idoso.png')
             } //idoso
 
         } else if (fsex[1].checked) {
             gênero = 'Mulher'
             if (idade >= 0 && idade < 5){
                 // bebe
                 img.setAttribute('src', 'bebepngA250.png')
             } else if ( idade < 12){
                 // criança
                 img.setAttribute('src', 'crianca-f.png')
             } else if ( idade < 30){
                 //jovem
                 img.setAttribute('src', 'jovem-f.png')
             } else if (idade < 50) {
                 //adulto
                 img.setAttribute('src', 'adulta-f.png')
             } else {
                 img.setAttribute('src', 'idosa.png')
             }
    }
         res.style.textAlign = 'center'
         res.innerHTML = `Detectamos ${gênero} com ${idade} anos`
         res.appendChild(img)
 
    }
 }