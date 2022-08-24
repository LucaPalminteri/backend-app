const name = document.getElementById('name')
const lastName = document.getElementById('lastName')
const bornDate = document.getElementById('bornDate')
const tech = document.getElementById('tech')
let sex = document.getElementById('sex')
const btnAdd = document.getElementById('btn-add')

if(sex.value == 'on')sex = 'M'  
else sex = 'F'

btnAdd.addEventListener('click', ()=>{
    window.location.href = `add/${name.value}/${lastName.value}/${bornDate.value}/${sex}/${tech.value}`;
})

