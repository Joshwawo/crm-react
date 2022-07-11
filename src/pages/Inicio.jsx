import { useEffect, useState } from "react";
import Cliente from "../components/Cliente";


const Inicio = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    const obtenerClienteApi = async () => {
      try {
        const url = import.meta.env.VITE_API_URL;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setClientes(resultado);
      } catch (error) {
        console.log(error);
      }
    };
    obtenerClienteApi();
  }, []);

  const handleEliminar = async (id) => {
    const confirmar = confirm("¿Deseas Eliminar Este Cliente?");

    if (confirmar) {
      try {
        const url = `${import.meta.env.VITE_API_URL}/${id}`;
        const respuesta = await fetch(url, {
          method: "DELETE",
        });
        await respuesta.json();
        //cliente sea diferente al id que le pasamos y modificamos el state
        const arrayClientes = clientes.filter((cliente) => cliente.id !== id);
        setClientes(arrayClientes);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
     
        <p className="bg-yellow-400 text-center md:py-2 font-semibold mb-10 rounded-md">
          Esta es la version de produccion, no se adminten los verbos HTTPS
          POST, PUT ni DELETE{" "}
        </p>
     

      <h1 className="font-black text-4xl text-blue-600 ">Clientes</h1>
      <p className=" font-semibold">Administra tus clientes</p>
      
      <table className=" w-full mt-5 table-auto shadow bg-white">
        <thead className="bg-blue-500 text-white">
          <tr>
            <th className="p-2">Nombre</th>
            <th className="p-2">Contacto</th>
            <th className="p-2">Empresa</th>
            <th className="p-2">Acciones</th>
          </tr>
        </thead>

        <tbody>
          {clientes.map((cliente) => (
            <Cliente
              key={cliente.id}
              cliente={cliente}
              handleEliminar={handleEliminar}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Inicio;
