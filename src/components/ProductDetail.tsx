import { useState, useEffect } from 'react';
import { X, Lock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import nnnCover from '@/assets/nnn-cover.png';
import nnnPageDopamine from '@/assets/nnn-page-dopamine.png';
import nnnPageBulking from '@/assets/nnn-page-bulking.png';

const ProductDetail = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      // Timer runs from Oct 17, 2025 to Oct 21, 2025 23:59:59 IST
      const saleEndDate = new Date('2025-10-21T23:59:59+05:30').getTime();
      const now = new Date().getTime();
      const difference = saleEndDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleBuyNow = () => {
    // Placeholder for Razorpay integration
    window.open('https://razorpay.com', '_blank');
    // Track event
    if ((window as any).gtag) {
      (window as any).gtag('event', 'purchase', { value: 99 });
    }
  };

  const previewPages = [
    { src: nnnCover, title: 'Custom Thumbnail: NNN Challenge Kickoff', alt: 'Cover page of No Nut November eBook' },
    { src: nnnPageDopamine, title: 'Testimonial Page: Dopamine Detox Protocol', alt: 'Preview of dopamine detox morning routine page from NNN eBook' },
    { src: nnnPageBulking, title: 'Success Strategy: Bulking Workout Plan', alt: 'Preview of bulking workout schedule page from NNN eBook' },
  ];

  return (
    <section id="product-detail" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-card rounded-[20px] p-8 md:p-12 shadow-card border border-primary/20">
          {/* 3D Rotating Mockup */}
          <div
            className="mb-12 flex justify-center"
            data-aos="zoom-in"
            data-aos-duration="1200"
          >
            <div className="relative perspective-[1200px]">
              <img
                src={nnnCover}
                alt="Interactive 3D preview of No Nut November's 15-page eBook thumbnail, rotating to showcase custom challenge details"
                className="w-[280px] h-[350px] md:w-[400px] md:h-[500px] rounded-lg shadow-hover animate-float"
                style={{
                  transform: 'rotateY(0deg) rotateX(5deg)',
                }}
              />
              {/* Spotlight effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-lg pointer-events-none"></div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8 space-y-4 max-w-2xl mx-auto">
            <p
              className="text-lg md:text-xl font-medium leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span className="text-primary font-bold">🔥 Conquer No Nut November:</span> Your 15-page blueprint for ironclad discipline and mindset reset—no distractions, all dominance!
            </p>
            <p
              className="text-lg md:text-xl font-medium leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <span className="text-primary font-bold">📖 Built for Indian warriors:</span> Quick NNN rituals, real stories from survivors in Delhi to Hyderabad, and hacks for your high-stress life.
            </p>
            <p
              className="text-lg md:text-xl font-medium leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <span className="text-primary font-bold">💡 Why 15 pages?</span> Precision over padding—NNN wins in days, fueled by psych-proven tactics for the ultimate challenge.
            </p>
            <p
              className="text-lg md:text-xl font-medium leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <span className="text-primary font-bold">🎊 Diwali Power-Up:</span> Instant PDF download, lifetime access, zero hassle. Level up your November—before the streak breaks!
            </p>
          </div>

          {/* PDF Preview */}
          <div className="mb-10" data-aos="fade-up" data-aos-delay="1000">
            <h3 className="text-2xl font-semibold text-primary text-center mb-6">
              Inside the Guide: Real Pages Preview
            </h3>
            <div className="swiper-container preview-swiper">
              <div className="swiper-wrapper">
                {previewPages.map((page, index) => (
                  <div key={index} className="swiper-slide">
                    <div className="border-4 border-primary/20 rounded-lg overflow-hidden hover:border-primary/50 transition-colors">
                      <img
                        src={page.src}
                        alt={page.alt}
                        className="w-full h-auto transform hover:scale-105 transition-transform duration-300"
                      />
                      <p className="text-center text-sm font-medium text-primary py-3 bg-secondary/30">
                        {page.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="swiper-pagination mt-4"></div>
            </div>
          </div>

          {/* Pricing & Timer */}
          <div
            className="bg-gradient-primary rounded-[20px] p-8 mb-8"
            data-aos="zoom-in"
            data-aos-delay="1200"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Pricing */}
              <div className="text-center md:text-left">
                <p className="text-white/70 text-xl line-through mb-2">₹249</p>
                <p className="text-white text-5xl md:text-6xl font-bold mb-2 drop-shadow-lg">
                  JUST ₹99
                </p>
                <span className="inline-block bg-green-500 text-white px-4 py-2 rounded-full font-semibold animate-pulse-glow">
                  SAVE ₹150 (60%)!
                </span>
              </div>

              {/* Timer */}
              <div className="text-center">
                <p className="text-white font-semibold text-lg mb-3">⏰ NNN Sale Ends In:</p>
                <div className="flex gap-3">
                  {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3 min-w-[60px]">
                      <div className="text-white text-3xl font-bold">{value.toString().padStart(2, '0')}</div>
                      <div className="text-white/80 text-xs uppercase mt-1">{unit}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Buy Now Button */}
          <Button
            onClick={handleBuyNow}
            size="lg"
            className="w-full bg-gradient-primary hover:bg-primary-dark text-white font-bold text-xl py-8 rounded-full animate-pulse-glow transition-all hover:animate-shake"
            data-aos="zoom-in"
            data-aos-delay="1400"
          >
            <Lock className="w-5 h-5 mr-2" />
            🚀 BUY NOW – Instant NNN PDF via Razorpay (₹99 Secure)
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
