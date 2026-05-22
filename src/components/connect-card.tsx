import Image from "next/image";
import { contactItems, goals, socialLinks } from "@/lib/resume-data";
import {
  ChevronRightIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  MailIcon,
  MessengerIcon,
  PhoneIcon,
  ShareIcon,
  TargetIcon,
  TikTokIcon,
} from "@/components/icons";

const socialIconMap = {
  linkedin: LinkedInIcon,
  github: GitHubIcon,
  instagram: InstagramIcon,
  tiktok: TikTokIcon,
} as const;

const contactIconMap = {
  email: MailIcon,
  phone: PhoneIcon,
  messenger: MessengerIcon,
} as const;

function GroupHeader({
  Icon,
  title,
}: {
  Icon: typeof TargetIcon;
  title: string;
}) {
  return (
    <header className="flex items-center gap-3">
      <span className="neu-raised-xs flex h-10 w-10 items-center justify-center rounded-2xl text-[var(--neu-text-soft)]">
        <Icon className="h-4 w-4" />
      </span>
      <h3 className="text-lg font-bold tracking-tight">{title}</h3>
    </header>
  );
}

export function ConnectCard() {
  return (
    <section className="neu-raised px-6 py-8 sm:px-9 sm:py-10">
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Goals */}
        <div data-gsap="connect-col" className="space-y-5">
          <GroupHeader Icon={TargetIcon} title="Goals" />
          <ul className="space-y-3">
            {goals.map((g, i) => (
              <li
                key={i}
                className="neu-flat rounded-2xl px-5 py-4 text-sm leading-relaxed text-[var(--neu-text-soft)]"
              >
                {g}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div data-gsap="connect-col" className="space-y-5">
          <GroupHeader Icon={ShareIcon} title="Social Links" />
          <ul className="space-y-3">
            {socialLinks.map((s) => {
              const Icon = socialIconMap[s.iconKey];
              return (
                <li key={s.label}>
                  <a
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="neu-interactive flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold"
                  >
                    <span className="neu-pressed-sm flex h-9 w-9 items-center justify-center rounded-full text-[var(--neu-accent)] overflow-hidden">
                      {Icon ? (
                        <Icon className="h-4 w-4" />
                      ) : s.imgSrc ? (
                        <Image
                          src={s.imgSrc}
                          alt={s.label}
                          width={28}
                          height={28}
                          className="h-7 w-7 rounded-full object-contain"
                        />
                      ) : null}
                    </span>
                    <span>{s.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Contact */}
        <div data-gsap="connect-col" className="space-y-5">
          <GroupHeader Icon={MailIcon} title="Contact" />
          <div className="neu-pressed-sm rounded-2xl px-5 py-4">
            <p className="text-sm leading-relaxed text-[var(--neu-text-soft)]">
              Open to collaborations on Data & BI Analyst and development dashboards.
            </p>
            <p className="mt-2 text-sm font-semibold text-[var(--neu-accent)]">
              Get in touch →
            </p>
          </div>
          <ul className="space-y-3 mt-7">
            {contactItems.map((c) => {
              const Icon = contactIconMap[c.iconKey];
              return (
                <li key={c.label}>
                  <a
                    href={c.href}
                    target={c.iconKey === "messenger" ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="neu-interactive flex items-center gap-3 rounded-2xl px-4 py-3"
                  >
                    <span className="neu-raised-xs flex h-10 w-10 items-center justify-center rounded-full text-[var(--neu-accent)]">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div className="flex-1">
                      <p className="text-xs font-medium uppercase tracking-wider text-[var(--neu-text-soft)]">
                        {c.label}
                      </p>
                      <p className="text-sm font-semibold">{c.value}</p>
                    </div>
                    <ChevronRightIcon className="h-4 w-4 text-[var(--neu-text-soft)]" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
