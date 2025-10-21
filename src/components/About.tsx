const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-4xl">
        <h2
          className="text-3xl md:text-5xl font-bold text-center mb-8"
          data-aos="fade-up"
          style={{ color: 'hsl(var(--primary))' }}
        >
          About venzorX store
        </h2>
        
        <div
          className="bg-card rounded-[20px] p-8 md:p-12 shadow-card border border-border"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="space-y-6 text-lg leading-relaxed" style={{ color: 'hsl(var(--muted-foreground))' }}>
            <p>
              <span className="font-semibold" style={{ color: 'hsl(var(--primary))' }}>venzorX store</span> is your trusted destination for premium digital products that transform lives. We specialize in delivering high-quality, research-backed guides and resources designed specifically for ambitious individuals seeking real results.
            </p>
            
            <p>
              <span className="font-semibold" style={{ color: 'hsl(var(--primary))' }}>Quality First:</span> Every product we offer undergoes rigorous research and validation. We don't believe in fluff—only actionable, proven strategies that deliver measurable outcomes.
            </p>
            
            <p>
              <span className="font-semibold" style={{ color: 'hsl(var(--primary))' }}>Trusted by 500+ Customers:</span> Our community continues to grow across India because we deliver on our promises. Real people, real transformations, real reviews.
            </p>
            
            <p>
              <span className="font-semibold" style={{ color: 'hsl(var(--primary))' }}>Unbeatable Value:</span> We believe premium quality shouldn't break the bank. Our products are priced to be accessible while maintaining the highest standards of excellence—offering the cheapest prices without compromising quality.
            </p>
            
            <p>
              <span className="font-semibold" style={{ color: 'hsl(var(--primary))' }}>Instant Access:</span> No waiting, no hassle. All digital products are delivered instantly after purchase, so you can start your transformation journey immediately.
            </p>
            
            <p className="font-medium pt-4" style={{ color: 'hsl(var(--foreground))' }}>
              Join the venzorX community and experience the difference that quality, research, and genuine care can make in your personal growth journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
