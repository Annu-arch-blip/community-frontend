import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FindServices() {
  const [service, setService] = useState("");
  const [city, setCity] = useState("");

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/search", {
      state: { serviceType: service, city }
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 p-6">

      <div className="bg-white px-6 py-5 rounded-2xl shadow-md w-[420px] mx-auto">
        <h2 className="text-lg font-semibold mb-3">
          Find Services
        </h2>

        <select
          className="w-full border p-2 mb-3 rounded"
          value={service}
          onChange={(e) => setService(e.target.value)}
        >
          <option value="">Select Service</option>
          <option value="Tutor"> Home Tutor</option>
          <option value="Plumber">Plumber</option>
          <option value="AC Repair">AC Repair</option>
          <option value="Computer Repair">Computer Repair</option>
          <option value="Electrician">Electrician</option>
          <option value="house helper">House Helper</option>
          <option value="Local Grocery Shop">Local Grocery Shop</option>
          <option value="Beauty Parlour">Beauty Parlour</option>
          <option value="Home Kitchen">Home Kitchen</option>
          <option value="MilkMan">MilkMan</option>
          
        </select>

        <input
          type="text"
          placeholder="Enter City (e.g. Delhi)"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full border p-2 mb-3 rounded"
        />

        <button
          onClick={handleSearch}
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Search
        </button>
      </div>

    </div>
  );
}

export default FindServices;