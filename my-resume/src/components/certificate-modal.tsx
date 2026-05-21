"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { X, Download, ZoomIn } from "lucide-react";

interface CertificateModalProps {
  title: string;
  issuer: string;
  imageUrl: string;
  onClose: () => void;
}

export function CertificateModal({
  title,
  issuer,
  imageUrl,
  onClose,
}: CertificateModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent body scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  function handleOverlayClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === overlayRef.current) onClose();
  }

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
      style={{ backgroundColor: "rgba(0,0,0,0.6)", backdropFilter: "blur(6px)" }}
    >
      <div
        className="neu-raised relative flex w-full max-w-2xl flex-col overflow-hidden"
        style={{
          animation: "cert-modal-in 0.28s cubic-bezier(0.16,1,0.3,1) both",
        }}
      >
        {/* Header */}
        <div className="flex items-start justify-between border-b border-[var(--border)] px-5 py-4">
          <div>
            <h2 className="text-[0.95rem] font-bold leading-snug text-[var(--neu-text)]">
              {title}
            </h2>
            <p className="mt-0.5 text-xs text-[var(--neu-text-soft)]">{issuer}</p>
          </div>
          <div className="flex items-center gap-2 ml-4 shrink-0">
            <a
              href={imageUrl}
              download
              className="neu-interactive rounded-xl p-2"
              title="Download certificate"
            >
              <Download className="h-4 w-4 text-[var(--neu-text-soft)]" />
            </a>
            <a
              href={imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="neu-interactive rounded-xl p-2"
              title="Open full size"
            >
              <ZoomIn className="h-4 w-4 text-[var(--neu-text-soft)]" />
            </a>
            <button
              onClick={onClose}
              className="neu-interactive rounded-xl p-2"
              aria-label="Close"
            >
              <X className="h-4 w-4 text-[var(--neu-text-soft)]" />
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="neu-pressed relative m-4 overflow-hidden rounded-xl" style={{ minHeight: 280 }}>
          <Image
            src={imageUrl}
            alt={`Certificate: ${title}`}
            fill
            className="object-contain p-2"
            sizes="(max-width: 768px) 100vw, 672px"
            priority
          />
        </div>
      </div>
    </div>
  );
}
