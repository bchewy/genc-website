import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Navigation = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200 py-4">
      <div className="container flex items-center justify-between">
        <Link href="/" className="font-bold text-2xl text-gray-900">
          <span className="text-primary">The Gen-C</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link 
            href="/" 
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Who We Are
          </Link>
          <Link 
            href="/what-we-do" 
            className="text-gray-700 hover:text-primary transition-colors"
          >
            What We Do
          </Link>
          <Link 
            href="/events" 
            className="text-gray-700 hover:text-primary transition-colors"
          >
            Events
          </Link>
          <Button>Join Us</Button>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>The Gen-C</SheetTitle>
                <SheetDescription>
                  Generative AI Learning Community
                </SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-4 mt-8">
                <Link 
                  href="/" 
                  className="text-gray-700 hover:text-primary transition-colors text-lg"
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className="text-gray-700 hover:text-primary transition-colors text-lg"
                >
                  Who We Are
                </Link>
                <Link 
                  href="/what-we-do" 
                  className="text-gray-700 hover:text-primary transition-colors text-lg"
                >
                  What We Do
                </Link>
                <Link 
                  href="/events" 
                  className="text-gray-700 hover:text-primary transition-colors text-lg"
                >
                  Events
                </Link>
                <Button className="mt-4">Join Us</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navigation; 