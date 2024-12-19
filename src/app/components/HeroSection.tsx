export default function HeroSection() {
    return (
      <section className="bg-gray-200 flex items-center justify-center min-h-screen">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center gap-8 py-10">
      
          <div className="lg:w-1/2 w-full text-left px-10 ">
            <h1 className="text-3xl lg:text-5xl font-bold text-black mb-4">
              Welcome To Our Website
            </h1>
            <p className="text-gray-600 text-md lg:text-2xl mb-6 leading-relaxed">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard.
            </p>
            <button className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition">
              Contact US
            </button>
          </div>
  
          
          <div className="lg:w-1/2 w-full p-14">
            <img
              src="/hero-image.png" 
              alt="Hero Section"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>
    );
  }
  