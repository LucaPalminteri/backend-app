const name = document.getElementById('name')
const lastName = document.getElementById('lastName')
const bornDate = document.getElementById('bornDate')
const tech = document.getElementById('tech')
const btnAdd = document.getElementById('btn-add')

btnAdd.addEventListener('click', ()=>{
    window.location.href = `add/${name.value}/${lastName.value}`
})

