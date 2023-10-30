// libraries
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

//components
import Navbar from "./components/Navbar";

//pages
import Index from "./pages/Index";
import Hospitals from "./pages/Hospitals";
import Details from "./pages/Details";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/hospital" element={<Hospitals />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
