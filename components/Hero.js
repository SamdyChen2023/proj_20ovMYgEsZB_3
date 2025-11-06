function Hero() {
  try {
    return (
      <section 
        id="home"
        className="min-h-screen flex items-center gradient-bg relative overflow-hidden"
        data-name="hero"
        data-file="components/Hero.js"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              Transform Your Ideas Into Reality
            </h1>
            <p className="text-xl md:text-2xl mb-12 opacity-90">
              Experience the future with our innovative platform. Build, create, and grow with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary bg-white text-[var(--primary-color)] hover:bg-opacity-90">
                Start Free Trial
              </button>
              <button className="btn-secondary border-white text-white hover:bg-white hover:text-[var(--primary-color)]">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Hero component error:', error);
    return null;
  }
}