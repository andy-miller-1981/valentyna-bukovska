import { Link } from "wouter";
import { Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-muted/30 mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Valentyna Bukovska</h3>
            <p className="text-sm text-muted-foreground">
              Qualified Psychotherapist and Business Psychologist offering evidence-based training programmes tailored to your organisation's needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/courses">
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer">
                    Courses & Modules
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer">
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <span className="text-muted-foreground hover:text-foreground cursor-pointer">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail size={16} />
                <span>Vbukavskaya@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} />
                <span>+447760164058</span>
              </li>
              <li className="flex items-center space-x-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#0A66C2" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <a 
                  href="https://www.linkedin.com/in/valentyna-bukovska-821105241/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  LinkedIn Profile
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Valentyna Bukovska Psychology Training. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
