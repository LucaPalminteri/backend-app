const name = document.getElementById('name')
const lastName = document.getElementById('lastName')
const bornDate = document.getElementById('bornDate')
const tech = document.getElementById('tech')
const sex = document.getElementById('sex')
const btnAdd = document.getElementById('btn-add')

btnAdd.addEventListener('click', ()=>{
    window.location.href = `add/${name.value}/${lastName.value}/${bornDate.value}/${sex.value}/${tech.value}`;
})

