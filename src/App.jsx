// libraries
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";


//components
import Navbar from "./components/Navbar";

//pages
import Index from "./pages/Index";
import Hospitals from "./pages/Hospitals";
import Details from "./pages/Details";
import Appointments from "./pages/Appointments";
import Login from "./pages/auth/Login";
import Logout from "./pages/auth/Logout";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hospital" element={<Hospitals />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/appointment" element={<Appointments />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/logout" element={<Logout />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
