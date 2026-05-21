import { AboutCard } from "@/components/about-card";
import { CertificationsCard } from "@/components/certifications-card";
import { ConnectCard } from "@/components/connect-card";
import { ExperienceCard } from "@/components/experience-card";
import { GalleryCard } from "@/components/gallery-card";
import { ProfileHeader } from "@/components/profile-header";
import { ProjectsCard } from "@/components/projects-card";
import { SiteFooter } from "@/components/site-footer";
import { TechStackCard } from "@/components/tech-stack-card";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--neu-base)] py-6 sm:py-8">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-8 px-4 sm:gap-10 sm:px-8">
        <ProfileHeader />

        <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr]">
          <div className="flex flex-col gap-8">
            <AboutCard />
            <TechStackCard />
          </div>
          <div className="lg:relative">
            <div className="lg:absolute lg:inset-0">
              <ExperienceCard />
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.05fr_1fr]">
          <ProjectsCard />
          <CertificationsCard />
        </div>

        <ConnectCard />

        <GalleryCard />

        <SiteFooter />
      </div>
    </main>
  );
}
