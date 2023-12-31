import Title from "../../components/Title";
import { useForm } from "react-hook-form";
import { createItem, getOneData } from "../../utils/crud";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../../utils/slices";
import decodeJwtToken from '../../utils/decodeTokens'


function Login() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { register, handleSubmit } = useForm();
  const onSubmit = handleSubmit(async (data) => {
    const getAccess = await createItem("token", data);
  
    if (getAccess.status !== 200) {
      console.log("something was wrong");
    } else {
      localStorage.setItem("token", getAccess.data.access);
      const token = localStorage.getItem('token');
      const payload = decodeJwtToken(token);
  
      try {
        const currentUser = await getOneData('users/users', payload.user_id);
        
        const user = {
          'email':currentUser.data.email,
          'username': currentUser.data.username,
          'token': localStorage.getItem('token'),
          'dni':currentUser.data.dni,
          'last_name':currentUser.data.last_name,
          'name':currentUser.data.name,
          'image':currentUser.data.image,

        }
        const userJSON = JSON.stringify(user);
        localStorage.setItem('user', userJSON);
        dispatch(setUser(user))
        navigate('/')
      } catch (error) {
        console.error("Error fetching user data:", error);
      }  
      navigate("/");
    }
  });

  return (
    <div>
      <Title content="Login" />
      <div className="flex justify-center mt-8">
        <div className="w-full max-w-xs">
          <form
            onSubmit={onSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="username"
              >
                Username
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                {...register("username")}
                placeholder="Username"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="password"
              >
                Password
              </label>
              <input
                className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
                {...register("password")}
              />
              <p className="text-red-500 text-xs italic">
                Por favor introduzca una contraseña
              </p>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Entrar
              </button>
              <a
                className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                href="#"
              >
                Olvidaste tu cintraseña?
              </a>
            </div>
          </form>
          <p className="text-center text-gray-500 text-xs">
            ©2023 Medical Appointment
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
