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
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-[120px] pb-20 px-4 bg-background"
    >
      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-hero opacity-50"></div>

      <div className="container mx-auto max-w-2xl relative z-10">
        {/* Featured product card - Amazon style */}
        <div
          className="max-w-lg mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="bg-card rounded-[20px] p-8 md:p-12 shadow-card hover-lift cursor-pointer group relative border border-primary/20">
            {/* Sale Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
              <div className="inline-block px-6 py-3 rounded-full bg-gradient-accent text-white font-bold text-sm md:text-base animate-heartbeat shadow-glow">
                🎉 50% OFF SALE - Only Till Diwali!
              </div>
            </div>

            {/* Product image */}
            <div className="relative mb-6 overflow-hidden rounded-lg mt-4">
              <img
                src={nnnCover}
                alt="Custom thumbnail cover of No Nut November eBook in motivational blue tones with challenge branding"
                className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
              No Nut November: 15-Page Challenge Guide
            </h1>

            {/* CTA button */}
            <Button
              onClick={scrollToProduct}
              size="lg"
              className="w-full bg-primary hover:bg-primary-dark text-white font-semibold text-xl rounded-full py-7 transition-all hover:shadow-glow"
            >
              View Details & Buy Now
            </Button>
          </div>
        </div>

        {/* Social proof strip */}
        <div
          className="mt-12 text-center text-foreground/80 text-sm md:text-base font-medium"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          ⭐ 4.9/5 | Trusted by 500+ People | Instant Delivery Guaranteed
        </div>
      </div>
    </section>
  );
};

export default Hero;
