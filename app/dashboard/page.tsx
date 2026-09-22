"use client";
import { useEffect, useState, useRef } from "react";
import { createClient } from "@/lib/supabase/client";
import { useLabList } from "@/app/context/lab-list-context";
import { LogOut, Upload, FileText, X, Search, Mail, TrendingUp } from "lucide-react";

export default function Dashboard() {
  const [supabase] = useState(() => createClient());
  const [user, setUser] = useState<any>(null);
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { list } = useLabList();

  useEffect(() => {
    supabase.auth.getUser().then(({ data }) => setUser(data.user));
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    window.location.href = "/";
  };

  const handleFile = (file: File | undefined) => {
    if (file && (file.type === "application/pdf" || file.name.endsWith(".docx"))) {
      setResumeFile(file);
      // TODO: upload to Supabase Storage here
    }
  };

  const name = user?.user_metadata?.full_name;
  const avatarUrl = user?.user_metadata?.avatar_url;

  const savedLabsCount = list.length;
  const emailsSentCount = list.filter((l) => l.sent).length;
  const responsesCount = list.filter((l) => l.responded).length;

  return (
    <div className="px-6 md:px-10 py-16 max-w-6xl mx-auto">
      {/* Header */}
      <section className="pt-16 flex items-center justify-between mb-12">
        <div className="flex items-center gap-4">
          {avatarUrl ? (
            <img
              src={avatarUrl}
              alt={name}
              className="h-14 w-14 rounded-full object-cover border-2 border-[#B39051]"
            />
          ) : (
            <div className="h-14 w-14 rounded-full bg-white/10 flex items-center justify-center text-white text-lg font-medium border-2 border-[#B39051]">
              {(name ?? user?.email)?.[0]?.toUpperCase() ?? "?"}
            </div>
          )}
          <div>
            <h1
              className="text-white text-2xl md:text-3xl italic font-bold"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Welcome{name ? `, ${name.split(" ")[0]}` : ""}
            </h1>
            <p className="text-white/50 text-sm">Here's where things stand.</p>
          </div>
        </div>

        <button
          type="button"
          onClick={handleSignOut}
          className="flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors border border-white/10 hover:border-white/30 rounded-full px-4 py-2"
        >
          <LogOut className="w-4 h-4" />
          Sign out
        </button>
      </section>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { label: "Saved labs", value: savedLabsCount, icon: Search },
          { label: "Emails sent", value: emailsSentCount, icon: Mail },
          { label: "Responses", value: responsesCount, icon: TrendingUp },
        ].map((stat) => (
          <div
            key={stat.label}
            className="border-2 border-dashed border-[#B39051] rounded-2xl p-6 hover:border-white/60 transition-colors"
          >
            <div className="flex items-center justify-between mb-3">
              <p className="text-white/40 text-xs uppercase tracking-widest">{stat.label}</p>
              <stat.icon className="w-4 h-4 text-[#B39051]" />
            </div>
            <p className="text-white text-4xl font-bold">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Resume upload */}
      <div className="border-2 border-dashed border-[#B39051] rounded-2xl p-8">
        <h2
          className="text-white text-xl italic font-bold mb-1"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Your resume
        </h2>
        <p className="text-white/50 text-sm mb-6">
          Upload it once, get matched with labs automatically.
        </p>

        {resumeFile ? (
          <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-4">
            <div className="flex items-center gap-3 min-w-0">
              <div className="h-10 w-10 rounded-lg bg-[#B39051]/20 flex items-center justify-center shrink-0">
                <FileText className="w-5 h-5 text-[#B39051]" />
              </div>
              <div className="min-w-0">
                <p className="text-white text-sm font-medium truncate">{resumeFile.name}</p>
                <p className="text-white/40 text-xs">
                  {(resumeFile.size / 1024).toFixed(0)} KB
                </p>
              </div>
            </div>
            <button
              type="button"
              onClick={() => setResumeFile(null)}
              className="text-white/40 hover:text-white/70 transition-colors shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <div
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => {
              e.preventDefault();
              setIsDragging(false);
              handleFile(e.dataTransfer.files?.[0]);
            }}
            onClick={() => fileInputRef.current?.click()}
            className={`flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed p-10 cursor-pointer transition-colors ${
              isDragging
                ? "border-[#B39051] bg-[#B39051]/10"
                : "border-white/20 hover:border-white/40 bg-white/5"
            }`}
          >
            <div className="h-12 w-12 rounded-full bg-white/10 flex items-center justify-center">
              <Upload className="w-5 h-5 text-white/60" />
            </div>
            <div className="text-center">
              <p className="text-white text-sm font-medium">
                Drop your resume here, or click to browse
              </p>
              <p className="text-white/40 text-xs mt-1">PDF or DOCX, up to 10MB</p>
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.docx"
              className="hidden"
              onChange={(e) => handleFile(e.target.files?.[0])}
            />
          </div>
        )}
      </div>
    </div>
  );
}