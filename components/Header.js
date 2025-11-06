function Header() {
  try {
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
        }`}
        data-name="header"
        data-file="components/Header.js"
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-gradient">Brand</div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-[var(--text-dark)] hover:text-[var(--primary-color)] transition-colors">Home</a>
            <a href="#features" className="text-[var(--text-dark)] hover:text-[var(--primary-color)] transition-colors">Features</a>
            <a href="#about" className="text-[var(--text-dark)] hover:text-[var(--primary-color)] transition-colors">About</a>
            <button className="btn-primary">Get Started</button>
          </nav>
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}