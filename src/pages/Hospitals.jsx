import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getAllData } from "../utils/crud";
import Loading from "../components/Loading";
import Errors from "../components/Errors";
import Title from '../components/Title'

function Hospitals() {
  const [BranchOffice, setBranchOffice] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllData("branchOffice");
        setBranchOffice(res.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Title content='Centros Medicos' /> {/* Mueve el componente Title fuera del bucle */}
      <div className="flex flex-wrap mt-4 justify-around">
        {loading ? (
          <Loading />
        ) : error ? (
          <Errors />
        ) : (
          BranchOffice.map((el) => (
            <div
              key={el.id}
              className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 mt-4 "
            >
              <NavLink to={`/details/${el.id}`}>
                <img className="rounded-t-lg max-w-300 object-contain max-h-300" src={el.image} alt={el.name} />
              </NavLink>
              <div className="p-5 dark:bg-gray-800">
                <NavLink to={`/details/${el.id}`}>
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {el.name}
                  </h5>
                </NavLink>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {el.descriptions}
                </p>
                <NavLink
                  to={`/details/${el.id}`}
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover-bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  <i className="fa fa-eye textwhite text2xl"></i>
                </NavLink>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Hospitals;
