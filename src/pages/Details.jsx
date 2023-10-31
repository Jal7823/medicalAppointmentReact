//utils
import { useEffect, useState } from "react";
import { getOneData } from "../utils/crud";

//library
import { useParams,NavLink } from "react-router-dom";


function Details() {
  const { id } = useParams();
  const [object, setObject] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getOneData("branchOffice", id);
        setObject(res.data);
      } catch (error) {
        console.error("Error al obtener los datos:", error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="container mx-auto m-4">
      {object ? (
        <div className="w-100vh bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4 p-4">
          <NavLink to="#">
            <img
              className="rounded-t-lg mx-auto bg-slate-100 m-4 w-100 object-cover rounded"
              src='/logo.png'
              alt={object.name}
            />
          </NavLink>
          <div className="p-5">
            <NavLink to="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {object.name}
              </h5>
            </NavLink>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {object.descriptions}
            </p>
            <NavLink 
              to="/hospital"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
                <i className="fa fa-arrow-left"></i>
            </NavLink>
          </div>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
}

export default Details;
