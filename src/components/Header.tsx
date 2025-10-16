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
        className={`fixed top-0 left-0 right-0 z-50 h-[70px] bg-gradient-primary transition-all duration-300 ${
          isScrolled ? 'shadow-glow' : ''
        }`}
      >
        <div className="container mx-auto px-4 h-full flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('hero')}
            className="text-white font-bold text-2xl tracking-wide hover:opacity-90 transition-opacity"
            aria-label="visionaryX store - Home"
          >
            visionaryX store
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-white/90 hover:text-white font-medium transition-all hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white/90 hover:text-white font-medium transition-all hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white/90 hover:text-white font-medium transition-all hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]"
            >
              Contact
            </button>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            {/* Mini CTA */}
            <Button
              onClick={() => scrollToSection('product-detail')}
              variant="secondary"
              size="sm"
              className="hidden lg:flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border-white/20 animate-pulse-glow font-semibold"
            >
              ₹99 NNN Challenge – Limited!
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-white"
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
          className="fixed inset-0 bg-primary-dark/95 backdrop-blur-md z-40 md:hidden"
          style={{ top: '70px' }}
        >
          <nav className="flex flex-col items-center justify-center h-full gap-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-white text-2xl font-semibold hover:text-white/80 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-white text-2xl font-semibold hover:text-white/80 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white text-2xl font-semibold hover:text-white/80 transition-colors"
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
