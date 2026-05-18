import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registerform from "./Pages/Registerform";
import Loginform from "./Pages/Loginform";
import Home from "./Pages/Home";
import FindServices from "./Pages/FindServices";
import Results from "./Pages/Results";
import AddServices from "./Pages/AddServices";
import Profile from "./Pages/Profile";
import MyServices from "./Pages/MyServices";
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
