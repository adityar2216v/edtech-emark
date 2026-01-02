"use client";

import { INSTRUCTORS } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Star, Users, BookOpen } from "lucide-react";
import Link from "next/link";

export default function InstructorsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center mb-10">Our Expert Instructors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {INSTRUCTORS.map((instructor) => (
          <Card key={instructor.id} className="flex flex-col items-center text-center p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img 
              src={instructor.avatar} 
              alt={instructor.name} 
              className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-primary"
            />
            <CardHeader className="p-0 mb-2">
              <CardTitle className="text-2xl font-bold">{instructor.name}</CardTitle>
              <CardDescription className="text-muted-foreground">{instructor.title}</CardDescription>
            </CardHeader>
            <CardContent className="p-0 space-y-3">
              <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-yellow-500" />
                  <span>{instructor.rating}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Users className="h-4 w-4" />
                  <span>{instructor.students.toLocaleString()} Students</span>
                </div>
                <div className="flex items-center gap-1">
                  <BookOpen className="h-4 w-4" />
                  <span>{instructor.courses} Courses</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 line-clamp-3">{instructor.bio}</p>
              <Link href={`/instructors/${instructor.id}`}>
                <Button variant="outline" className="mt-4">View Profile</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
