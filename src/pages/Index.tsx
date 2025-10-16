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
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.reviews-swiper .swiper-pagination',
          clickable: true,
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
        spaceBetween: 20,
        loop: true,
        pagination: {
          el: '.preview-swiper .swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }, 100);

    // Urgency toast notifications
    const names = [
      'Anjali from Pune',
      'Rohit from Mumbai',
      'Priya from Bangalore',
      'Vikram from Chennai',
      'Sneha from Delhi',
      'Karan from Hyderabad',
      'Divya from Kolkata',
      'Arjun from Ahmedabad',
    ];

    const showToast = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const toast = document.createElement('div');
      toast.className = 'fixed bottom-6 right-6 bg-primary text-white px-6 py-4 rounded-lg shadow-glow z-50 animate-slide-up max-w-sm';
      toast.innerHTML = `
        <p class="font-semibold text-sm">🔥 Hot! ${randomName} just grabbed No Nut November</p>
        <p class="text-xs opacity-90 mt-1">Your Streak Awaits?</p>
      `;
      document.body.appendChild(toast);

      setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(20px)';
        setTimeout(() => toast.remove(), 300);
      }, 4000);
    };

    const toastInterval = setInterval(showToast, 30000); // Every 30 seconds

    return () => {
      clearInterval(toastInterval);
    };
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
