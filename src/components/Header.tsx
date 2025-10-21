import { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 h-[70px] bg-white border-b border-border transition-all duration-300 ${
          isScrolled ? 'shadow-card' : ''
        }`}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-foreground font-bold text-2xl tracking-wide hover:text-primary transition-colors"
            aria-label="VenzorX Store - Home"
          >
            VenzorX Store
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-muted-foreground hover:text-primary font-medium transition-all relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-muted-foreground hover:text-primary font-medium transition-all relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-muted-foreground hover:text-primary font-medium transition-all relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
            >
              Contact
            </button>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            {/* Mini CTA */}
            <Button
              onClick={() => scrollToSection('product-detail')}
              size="sm"
              className="hidden lg:flex items-center gap-2 bg-primary hover:bg-primary-dark text-white animate-pulse-glow font-semibold"
            >
              ₹99 NNN Challenge – Limited!
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-foreground"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-white/95 backdrop-blur-md z-40 md:hidden border-t border-border"
          style={{ top: '70px' }}
        >
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-foreground text-2xl font-semibold hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-foreground text-2xl font-semibold hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-foreground text-2xl font-semibold hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
