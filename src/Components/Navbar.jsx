import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  // ✅ read the keys your new login saves
  const name  = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const phone = localStorage.getItem("phone");
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    // ✅ clear all keys
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("phone");
    setOpen(false);
    navigate("/");
  };

  return (
    <div className="bg-white shadow px-6 py-3 flex justify-between items-center">
      <h1 className="text-xl font-bold text-blue-600">
        Community Service Finder
      </h1>

      <div className="flex items-center gap-6">
        <Link to="/home">Home</Link>
        <Link to="/find">Find</Link>
        <Link to="/add">Add Service</Link>

        {/* Profile */}
        <div className="relative">
          <div
            onClick={() => setOpen(!open)}
            className="flex flex-col items-center cursor-pointer"
          >
            {/* ✅ shows first letter of name from localStorage */}
            <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
              {name ? name.charAt(0).toUpperCase() : "U"}
            </div>
            <span className="text-xs">
              {name || "You"}
            </span>
          </div>

          {/* ✅ dropdown opens only if token exists */}
          {open && token && (
            <div className="absolute right-0 mt-2 bg-white shadow rounded w-40 border z-50">
              <button
                onClick={() => { navigate("/profile"); setOpen(false); }}
                className="block w-full text-left px-3 py-2 hover:bg-gray-100"
              >
                My Profile
              </button>
              <button
                onClick={() => { navigate("/my-services"); setOpen(false); }}
                className="block w-full text-left px-3 py-2 hover:bg-gray-100"
              >
                My Services
              </button>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-3 py-2 text-red-500 hover:bg-gray-100"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;