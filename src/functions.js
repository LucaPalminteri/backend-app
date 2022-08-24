const name = document.getElementById('name')
const lastName = document.getElementById('lastName')
const bornDate = document.getElementById('bornDate')
const tech = document.getElementById('tech')
let sex = document.getElementById('sex')
const btnAdd = document.getElementById('btn-add')
const btnDelete = document.getElementsByClassName('delete')

let variables = [{id:0,name:'Choose Tech Stack'},{id:1,name:'MERN'},{id:2,name:'LAMP'},{id:3,name:'ASP.NET'},{id:4,name:'MEAN'},{id:5,name:'MEVN'},{id:1,name:'Ruby on Rails'}]

let techValue = variables[tech] 
console.log(sex.childNodes);
console.log(sex.childNodes[3].checked);

if(sex.childNodes[1].checked) sex = 'M' 
else if(sex.childNodes[3].checked) sex = 'F'

btnAdd.addEventListener('click', ()=>{
    window.location.href = `add/${name.value}/${lastName.value}/${bornDate.value}/${sex}/${techValue}`;
})

for(let i of btnDelete) {
    i.addEventListener('click',function(){
        console.log('pulsado');
        let id = i.getAttribute('id')
        window.location.href = `delete/${id}`
    })
};
