import { aboutParagraphs } from "@/lib/resume-data";
import { BriefcaseIcon } from "@/components/icons";
import { SectionCard } from "@/components/section-card";

export function AboutCard() {
  return (
    <SectionCard title="About" Icon={BriefcaseIcon}>
      <div className="space-y-4 text-[0.95rem] leading-relaxed text-[var(--neu-text-soft)]">
        {aboutParagraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </SectionCard>
  );
}
