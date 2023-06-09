const form = document.querySelector('form')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click', add)
form.addEventListener('change', save)

function add () {
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)

  const dayExists = nlwSetup.dayExists(today)

  if (dayExists === true) {
    alert('O dia já existe')
    return
  } 

  alert('O dia foi adicionado')
  nlwSetup.addDay(today)  
}

function save () {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habits")) || {}

nlwSetup.setData(data)
nlwSetup.load()