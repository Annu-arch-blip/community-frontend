import { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";

const API = import.meta.env.VITE_API_URL;

export default function Results() {
  const location = useLocation();
  const { serviceType, city } = location.state || {};

  const [services, setServices] = useState([]);
  const [reviewsData, setReviewsData] = useState(
    JSON.parse(localStorage.getItem("reviews") || "{}")
  );
  const [ratingsData, setRatingsData] = useState(
    JSON.parse(localStorage.getItem("ratings") || "{}")
  );

  useEffect(() => {
    axios
      .get(`${API}/search`)
      .then((res) => setServices(res.data))
      .catch((err) => console.log(err));
  }, []);

  const normalize = (s) => (s || "").toLowerCase().trim();

  // safe filtering
  const filtered = services.filter(
    (s) =>
      normalize(s.category) === normalize(serviceType || "") &&
      normalize(s.address).includes(normalize(city || ""))
  );

  return (
    <div className="mt-6 px-4">
      <h2 className="text-xl font-semibold mb-4 text-center text-blue-700">
        {filtered.length === 0
          ? `No services found in ${city}`
          : `Available ${serviceType} in ${city}`}
      </h2>

      {filtered.length === 0 && (
        <div className="bg-white p-6 rounded-xl shadow text-center text-gray-500">
          No service provider found for "{serviceType}" in {city}
        </div>
      )}

      {filtered.map((item, i) => (
        <Card
          key={i}
          item={item}
          reviewsData={reviewsData}
          ratingsData={ratingsData}
          setReviewsData={setReviewsData}
          setRatingsData={setRatingsData}
        />
      ))}
    </div>
  );
}

// ---------------- CARD COMPONENT ----------------



function Card({
  item,
  reviewsData,
  ratingsData,
  setReviewsData,
  setRatingsData
}) {
  const [review, setReview] = useState("");

  const serviceRatings = ratingsData[item.name] || [];
  const serviceReviews = reviewsData[item.name] || [];

  const avg =
    serviceRatings.length === 0
      ? 0
      : serviceRatings.reduce((a, b) => a + b, 0) / serviceRatings.length;

  const addRating = (value) => {
    const updated = {
      ...ratingsData,
      [item.name]: [...serviceRatings, value]
    };

    setRatingsData(updated);
    localStorage.setItem("ratings", JSON.stringify(updated));
  };

  const addReview = () => {
    if (!review) return;

    const updated = {
      ...reviewsData,
      [item.name]: [...serviceReviews, review]
    };

    setReviewsData(updated);
    localStorage.setItem("reviews", JSON.stringify(updated));
    setReview("");
  };

  return (
    <div className="bg-white p-5 rounded-2xl shadow-md hover:shadow-lg transition duration-200 mb-4 border">

      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-lg font-bold">
            {item.name.charAt(0)}
          </div>

          <div>
            <h3 className="font-semibold text-lg">{item.name}</h3>
            <p className="text-yellow-500 text-sm">
              ⭐ {avg.toFixed(1)}
            </p>
          </div>
        </div>

        <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
          {item.category}
        </span>
      </div>

      {/* STAR RATING */}
      <div className="flex gap-1 mt-2 text-xl cursor-pointer">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            onClick={() => addRating(star)}
            className={star <= avg ? "text-yellow-400" : "text-gray-300"}
          >
            ★
          </span>
        ))}
      </div>

      {/* DETAILS */}
      <div className="mt-3 text-gray-600 space-y-1">
        <p>📞 {item.phone}</p>
        <p>📍 {item.address}</p>
      </div>

      {/* REVIEWS */}
      <div className="mt-4">
        <b className="text-blue-600">Reviews</b>

        {serviceReviews.map((r, i) => (
          <div
            key={i}
            className="bg-gray-100 p-2 mt-1 rounded text-sm"
          >
            ⭐ {r}
          </div>
        ))}

        <div className="flex gap-2 mt-2">
          <input
            value={review}
            className="border p-2 rounded w-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            placeholder="Write review..."
            onChange={(e) => setReview(e.target.value)}
          />

          <button
            className="bg-blue-600 text-white px-3 rounded-lg hover:bg-blue-700 transition"
            onClick={addReview}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}