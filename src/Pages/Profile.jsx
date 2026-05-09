function Profile() {

  const name  = localStorage.getItem("name");
  const email = localStorage.getItem("email");
  const phone = localStorage.getItem("phone");

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center pt-10">
      <div className="bg-white p-6 rounded-lg shadow w-96">

        
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
            {name ? name.charAt(0).toUpperCase() : "U"}
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-center">
          My Profile
        </h2>

        <p className="mb-2">
          <strong>Name:</strong> {name || "N/A"}
        </p>
        <p className="mb-2">
          <strong>Email:</strong> {email || "N/A"}
        </p>
        <p className="mb-2">
          <strong>Phone:</strong> {phone || "N/A"}
        </p>

        

      </div>
    </div>
  );
}

export default Profile;