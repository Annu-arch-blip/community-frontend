import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registerform from "./pages/Registerform";
import Loginform from "./pages/Loginform";
import Home from "./Pages/Home";
import FindServices from "./Pages/FindServices";
import Results from "./pages/Results";
import AddServices from "./Pages/AddServices";
import Profile from "./pages/Profile";
import MyServices from "./pages/MyServices";
function App() {
  return (
      

    <BrowserRouter>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Registerform />} />
        <Route path="/login" element={<Loginform />} />
        <Route path="/home" element={<Home />} />
        <Route path="/find" element={<FindServices />} />
        <Route path="/results" element={<Results />} />
        <Route path="/add" element={<AddServices />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-services" element={<MyServices />} />
        </Routes>
      </BrowserRouter>

      

)
}

export default App;
