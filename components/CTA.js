function CTA() {
  try {
    return (
      <section 
        className="py-24 gradient-bg relative overflow-hidden"
        data-name="cta"
        data-file="components/CTA.js"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Join thousands of satisfied customers and transform your workflow today.
            </p>
            <button className="btn-primary bg-white text-[var(--primary-color)] hover:bg-opacity-90 text-lg">
              Start Your Free Trial
            </button>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('CTA component error:', error);
    return null;
  }
}