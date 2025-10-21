import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
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

    // Initialize Swiper for preview pages
    setTimeout(() => {
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
        <ReviewForm />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
