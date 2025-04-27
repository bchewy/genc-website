import SharedLayout from "@/components/shared-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Activity, Book, Calendar, CloudCog, Code, Lightbulb, Users } from "lucide-react";

export default function WhatWeDoPage() {
  return (
    <SharedLayout>
      {/* Hero Section */}
      <section className="pt-12 pb-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              What We Do
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We plan a series of events and meet-ups partnering with AWS, which provides us with technical expertise and support for using Generative AI services in the Cloud. We support nationwide events that upskill the Singapore public in AI skills.
            </p>
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
              Our Activities
            </h2>

            <div className="grid grid-cols-1 gap-8">
              {/* Activity 1 */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Workshops & Training</CardTitle>
                      <CardDescription>
                        Regular hands-on learning experiences
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    We organize regular workshops to help participants gain practical skills in using Generative AI tools. These workshops cover topics such as:
                  </p>
                  <ul className="space-y-2 mb-6 pl-5 text-gray-600 list-disc">
                    <li>Prompt engineering techniques</li>
                    <li>Working with Large Language Models (LLMs)</li>
                    <li>Fine-tuning models for specific applications</li>
                    <li>Building AI-powered applications</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Activity 2 */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Community Meet-ups</CardTitle>
                      <CardDescription>
                        Networking and knowledge-sharing events
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Our community meet-ups provide opportunities for members to:
                  </p>
                  <ul className="space-y-2 mb-6 pl-5 text-gray-600 list-disc">
                    <li>Network with other AI enthusiasts and professionals</li>
                    <li>Share experiences and insights</li>
                    <li>Discuss the latest trends and developments in Generative AI</li>
                    <li>Collaborate on projects and initiatives</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Activity 3 */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <CloudCog className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>AWS Partnerships</CardTitle>
                      <CardDescription>
                        Technical support and resources for cloud-based AI
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    We collaborate with AWS to provide our community with:
                  </p>
                  <ul className="space-y-2 mb-6 pl-5 text-gray-600 list-disc">
                    <li>Technical expertise for cloud-based AI services</li>
                    <li>Access to AWS resources and tools</li>
                    <li>Training on AWS AI and machine learning services</li>
                    <li>Support for AI projects using AWS infrastructure</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Activity 4 */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Code className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Experimentation & Innovation</CardTitle>
                      <CardDescription>
                        Collaborative exploration of AI technologies
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    We encourage experimentation and innovation through:
                  </p>
                  <ul className="space-y-2 mb-6 pl-5 text-gray-600 list-disc">
                    <li>Hackathons and innovation challenges</li>
                    <li>Collaborative research projects</li>
                    <li>Exploration of emerging AI technologies</li>
                    <li>Development of practical AI applications</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Skills We Focus On
            </h2>
            <p className="text-lg text-gray-600 mb-12 text-center">
              Our community helps members develop practical skills that are in high demand in today&apos;s AI-driven economy.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Book className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Prompt Engineering</h3>
                <p className="text-gray-600">
                  Learn effective techniques for crafting prompts that generate high-quality outputs from AI models.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Activity className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">LLM Optimization</h3>
                <p className="text-gray-600">
                  Discover how to fine-tune and optimize Large Language Models for specific applications and use cases.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">AI Application Development</h3>
                <p className="text-gray-600">
                  Build practical applications that leverage Generative AI to solve real-world problems.
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <Button size="lg" asChild>
                <Link href="/events">
                  View Upcoming Events
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </SharedLayout>
  );
} 