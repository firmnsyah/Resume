export interface ProfileData {
  name: string;
  location: string;
  role: string;
  portfolioLabel: string;
  portfolioUrl: string;
  resumeUrl: string;
  email: string;
  photoSrc: string;
}

export interface TechCategory {
  title: string;
  items: string[];
}

export interface ExperienceItem {
  title: string;
  description?: string;
  year: string;
  isCurrent?: boolean;
}

export interface ProjectItem {
  title: string;
  description: string;
  linkLabel: string;
  url: string;
  previewUrl?: string;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  imageUrl?: string;
}

export interface SocialItem {
  label: string;
  url: string;
  iconKey: "linkedin" | "github" | "instagram" | "tiktok";
  imgSrc?: string;
}

export interface ContactItem {
  label: string;
  value: string;
  href: string;
  iconKey: "email" | "phone" | "messenger";
}

export interface GalleryImage {
  src: string;
  alt: string;
}
