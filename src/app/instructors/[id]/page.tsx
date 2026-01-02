"use client";

import { INSTRUCTORS, COURSES } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Star, Users, BookOpen, ChevronRight } from "lucide-react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function InstructorDetailPage() {
  const params = useParams();
  const instructor = INSTRUCTORS.find((inst) => inst.id === params.id);

  if (!instructor) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold">Instructor not found</h1>
        <Link href="/instructors">
          <Button className="mt-4">Back to Instructors</Button>
        </Link>
      </div>
    );
  }

  const instructorCourses = COURSES.filter(course => course.instructorId === instructor.id);

  return (
    <div className="container mx-auto px-4 py-12">
      <nav className="flex items-center gap-2 text-sm text-slate-400 mb-8">
        <Link href="/instructors" className="hover:text-primary transition-colors">Instructors</Link>
        <ChevronRight className="h-3 w-3" />
        <span className="text-foreground font-medium">{instructor.name}</span>
      </nav>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
        <img 
          src={instructor.avatar} 
          alt={instructor.name} 
          className="w-48 h-48 rounded-full object-cover border-4 border-primary shadow-lg"
        />
        <div className="text-center md:text-left space-y-3">
          <h1 className="text-4xl font-bold">{instructor.name}</h1>
          <p className="text-xl text-muted-foreground">{instructor.title}</p>
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 pt-2">
            <div className="flex items-center gap-2">
              <Star className="h-5 w-5 text-yellow-500" />
              <span className="text-lg font-semibold">{instructor.rating} Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-blue-500" />
              <span className="text-lg font-semibold">{instructor.students.toLocaleString()} Students</span>
            </div>
            <div className="flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-green-500" />
              <span className="text-lg font-semibold">{instructor.courses} Courses</span>
            </div>
          </div>
          <p className="text-base text-gray-700 max-w-2xl mt-4">{instructor.bio}</p>
        </div>
      </div>

      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Courses by {instructor.name}</h2>
        {instructorCourses.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {instructorCourses.map(course => (
              <Card key={course.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Link href={`/courses/${course.id}`}>
                  <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                  <CardHeader>
                    <CardTitle className="text-xl font-bold line-clamp-2">{course.title}</CardTitle>
                    <p className="text-sm text-muted-foreground">{instructor.name}</p>
                  </CardHeader>
                  <CardContent className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>{course.rating} ({course.reviews})</span>
                    </div>
                    <span className="text-lg font-bold">${course.price}</span>
                  </CardContent>
                </Link>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-lg text-gray-600">No courses found for this instructor yet.</p>
        )}
      </section>
    </div>
  );
}
