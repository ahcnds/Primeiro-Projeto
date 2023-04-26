function carregar(){
  var msg = window.document.getElementById(`msg`)
  var foto = window.document.getElementById(`foto`)
  var saudação = window.document.getElementById('saudação')
  var data = new Date()
  var hora = data.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`
  if (hora >= 0 && hora < 12 ) {
    //BomDia
    img.src = 'manhã.jpg'
    document.body.style.background = '#e2cd9f'
  } else if (hora >= 12 && hora < 18) {
    // BoaTarde
    img.src = 'tarde.jpg'
    document.body.style.background = '#b9846f'
  } else {
    //boa noite
    img.src = 'noite.jpg'
    document.body.style.background = '#515154'
  }
}