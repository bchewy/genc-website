import SharedLayout from "@/components/shared-layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function AboutPage() {
  return (
    <SharedLayout>
      {/* Hero Section */}
      <section className="pt-12 pb-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Who We Are
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              A group of individuals who are passionate about contributing as a community towards building up AI talents and boosting the AI practitioner pool in Singapore. We come together to learn, discuss & experiment with Generative AI, and also run training events and workshops for the public.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Leadership
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              The Gen-C community is led by experienced professionals from the technology and finance sectors, with support from core community members across diverse industries.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Leader 1 */}
              <Card className="overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src="/ray-goh.jpg" alt="Ray Goh" />
                      <AvatarFallback>RG</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-semibold">Ray Goh</h3>
                      <p className="text-gray-500">Co-founder & Community Lead</p>
                    </div>
                  </div>
                  <CardContent className="px-0 pt-6">
                    <p className="text-gray-600">
                      Ray is an IT executive in the banking industry with extensive experience in AI and machine learning technologies. He is passionate about building up AI talents in Singapore and creating opportunities for knowledge sharing.
                    </p>
                  </CardContent>
                </div>
              </Card>

              {/* Leader 2 */}
              <Card className="overflow-hidden">
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="w-16 h-16">
                      <AvatarImage src="/mike-chee.jpg" alt="Mike Chee" />
                      <AvatarFallback>MC</AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="text-xl font-semibold">Mike Chee</h3>
                      <p className="text-gray-500">Co-founder & Technology Lead</p>
                    </div>
                  </div>
                  <CardContent className="px-0 pt-6">
                    <p className="text-gray-600">
                      Mike is an IT executive in the banking industry specializing in cloud technologies and Generative AI implementations. He focuses on creating practical learning experiences that translate to real-world applications.
                    </p>
                  </CardContent>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Community Members Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Our Community
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              Our core community members comprise AI/ML and Cloud enthusiasts & experts from organisations across diverse industries including:
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="font-medium text-gray-900">Finance</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="font-medium text-gray-900">Media</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="font-medium text-gray-900">Academia</h3>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg text-center">
                <h3 className="font-medium text-gray-900">Public Service</h3>
              </div>
            </div>

            <Separator className="mb-12" />

            <div className="bg-primary/5 p-8 rounded-xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Join Our Community</h3>
              <p className="text-gray-600 mb-6">
                Whether you&apos;re a student, working professional, or AI enthusiast, we welcome you to join our community of learners and practitioners. Together, we can build a stronger AI talent pool in Singapore.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li>• Attend our workshops and training events</li>
                <li>• Participate in our community discussions</li>
                <li>• Share your knowledge and experiences</li>
                <li>• Collaborate on AI projects and initiatives</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </SharedLayout>
  );
} 