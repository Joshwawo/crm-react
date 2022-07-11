import { useState, useEffect } from "react";
import Formulario from "../components/Formulario";
import { useParams } from "react-router-dom";

const EditarCliente = () => {
  const [cliente, setCliente] = useState({});
  const [cargando, setCargando] = useState(true);

  const { id } = useParams();

  useEffect(() => {
    // setCargando(!cargando);
    const obtenerClienteApi = async () => {
      try {
        const url = `${import.meta.env.VITE_API_URL}/${id}`;
        const respuesta = await fetch(url);
        const resultado = await respuesta.json();
        setCliente(resultado);
      } catch (error) {
        console.log(error);
      }

      setCargando(!cargando);
    };
    obtenerClienteApi();
  }, []);
  return (
    <div>
      <h1 className="font-black text-4xl text-blue-600 ">Editar Cliente</h1>
      <p className="font-bold">Utliza el formulario para editar a un cliente</p>
      {cliente?.nombre ? (
        <Formulario cliente={cliente} cargando={cargando} />
      ) : (
        <p className="mt-5 font-semibold">
          El Cliente Con El Id <span className="text-blue-700">{id}</span> No
          Existe
        </p>
      )}
    </div>
  );
};

export default EditarCliente;
