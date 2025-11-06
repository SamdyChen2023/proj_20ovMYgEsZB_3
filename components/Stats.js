function Stats() {
  try {
    const stats = [
      { number: '10K+', label: 'Active Users' },
      { number: '99.9%', label: 'Uptime' },
      { number: '500+', label: 'Companies' },
      { number: '24/7', label: 'Support' }
    ];

    return (
      <section 
        className="py-24 bg-white"
        data-name="stats"
        data-file="components/Stats.js"
      >
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-[var(--text-light)] text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Stats component error:', error);
    return null;
  }
}