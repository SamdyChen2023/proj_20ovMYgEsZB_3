function Values() {
  try {
    const values = [
      {
        icon: 'target',
        title: 'Mission Driven',
        description: 'Every decision we make is guided by our mission to empower people through technology.'
      },
      {
        icon: 'users',
        title: 'Customer First',
        description: 'Our customers are at the heart of everything we do. Their success is our success.'
      },
      {
        icon: 'lightbulb',
        title: 'Innovation',
        description: 'We embrace change and continuously push boundaries to deliver cutting-edge solutions.'
      },
      {
        icon: 'shield-check',
        title: 'Integrity',
        description: 'We operate with transparency, honesty, and the highest ethical standards.'
      }
    ];

    return (
      <section 
        className="py-24 bg-[var(--bg-light)]"
        data-name="values"
        data-file="components/about/Values.js"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-white shadow-lg flex items-center justify-center">
                  <div className={`icon-${value.icon} text-3xl text-[var(--primary-color)]`}></div>
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-[var(--text-light)]">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Values component error:', error);
    return null;
  }
}