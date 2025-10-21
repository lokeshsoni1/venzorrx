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
      // Timer runs from Oct 21, 2025 to Oct 28, 2025 23:59:59 IST
      const saleEndDate = new Date('2025-10-28T23:59:59+05:30').getTime();
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
    { src: nnnPageBulking, title: 'Success Strategy: Bulking Workout Plan', alt: 'Preview of bulking workout schedule page from NNN eBook' },
    { src: nnnPageDopamine, title: 'Testimonial Page: Dopamine Detox Protocol', alt: 'Preview of dopamine detox morning routine page from NNN eBook' },
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
              className="text-lg md:text-xl font-medium leading-relaxed break-words"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span className="text-primary font-bold">🔥 Conquer No Nut November:</span> Your 15-page blueprint for ironclad discipline and mindset reset—no distractions, all dominance!
            </p>
            <p
              className="text-lg md:text-xl font-medium leading-relaxed break-words"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <span className="text-primary font-bold">📖 Built for Indian warriors:</span> Quick NNN rituals, real stories from survivors in Delhi to Hyderabad, and hacks for your high-stress life.
            </p>
            <p
              className="text-lg md:text-xl font-medium leading-relaxed break-words"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <span className="text-primary font-bold">💡 Why 15 pages?</span> Precision over padding—NNN wins in days, fueled by psych-proven tactics for the ultimate challenge.
            </p>
            <p
              className="text-lg md:text-xl font-medium leading-relaxed break-words"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <span className="text-primary font-bold">🎊 Diwali Power-Up:</span> Instant PDF download, lifetime access, zero hassle. Level up your November—before the streak breaks!
            </p>
          </div>

          {/* PDF Preview - Static Vertical Layout */}
          <div className="mb-10" data-aos="fade-up" data-aos-delay="1000">
            <h3 className="text-2xl font-semibold text-primary text-center mb-6">
              Inside the Guide: Real Pages Preview
            </h3>
            <div className="flex flex-col gap-4 items-center max-w-[90%] mx-auto">
              {previewPages.map((page, index) => (
                <div key={index} className="w-full">
                  <div className="border-4 border-primary/20 rounded-lg overflow-hidden">
                    <img
                      src={page.src}
                      alt={page.alt}
                      className="w-full h-auto max-h-[600px] object-contain"
                      loading="lazy"
                    />
                    <p className="text-center text-sm font-medium text-primary py-3 bg-secondary/30 break-words">
                      {page.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing & Timer */}
          <div
            className="bg-gradient-primary rounded-[20px] p-6 md:p-8 mb-8 w-full max-w-4xl mx-auto"
            data-aos="zoom-in"
            data-aos-delay="1200"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
              {/* Pricing */}
              <div className="text-center md:text-left flex-shrink-0">
                <p className="text-white/70 text-sm md:text-lg line-through mb-1 break-words">₹249</p>
                <p className="text-white text-2xl md:text-4xl lg:text-5xl font-bold mb-2 drop-shadow-lg break-words">
                  JUST ₹99
                </p>
                <span className="inline-block bg-green-500 text-white px-3 py-1.5 md:px-4 md:py-2 rounded-full font-semibold text-xs md:text-sm animate-pulse-glow whitespace-nowrap">
                  SAVE ₹150 (60%)!
                </span>
              </div>

              {/* Timer */}
              <div className="text-center w-full md:w-auto flex-shrink-0">
                <p className="text-white font-semibold text-xs md:text-base mb-2 md:mb-3 break-words">⏰ NNN Sale Ends In:</p>
                <div className="flex gap-1.5 md:gap-2 justify-center flex-wrap">
                  {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="bg-white/20 backdrop-blur-sm rounded-lg px-1.5 py-1.5 md:px-3 md:py-2 min-w-[45px] md:min-w-[55px] flex-shrink-0">
                      <div className="text-white text-base md:text-2xl font-bold break-words">{value.toString().padStart(2, '0')}</div>
                      <div className="text-white/80 text-[0.55rem] md:text-[0.65rem] uppercase mt-0.5 break-words">{unit}</div>
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
            className="w-full bg-gradient-primary hover:bg-primary-dark text-white font-bold text-lg md:text-xl py-6 md:py-8 rounded-full animate-pulse-glow transition-all hover:animate-shake break-words"
            data-aos="zoom-in"
            data-aos-delay="1400"
          >
            <Lock className="w-4 h-4 md:w-5 md:h-5 mr-2 flex-shrink-0" />
            Buy Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
