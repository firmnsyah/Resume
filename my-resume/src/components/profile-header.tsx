import Image from "next/image";
import { profile } from "@/lib/resume-data";
import {
  FileTextIcon,
  MailIcon,
  MapPinIcon,
  PaperclipIcon,
  VerifiedIcon,
} from "@/components/icons";
import { ThemeToggle } from "@/components/theme-toggle";

export function ProfileHeader() {
  return (
    <header className="neu-raised relative px-5 py-7 sm:px-8 sm:py-8 md:px-12 md:py-10">
      <div className="absolute right-4 top-4 z-10 sm:right-6 sm:top-6">
        <ThemeToggle />
      </div>

      <div className="flex flex-col items-center gap-7 md:flex-row md:items-start md:gap-9">
        <div data-gsap="profile-photo" className="neu-pressed shrink-0 rounded-[1.75rem] p-2.5">
          <div className="overflow-hidden rounded-[1.25rem]">
            <Image
              src={profile.photoSrc}
              alt={profile.name}
              width={200}
              height={240}
              priority
              className="h-40 w-32 object-cover sm:h-48 sm:w-40 md:h-56 md:w-44"
            />
          </div>
        </div>

        <div data-gsap="profile-text" className="flex w-full flex-col items-center gap-3 text-center md:items-start md:pr-20 md:text-left">
          <div className="flex flex-wrap items-center justify-center gap-2 md:justify-start">
            <h1 className="text-[1.75rem] font-extrabold leading-tight tracking-tight sm:text-3xl md:text-[2.15rem]">
              {profile.name}
            </h1>
            <span
              className="neu-raised-xs flex h-8 w-8 items-center justify-center rounded-full text-[var(--neu-success)]"
              aria-label="Verified"
            >
              <VerifiedIcon className="h-4 w-4" />
            </span>
          </div>

          <div className="neu-pressed-sm inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs text-[var(--neu-text-soft)] sm:text-sm">
            <MapPinIcon className="h-3.5 w-3.5" />
            <span>{profile.location}</span>
          </div>

          <p className="text-[0.95rem] font-semibold sm:text-base">{profile.role}</p>

          <div className="neu-flat inline-flex max-w-full flex-wrap items-center justify-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs sm:gap-2 sm:px-4 sm:py-2 sm:text-sm">
            <span className="text-[var(--neu-text-soft)]">Other portfolio</span>
            <PaperclipIcon className="h-3 w-3 text-[var(--neu-text-soft)] sm:h-3.5 sm:w-3.5" />
            <a
              href={profile.portfolioUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[var(--neu-accent)] underline-offset-4 hover:underline"
            >
              {profile.portfolioLabel}
            </a>
          </div>

          <div data-gsap="profile-cta" className="mt-2 flex flex-wrap items-center justify-center gap-3 md:justify-start">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="neu-interactive inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold"
            >
              <FileTextIcon className="h-4 w-4" />
              View Resume
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="neu-interactive inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-[var(--neu-text-soft)]"
            >
              <MailIcon className="h-4 w-4" />
              Send Email
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
