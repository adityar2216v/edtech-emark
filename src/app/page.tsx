import Link from "next/link";
import { Button } from "@/components/ui/button";
import { COURSES, TESTIMONIALS } from "@/lib/mock-data";
import { CheckCircle, Play, Star, Users, Trophy, BookOpen } from "lucide-react";

export default function LandingPage() {
  const featuredCourses = COURSES.slice(0, 3);

  return (
    <div className="flex flex-col gap-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-muted/30 py-20 lg:py-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground shadow hover:bg-primary/80">
                New: Generative AI for Creators
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                Unlock Your Potential with <span className="text-primary">Expert-Led</span> Courses
              </h1>
              <p className="text-xl text-muted-foreground max-w-[600px]">
                Learn the most in-demand skills from industry experts. Start your journey today and join over 50,000 successful students.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/courses">
                  <Button size="lg" className="h-12 px-8 text-base">Browse Courses</Button>
                </Link>
                <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                  <Play className="mr-2 h-4 w-4 fill-current" /> Watch Demo
                </Button>
              </div>
              <div className="flex items-center gap-4 pt-4 text-sm text-muted-foreground">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-8 w-8 rounded-full border-2 border-background bg-muted overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Student" />
                    </div>
                  ))}
                </div>
                <p>Trusted by <span className="font-bold text-foreground">50k+</span> students worldwide</p>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border aspect-video lg:aspect-square">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=80" 
                  alt="Students learning" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20 w-full">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium text-sm">Course Progress</span>
                      <span className="text-white font-bold text-sm">85%</span>
                    </div>
                    <div className="w-full bg-white/20 h-2 rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[85%]" />
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating Cards */}
              <div className="absolute -bottom-6 -left-6 bg-background rounded-xl p-4 shadow-xl border hidden md:flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                  <Trophy className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold">Certificated</p>
                  <p className="text-xs text-muted-foreground">Professional recognition</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-10 border-y">
          {[
            { label: "Courses", value: "1,200+", icon: BookOpen },
            { label: "Students", value: "50k+", icon: Users },
            { label: "Success Rate", value: "98%", icon: CheckCircle },
            { label: "Instructors", value: "150+", icon: Star },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-2">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <stat.icon className="h-5 w-5" />
              </div>
              <p className="text-2xl font-bold">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Courses Section */}
      <section className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">Popular Courses</h2>
            <p className="text-muted-foreground max-w-[600px]">
              Our most sought-after programs chosen by thousands of learners.
            </p>
          </div>
          <Link href="/courses">
            <Button variant="outline">View All Courses</Button>
          </Link>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCourses.map((course) => (
            <div key={course.id} className="group rounded-xl border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-md transition-all">
              <div className="aspect-video relative overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-background/90 backdrop-blur text-xs font-bold px-2 py-1 rounded shadow">
                    {course.category}
                  </span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="text-sm font-bold">{course.rating}</span>
                  <span className="text-xs text-muted-foreground font-normal">({course.reviews})</span>
                </div>
                <h3 className="text-xl font-bold line-clamp-1">{course.title}</h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {course.description}
                </p>
                <div className="flex items-center justify-between pt-4 border-t">
                  <span className="text-xl font-bold text-primary">${course.price}</span>
                  <Link href={`/courses/${course.id}`}>
                    <Button variant="secondary" size="sm">Learn More</Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-primary text-primary-foreground py-24">
        <div className="container mx-auto px-4 text-center space-y-16">
          <div className="max-w-[800px] mx-auto space-y-4">
            <h2 className="text-3xl font-bold">Why Choose emark?</h2>
            <p className="text-primary-foreground/80 text-lg">
              We provide the tools and support you need to succeed in your career.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "Flexible Learning",
                desc: "Study at your own pace, on any device, from anywhere in the world.",
                icon: Play
              },
              {
                title: "Expert Instruction",
                desc: "Learn from industry professionals who have real-world experience.",
                icon: User
              },
              {
                title: "Community Support",
                desc: "Join a global community of learners and share your journey.",
                icon: Users
              }
            ].map((feature, i) => (
              <div key={i} className="flex flex-col items-center gap-4">
                <div className="h-16 w-16 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-primary-foreground/70">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-3xl font-bold">What Our Students Say</h2>
          <p className="text-muted-foreground">Real stories from real learners.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-muted/30 p-8 rounded-2xl border border-transparent hover:border-primary/20 transition-all">
              <div className="flex gap-4 mb-6">
                <img src={t.avatar} alt={t.name} className="h-12 w-12 rounded-full object-cover" />
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
              <p className="text-lg italic text-muted-foreground leading-relaxed">
                "{t.content}"
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4">
        <div className="bg-primary rounded-3xl p-12 md:p-24 text-center text-primary-foreground relative overflow-hidden">
          <div className="absolute top-0 right-0 h-full w-1/3 bg-white/5 skew-x-12" />
          <div className="relative z-10 max-w-[700px] mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Start Learning?</h2>
            <p className="text-xl text-primary-foreground/80">
              Join thousands of students and start your journey today. Get unlimited access to 1,000+ courses.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/signup">
                <Button size="lg" variant="secondary" className="h-12 px-8 text-base">Get Started for Free</Button>
              </Link>
              <Link href="/courses">
                <Button size="lg" variant="outline" className="h-12 px-8 text-base border-primary-foreground/20 hover:bg-white/10">View Pricing</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function User(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
