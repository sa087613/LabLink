"use client";
import { useState } from "react";
import Link from "next/link";
import { GradientBackground } from "@/components/paper-design-shader-background";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { FaGoogle } from "react-icons/fa6";
import { createClient } from "@/lib/supabase/client";

const supabase = createClient(
  
);

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError("Invalid email or password.");
    } else {
      window.location.href = "/explore";
    }
  };

  const handleGoogleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: { redirectTo: `${window.location.origin}/explore` },
    });
  };

  return (
    <div className="relative w-full min-h-screen bg-black flex items-center justify-center px-6 py-12">
      <div className="relative w-full max-w-md">
        <div className="absolute inset-0 border-2 border-dashed border-[#B39051] rounded-2xl overflow-hidden z-0">
          <GradientBackground scale={2.5} />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 p-8 md:p-10">
          <div className="text-center mb-8">
            <span
              className="text-2xl font-semibold italic tracking-tight text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              LabLink
            </span>
            <h1
              className="text-white text-3xl italic font-bold mt-6 mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Welcome back
            </h1>
            <p className="text-white/50 text-sm">
              Sign in to see your matches.
            </p>
          </div>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center gap-3 bg-white/10 border-2 border-white/20 text-white rounded-xl py-3 mb-6 hover:bg-white/15 transition-colors"
          >
            <FaGoogle className="h-4 w-4" />
            <span className="text-sm font-medium">Continue with Google</span>
          </button>

          <div className="flex items-center gap-4 mb-6">
            <div className="flex-1 h-px bg-white/10" />
            <span className="text-white/40 text-xs uppercase tracking-widest">or</span>
            <div className="flex-1 h-px bg-white/10" />
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 w-5 h-5" />
              <input
                type="email"
                placeholder="you@gatech.edu"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full pl-12 pr-4 py-3 bg-white/10 border-2 border-white/20 text-white placeholder:text-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B39051] focus:border-[#B39051] transition-colors"
              />
            </div>

            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 w-5 h-5" />
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full pl-12 pr-12 py-3 bg-white/10 border-2 border-white/20 text-white placeholder:text-white/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B39051] focus:border-[#B39051] transition-colors"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 hover:text-white/70 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>

            <div className="flex justify-end">
              <Link
                href="/forgot-password"
                className="text-xs text-[#B39051] hover:text-white transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            {error && <p className="text-red-400 text-xs">{error}</p>}

            <button
              type="submit"
              className="rounded-full bg-[#B39051] text-[#051E39] text-sm px-4 py-3 font-mono font-semibold hover:bg-white transition-colors mt-2"
            >
              SIGN IN →
            </button>
          </form>

          <p className="text-center text-white/50 text-sm mt-8">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="text-[#B39051] hover:text-white transition-colors font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}