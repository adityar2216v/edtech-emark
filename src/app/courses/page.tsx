"use client";

import { COURSES, INSTRUCTORS } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Star, Search, Filter, SlidersHorizontal, User, BookOpen } from "lucide-react";
import Link from "next/link";
import { useState, useMemo } from "react";

const CATEGORIES = ["All", "Web Development", "Design", "Data Science", "Marketing"];

export default function CoursesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredCourses = useMemo(() => {
    return COURSES.filter((course) => {
      const instructor = INSTRUCTORS.find((inst) => inst.id === course.instructorId);
      const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            (instructor && instructor.name.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="container mx-auto px-4 py-12 space-y-12">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight">Explore Our Courses</h1>
        <p className="text-muted-foreground text-lg">
          Discover thousands of courses to help you reach your goals.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-center justify-between sticky top-[65px] z-40 bg-background/95 backdrop-blur py-4 -mx-4 px-4 border-b md:border-none md:static md:p-0">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search for anything..." 
            className="pl-10 h-11 rounded-xl"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <Button
              key={cat}
              variant={selectedCategory === cat ? "default" : "outline"}
              size="sm"
              className="rounded-full whitespace-nowrap"
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
        <Button variant="outline" className="hidden md:flex gap-2 rounded-xl h-11">
          <SlidersHorizontal className="h-4 w-4" />
          More Filters
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredCourses.map((course) => (
          <Link key={course.id} href={`/courses/${course.id}`}>
            <div className="group rounded-2xl border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              <div className="aspect-[16/10] relative overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                />
                <Badge className="absolute top-4 left-4 bg-background/90 text-foreground backdrop-blur hover:bg-background/90">
                  {course.category}
                </Badge>
              </div>
              <div className="p-5 space-y-4 flex-grow flex flex-col">
                <div className="flex items-center gap-1.5">
                  <div className="flex text-yellow-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-3.5 w-3.5 ${i < Math.floor(course.rating) ? "fill-current" : ""}`} />
                    ))}
                  </div>
                  <span className="text-xs font-bold">{course.rating}</span>
                  <span className="text-[10px] text-muted-foreground">({course.reviews.toLocaleString()})</span>
                </div>
                <h3 className="text-lg font-bold leading-tight group-hover:text-primary transition-colors line-clamp-2">
                  {course.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <User className="h-3.5 w-3.5" />
                  <span>{INSTRUCTORS.find((inst) => inst.id === course.instructorId)?.name}</span>
                </div>
                <div className="flex items-center gap-3 text-xs text-muted-foreground pt-2">
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-3 w-3" />
                    <span>{course.lessons.length} Lessons</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-3 w-3" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                </div>
                <div className="pt-4 mt-auto flex items-center justify-between border-t border-dashed">
                  <span className="text-xl font-extrabold text-foreground">${course.price}</span>
                  <Button variant="secondary" size="sm" className="rounded-lg font-bold group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                    Enroll Now
                  </Button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-20 space-y-4">
          <div className="h-20 w-20 bg-muted rounded-full flex items-center justify-center mx-auto">
            <Search className="h-10 w-10 text-muted-foreground" />
          </div>
          <h3 className="text-xl font-bold">No courses found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filters to find what you're looking for.</p>
          <Button variant="link" onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}>
            Clear all filters
          </Button>
        </div>
      )}
    </div>
  );
}

function Users(props: any) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
