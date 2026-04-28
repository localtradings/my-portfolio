import Image from "next/image";

import type { Project } from "@/lib/types";

import Button from "./Button";

interface CardProps {
  project: Project;
}

export default function Card({ project }: CardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/80 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-white/20 dark:hover:shadow-black/30">
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        <Image
          alt={`${project.title} project preview`}
          className="object-cover grayscale-[20%] transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          src={project.imageUrl}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
        <span className="absolute bottom-4 left-4 rounded-md bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-slate-950">
          Case study
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-5 p-5">
        <div>
          <h3 className="text-xl font-black text-slate-950 dark:text-white">
            {project.title}
          </h3>
          <p className="mt-3 leading-7 text-slate-600 dark:text-slate-300">
            {project.description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              className="rounded-md bg-slate-100 px-2.5 py-1 text-xs font-bold text-slate-700 dark:bg-white/10 dark:text-slate-200"
              key={technology}
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-3 pt-2 sm:flex-row">
          {project.githubUrl ? (
            <Button
              ariaLabel={`Open ${project.title} GitHub repository`}
              className="w-full sm:w-auto"
              href={project.githubUrl}
              variant="outline"
            >
              GitHub
            </Button>
          ) : null}
          {project.liveUrl ? (
            <Button
              ariaLabel={`Open ${project.title} live demo`}
              className="w-full sm:w-auto"
              href={project.liveUrl}
              variant="secondary"
            >
              Live Demo
            </Button>
          ) : null}
        </div>
      </div>
    </article>
  );
}
