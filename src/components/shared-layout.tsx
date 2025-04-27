import Navigation from "@/components/ui/navigation";
import Footer from "@/components/ui/footer";

interface SharedLayoutProps {
  children: React.ReactNode;
}

const SharedLayout = ({ children }: SharedLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      <main className="flex-1 pt-20">{children}</main>
      <Footer />
    </div>
  );
};

export default SharedLayout; 