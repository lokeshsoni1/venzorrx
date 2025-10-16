import { Shield, Calendar, Trophy } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: 'NNN Challenge Lockdown',
      bullets: [
        '• 15 pages of NNN-specific no-fluff strategies 🔥',
        '• Tailored for Indian hustlers beating distractions',
        '• Instant PDF rituals for November success',
      ],
      closer: 'Your ticket to NNN triumph.',
    },
    {
      icon: Calendar,
      title: '60-Day Battle Plan (9 Weeks)',
      bullets: [
        '• 9-week strategies for complete transformation',
        '• Daily rituals to maintain unbreakable focus',
        '• Emergency tactics for high-risk moments',
      ],
      closer: 'Consistency is the NNN key.',
    },
    {
      icon: Trophy,
      title: 'Victory Mindset',
      bullets: [
        '• Mental frameworks to crush cravings',
        '• Stories from warriors in Delhi to Hyderabad',
        '• Breakthrough tactics for week 3 & beyond',
      ],
      closer: 'Dominate November like a champion.',
    },
  ];

  return (
    <section id="features" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <h2
          className="text-3xl md:text-5xl font-bold text-center text-primary mb-4"
          data-aos="fade-up"
        >
          Why This NNN Guide Works
        </h2>
        <p
          className="text-center text-muted-foreground text-lg mb-12 max-w-2xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          60 days of laser-focused strategies designed for the ultimate No Nut November victory
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-card rounded-[20px] p-8 shadow-card hover-lift"
                data-aos="fade-up"
                data-aos-delay={200 * index}
              >
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-semibold text-primary text-center mb-4">
                  {feature.title}
                </h3>

                {/* Bullets */}
                <ul className="space-y-2 mb-4">
                  {feature.bullets.map((bullet, i) => (
                    <li key={i} className="text-muted-foreground text-sm md:text-base">
                      {bullet}
                    </li>
                  ))}
                </ul>

                {/* Closer */}
                <p className="text-primary font-medium text-center text-sm italic">
                  {feature.closer}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
