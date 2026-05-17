import { useState } from "react";
import axios from "axios";

const API = process.env.REACT_APP_API_URL;

function AddServices() {
  const [form, setForm] = useState({
    name: "",
    category: "",
    phone: "",
    address: "",
    description: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        `${API}/add-service`,
        form,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`
          }
        }
      );

      alert("Service Added Successfully ✅");

      setForm({
        name: "",
        category: "",
        phone: "",
        address: "",
        description: ""
      });

    } catch (error) {
      console.log(error);
      alert("Error adding service ❌");
    }
  };

  return (
    <div className="flex justify-center mt-10">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow w-96"
      >

        <h2 className="text-xl font-bold mb-4 text-blue-600">
          Add Service
        </h2>

        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
          required
        />

        <input
          name="category"
          placeholder="Service Type"
          value={form.category}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
          required
        />

        <input
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
          required
        />

        <input
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="w-full border p-2 mb-3 rounded"
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full border p-2 mb-4 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Add Service
        </button>

      </form>
    </div>
  );
}

export default AddServices;