"use client";

import { useEffect, useState } from "react";

import Card from "@/components/ui/Card";
import type { Project } from "@/lib/types";

const projects: Project[] = [
  {
    id: 1,
    title: "Vibolla",
    description:
      "A community recipe sharing web app for browsing, submitting, and discovering homemade food ideas.",
    technologies: [
      "JavaScript",
      "TypeScript",
      "HTML",
      "CSS",
      "React",
      "Firebase",
      "Firebase Auth",
      "Firebase Storage",
      "Firebase Database",
      "Vercel",
      "Local Storage",
      "IndexedDB",
    ],
    imageUrl:
      "/Screenshot%202026-04-28%20at%2012.56.09%E2%80%AFPM.png",
    githubUrl: "https://github.com/lanceian1978/vibolla.com",
    liveUrl: "https://vibolla.com",
  },
  {
    id: 2,
    title: "localtradings",
    description:
      "A learning-first trading platform with structured lessons, quizzes, and backtesting practice before real-money risk.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React",
      "Tailwind CSS",
      "Supabase",
      "Supabase Auth",
      "Zod",
      "Lightweight Charts",
      "Three.js",
      "Cloudflare Workers",
      "Vercel",
    ],
    imageUrl:
      "/Screenshot%202026-04-28%20at%2012.51.47%E2%80%AFPM.png",
    githubUrl: "https://github.com/localtradings/final-localtradings.com",
    liveUrl: "https://www.localtradings.com",
  },
  {
    id: 3,
    title: "Velvet Bean Cafe",
    description:
      "A polished cafe website for presenting coffee, menu highlights, and a warm brand experience online.",
    technologies: ["Next.js", "TypeScript", "JavaScript", "CSS", "Vercel"],
    imageUrl:
      "/Screenshot%202026-04-29%20at%2012.20.39%E2%80%AFAM.png",
    githubUrl: "https://github.com/lanceian1978/velvet-bean-cafe",
    liveUrl: "https://velvet-bean-cafe.vercel.app",
  },
];

function ProjectSkeleton() {
  return (
    <div className="overflow-hidden rounded-lg border border-slate-200 bg-white dark:border-white/10 dark:bg-white/[0.03]">
      <div className="aspect-[16/10] animate-pulse bg-slate-200 dark:bg-white/10" />
      <div className="space-y-4 p-6">
        <div className="h-7 w-2/3 animate-pulse rounded-md bg-slate-200 dark:bg-white/10" />
        <div className="h-4 w-full animate-pulse rounded-md bg-slate-200 dark:bg-white/10" />
        <div className="h-4 w-5/6 animate-pulse rounded-md bg-slate-200 dark:bg-white/10" />
        <div className="flex gap-2">
          <div className="h-8 w-20 animate-pulse rounded-md bg-slate-200 dark:bg-white/10" />
          <div className="h-8 w-24 animate-pulse rounded-md bg-slate-200 dark:bg-white/10" />
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setLoading(false), 650);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="bg-white py-24 dark:bg-slate-900" id="projects">
      <div className="mx-auto max-w-6xl px-5">
        <div className="max-w-3xl">
          <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-700 dark:text-cyan-300">
            Projects
          </p>
          <h2 className="mt-4 text-4xl font-black text-slate-950 sm:text-5xl dark:text-white">
            Built with purpose. Designed for real use.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            From food platforms to trading tools and cafe websites, each project
            focuses on solving a clear problem with practical design and
            functionality.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {loading
            ? [1, 2, 3].map((item) => <ProjectSkeleton key={item} />)
            : projects.map((project) => (
                <Card key={project.id} project={project} />
              ))}
        </div>
      </div>
    </section>
  );
}
