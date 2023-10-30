//utils
import { getAllData } from "../utils/crud";

//library
import { useEffect } from "react";
import { useState } from "react";
import {NavLink} from 'react-router-dom'



function Hospitals() {
  const [BranchOffice, setBranchOffice] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllData("branchOffice");
      setBranchOffice(res.data);
      console.log(res);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="flex justify-around">
        {BranchOffice.map((el) => (
          <div
            key={el.id}
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <NavLink to={`/details/${el.id}`}>
              <img className="rounded-t-lg" src={el.image} alt={el.name} />
            </NavLink>
            <div className="p-5">
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
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <i className="fa fa-eye textwhite text2xl"></i>
              </NavLink>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Hospitals;
