import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

function MyServices() {
  const [services, setServices] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const [editData, setEditData] = useState({
    name: "",
    category: "",
    phone: "",
    address: "",
    description: "",
  });

  const navigate = useNavigate();

  // FETCH SERVICES
  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `${API}/my-services`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setServices(res.data);

    } catch (err) {
      console.log(err);
    }
  };

  // DELETE SERVICE
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `${API}/delete-service/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      fetchServices();

    } catch (err) {
      console.log(err);
    }
  };

  // START EDIT
  const handleEdit = (item) => {
    setEditingId(item._id);

    setEditData({
      name: item.name || "",
      category: item.category || "",
      phone: item.phone || "",
      address: item.address || "",
      description: item.description || "",
    });
  };

  // SAVE EDIT
  const handleSave = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.put(
        `${API}/update-service/${id}`,
        editData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setEditingId(null);

      fetchServices();

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 py-10 px-4">

      <div className="max-w-3xl mx-auto">

        {/* HEADER */}
        <h2 className="text-3xl font-bold text-blue-700 text-center mb-2">
          My Services
        </h2>

        <p className="text-center text-gray-700 mb-8">
          Manage, edit or delete your services
        </p>

        {/* EMPTY STATE */}
        {services.length === 0 && (
          <div className="bg-white rounded-2xl shadow-lg p-10 text-center">

            <div className="text-5xl mb-4">📦</div>

            <h3 className="text-2xl font-semibold mb-2">
              No services added yet
            </h3>

            <p className="text-gray-500 mb-6">
              Start by adding your first service
            </p>

            <button
              onClick={() => navigate("/add")}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
            >
              + Add Service
            </button>

          </div>
        )}

        {/* SERVICES */}
        <div className="space-y-5">

          {services.map((item) => (

            <div
              key={item._id}
              className="bg-white rounded-2xl shadow-md p-5 hover:shadow-xl transition"
            >

              {editingId === item._id ? (

                // EDIT MODE
                <div className="space-y-3">

                  <input
                    type="text"
                    placeholder="Name"
                    value={editData.name}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        name: e.target.value,
                      })
                    }
                    className="w-full border p-3 rounded-lg"
                  />

                  <input
                    type="text"
                    placeholder="Category"
                    value={editData.category}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        category: e.target.value,
                      })
                    }
                    className="w-full border p-3 rounded-lg"
                  />

                  <input
                    type="text"
                    placeholder="Phone"
                    value={editData.phone}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        phone: e.target.value,
                      })
                    }
                    className="w-full border p-3 rounded-lg"
                  />

                  <input
                    type="text"
                    placeholder="Address"
                    value={editData.address}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        address: e.target.value,
                      })
                    }
                    className="w-full border p-3 rounded-lg"
                  />

                  <input
                    type="text"
                    placeholder="Description"
                    value={editData.description}
                    onChange={(e) =>
                      setEditData({
                        ...editData,
                        description: e.target.value,
                      })
                    }
                    className="w-full border p-3 rounded-lg"
                  />

                  <div className="flex gap-3 pt-2">

                    <button
                      onClick={() => handleSave(item._id)}
                      className="bg-green-500 text-white px-5 py-2 rounded-lg hover:bg-green-600"
                    >
                      Save
                    </button>

                    <button
                      onClick={() => setEditingId(null)}
                      className="bg-gray-400 text-white px-5 py-2 rounded-lg hover:bg-gray-500"
                    >
                      Cancel
                    </button>

                  </div>

                </div>

              ) : (

                <div className="flex justify-between items-center">

                  <div>
                    <h3 className="text-xl font-bold text-blue-700">
                      {item.name}
                    </h3>

                    <p className="text-gray-700">
                      {item.category}
                    </p>

                    <p className="text-gray-500 text-sm mt-1">
                      📞 {item.phone}
                    </p>

                    <p className="text-gray-500 text-sm">
                      📍 {item.address}
                    </p>

                    <p className="text-gray-500 text-sm">
                      📝 {item.description}
                    </p>
                  </div>

                  <div className="flex gap-2">

                    <button
                      onClick={() => handleEdit(item)}
                      className="bg-yellow-400 px-4 py-2 rounded-lg hover:bg-yellow-500"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(item._id)}
                      className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                    >
                      Delete
                    </button>

                  </div>

                </div>

              )}

            </div>

          ))}

        </div>

      </div>
    </div>
  );
}

export default MyServices;