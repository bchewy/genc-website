import Link from "next/link";
import { Button } from "@/components/ui/button";
import SharedLayout from "@/components/shared-layout";

export default function NotFound() {
  return (
    <SharedLayout>
      <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Button size="lg" asChild>
          <Link href="/">
            Return Home
          </Link>
        </Button>
      </div>
    </SharedLayout>
  );
} 