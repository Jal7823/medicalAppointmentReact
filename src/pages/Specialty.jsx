import { useEffect, useState } from "react";
import { getAllData } from "../utils/crud";
import Errors from "../components/Errors";
import Loading from "../components/Loading";
import Title from "../components/Title";

function Specialty() {
  const [Specialty, setSpecialty] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllData("users/specialty");
        setSpecialty(res.data);
        setLoading(false);
      } catch (e) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Errors />
      ) : (
        <>
        <Title content='Lista de especialidades'/>
        <div className="container flex justify-center place-content-center mt-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 grid-row-auto">
          {Specialty.map((el) => (
            <div className="flex" key={el.id}>
              <i className={`${el.icon} text-red-700`}></i>
              <p className="ml-2">{el.name}</p>
            </div>
          ))}
        </div>
      </div>
        </>
      
      )}
    </>
  );
}

export default Specialty;
