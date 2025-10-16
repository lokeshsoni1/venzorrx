import { useEffect } from 'react';
import { Star } from 'lucide-react';

// Swiper will be initialized via CDN in the main component
const Reviews = () => {
  const reviews = [
    { name: 'Priya Sharma', location: 'Mumbai', quote: 'This 15-page NNN guide kept me strong through November!', stars: 5 },
    { name: 'Rahul Patel', location: 'Delhi', quote: 'Discipline level unlocked—game-changer for the challenge! 🔥', stars: 5 },
    { name: 'Aisha Khan', location: 'Bangalore', quote: 'Quick read, massive motivation. Crushed NNN!', stars: 5 },
    { name: 'Vikram Singh', location: 'Chennai', quote: 'Bite-sized wins that actually stick.', stars: 5 },
    { name: 'Sneha Gupta', location: 'Hyderabad', quote: 'Survived week 3 thanks to these rituals!', stars: 5 },
    { name: 'Arjun Mehta', location: 'Pune', quote: 'Perfect for busy Indian professionals crushing NNN!', stars: 5 },
    { name: 'Divya Reddy', location: 'Kolkata', quote: 'Real stories, real results. November never felt easier.', stars: 5 },
    { name: 'Karan Joshi', location: 'Ahmedabad', quote: 'Best ₹99 I spent this year. NNN victory secured!', stars: 5 },
    { name: 'Neha Iyer', location: 'Jaipur', quote: 'The mindset hacks are pure gold! 💎', stars: 5 },
    { name: 'Rohan Das', location: 'Lucknow', quote: 'Straight-forward, no BS. Exactly what NNN needs.', stars: 5 },
    { name: 'Kavya Menon', location: 'Kochi', quote: 'Week 2 breakthrough happened because of page 8!', stars: 5 },
    { name: 'Siddharth Roy', location: 'Bhopal', quote: 'Indian context makes all the difference. Highly recommend!', stars: 5 },
    { name: 'Anjali Verma', location: 'Indore', quote: 'My NNN streak is at 28 days. This guide is legit! 🎯', stars: 5 },
    { name: 'Manish Kumar', location: 'Patna', quote: 'Compact but comprehensive. Every page counts.', stars: 5 },
    { name: 'Pooja Nair', location: 'Thiruvananthapuram', quote: 'The rituals are easy to follow and super effective!', stars: 5 },
    { name: 'Abhishek Sinha', location: 'Ranchi', quote: 'Crushed the challenge with these strategies! 💪', stars: 5 },
    { name: 'Ritu Sharma', location: 'Chandigarh', quote: 'Best NNN resource for Indians. Period.', stars: 5 },
    { name: 'Nikhil Gupta', location: 'Surat', quote: 'Page 6 testimonial gave me the push I needed!', stars: 5 },
    { name: 'Ishita Bose', location: 'Guwahati', quote: 'Short, powerful, transformative. My NNN bible! 📚', stars: 5 },
    { name: 'Harsh Aggarwal', location: 'Noida', quote: 'Finally completed NNN thanks to this guide!', stars: 5 },
  ];

  useEffect(() => {
    // Swiper initialization will happen in Index component
  }, []);

  return (
    <section id="reviews" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <h2
          className="text-3xl md:text-5xl font-bold text-center text-primary mb-4"
          data-aos="fade-up"
        >
          Real NNN Warriors, Real Results
        </h2>

        {/* Overall rating */}
        <div className="text-center mb-12" data-aos="fade-up" data-aos-delay="200">
          <div className="flex items-center justify-center gap-2 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-xl font-semibold text-foreground">
            4.9/5 from 5,200 NNN Warriors
          </p>
          <div className="max-w-md mx-auto mt-4 bg-secondary rounded-full h-3 overflow-hidden">
            <div
              className="bg-primary h-full transition-all duration-1000"
              style={{ width: '98%' }}
              data-aos="slide-right"
              data-aos-delay="400"
            ></div>
          </div>
        </div>

        {/* Reviews carousel */}
        <div className="swiper-container reviews-swiper" data-aos="fade-up" data-aos-delay="400">
          <div className="swiper-wrapper">
            {reviews.map((review, index) => (
              <div key={index} className="swiper-slide">
                <div className="bg-secondary/50 rounded-[20px] p-6 h-full flex flex-col">
                  {/* Avatar */}
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-xl">
                      {review.name.charAt(0)}
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex justify-center gap-1 mb-3">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-muted-foreground text-center italic text-sm mb-4 flex-grow">
                    "{review.quote}"
                  </p>

                  {/* Name & location */}
                  <p className="text-primary font-semibold text-center text-sm">
                    {review.name}, {review.location}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="swiper-pagination mt-8"></div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
