"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Facebook, Github, Mail, Lock, User } from "lucide-react";

function AuthContent() {
  const searchParams = useSearchParams();
  const initialMode = searchParams.get("mode") === "signup" ? false : true;
  const [isLogin, setIsLogin] = useState(initialMode);

  useEffect(() => {
    if (searchParams.get("mode") === "signup") {
      setIsLogin(false);
    } else {
      setIsLogin(true);
    }
  }, [searchParams]);

  const toggleMode = () => setIsLogin(!isLogin);

  const formVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -20, transition: { duration: 0.5 } }
  };

  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] bg-slate-100 p-4">
      <div className="relative w-full max-w-4xl h-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden flex">
        
        {/* Sign In Form Section (Left Side) */}
        <div className={`absolute top-0 left-0 h-full w-1/2 flex flex-col items-center justify-center p-12 transition-all duration-700 ease-in-out ${isLogin ? "translate-x-0 opacity-100 z-20" : "translate-x-full opacity-0 z-10"}`}>
          <form className="w-full flex flex-col items-center gap-4">
            <h1 className="text-3xl font-bold mb-4">Sign in to emark</h1>
            <div className="flex gap-4 mb-4">
              <Button variant="outline" size="icon" className="rounded-full"><Facebook className="h-4 w-4" /></Button>
              <Button variant="outline" size="icon" className="rounded-full"><Github className="h-4 w-4" /></Button>
              <Button variant="outline" size="icon" className="rounded-full"><Mail className="h-4 w-4" /></Button>
            </div>
            <span className="text-sm text-muted-foreground mb-4">or use your email account</span>
            
            <div className="w-full space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email-login">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="email-login" placeholder="m@example.com" className="pl-10" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-login">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="password-login" type="password" placeholder="••••••••" className="pl-10" />
                </div>
              </div>
            </div>
            
            <Button variant="link" className="text-sm text-muted-foreground mt-2">Forgot your password?</Button>
            <Button className="w-full mt-4 rounded-full font-bold h-12 text-md">SIGN IN</Button>
          </form>
        </div>

        {/* Sign Up Form Section (Right Side -> Moves to Left) */}
        <div className={`absolute top-0 left-0 h-full w-1/2 flex flex-col items-center justify-center p-12 transition-all duration-700 ease-in-out ${!isLogin ? "translate-x-0 opacity-100 z-20" : "translate-x-full opacity-0 z-10"}`}>
          <form className="w-full flex flex-col items-center gap-4">
            <h1 className="text-3xl font-bold mb-4">Create Account</h1>
            <div className="flex gap-4 mb-4">
              <Button variant="outline" size="icon" className="rounded-full"><Facebook className="h-4 w-4" /></Button>
              <Button variant="outline" size="icon" className="rounded-full"><Github className="h-4 w-4" /></Button>
              <Button variant="outline" size="icon" className="rounded-full"><Mail className="h-4 w-4" /></Button>
            </div>
            <span className="text-sm text-muted-foreground mb-4">or use your email for registration</span>
            
            <div className="w-full space-y-3">
              <div className="space-y-2">
                <Label htmlFor="name-signup">Name</Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="name-signup" placeholder="John Doe" className="pl-10" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email-signup">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="email-signup" placeholder="m@example.com" className="pl-10" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="password-signup">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input id="password-signup" type="password" placeholder="••••••••" className="pl-10" />
                </div>
              </div>
            </div>
            
            <Button className="w-full mt-6 rounded-full font-bold h-12 text-md">SIGN UP</Button>
          </form>
        </div>

        {/* Overlay Container */}
        <div className={`absolute top-0 left-1/2 w-1/2 h-full overflow-hidden transition-transform duration-700 ease-in-out z-50 ${isLogin ? "translate-x-0" : "-translate-x-full"}`}>
          <div className={`bg-primary text-primary-foreground h-full w-[200%] relative -left-full transition-transform duration-700 ease-in-out flex items-center justify-center ${isLogin ? "translate-x-1/2" : "translate-x-0"}`}>
            
            {/* Overlay Left (Visible when isLogin is false/SignUp mode) -> Shows "Welcome Back" */}
            <div className="w-1/2 h-full flex flex-col items-center justify-center p-12 text-center space-y-6">
              <h1 className="text-4xl font-bold">Welcome Back!</h1>
              <p className="text-lg text-primary-foreground/80">To keep connected with us please login with your personal info</p>
              <Button 
                variant="outline" 
                className="rounded-full w-32 h-12 font-bold border-2 border-white bg-transparent hover:bg-white hover:text-primary text-white"
                onClick={toggleMode}
              >
                SIGN IN
              </Button>
            </div>

            {/* Overlay Right (Visible when isLogin is true/SignIn mode) -> Shows "Hello, Friend!" */}
            <div className="w-1/2 h-full flex flex-col items-center justify-center p-12 text-center space-y-6">
              <h1 className="text-4xl font-bold">Hello, Friend!</h1>
              <p className="text-lg text-primary-foreground/80">Enter your personal details and start your journey with us</p>
              <Button 
                variant="outline" 
                className="rounded-full w-32 h-12 font-bold border-2 border-white bg-transparent hover:bg-white hover:text-primary text-white"
                onClick={toggleMode}
              >
                SIGN UP
              </Button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default function AuthPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <AuthContent />
    </Suspense>
  );
}
