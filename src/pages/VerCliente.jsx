import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner";

const VerCliente = () => {
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

  return cargando ? (
    <Spinner />
  ) : Object.keys(cliente).length === 0 ? (
    <p>No hay Resultados</p>
  ) : (
    <div>
      <h1 className="font-black text-4xl text-blue-600 ">
         Cliente: {cliente.nombre}
      </h1>
      <p>Informacion del cliente</p>

      {cliente.nombre && (
        <p className="text-2xl mt-10 text-gray-500">
          <span className="text-gray-600 uppercase font-bold ">Cliente: </span>
          {cliente.nombre}
        </p>
      )}

      {cliente.email && (
        <p className="text-2xl mt-4 text-gray-500">
          <span className="text-gray-600 uppercase font-bold ">Email: </span>
          {cliente.email}
        </p>
      )}

      {cliente.telefono && (
        <p className="text-2xl mt-4 text-gray-500">
          <span className="text-gray-600 uppercase font-bold ">Telefono: </span>
          {cliente.telefono}
        </p>
      )}

      {cliente.notas && (
        <p className="text-2xl mt-4 text-gray-500">
          <span className="text-gray-600 uppercase font-bold ">Notas: </span>
          {cliente.notas}
        </p>
      )}
    </div>
  );
};

export default VerCliente;
