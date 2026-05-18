function Profile() {

  const name = localStorage.getItem("name") || "N/A";
  const email = localStorage.getItem("email") || "N/A";
  const phone = localStorage.getItem("phone") || "N/A";

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center pt-10">

      <div className="bg-white p-6 rounded-lg shadow w-96">

        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-blue-500 text-white rounded-full flex items-center justify-center text-2xl font-bold">
            {name.charAt(0).toUpperCase()}
          </div>
        </div>

        <h2 className="text-2xl font-bold mb-4 text-center">
          My Profile
        </h2>

        <p className="mb-2">
          <strong>Name:</strong> {name}
        </p>

        <p className="mb-2">
          <strong>Email:</strong> {email}
        </p>

        <p className="mb-2">
          <strong>Phone:</strong> {phone}
        </p>

      </div>

    </div>
  );
}

export default Profile;