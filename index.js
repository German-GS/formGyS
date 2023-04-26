import { saveMember, getMembers, onGetMembers } from "./firebase.js";

const membersContainer = document.getElementById("membersContainer");
const regform = document.getElementById("reg-form");

window.addEventListener("DOMContentLoaded", async () => {
    onGetMembers((querySnapshot) => {
      let html =
        '<table class="table table-hover text-white" ><thead><tr><th>Cedula</th><th>Nombre</th><th>Apellido</th><th>Celular</th><th>F. Nac</th><th>Edad</th><th>Provincia</th><th>Dir.Exacta</th><th>F.Ingreso</th><th>F.Promesa</th></tr></thead><tbody>';
  
      //Hace un llamado al servidor para listar los miembros que se encuentran en la DB
      querySnapshot.forEach((doc) => {
        // Agregar la información en una nueva fila de la tabla
        html += `
              <tr>
                  <td>${doc.data().idNumber}</td>
                  <td>${doc.data().membName}</td>
                  <td>${doc.data().lastName}</td>
                  <td>${doc.data().celPhone}</td>
                  <td>${doc.data().fechaNac}</td>
                  <td>${doc.data().age}</td>
                  <td>${doc.data().provincia}</td>
                  <td>${doc.data().addres}</td>
                  <td>${doc.data().orgDate}</td>
                  <td>${doc.data().promDate}</td>
              </tr>
          `;
      });
  
      html += "</tbody></table>";
      membersContainer.innerHTML = html;
    });
  });
  

/* const membersContainer = document.getElementById('membersContainer')
const regform = document.getElementById('reg-form')

window.addEventListener('DOMContentLoaded', async ()=>{
    const querySnapshot = await getMembers()
    let html=''
    //Hace un llamado al servidor para listar los miembros que se encuentran en la DB
    querySnapshot.forEach(doc => {
        html += `
            <div>
                <h3>Numero de cedula: ${doc.data(). idNumber}</h3>
                <h5>Nombre completo: ${doc.data(). membName} ${doc.data(). lastName}</h5>
                <p>Numero de celular: ${doc.data().celPhone} fecha de nacimiento: ${doc.data(). fechaNac} Edad: ${doc.data(). age} Provincia: ${doc.data(). provincia} Direccion exacta: ${doc.data(). addres}</p>
            </div>
        `
        
    });

    membersContainer.innerHTML = html
})
 */

//Camptura los datos y los envia a la funcion que guarda los datos en firestore
regform.addEventListener("submit", (e) => {
  e.preventDefault();
  const idNumber = regform["id-number"];
  const membName = regform["name"];
  const lastName = regform["last-name"];
  const celPhone = regform["cel-phone"];
  const fechaNac = regform["fecha-nac"];
  const age = regform["age"];
  const provincia = regform["provincia"];
  const addres = regform["addres"];
  const orgDate = regform["org-date"];
  const promDate = regform["promise-date"];

  saveMember(
    idNumber.value,
    membName.value,
    lastName.value,
    celPhone.value,
    fechaNac.value,
    age.value,
    provincia.value,
    addres.value,
    orgDate.value,
    promDate.value
  );

  regform.reset();
});
