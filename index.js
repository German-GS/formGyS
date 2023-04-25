import { saveMember, getMembers } from "./firebase.js"
window.addEventListener('DOMContentLoaded', ()=>{
})

const regform = document.getElementById('reg-form')


//Camptura los datos y los envia a la funcion que guarda los datos en firestore
regform.addEventListener('submit', (e)=>{
    e.preventDefault()
    const idNumber=regform['id-number']
    const membName= regform['name']
    const lastName=regform['last-name']
    const celPhone= regform['cel-phone']
    const fechaNac= regform['fecha-nac']
    const age= regform['age']
    const provincia = regform['provincia']
    const addres = regform['addres']
    const orgDate = regform['org-date']
    const promDate = regform['promise-date']

    saveMember(idNumber.value, membName.value, lastName.value, celPhone.value, fechaNac.value, age.value, provincia.value, addres.value, orgDate.value, promDate.value)

    regform.reset()
})



