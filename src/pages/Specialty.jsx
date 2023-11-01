import { useEffect, useState } from "react";
import { getAllData } from "../utils/crud";

function Specialty() {
  const [Specialty, setSpecialty] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await getAllData("users/specialty");
      setSpecialty(res.data);
    };
    fetchData();
  }, []);

  return (
    <div className="container flex justify-center ">
      <table className="min-w-34">
        <thead>
          <tr>
            <th className="px-4 py-2">Especialidad</th>
            <th className="px-4 py-2">Icon</th>
          </tr>
        </thead>
        <tbody>
          {Specialty.map((el) => (
            <tr key={el.id}>
              <td className="border px-4 py-2">{el.name}</td>
              <td className="border px-4 py-2 text-center text-2xl">
                <i className={`${el.icon} text-center text-red-700`}></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Specialty;