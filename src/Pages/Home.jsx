import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <div
        className="h-[85vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1521791136064-7986c2920216')",
        }}
      >
        <div className="bg-black/50 w-full h-full flex items-center justify-center">
          <div className="text-center text-white px-4">
            <p className="uppercase tracking-widest mb-3">
              Trusted Local Professionals
            </p>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Connect with Skilled <br />
              Service Providers Today
            </h1>

            <button
              onClick={() => navigate("/find")}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg"
            >
              FIND SERVICES
            </button>
          </div>
        </div>
      </div>

      {/* About Section */}
<div className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
    
    <div>
      <h2 className="text-3xl font-bold mb-4">
        About Community  Service Finder
      </h2>

      <p className="text-gray-600 mb-4">
        Community Service Finder helps users connect with trusted local service 
        providers like electricians, tutors, plumbers, and more. 
        Our platform makes it easy to search and contact professionals 
        in your area.
      </p>

      <p className="text-gray-600">
        Service providers can also register themselves to reach more 
        customers and grow their business.
      </p>
    </div>

    <div>
      <img
        src="https://images.unsplash.com/photo-1556745757-8d76bdb6984b"
        alt="about"
        className="rounded-xl shadow"
      />
    </div>

  </div>
</div>

      {/* Popular Services */}
      <div className="py-16 bg-gray-50">
        <h2 className="text-2xl font-bold text-center mb-10">
          Popular Services
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
          <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg">
            Electrician
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg">
            Tutor
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg">
            Plumber
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg">
             House Cleaner
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg">
            Carpenter
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg">
            Painter
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg">
            AC repair
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg">
            local grocery shop
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg">
            Computer repair
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg">
            Home Kitchen
          </div>

          <div className="bg-white p-6 rounded-lg shadow text-center hover:shadow-lg">
            Electrician
          </div>
          </div>


        <footer className="bg-blue-900 text-white text-center py-4 mt-10">
         <p>Community Service Finder © 2026</p>

         
         </footer>




        
      </div>

    </div>
  );
}

export default Home;