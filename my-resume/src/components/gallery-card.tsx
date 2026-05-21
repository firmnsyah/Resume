import Image from "next/image";
import { galleryImages } from "@/lib/resume-data";
import { ImageIcon } from "@/components/icons";
import { SectionCard } from "@/components/section-card";

export function GalleryCard() {
  const items = [...galleryImages, ...galleryImages];

  return (
    <SectionCard title="Gallery" Icon={ImageIcon}>
      <div className="neu-scroll-x -mx-2 overflow-hidden px-2 pb-2">
        <div className="neu-marquee flex gap-4">
          {items.map((img, i) => {
            const isClone = i >= galleryImages.length;
            return (
              <div
                key={i}
                aria-hidden={isClone}
                className="neu-pressed group shrink-0 rounded-3xl p-3"
                style={{ width: "min(70vw, 240px)" }}
              >
                <div className="relative h-56 overflow-hidden rounded-2xl sm:h-64">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 768px) 70vw, 240px"
                    className="object-cover saturate-0 transition-[filter] duration-500 group-hover:saturate-100"
                    priority={!isClone && i < 2}
                  />
                  {/* Grain overlay — shifts rapidly on hover via CSS animation */}
                  <span aria-hidden="true" className="gallery-grain" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionCard>
  );
}
