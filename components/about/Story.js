function Story() {
  try {
    return (
      <section 
        className="py-24 bg-white"
        data-name="story"
        data-file="components/about/Story.js"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">Our Story</h2>
            <div className="space-y-6 text-lg text-[var(--text-light)] leading-relaxed">
              <p>
                Founded in 2020, we started with a simple vision: to create tools that empower people to do their best work. What began as a small team of passionate developers has grown into a thriving community of innovators, designers, and problem-solvers.
              </p>
              <p>
                Our journey has been driven by the belief that technology should be accessible, intuitive, and powerful. We've listened to our users, learned from our mistakes, and constantly evolved to meet the changing needs of modern businesses.
              </p>
              <p>
                Today, we're proud to serve thousands of customers worldwide, helping them streamline their workflows, enhance collaboration, and achieve their goals. But we're just getting started.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Story component error:', error);
    return null;
  }
}