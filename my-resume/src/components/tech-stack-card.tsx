import { techStack } from "@/lib/resume-data";
import { CodeIcon } from "@/components/icons";
import { SectionCard } from "@/components/section-card";

export function TechStackCard() {
  return (
    <SectionCard title="Tech Stack" Icon={CodeIcon}>
      <div className="space-y-7">
        {techStack.map((category) => (
          <div key={category.title} className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-[var(--neu-text-soft)]">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-3">
              {category.items.map((item) => (
                <span
                  key={item}
                  data-gsap="tech-pill"
                  className="neu-raised-xs rounded-full px-4 py-2 text-sm font-medium text-[var(--neu-text)]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}
