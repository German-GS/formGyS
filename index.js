import { saveMember } from "./firebase.js"
window.addEventListener('DOMContentLoaded', ()=>{
    console.log('Listo')
})

const regform = document.getElementById('reg-form')

regform.addEventListener('submit', (e)=>{
    e.preventDefault()
    console.log("enviado")

    const idNumber=regform['id-number']
    const membName= regform['name']
    const lastName=regform['last-name']
    const celPhone= regform['cel-phone']
    const fechaNac= regform['fecha-nac']
    const age= regform['age']
    const provincia = regform['provincia']
    const addres = regform['addres']

    saveMember(idNumber.value, membName.value, lastName.value, celPhone.value, fechaNac.value, age.value, provincia.value, addres.value)

    regform.reset()
})



