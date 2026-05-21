"use client";

import { useState } from "react";
import { certifications } from "@/lib/resume-data";
import { CertificateIcon } from "@/components/icons";
import { SectionCard } from "@/components/section-card";
import { CertificateModal } from "@/components/certificate-modal";
import type { CertificationItem } from "@/types/resume";

export function CertificationsCard() {
  const [selected, setSelected] = useState<CertificationItem | null>(null);

  return (
    <>
      <SectionCard title="Recent Certifications" Icon={CertificateIcon}>
        <ul className="space-y-3">
          {certifications.map((c) => (
            <li
              key={c.title}
              data-gsap="cert-item"
              onClick={() => c.imageUrl && setSelected(c)}
              className={`neu-flat flex items-start gap-4 rounded-2xl px-5 py-4 transition-all duration-200 ${
                c.imageUrl
                  ? "cursor-pointer hover:shadow-(--neu-shadow-raised-sm) active:shadow-(--neu-shadow-pressed-sm) group"
                  : ""
              }`}
            >
              <span className="neu-raised-xs mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-neu-accent">
                <CertificateIcon className="h-4 w-4" />
              </span>
              <div className="flex-1 space-y-0.5">
                <h3
                  className={`text-[0.95rem] font-bold leading-snug ${
                    c.imageUrl
                      ? "group-hover:text-neu-accent transition-colors duration-150"
                      : ""
                  }`}
                >
                  {c.title}
                </h3>
                <p className="text-xs text-neu-text-soft">{c.issuer}</p>
              </div>
              {c.imageUrl && (
                <span className="mt-1 shrink-0 text-neu-text-soft opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M3 9h18M9 21V9" />
                  </svg>
                </span>
              )}
            </li>
          ))}
        </ul>
      </SectionCard>

      {selected?.imageUrl && (
        <CertificateModal
          title={selected.title}
          issuer={selected.issuer}
          imageUrl={selected.imageUrl}
          onClose={() => setSelected(null)}
        />
      )}
    </>
  );
}
