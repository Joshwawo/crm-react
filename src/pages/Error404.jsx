import React from "react";
import {Link} from 'react-router-dom'

const Error404 = () => {
  return (
    <div className=" h-screen bg-green-200 flex justify-center items-center">
      <div>
        <h1 className=" font-bold text-3xl ">Error 404 esta Pagina no existe D:</h1>
        <Link to="/clientes">
          <button className="bg-black hover:text-white py-1 px-2">Regresar</button>
        </Link>
      </div>
    </div>
  );
};

export default Error404;
