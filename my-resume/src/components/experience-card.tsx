import { experience } from "@/lib/resume-data";
import { BriefcaseIcon } from "@/components/icons";
import { SectionCard } from "@/components/section-card";

export function ExperienceCard() {
  return (
    <SectionCard title="Experience" Icon={BriefcaseIcon} className="lg:h-full">
      <div className="lg:flex-1 lg:min-h-0 lg:overflow-y-auto lg:py-2 lg:pl-1 lg:pr-3 lg:-mr-2">
        <ol className="relative ml-3 space-y-3 border-l border-[color-mix(in_oklch,var(--neu-dark)_25%,transparent)] pl-7">
          {experience.map((item, i) => (
            <li key={i} data-gsap="exp-item" className="relative">
              <span
                aria-hidden
                className={`absolute -left-[37px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full ${
                  item.isCurrent ? "neu-pressed-sm" : "neu-raised-xs"
                }`}
              >
                <span
                  className={`h-2.5 w-2.5 rounded-full ${
                    item.isCurrent
                      ? "bg-[var(--neu-accent)]"
                      : "bg-[var(--neu-text-soft)] opacity-40"
                  }`}
                />
              </span>
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <h3 className="text-base font-bold leading-snug">
                    {item.title}
                  </h3>
                  {item.description ? (
                    <p className="text-sm text-[var(--neu-text-soft)] leading-relaxed">
                      {item.description}
                    </p>
                  ) : null}
                </div>
                <span className="shrink-0 rounded-full px-3 py-1 text-xs font-semibold text-[var(--neu-text-soft)] neu-flat">
                  {item.year}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </SectionCard>
  );
}
