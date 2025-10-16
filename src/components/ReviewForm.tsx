import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ReviewForm = () => {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(5);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the review to your backend
    toast({
      title: "Review Submitted! 🎉",
      description: "Thank you for sharing your experience with us!",
    });

    // Reset form
    setName('');
    setLocation('');
    setReview('');
    setRating(5);
  };

  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-2xl">
        <h2
          className="text-3xl md:text-4xl font-bold text-center text-primary mb-4"
          data-aos="fade-up"
        >
          Share Your Experience
        </h2>
        <p
          className="text-center text-muted-foreground mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Bought our product? We'd love to hear from you!
        </p>

        <div
          className="bg-card rounded-[20px] p-8 md:p-10 shadow-card border border-primary/20"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Rating */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Your Rating
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    className="transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-8 h-8 ${
                        star <= rating
                          ? 'fill-yellow-400 text-yellow-400'
                          : 'text-gray-400'
                      }`}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="Enter your name"
              />
            </div>

            {/* Location */}
            <div>
              <label htmlFor="location" className="block text-sm font-semibold text-foreground mb-2">
                Your Location
              </label>
              <input
                type="text"
                id="location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                placeholder="e.g., Mumbai, Delhi"
              />
            </div>

            {/* Review */}
            <div>
              <label htmlFor="review" className="block text-sm font-semibold text-foreground mb-2">
                Your Review
              </label>
              <textarea
                id="review"
                value={review}
                onChange={(e) => setReview(e.target.value)}
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-background border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                placeholder="Share your experience with our product..."
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full bg-primary hover:bg-primary-dark text-white font-semibold text-lg rounded-full py-6 transition-all hover:shadow-glow"
            >
              Submit Review
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ReviewForm;
