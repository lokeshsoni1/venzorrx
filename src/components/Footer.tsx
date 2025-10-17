import { Instagram, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-card py-12 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center space-y-6">
          {/* Copyright */}
          <p className="text-muted-foreground text-center">
            © 2025 Visionary Ventures | All Rights Reserved
          </p>

          {/* Divider */}
          <div className="w-full max-w-md h-px" style={{ backgroundColor: 'hsl(var(--primary) / 0.2)' }}></div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/visionaryx.official/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:scale-110 transform"
              style={{ color: 'hsl(var(--primary))' }}
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://t.me/+SUIBDkIacF02OWE1"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-all hover:scale-110 transform"
              style={{ color: 'hsl(var(--primary))' }}
              aria-label="Telegram"
            >
              <Send className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
