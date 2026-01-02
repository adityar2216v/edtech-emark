"use client";

import { COURSES } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  PlayCircle, 
  CheckCircle2, 
  MessageSquare, 
  FileText, 
  HelpCircle,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Send,
  Download
} from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function LearningPage() {
  const params = useParams();
  const router = useRouter();
  const course = COURSES.find((c) => c.id === params.id);
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  if (!course) return null;

  const currentLesson = course.lessons[currentLessonIndex] || { title: "Introduction", duration: "0:00" };

  return (
    <div className="flex flex-col h-[calc(100vh-65px)] bg-background overflow-hidden">
      {/* Learning Header */}
      <header className="h-14 border-b flex items-center justify-between px-4 bg-slate-900 text-white z-20">
        <div className="flex items-center gap-4">
          <Link href="/dashboard" className="hover:text-primary transition-colors">
            <ChevronLeft className="h-5 w-5" />
          </Link>
          <div className="h-6 w-px bg-slate-700 hidden md:block" />
          <h2 className="text-sm font-bold truncate max-w-[200px] md:max-w-md">
            {course.title}
          </h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <span className="text-xs text-slate-400">Your Progress: {course.progress}%</span>
            <Progress value={course.progress} className="w-24 h-1.5 bg-slate-700" />
          </div>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </header>

      <div className="flex flex-grow overflow-hidden relative">
        {/* Main Content: Video & Tabs */}
        <div className="flex-grow overflow-y-auto flex flex-col">
          {/* Video Section */}
          <div className="bg-black aspect-video w-full relative group">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="h-20 w-20 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-sm cursor-pointer hover:scale-110 transition-transform">
                  <PlayCircle className="h-12 w-12 text-primary fill-current" />
                </div>
                <p className="text-white/60 text-sm">Now playing: {currentLesson.title}</p>
              </div>
            </div>
            {/* Mock Video Controls */}
            <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-white/20">
              <div className="h-full bg-primary w-1/3" />
            </div>
          </div>

          {/* Content Tabs */}
          <div className="flex-grow p-4 md:p-8 max-w-5xl mx-auto w-full">
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-2xl font-bold">{currentLesson.title}</h1>
              <div className="flex gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  disabled={currentLessonIndex === 0}
                  onClick={() => setCurrentLessonIndex(prev => prev - 1)}
                >
                  <ChevronLeft className="h-4 w-4 mr-1" /> Previous
                </Button>
                <Button 
                  size="sm"
                  disabled={currentLessonIndex === course.lessons.length - 1}
                  onClick={() => setCurrentLessonIndex(prev => prev + 1)}
                >
                  Next <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>

            <Tabs defaultValue="overview" className="w-full">
              <TabsList className="w-full justify-start border-b rounded-none bg-transparent h-auto p-0 gap-8">
                <TabsTrigger value="overview" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-3 text-sm font-bold">Overview</TabsTrigger>
                <TabsTrigger value="notes" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-3 text-sm font-bold">Notes</TabsTrigger>
                <TabsTrigger value="quiz" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-3 text-sm font-bold">Quiz</TabsTrigger>
                <TabsTrigger value="discussion" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-0 py-3 text-sm font-bold">Discussion</TabsTrigger>
              </TabsList>
              
              <TabsContent value="overview" className="py-6 space-y-6">
                <div className="prose prose-slate max-w-none">
                  <h3 className="text-lg font-bold">About this lesson</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    In this lesson, we'll dive deep into the core concepts and practical applications. 
                    By the end of this video, you'll be able to implement these patterns in your own projects.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-8">
                    <div className="p-4 border rounded-xl space-y-2 bg-muted/30">
                      <p className="text-sm font-bold flex items-center gap-2">
                        <Download className="h-4 w-4 text-primary" />
                        Resources
                      </p>
                      <ul className="text-xs space-y-1 text-primary underline">
                        <li><a href="#">Source Code.zip</a></li>
                        <li><a href="#">Cheat Sheet.pdf</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="notes" className="py-6">
                <div className="space-y-4">
                  <textarea 
                    placeholder="Take notes for this lesson..." 
                    className="w-full h-40 p-4 rounded-xl border bg-muted/20 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                  />
                  <div className="flex justify-end">
                    <Button>Save Notes</Button>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="quiz" className="py-6">
                <div className="space-y-8 border rounded-2xl p-8 bg-slate-50">
                  <div className="space-y-4">
                    <span className="text-xs font-bold text-primary uppercase tracking-widest">Question 1 of 5</span>
                    <h3 className="text-xl font-bold">What is the primary benefit of using this specific pattern?</h3>
                  </div>
                  <div className="space-y-3">
                    {[
                      "Improved performance and scalability",
                      "Easier debugging and maintenance",
                      "Both A and B",
                      "None of the above"
                    ].map((option, i) => (
                      <button key={i} className="w-full p-4 text-left border rounded-xl bg-background hover:border-primary transition-all flex items-center gap-4">
                        <div className="h-6 w-6 rounded-full border flex items-center justify-center text-xs font-bold">
                          {String.fromCharCode(65 + i)}
                        </div>
                        <span className="text-sm">{option}</span>
                      </button>
                    ))}
                  </div>
                  <Button className="w-full h-12">Submit Answer</Button>
                </div>
              </TabsContent>

              <TabsContent value="discussion" className="py-6 space-y-6">
                <div className="flex gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                    JD
                  </div>
                  <div className="flex-grow relative">
                    <input 
                      placeholder="Ask a question or share a thought..." 
                      className="w-full h-12 pr-12 pl-4 rounded-xl border focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                    />
                    <button className="absolute right-2 top-2 h-8 w-8 rounded-lg bg-primary text-primary-foreground flex items-center justify-center">
                      <Send className="h-4 w-4" />
                    </button>
                  </div>
                </div>
                
                <div className="space-y-6 pt-4">
                  {[
                    { user: "Alice Smith", comment: "Can you explain the difference between this and the previous method?", time: "2 hours ago" },
                    { user: "Bob Wilson", comment: "The explanation at 5:30 was really helpful. Thanks!", time: "5 hours ago" }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 p-4 border rounded-xl hover:bg-muted/10 transition-colors">
                      <div className="h-8 w-8 rounded-full bg-slate-200 flex-shrink-0" />
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <p className="text-sm font-bold">{item.user}</p>
                          <span className="text-[10px] text-muted-foreground">{item.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.comment}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Sidebar: Course Content */}
        <aside className={`absolute top-0 right-0 bottom-0 w-80 bg-background border-l z-30 transition-transform duration-300 transform ${isSidebarOpen ? "translate-x-0" : "translate-x-full"} md:relative md:translate-x-0 flex flex-col`}>
          <div className="p-4 border-b flex items-center justify-between">
            <h3 className="font-bold">Course Content</h3>
            <span className="text-xs font-bold text-muted-foreground">{course.lessons.length} lessons</span>
          </div>
          <div className="flex-grow overflow-y-auto">
            {course.lessons.map((lesson, i) => (
              <button
                key={lesson.id}
                onClick={() => setCurrentLessonIndex(i)}
                className={`w-full flex items-start gap-3 p-4 text-left border-b transition-colors ${i === currentLessonIndex ? "bg-primary/5 border-l-4 border-l-primary" : "hover:bg-muted/50"}`}
              >
                <div className="mt-0.5">
                  {lesson.completed ? (
                    <CheckCircle2 className="h-4 w-4 text-green-600" />
                  ) : (
                    <PlayCircle className={`h-4 w-4 ${i === currentLessonIndex ? "text-primary" : "text-slate-300"}`} />
                  )}
                </div>
                <div className="flex-grow min-w-0">
                  <p className={`text-sm font-medium ${i === currentLessonIndex ? "text-primary" : "text-slate-700"}`}>
                    {i + 1}. {lesson.title}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">{lesson.duration}</p>
                </div>
              </button>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
