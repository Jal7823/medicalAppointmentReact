import { useState, useEffect } from "react";
import Title from "../components/Title";
import { getAllData, createItem } from "../utils/crud";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

function Appointments() {
  const user = useSelector((state) => state.user);

  const [BranchOffices, setBranchOffices] = useState([]);
  const [selectedBranch, setSelectedBranch] = useState(""); // Estado para la sucursal seleccionada
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (data) => {
    const dataToAppointments = {
      name: `${user.username}`,
      last_name: `${user.last_name}`,
      dni: 1,
      specialty: 1,
      date: data.date,
      user: 1,
      branchOffices: 1,
    };

    const token = localStorage.getItem("token");

    try {
      const res = await createItem("appointments", dataToAppointments, token);
      console.log(await res);
      // Aquí puedes agregar código para manejar la respuesta exitosa, si es necesario.
    } catch (error) {
      console.error(error);
      // Aquí puedes manejar cualquier error que ocurra durante la solicitud.
    }
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getAllData("branchOffice");
        setBranchOffices(res.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  const specialties = selectedBranch
    ? BranchOffices.find((el) => el.name === selectedBranch)?.specialty || []
    : [];

  return (
    <>
      <Title content="Pedir cita" />
      <div className="flex justify-center mt-8">
        <form onSubmit={onSubmit} className="flex flex-col mx-auto">
          <div className="w-64">
            <label htmlFor="list">Seleccione sucursal:</label>
            <select
              id="list"
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              {...register("branchOffice")}
              onChange={(e) => setSelectedBranch(e.target.value)}
            >
              <option value="">Seleccione sucursal</option>
              {BranchOffices.map((el) => (
                <option key={el.id} value={el.name}>
                  {el.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-4">
            <label htmlFor="date">Fecha</label>
            <div className="relative">
              <input
                id="date"
                type="date"
                className="block w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded focus:outline-none focus:shadow-outline"
                {...register("date")}
              />
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="w-64 mt-4">
            <label htmlFor="specialty">Seleccione especialidad:</label>
            <select
              id="specialty"
              className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
              {...register("specialty")}
            >
              {specialties.map((e, index) => (
                <option key={index} value={e.name}>
                  {e.name}
                </option>
              ))}
            </select>
          </div>
          <div className="mt-4">
            <button
              type="submit"
              className="p-2 bg-red-700 text-white rounded w-64 mx-auto block"
            >
              Reservar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default Appointments;
