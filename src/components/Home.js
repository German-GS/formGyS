import React, { useState } from "react";
import { useAuth } from "../context/authContext";
import { Navbar } from "./Navbar";
import { InputForm } from "./InputForm";
import { savePpa } from "../firebase";

export function Home() {
  const { loading } = useAuth();
  const [ppaData, setPpaData] = useState([]);

  const handleSavePpa = (data) => {
    setPpaData(data);

    savePpa(data)
      .then(() => {
        console.log("Datos del PPA guardados exitosamente en la base de datos");
        // Realizar cualquier otra acción necesaria después de guardar los datos
      })
      .catch((error) => {
        console.error(
          "Error al guardar los datos del PPA en la base de datos",
          error
        );
        // Manejar el error de manera adecuada, o mostrarlo en la interfaz de usuario si es posible
      });
  };

  const handleInputChange = (field, data) => {
    setPpaData((prevState) => ({
      ...prevState,
      [field]: data,
    }));
  };

  if (loading) return <h1>Loading</h1>;
  return (
    <div className="bg-white text-gray-400 w-full lg:mb-0 mb-4">
      <Navbar />
      <div className="max-w-screen-lg mx-auto">
        <h1 className="text-3xl mb-5 mt-5">PPA</h1>
        <hr />

        <form
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx=2"
          id="ppa-form"
          onSubmit={(event) => {
            event.preventDefault(); // Evita el comportamiento predeterminado de enviar el formulario
            handleSavePpa(ppaData); // Pasa los datos correctos a handleSavePpa
          }}
        >
          <div className="lg:col-span-1">
            <label className="text-xl block mb-2 text-sm font-medium text-gray-400 mb-6">
              Sueños
            </label>
            <InputForm
              onSavePpa={(data) => handleInputChange("suenos", data)}
            />
          </div>
          <div className="lg:col-span-1">
            <label className="text-xl block mb-2 text-sm font-medium text-gray-400 mb-6">
              Retos
            </label>
            <InputForm onSavePpa={(data) => handleInputChange("retos", data)} />
          </div>
          <div className="lg:col-span-1">
            <label className="text-xl block mb-2 text-sm font-medium text-gray-400 mb-6">
              Mis Fortalezas
            </label>
            <InputForm
              onSavePpa={(data) => handleInputChange("fortalezas", data)}
            />
          </div>
          <div className="lg:col-span-1">
            <label className="text-xl block mb-2 text-sm font-medium text-gray-400 mb-6">
              Corporabilidad
            </label>
            <InputForm
              onSavePpa={(data) => handleInputChange("corporabilidad", data)}
            />
          </div>
          <div className="lg:col-span-1">
            <label className="text-xl block mb-2 text-sm font-medium text-gray-400 mb-6">
              Creatividad
            </label>
            <InputForm
              onSavePpa={(data) => handleInputChange("creatividad", data)}
            />
          </div>

          <div className="lg:col-span-1">
            <label className="text-xl block mb-2 text-sm font-medium text-gray-400 mb-6">
              Afectividad
            </label>
            <InputForm
              onSavePpa={(data) => handleInputChange("afectividad", data)}
            />
          </div>
          <div className="lg:col-span-1">
            <label className="text-xl block mb-2 text-sm font-medium text-gray-400 mb-6">
              Espiritualidad
            </label>
            <InputForm
              onSavePpa={(data) => handleInputChange("espiritualidad", data)}
            />
          </div>
          <div className="lg:col-span-1">
            <label className="text-xl block mb-2 text-sm font-medium text-gray-400 mb-6">
              Caracter
            </label>
            <InputForm
              onSavePpa={(data) => handleInputChange("caracter", data)}
            />
          </div>
          <div className="lg:col-span-1">
            <label className="text-xl block mb-2 text-sm font-medium text-gray-400 mb-6">
              Sociabilidad
            </label>
            <InputForm
              onSavePpa={(data) => handleInputChange("sociabilidad", data)}
            />
          </div>

          <div className="col-span-full">
            <button
              type="submit"
              className="max-w-200 text-white bg-secundaryColor hover:bg-scout focus:ring-4 focus:outline-none focus:ring-scout font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-scout dark:hover:bg-scout dark:focus:ring-blue-800 mb-3"
            >
              Registrar PPA
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
