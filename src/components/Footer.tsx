import { Instagram } from 'lucide-react';

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
          <div className="w-full max-w-md h-px bg-primary/20"></div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/vvagency.official/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary-dark transition-colors hover:scale-110 transform"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
