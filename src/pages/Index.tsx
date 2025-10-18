import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Reviews from '@/components/Reviews';
import ProductDetail from '@/components/ProductDetail';
import About from '@/components/About';
import ReviewForm from '@/components/ReviewForm';
import Footer from '@/components/Footer';

// Import libraries
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swiper from 'swiper';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const Index = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init({
      duration: 800,
      easing: 'ease-out',
      once: true,
      offset: 100,
    });

    // Initialize Swiper for reviews
    setTimeout(() => {
      new Swiper('.reviews-swiper', {
        modules: [Pagination, Autoplay],
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoHeight: false,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.reviews-swiper .swiper-pagination',
          clickable: true,
        },
        on: {
          slideChange: function() {
            // Update slide counter
            const event = new CustomEvent('reviewSlideChange', { 
              detail: { realIndex: this.realIndex }
            });
            window.dispatchEvent(event);
          },
        },
        breakpoints: {
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      });

      // Initialize Swiper for preview pages
      new Swiper('.preview-swiper', {
        modules: [Pagination, Navigation],
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoHeight: true,
        pagination: {
          el: '.preview-swiper .swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.preview-swiper .swiper-button-next',
          prevEl: '.preview-swiper .swiper-button-prev',
        },
        breakpoints: {
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
      });
    }, 100);

    // No urgency toast notifications - removed per requirements
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ProductDetail />
        <Features />
        <Reviews />
        <ReviewForm />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
