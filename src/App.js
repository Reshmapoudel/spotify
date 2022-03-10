import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Premium from "./pages/Premium";
import Support from "./pages/Support";
import Download from "./pages/Download";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Footer  from "./components/Footer";
function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Premium" element={<Premium />} />
        <Route path="/Support" element={<Support />} />
        <Route path="/Download" element={<Download />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
        

      </Routes>
    <Footer />
    
   </div>
  );
}
export default App;
