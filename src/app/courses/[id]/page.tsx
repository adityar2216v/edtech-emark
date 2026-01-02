"use client";

import { COURSES, INSTRUCTORS } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Star, 
  Users, 
  Clock, 
  Globe, 
  CheckCircle2, 
  PlayCircle,
  ChevronRight,
  ShieldCheck,
  Award
} from "lucide-react";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function CourseDetailPage() {
  const params = useParams();
  const course = COURSES.find((c) => c.id === params.id);
  const instructor = INSTRUCTORS.find((inst) => inst.id === course?.instructorId);

  if (!course || !instructor) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Course not found</h1>
        <Link href="/courses">
          <Button className="mt-4">Back to Courses</Button>
        </Link>
      </div>
    );
  }

  const handleEnroll = () => {
    alert("Success! You have been enrolled in " + course.title);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Course Hero Header */}
      <section className="bg-slate-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 items-start">
            <div className="lg:col-span-2 space-y-6">
              <nav className="flex items-center gap-2 text-sm text-slate-400 mb-4">
                <Link href="/courses" className="hover:text-white transition-colors">Courses</Link>
                <ChevronRight className="h-3 w-3" />
                <span className="text-primary-foreground font-medium">{course.category}</span>
              </nav>
              <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                {course.title}
              </h1>
              <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
                {course.description}
              </p>
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < Math.floor(course.rating) ? "fill-current" : ""}`} />
                    ))}
                  </div>
                  <span className="text-yellow-500 font-bold">{course.rating}</span>
                  <span className="text-slate-400 text-sm">({course.reviews} ratings)</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <Users className="h-4 w-4" />
                  <span>{course.students.toLocaleString()} students</span>
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <p className="text-sm">Created by <Link href={`/instructors/${instructor.id}`} className="text-primary-foreground font-bold hover:underline cursor-pointer">{instructor.name}</Link></p>
                <div className="h-4 w-px bg-slate-700" />
                <div className="flex items-center gap-1.5 text-sm">
                  <Globe className="h-4 w-4" />
                  <span>English</span>
                </div>
              </div>
            </div>

            {/* Sticky Enrollment Card */}
            <div className="lg:sticky lg:top-24 bg-background text-foreground rounded-2xl shadow-2xl border overflow-hidden">
              <div className="aspect-video relative group">
                <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                  <PlayCircle className="h-16 w-16 text-white" />
                </div>
                <div className="absolute bottom-4 left-0 right-0 text-center">
                  <p className="text-white text-xs font-bold uppercase tracking-widest shadow-sm">Preview this course</p>
                </div>
              </div>
              <div className="p-8 space-y-6">
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-black">${course.price}</span>
                  <span className="text-slate-400 line-through text-lg">$199.99</span>
                  <span className="text-green-600 font-bold text-sm">65% OFF</span>
                </div>
                <div className="space-y-3">
                  <Button onClick={handleEnroll} size="lg" className="w-full h-14 text-lg font-bold">Enroll Now</Button>
                  <Button size="lg" variant="outline" className="w-full h-12">Add to Cart</Button>
                </div>
                <p className="text-xs text-center text-muted-foreground">30-Day Money-Back Guarantee</p>
                <div className="space-y-4 pt-4 border-t">
                  <p className="font-bold text-sm">This course includes:</p>
                  <ul className="space-y-3">
                    {[
                      { icon: PlayCircle, text: "24 hours on-demand video" },
                      { icon: ShieldCheck, text: "Full lifetime access" },
                      { icon: Globe, text: "Access on mobile and TV" },
                      { icon: Award, text: "Certificate of completion" },
                    ].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm">
                        <item.icon className="h-4 w-4 text-slate-500" />
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-6">
              <h2 className="text-2xl font-bold">What you'll learn</h2>
              <div className="grid md:grid-cols-2 gap-4 border rounded-2xl p-8 bg-slate-50">
                {[
                  "Build fully functional web applications",
                  "Master modern UI design principles",
                  "Understand professional workflows",
                  "Deploy projects to the cloud",
                  "Work with industry-standard tools",
                  "Create a professional portfolio"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-600 leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Course Content</h2>
              <div className="border rounded-2xl overflow-hidden">
                {course.lessons.map((lesson, i) => (
                  <div key={lesson.id} className={`flex items-center justify-between p-4 ${i !== course.lessons.length - 1 ? "border-b" : ""} hover:bg-slate-50 transition-colors`}>
                    <div className="flex items-center gap-4">
                      <PlayCircle className="h-4 w-4 text-slate-400" />
                      <div>
                        <p className="text-sm font-medium">{lesson.title}</p>
                        <p className="text-xs text-slate-400">{lesson.duration}</p>
                      </div>
                    </div>
                    {lesson.completed && (
                      <Badge variant="secondary" className="bg-green-100 text-green-700 hover:bg-green-100">Preview</Badge>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-2xl font-bold">Instructor</h2>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <img 
                  src={instructor.avatar} 
                  alt={instructor.name} 
                  className="w-32 h-32 rounded-full object-cover border-4 border-slate-100"
                />
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{instructor.name}</h3>
                    <p className="text-sm text-muted-foreground">{instructor.title}</p>
                  </div>
                  <div className="flex gap-6">
                    <div className="text-center">
                      <p className="font-bold">{instructor.rating}</p>
                      <p className="text-[10px] uppercase text-muted-foreground font-bold">Rating</p>
                    </div>
                    <div className="text-center">
                      <p className="font-bold">{instructor.students.toLocaleString()}+</p>
                      <p className="text-[10px] uppercase text-muted-foreground font-bold">Students</p>
                    </div>
                    <div className="text-center">
                      <p className="font-bold">{instructor.courses}</p>
                      <p className="text-[10px] uppercase text-muted-foreground font-bold">Courses</p>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-xl">
                    {instructor.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
