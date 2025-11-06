function Team() {
  try {
    const team = [
      {
        name: 'Sarah Johnson',
        role: 'CEO & Founder',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop'
      },
      {
        name: 'Michael Chen',
        role: 'CTO',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop'
      },
      {
        name: 'Emily Rodriguez',
        role: 'Head of Design',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop'
      },
      {
        name: 'David Kim',
        role: 'Head of Engineering',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop'
      }
    ];

    return (
      <section 
        className="py-24 bg-white"
        data-name="team"
        data-file="components/about/Team.js"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">Meet Our Team</h2>
          <p className="text-xl text-[var(--text-light)] text-center mb-16 max-w-2xl mx-auto">
            The passionate people behind our success
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-6 object-cover shadow-lg"
                />
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-[var(--text-light)]">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error('Team component error:', error);
    return null;
  }
}