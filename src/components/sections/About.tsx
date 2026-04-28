"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Python",
  "Cloud Flare",
  "AWS",
  "Supabase",
  "Firebase",
  "RevenueCat",
  "Sentry",
  "PostHog",
  "Flutter",
  "UI/UX",
  "Unity",
  "GitHub",
];

const aboutPhotos = [
  {
    alt: "Portrait of Lance Ian Leanillo",
    caption: "Student developer",
    detail: "Central Philippine University",
    src: "/profile.jpg",
  },
  {
    alt: "Vibolla project screenshot",
    caption: "Web apps",
    detail: "Recipe communities and useful tools",
    src: "/Screenshot%202026-04-28%20at%2012.56.09%E2%80%AFPM.png",
  },
  {
    alt: "localtradings.com project screenshot",
    caption: "Product practice",
    detail: "Trading lessons, quizzes, and backtesting",
    src: "/Screenshot%202026-04-28%20at%2012.51.47%E2%80%AFPM.png",
  },
];

export default function About() {
  const [activePhoto, setActivePhoto] = useState(0);
  const railRef = useRef<HTMLDivElement>(null);

  const scrollToPhoto = (index: number) => {
    const rail = railRef.current;
    if (!rail) return;

    rail.scrollTo({
      behavior: "smooth",
      left: index * rail.clientWidth,
    });
    setActivePhoto(index);
  };

  const handlePhotoScroll = () => {
    const rail = railRef.current;
    if (!rail) return;

    setActivePhoto(Math.round(rail.scrollLeft / rail.clientWidth));
  };

  return (
    <section className="bg-[#f7f4ee] py-24 dark:bg-slate-950" id="about">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="group relative mt-5 overflow-hidden rounded-lg bg-slate-950 shadow-2xl shadow-slate-300/70 ring-1 ring-slate-900/10 transition duration-300 hover:-translate-y-1 dark:shadow-black/30 dark:ring-white/10">
            <div
              className="no-scrollbar flex aspect-[4/5] snap-x snap-mandatory overflow-x-auto scroll-smooth"
              onScroll={handlePhotoScroll}
              ref={railRef}
            >
              {aboutPhotos.map((photo) => (
                <figure
                  className="relative min-w-full snap-center overflow-hidden"
                  key={photo.src}
                >
                  <Image
                    alt={photo.alt}
                    className="object-cover transition duration-700 group-hover:scale-[1.03]"
                    fill
                    priority={photo.src === "/profile.jpg"}
                    sizes="(min-width: 1024px) 36vw, 100vw"
                    src={photo.src}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/10 to-transparent" />
                  <figcaption className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-200">
                      {photo.caption}
                    </p>
                    <p className="mt-2 max-w-sm text-2xl font-black leading-tight">
                      {photo.detail}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>

            <div className="absolute right-4 top-4 flex gap-2">
              <button
                aria-label="Previous about photo"
                className="grid size-10 place-items-center rounded-full bg-white/90 text-lg font-black text-slate-950 shadow-lg transition hover:bg-cyan-200"
                onClick={() =>
                  scrollToPhoto(
                    activePhoto === 0 ? aboutPhotos.length - 1 : activePhoto - 1,
                  )
                }
                type="button"
              >
                &lt;
              </button>
              <button
                aria-label="Next about photo"
                className="grid size-10 place-items-center rounded-full bg-white/90 text-lg font-black text-slate-950 shadow-lg transition hover:bg-cyan-200"
                onClick={() =>
                  scrollToPhoto(
                    activePhoto === aboutPhotos.length - 1 ? 0 : activePhoto + 1,
                  )
                }
                type="button"
              >
                &gt;
              </button>
            </div>

            <div className="absolute bottom-5 right-5 flex gap-2">
              {aboutPhotos.map((photo, index) => (
                <button
                  aria-label={`Show ${photo.caption}`}
                  className={`h-2 rounded-full transition ${
                    activePhoto === index ? "w-8 bg-cyan-300" : "w-2 bg-white/70"
                  }`}
                  key={photo.src}
                  onClick={() => scrollToPhoto(index)}
                  type="button"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <p className="text-lg leading-8 text-slate-600 dark:text-slate-300">
            I am a third-year Computer Science student at Central Philippine
            University specializing in software development. I enjoy building
            practical web apps, digital tools, and experiments that combine
            design, development, and problem-solving.
          </p>

          <div className="border-t border-slate-300 pt-8 dark:border-white/10">
            <h3 className="text-xl font-black text-slate-950 dark:text-white">
              Skills and technologies
            </h3>
            <div className="mt-5 flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  className="rounded-md border border-slate-300 px-3 py-2 text-sm font-bold text-slate-700 dark:border-white/15 dark:text-slate-200"
                  key={skill}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-0 border-y border-slate-300 dark:border-white/10 sm:grid-cols-2">
            <div className="py-6 pr-6 text-slate-950 dark:text-slate-100 sm:border-r sm:border-slate-300 sm:dark:border-white/10">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                Education
              </p>
              <p className="mt-3 text-2xl font-black">
                B.S. Computer Science
              </p>
            </div>
            <div className="py-6 text-slate-950 dark:text-slate-100 sm:pl-6">
              <p className="text-sm font-black uppercase tracking-[0.18em] text-slate-500 dark:text-slate-400">
                Focus
              </p>
              <p className="mt-3 text-2xl font-black">
                App, Web, and Game Development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
