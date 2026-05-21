"use client";

import Image from "next/image";
import { projects } from "@/lib/resume-data";
import { ArrowUpRightIcon, GridIcon } from "@/components/icons";
import { SectionCard } from "@/components/section-card";

export function ProjectsCard() {
  return (
    <SectionCard title="Recent Projects" Icon={GridIcon}>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <div
            key={p.title}
            data-gsap="project-card"
            className="flip-card"
            style={{ perspective: "1000px", height: "210px" }}
          >
            <div className="flip-card-inner relative h-full w-full">

              {/* ── Front ── */}
              <div className="flip-card-face flip-card-front neu-interactive absolute inset-0 flex flex-col gap-3 rounded-2xl p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="space-y-1 min-w-0">
                    <h3 className="text-base font-bold tracking-tight leading-snug">
                      {p.title}
                    </h3>
                    <p className="line-clamp-3 text-sm leading-relaxed text-neu-text-soft">
                      {p.description}
                    </p>
                  </div>
                  <span className="neu-raised-xs flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-neu-text-soft">
                    <ArrowUpRightIcon className="h-4 w-4" />
                  </span>
                </div>
                <span className="neu-pressed-sm mt-auto inline-block w-fit rounded-full px-3 py-1.5 text-xs font-medium text-neu-accent">
                  {p.linkLabel}
                </span>
              </div>

              {/* ── Back ── */}
              <div className="flip-card-face flip-card-back neu-raised absolute inset-0 flex flex-col overflow-hidden rounded-2xl">
                {/* Preview image */}
                <div className="relative flex-1 overflow-hidden">
                  {p.previewUrl ? (
                    <Image
                      src={p.previewUrl}
                      alt={`${p.title} preview`}
                      fill
                      className="object-cover object-top"
                      sizes="(max-width: 640px) 100vw, 320px"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-sm text-neu-text-soft">
                      No preview yet
                    </div>
                  )}
                </div>

                {/* Footer */}
                <div className="flex shrink-0 items-center justify-between border-t border-border px-4 py-2.5">
                  <span className="truncate text-sm font-semibold text-neu-text">
                    {p.title}
                  </span>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="neu-interactive ml-3 flex shrink-0 items-center gap-1 rounded-xl px-3 py-1.5 text-xs font-semibold text-neu-accent"
                  >
                    Visit
                    <ArrowUpRightIcon className="h-3 w-3" />
                  </a>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
