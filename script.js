let h = document.querySelector('#h')
let m = document.querySelector('#m')
let s = document.querySelector('#s')

setInterval(() => {
  let dia = new Date()
  let hh = dia.getHours() * 30
  let mm = dia.getMinutes() * 6
  let ss = dia.getSeconds() * 6

  h.style.transform = `rotateZ(${hh + mm / 12}deg)`
  m.style.transform = `rotateZ(${mm}deg)`
  s.style.transform = `rotateZ(${ss}deg)`
})
