function ServiceCard({ service }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-5 m-3 hover:shadow-lg transition">
      <h2 className="text-xl font-bold text-blue-600">{service.name}</h2>

      <p className="text-gray-600">Service: {service.category}</p>  {/* ✅ was service.type */}

      <div className="mt-2 text-sm text-gray-700">
        📞 {service.phone} <br />
        📧 {service.email} <br />
        📍 {service.address}
      </div>
    </div>
  );
}

export default ServiceCard;