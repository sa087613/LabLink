"use client";
import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export interface SavedLab {
  slug: string;
  name: string;
  department: string;
  pi: string;
  link: string;
  sent: boolean;
  responded: boolean;
  draft: string;
}

interface LabListContextType {
  list: SavedLab[];
  addLab: (lab: Omit<SavedLab, "sent" | "responded" | "draft">) => void;
  removeLab: (slug: string) => void;
  isInList: (slug: string) => boolean;
  toggleSent: (slug: string) => void;
  toggleResponded: (slug: string) => void;
  updateDraft: (slug: string, draft: string) => void;
}

const LabListContext = createContext<LabListContextType | undefined>(undefined);
const STORAGE_KEY = "lablink-saved-labs";

export function LabListProvider({ children }: { children: ReactNode }) {
  const [list, setList] = useState<SavedLab[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) setList(JSON.parse(stored));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }, [list, hydrated]);

  const addLab: LabListContextType["addLab"] = (lab) => {
  setList((prev) =>
    prev.some((l) => l.slug === lab.slug)
      ? prev
      : [...prev, { ...lab, sent: false, responded: false, draft: "" }]);
  };

  const updateDraft = (slug: string, draft: string) => {
    setList((prev) => prev.map((l) => (l.slug === slug ? { ...l, draft } : l)));
  };

  const removeLab = (slug: string) => {
    setList((prev) => prev.filter((l) => l.slug !== slug));
  };

  const isInList = (slug: string) => list.some((l) => l.slug === slug);

  const toggleSent = (slug: string) => {
    setList((prev) => prev.map((l) => (l.slug === slug ? { ...l, sent: !l.sent } : l)));
  };

  const toggleResponded = (slug: string) => {
    setList((prev) => prev.map((l) => (l.slug === slug ? { ...l, responded: !l.responded } : l)));
  };

  return (
    <LabListContext.Provider
      value={{ list, addLab, removeLab, isInList, toggleSent, toggleResponded, updateDraft }}
    >
    {children}
    </LabListContext.Provider>
  );
}

export function useLabList() {
  const ctx = useContext(LabListContext);
  if (!ctx) throw new Error("useLabList must be used within LabListProvider");
  return ctx;
}