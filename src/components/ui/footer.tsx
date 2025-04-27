import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12 mt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-xl mb-4">The Gen-C</h3>
            <p className="text-gray-600 mb-4">
              Generative AI Learning Community dedicated to training, upskilling and empowering Singapore&apos;s students and working adults.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Who We Are
                </Link>
              </li>
              <li>
                <Link 
                  href="/what-we-do"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  What We Do
                </Link>
              </li>
              <li>
                <Link 
                  href="/events"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Events
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Workshops
                </Link>
              </li>
              <li>
                <Link 
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Tools
                </Link>
              </li>
              <li>
                <Link 
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-lg mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link 
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  Twitter
                </Link>
              </li>
              <li>
                <Link 
                  href="#"
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  GitHub
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} The Gen-C. All rights reserved.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link 
              href="#"
              className="text-gray-500 hover:text-primary text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="#"
              className="text-gray-500 hover:text-primary text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 