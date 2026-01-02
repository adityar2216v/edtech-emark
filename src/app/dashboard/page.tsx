"use client";

import { COURSES } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  BookOpen, 
  Clock, 
  MessageSquare, 
  Settings, 
  LayoutDashboard, 
  Search,
  Bell,
  ChevronRight,
  Sparkles,
  Send
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [chatInput, setChatInput] = useState("");
  const enrolledCourses = COURSES.filter(c => c.progress !== undefined);

  return (
    <div className="flex min-h-screen bg-muted/20">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-background hidden lg:flex flex-col">
        <div className="p-6 space-y-6 flex-grow">
          <div className="space-y-1">
            <h2 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4 px-2">Main Menu</h2>
            {[
              { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
              { id: "courses", label: "My Courses", icon: BookOpen },
              { id: "messages", label: "Messages", icon: MessageSquare },
              { id: "settings", label: "Settings", icon: Settings },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeTab === item.id 
                    ? "bg-primary text-primary-foreground shadow-sm" 
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
              </button>
            ))}
          </div>
          
          <div className="pt-6 border-t">
            <div className="bg-primary/5 rounded-xl p-4 border border-primary/10">
              <div className="flex items-center gap-2 text-primary mb-2">
                <Sparkles className="h-4 w-4" />
                <span className="text-xs font-bold uppercase">Pro Plan</span>
              </div>
              <p className="text-xs text-muted-foreground mb-3">Get unlimited access to all premium features.</p>
              <Button size="sm" className="w-full text-xs">Upgrade Now</Button>
            </div>
          </div>
        </div>

        <div className="p-4 border-t flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
            JD
          </div>
          <div className="flex-grow min-w-0">
            <p className="text-sm font-bold truncate">John Doe</p>
            <p className="text-xs text-muted-foreground truncate">john@example.com</p>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-4 md:p-8 space-y-8 overflow-y-auto">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Welcome back, John! 👋</h1>
            <p className="text-muted-foreground">You've completed 75% of your weekly goal.</p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-4 w-4" />
              <span className="absolute top-2 right-2 h-2 w-2 bg-red-500 rounded-full border-2 border-background" />
            </Button>
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <input 
                type="search" 
                placeholder="Search resources..." 
                className="h-10 w-48 md:w-64 rounded-lg border bg-background pl-9 text-sm"
              />
            </div>
          </div>
        </header>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column: Progress & Courses */}
          <div className="lg:col-span-2 space-y-8">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-background p-6 rounded-2xl border shadow-sm space-y-4">
                <div className="flex justify-between items-start">
                  <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                    <Clock className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">+12%</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Learning Time</p>
                  <p className="text-2xl font-bold">24.5 Hours</p>
                </div>
              </div>
              <div className="bg-background p-6 rounded-2xl border shadow-sm space-y-4">
                <div className="flex justify-between items-start">
                  <div className="p-2 bg-purple-100 text-purple-600 rounded-lg">
                    <Trophy className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-0.5 rounded-full">3 Badges</span>
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground">Courses Completed</p>
                  <p className="text-2xl font-bold">12 Courses</p>
                </div>
              </div>
            </div>

            <section className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold">Continue Learning</h2>
                <Link href="/courses" className="text-sm text-primary font-medium flex items-center gap-1 hover:underline">
                  All Courses <ChevronRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="space-y-4">
                {enrolledCourses.map((course) => (
                  <div key={course.id} className="bg-background p-4 md:p-6 rounded-2xl border shadow-sm flex flex-col md:flex-row gap-6 hover:shadow-md transition-shadow">
                    <div className="w-full md:w-48 aspect-video rounded-xl overflow-hidden flex-shrink-0 border">
                      <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-grow space-y-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-2 py-0.5 rounded">
                            {course.category}
                          </span>
                        </div>
                        <h3 className="font-bold text-lg">{course.title}</h3>
                        <p className="text-sm text-muted-foreground">Instructor: {course.instructor}</p>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs font-medium">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2" />
                      </div>
                    </div>
                    <div className="flex items-center justify-end md:justify-center md:px-4">
                      <Link href={`/learn/${course.id}`}>
                        <Button className="rounded-full px-6">Resume</Button>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: AI Tutor & Upcoming */}
          <div className="space-y-8">
            <section className="bg-background rounded-2xl border shadow-sm overflow-hidden flex flex-col h-[500px]">
              <div className="p-4 border-b bg-primary text-primary-foreground flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Sparkles className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-bold leading-none">AI Tutor</p>
                    <p className="text-[10px] opacity-80">Always online</p>
                  </div>
                </div>
                <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-white/10">
                  <Settings className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex-grow p-4 overflow-y-auto space-y-4 bg-muted/5">
                <div className="flex gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="h-4 w-4 text-primary" />
                  </div>
                  <div className="bg-background border p-3 rounded-2xl rounded-tl-none text-sm shadow-sm max-w-[85%]">
                    Hello John! I'm your AI learning assistant. How can I help you with your courses today?
                  </div>
                </div>
                <div className="flex gap-2 justify-end">
                  <div className="bg-primary text-primary-foreground p-3 rounded-2xl rounded-tr-none text-sm shadow-sm max-w-[85%]">
                    Explain the concept of closures in JavaScript.
                  </div>
                </div>
                <div className="flex gap-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Sparkles className="h-4 w-4 text-primary" />
                  </div>
                  <div className="bg-background border p-3 rounded-2xl rounded-tl-none text-sm shadow-sm max-w-[85%]">
                    A closure is the combination of a function bundled together with references to its surrounding state. In other words, a closure gives you access to an outer function's scope from an inner function...
                  </div>
                </div>
              </div>
              <div className="p-4 border-t bg-background">
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Ask a question..." 
                    className="w-full h-10 pr-10 pl-4 rounded-full border bg-muted/30 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                  />
                  <button className="absolute right-2 top-1.5 h-7 w-7 rounded-full bg-primary text-primary-foreground flex items-center justify-center hover:bg-primary/90 transition-colors">
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </section>

            <section className="bg-background p-6 rounded-2xl border shadow-sm space-y-4">
              <h2 className="font-bold">Upcoming Lessons</h2>
              <div className="space-y-4">
                {[
                  { title: "Visual Design Principles", time: "Today, 4:00 PM", type: "Live Class" },
                  { title: "React State Management", time: "Tomorrow, 10:00 AM", type: "Webinar" },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start border-l-2 border-primary pl-4 py-1">
                    <div className="flex-grow">
                      <p className="text-sm font-bold">{item.title}</p>
                      <p className="text-xs text-muted-foreground">{item.time}</p>
                    </div>
                    <span className="text-[10px] font-bold text-primary bg-primary/10 px-2 py-0.5 rounded h-fit uppercase">
                      {item.type}
                    </span>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full text-xs h-9">View Calendar</Button>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}

function Trophy(props: any) {
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
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}
