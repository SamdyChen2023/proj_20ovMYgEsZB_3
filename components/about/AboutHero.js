function AboutHero() {
  try {
    return (
      <section 
        className="pt-32 pb-20 gradient-bg relative overflow-hidden"
        data-name="about-hero"
        data-file="components/about/AboutHero.js"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About Us
            </h1>
            <p className="text-xl md:text-2xl opacity-90">
              We're on a mission to transform how people work and collaborate in the digital age.
            </p>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('AboutHero component error:', error);
    return null;
  }
}