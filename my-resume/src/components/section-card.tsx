import type { ComponentType, ReactNode, SVGProps } from "react";

interface Props {
  title: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  children: ReactNode;
  className?: string;
}

export function SectionCard({ title, Icon, children, className }: Props) {
  return (
    <section
      data-gsap="section"
      className={`neu-raised flex flex-col gap-5 px-5 py-6 sm:gap-6 sm:px-7 sm:py-7 md:px-8 md:py-8 ${className ?? ""}`}
    >
      <header className="flex items-center gap-3">
        <span className="neu-raised-xs flex h-10 w-10 items-center justify-center rounded-2xl text-[var(--neu-text-soft)]">
          <Icon className="h-[1.1rem] w-[1.1rem]" />
        </span>
        <h2 className="text-xl font-bold tracking-tight sm:text-[1.45rem]">{title}</h2>
      </header>
      {children}
    </section>
  );
}
