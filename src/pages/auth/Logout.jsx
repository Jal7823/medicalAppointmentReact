import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Message from "../../components/Message";

function Logout() {
  const navigate = useNavigate();
  useEffect(() => {
    const returnLogin = () => {
        navigate("/login");
      }; 
      
      returnLogin()
  
  }, [navigate])
  

  return <Message title='Redirigiendo' content='Te estamos redigiendo ' />;
}

export default Logout;
