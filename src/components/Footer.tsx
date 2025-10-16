import { Linkedin, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="footer" className="bg-primary-dark text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col items-center gap-6">
          {/* Copyright */}
          <p className="text-center text-sm md:text-base opacity-90">
            © 2025 Visionary Ventures | All Rights Reserved. Made with ❤️ in India.
          </p>

          {/* Divider */}
          <div className="w-full max-w-md h-[1px] bg-primary/50"></div>

          {/* Social icons */}
          <div className="flex gap-6">
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-primary hover:text-white transition-all hover:scale-110"
            >
              <Linkedin className="w-7 h-7" />
            </a>
            <a
              href="#"
              aria-label="Twitter/X"
              className="text-primary hover:text-white transition-all hover:scale-110"
            >
              <Twitter className="w-7 h-7" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="text-primary hover:text-white transition-all hover:scale-110"
            >
              <Instagram className="w-7 h-7" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
