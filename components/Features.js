function Features() {
  try {
    const features = [
      {
        icon: 'zap',
        title: 'Lightning Fast',
        description: 'Experience blazing fast performance that keeps your workflow smooth and efficient.'
      },
      {
        icon: 'shield',
        title: 'Secure & Safe',
        description: 'Your data is protected with enterprise-grade security and encryption.'
      },
      {
        icon: 'smartphone',
        title: 'Mobile Ready',
        description: 'Access your work anywhere, anytime with our fully responsive platform.'
      },
      {
        icon: 'users',
        title: 'Team Collaboration',
        description: 'Work together seamlessly with powerful collaboration tools.'
      },
      {
        icon: 'trending-up',
        title: 'Growth Focused',
        description: 'Scale your business with tools designed for growth and success.'
      },
      {
        icon: 'heart',
        title: 'User Friendly',
        description: 'Intuitive interface that anyone can master in minutes.'
      }
    ];

    return (
      <section 
        id="features"
        className="py-24 bg-[var(--bg-light)]"
        data-name="features"
        data-file="components/Features.js"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-[var(--text-light)] max-w-2xl mx-auto">
              Everything you need to succeed, all in one platform
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="w-16 h-16 rounded-xl bg-[var(--secondary-color)] bg-opacity-10 flex items-center justify-center mb-6">
                  <div className={`icon-${feature.icon} text-2xl text-[var(--secondary-color)]`}></div>
                </div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-[var(--text-light)]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Features component error:', error);
    return null;
  }
}