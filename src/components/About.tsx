
 function About() {
    return (
      <div className="h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/images/bg-about.webp')" }}>
        <div className="flex flex-col items-center justify-center h-full text-white bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="mt-4 max-w-xl text-center text-lg md:text-xl mr-2">
            Welcome to brand! We believe in the power of beauty to inspire confidence.Our mission is to create luxurious,cruelty-free cosmetics that enhance natural beauty
          </p>
          <button className="mt-8 px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-400 hover:text-black">
           Shop Our Products
          </button>
        </div>
      </div>
    );
  }
  export default About ;
  