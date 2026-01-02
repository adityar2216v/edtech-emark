"use client";

import { Button } from "@/components/ui/button";
import { Users, Globe, Award, Heart } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-20 md:py-32">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Empowering the World Through Education</h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            We believe that education is the key to unlocking human potential. Our mission is to make high-quality learning accessible to everyone, everywhere.
          </p>
          <div className="flex justify-center gap-4">
            <Link href="/courses">
              <Button size="lg" className="h-14 px-8 text-lg">Start Learning</Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="h-14 px-8 text-lg text-black hover:text-black bg-white hover:bg-slate-100 border-transparent">Contact Us</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">100k+</p>
              <p className="text-muted-foreground">Active Students</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">500+</p>
              <p className="text-muted-foreground">Expert Instructors</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">1,200+</p>
              <p className="text-muted-foreground">Courses</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">4.8</p>
              <p className="text-muted-foreground">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything we do is guided by these principles. They define our culture and how we serve our community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center space-y-4">
              <div className="h-16 w-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Accessibility</h3>
              <p className="text-slate-600">
                We believe quality education should be available to everyone, regardless of their location or financial status.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center space-y-4">
              <div className="h-16 w-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Excellence</h3>
              <p className="text-slate-600">
                We partner with industry experts to deliver world-class content that is practical, up-to-date, and engaging.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm text-center space-y-4">
              <div className="h-16 w-16 bg-red-100 text-red-600 rounded-full flex items-center justify-center mx-auto">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold">Community</h3>
              <p className="text-slate-600">
                We foster a supportive community where learners can connect, collaborate, and grow together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="group">
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img 
                    src={`https://images.unsplash.com/photo-${i === 1 ? "1472099645785-5658abf4ff4e" : i === 2 ? "1438761681033-6461ffad8d80" : i === 3 ? "1500648767791-00dcc994a43e" : "1494790108377-be9c29b29330"}?w=400&auto=format&fit=crop&q=60`}
                    alt="Team member" 
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="font-bold text-lg">
                  {i === 1 ? "David Smith" : i === 2 ? "Emily Chen" : i === 3 ? "James Wilson" : "Lisa Brown"}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {i === 1 ? "CEO & Founder" : i === 2 ? "Head of Content" : i === 3 ? "CTO" : "Lead Designer"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
