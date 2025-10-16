import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import nnnCover from '@/assets/nnn-cover.png';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const scrollToProduct = () => {
    const element = document.getElementById('product-detail');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Initialize AOS if available
    if (typeof window !== 'undefined' && (window as any).AOS) {
      (window as any).AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true,
        offset: 100,
      });
    }
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-[120px] pb-20 px-4"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(0, 123, 255, 0.95), rgba(0, 86, 179, 0.95)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Animated particles overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-float"></div>
        <div className="absolute top-1/2 right-1/3 w-1 h-1 bg-white rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-white rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Main heading */}
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-6 leading-tight"
          data-aos="fade-up"
          data-aos-delay="300"
          style={{ letterSpacing: '0.05em', textShadow: '0 0 20px rgba(255,255,255,0.3)' }}
        >
          Crush No Nut November with{' '}
          <span className="block mt-2">Unbreakable Discipline 🔥</span>
        </h1>

        {/* Urgency badge */}
        <div
          className="flex justify-center mb-12"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          <div className="inline-block px-6 py-3 rounded-full bg-gradient-accent text-white font-semibold text-base md:text-lg animate-heartbeat">
            🎉 LIVE SALE – 50% OFF! Diwali NNN Edition Ends Soon
          </div>
        </div>

        {/* Featured product card */}
        <div
          className="max-w-md mx-auto"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="bg-card rounded-[20px] p-8 shadow-card hover-lift cursor-pointer group">
            {/* Product image */}
            <div className="relative mb-6 overflow-hidden rounded-lg">
              <img
                src={nnnCover}
                alt="Custom thumbnail cover of No Nut November eBook in motivational blue tones with challenge branding"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
            </div>

            {/* Title */}
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-4 text-center">
              No Nut November: 15-Page Challenge Guide
            </h2>

            {/* Teaser blurb */}
            <p className="text-muted-foreground text-center italic mb-6 max-w-[80%] mx-auto">
              Master the NNN challenge with laser-focused mindset rituals—15 pages of pure power! 📖💥
            </p>

            {/* CTA button */}
            <Button
              onClick={scrollToProduct}
              size="lg"
              className="w-full bg-primary hover:bg-primary-dark text-white font-semibold text-lg rounded-full py-6 transition-all hover:shadow-glow"
            >
              Preview Now
            </Button>
          </div>
        </div>

        {/* Social proof strip */}
        <div
          className="mt-12 text-center text-white/90 text-sm md:text-base font-medium"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          ⭐ 4.9/5 | Loved by 5,200+ NNN Challengers | Instant Delivery Guaranteed
        </div>
      </div>
    </section>
  );
};

export default Hero;
