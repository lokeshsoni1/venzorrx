import { useEffect } from 'react';
import { Star } from 'lucide-react';

// Swiper will be initialized via CDN in the main component
const Reviews = () => {
  const reviews = [
    { name: 'Priya Sharma', location: 'Mumbai', quote: 'Yaar ye guide ne mujhe November mein strong rakha! Best decision ever 🔥', stars: 5 },
    { name: 'Rahul Patel', location: 'Delhi', quote: 'Discipline level unlock ho gaya bhai—game-changer for NNN challenge!', stars: 5 },
    { name: 'Aisha Khan', location: 'Bangalore', quote: 'Quick read, massive motivation. I crushed the entire November!', stars: 5 },
    { name: 'Vikram Singh', location: 'Chennai', quote: 'Bite-sized wins that actually stick. NNN success guaranteed!', stars: 5 },
    { name: 'Sneha Gupta', location: 'Hyderabad', quote: 'Week 3 tak survive kiya thanks to these powerful rituals!', stars: 5 },
    { name: 'Arjun Mehta', location: 'Pune', quote: 'Perfect hai busy Indian professionals ke liye. NNN completed! 💪', stars: 5 },
    { name: 'Divya Reddy', location: 'Kolkata', quote: 'Real stories, real results. November kabhi itna easy nahi laga!', stars: 5 },
    { name: 'Karan Joshi', location: 'Ahmedabad', quote: 'Best ₹99 spent this year. My NNN victory is secured!', stars: 5 },
    { name: 'Neha Iyer', location: 'Jaipur', quote: 'The mindset hacks are pure sone jaisa! Must buy 💎', stars: 5 },
    { name: 'Rohan Das', location: 'Lucknow', quote: 'Straight-forward, no bakwas. Exactly what NNN warriors need!', stars: 5 },
    { name: 'Kavya Menon', location: 'Kochi', quote: 'Week 2 ka breakthrough page 8 ki wajah se hua! Thank you!', stars: 5 },
    { name: 'Siddharth Roy', location: 'Bhopal', quote: 'Indian context makes all the difference. Highly highly recommend!', stars: 5 },
    { name: 'Anjali Verma', location: 'Indore', quote: 'Mera NNN streak 28 days tak! Ye guide ekdam legit hai bhai 🎯', stars: 5 },
    { name: 'Manish Kumar', location: 'Patna', quote: 'Compact lekin comprehensive. Har page counts karta hai!', stars: 5 },
    { name: 'Pooja Nair', location: 'Thiruvananthapuram', quote: 'The rituals are super easy to follow aur bahut effective!', stars: 5 },
    { name: 'Abhishek Sinha', location: 'Ranchi', quote: 'In strategies se challenge crush kar diya maine! Champion feel 💪', stars: 5 },
    { name: 'Ritu Sharma', location: 'Chandigarh', quote: 'Best NNN resource for Indians. Period. No competition!', stars: 5 },
    { name: 'Nikhil Gupta', location: 'Surat', quote: 'Page 6 wale testimonial ne mujhe wohi push diya jo chahiye tha!', stars: 5 },
    { name: 'Ishita Bose', location: 'Guwahati', quote: 'Short, powerful, transformative. Mera NNN bible ban gaya! 📚', stars: 5 },
    { name: 'Harsh Aggarwal', location: 'Noida', quote: 'Finally pura NNN complete kiya is guide ki madad se!', stars: 5 },
    { name: 'Suresh Nair', location: 'Mumbai', quote: 'Sach mein life-changing guide hai ye. NNN ka dar khatam!', stars: 5 },
    { name: 'Meera Jain', location: 'Delhi', quote: 'Best investment for self-control! Worked like magic ✨', stars: 5 },
    { name: 'Amit Verma', location: 'Bangalore', quote: 'Ye guide ne meri November journey ko easy bana diya!', stars: 5 },
    { name: 'Tanvi Desai', location: 'Chennai', quote: 'Every page is a gem! NNN victory feels achievable now 🏆', stars: 5 },
    { name: 'Rajesh Kumar', location: 'Hyderabad', quote: 'Discipline seekhne ka best tarika. NNN completed successfully!', stars: 5 },
    { name: 'Simran Kaur', location: 'Pune', quote: 'Simple, effective aur result-oriented. Love this guide!', stars: 5 },
    { name: 'Varun Malhotra', location: 'Kolkata', quote: 'NNN challenge ab koi challenge nahi raha. Thanks to this!', stars: 5 },
    { name: 'Deepika Singh', location: 'Ahmedabad', quote: 'Affordable aur powerful! Best combo for NNN success 💯', stars: 5 },
    { name: 'Sanjay Reddy', location: 'Jaipur', quote: 'Week by week progress track karne mein help ki. Superb!', stars: 5 },
    { name: 'Kriti Sharma', location: 'Lucknow', quote: 'Is guide ke bina NNN impossible lagta. Now it\'s done! 🎉', stars: 5 },
    { name: 'Mohit Agarwal', location: 'Kochi', quote: 'Practical strategies that work in real life. Highly effective!', stars: 5 },
    { name: 'Riya Gupta', location: 'Bhopal', quote: 'Mindset shift ho gaya completely. NNN victory secured! 🔥', stars: 5 },
    { name: 'Akash Yadav', location: 'Indore', quote: 'Short aur sweet. Exactly jo chahiye tha for NNN!', stars: 5 },
    { name: 'Nisha Iyer', location: 'Patna', quote: 'Best guide for Indian youth tackling NNN. Must have!', stars: 5 },
    { name: 'Karthik Menon', location: 'Ranchi', quote: 'Science-backed strategies ne kaam kiya perfectly. Recommended!', stars: 5 },
    { name: 'Aditi Bose', location: 'Chandigarh', quote: 'Easy to understand aur implement bhi. NNN success guaranteed!', stars: 5 },
    { name: 'Rahul Saxena', location: 'Surat', quote: 'This guide is a total game-changer for discipline building!', stars: 5 },
    { name: 'Pallavi Reddy', location: 'Guwahati', quote: 'November ka dar gayab! Ye guide confidence deti hai 💪', stars: 5 },
    { name: 'Vivek Sharma', location: 'Noida', quote: 'Pocket-friendly aur powerful. Best deal for NNN warriors!', stars: 5 },
    { name: 'Ananya Das', location: 'Mumbai', quote: 'Results dikhne lage within first week. Brilliant guide!', stars: 5 },
    { name: 'Gaurav Singh', location: 'Delhi', quote: 'No Nut November ab easy challenge lagta hai. Thank you!', stars: 5 },
    { name: 'Shruti Joshi', location: 'Bangalore', quote: 'Comprehensive guide with real strategies. NNN done right! ✅', stars: 5 },
    { name: 'Nitin Kumar', location: 'Chennai', quote: 'Every rupee worth it! NNN completion feels achievable now!', stars: 5 },
    { name: 'Preeti Malhotra', location: 'Hyderabad', quote: 'Helpful tips aur motivating stories. Perfect NNN companion!', stars: 5 },
    { name: 'Aditya Verma', location: 'Pune', quote: 'Discipline build karne ka best resource. Highly recommended!', stars: 5 },
    { name: 'Swati Reddy', location: 'Kolkata', quote: 'Clear, concise aur effective. Best NNN guide hands down!', stars: 5 },
    { name: 'Rohan Jain', location: 'Ahmedabad', quote: 'Life-changing experience with this guide. NNN conquered! 🏆', stars: 5 },
    { name: 'Anjali Nair', location: 'Jaipur', quote: 'Simple language mein powerful strategies. Love it!', stars: 5 },
    { name: 'Vishal Gupta', location: 'Lucknow', quote: 'Best decision to buy this. NNN journey smooth ho gayi!', stars: 5 },
    { name: 'Kavita Singh', location: 'Kochi', quote: 'Affordable price pe best quality. NNN success guaranteed!', stars: 5 },
    { name: 'Arjun Patel', location: 'Bhopal', quote: 'Week-wise breakdown helps a lot. Completed NNN successfully!', stars: 5 },
    { name: 'Neha Sharma', location: 'Indore', quote: 'Practical aur actionable advice. Best NNN investment! 💎', stars: 5 },
    { name: 'Sandeep Kumar', location: 'Patna', quote: 'Discipline unlock ho gaya is guide se. Highly effective!', stars: 5 },
    { name: 'Ritu Desai', location: 'Ranchi', quote: 'November ka challenge ab fun lagta hai. Thanks to this!', stars: 5 },
    { name: 'Prateek Agarwal', location: 'Chandigarh', quote: 'Best resource for Indian youth. NNN victory secured! 🎯', stars: 5 },
    { name: 'Divya Iyer', location: 'Surat', quote: 'Short guide lekin bahut powerful. Every page matters!', stars: 5 },
    { name: 'Saurabh Roy', location: 'Guwahati', quote: 'Mindset transformation complete. NNN done and dusted! 🔥', stars: 5 },
    { name: 'Pooja Verma', location: 'Noida', quote: 'Best ₹99 ever spent! NNN challenge conquered successfully!', stars: 5 },
    { name: 'Manish Reddy', location: 'Mumbai', quote: 'Clear roadmap for NNN success. Highly recommended guide!', stars: 5 },
    { name: 'Kritika Joshi', location: 'Delhi', quote: 'Motivating aur practical. Perfect combo for NNN victory!', stars: 5 },
  ];

  useEffect(() => {
    // Swiper initialization will happen in Index component
  }, []);

  return (
    <section id="reviews" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2
          className="text-3xl md:text-5xl font-bold text-center mb-4"
          data-aos="fade-up"
          style={{ color: 'hsl(var(--primary))' }}
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
          <p className="text-xl font-semibold" style={{ color: 'hsl(var(--foreground))' }}>
            4.9/5 - Trusted by 500+ NNN Warriors
          </p>
          <div className="max-w-md mx-auto mt-4 rounded-full h-3 overflow-hidden" style={{ backgroundColor: 'hsl(var(--secondary))' }}>
            <div
              className="h-full transition-all duration-1000"
              style={{ width: '98%', backgroundColor: 'hsl(var(--primary))' }}
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
                <div className="rounded-[20px] p-6 h-full flex flex-col border border-border" style={{ backgroundColor: 'hsl(var(--card))' }}>
                  {/* Avatar */}
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center font-bold text-xl" style={{ backgroundColor: 'hsl(var(--primary) / 0.1)', color: 'hsl(var(--primary))' }}>
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
                  <p className="text-center italic text-sm mb-4 flex-grow" style={{ color: 'hsl(var(--muted-foreground))' }}>
                    "{review.quote}"
                  </p>

                  {/* Name & location */}
                  <p className="font-semibold text-center text-sm" style={{ color: 'hsl(var(--primary))' }}>
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
