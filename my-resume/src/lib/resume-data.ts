import type {
  CertificationItem,
  ContactItem,
  ExperienceItem,
  GalleryImage,
  ProfileData,
  ProjectItem,
  SocialItem,
  TechCategory,
} from "@/types/resume";

export const profile: ProfileData = {
  name: "Firmansyah",
  location: "Makassar, Indonesia",
  role: "Undergraduate @Hasanuddin University | Aspiring Data & Business Intelligence Analyst",
  portfolioLabel: "firmansyah-resume.web.app",
  portfolioUrl: "https://firmansyah-resume.web.app/",
  resumeUrl: "/pdf/CV_Firmansyah.pdf",
  email: "frmnsyh.kdr@gmail.com",
  photoSrc: "/images/profile.png",
};

export const aboutParagraphs: string[] = [
  "I am an Information Systems student at Hasanuddin University with a strong passion for transforming raw data into strategic business insights. As an aspiring BI Analyst and Data Analyst, I am dedicated to mastering the end-to-end data lifecycle—from meticulous data preparation to impactful storytelling through visualization.",
  "I believe that data is more than just numbers; it is a powerful narrative that drives smarter decision-making. My goal is to bridge the gap between technical complexity and business strategy, ensuring that every insight leads to actionable growth.",
  "I am always open to discussing data trends, industry best practices, or potential collaborations. Let’s connect or reach out to me via LinkedIn message or at frmnsyh.kdr@gmail.com!",
];

export const techStack: TechCategory[] = [
  {
    title: "Data Visualization & Reporting",
    items: ["Tableau", "Power BI", "Looker Studio"],
  },
  {
    title: "Programming Languages",
    items: [
      "MySQL",
      "PostgreSQL",
      "BigQuery",
      "M-Code (Power Query)",
      "Python (Pandas, Matplotlib, Seaborn)",
      "R Studio",
    ],
  },
  {
    title: "Spreadsheet Tools",
    items: ["Microsoft Excel", "Google Sheets"],
  },
  {
    title: "Supporting Tools",
    items: ["Git & GitHub", "Jupyter Notebook", "Google Colab"],
  },
];

export const experience: ExperienceItem[] = [
  {
    title: "Information Systems - 4th Year",
    description: "Hasanuddin University",
    year: "2026",
    isCurrent: true,
  },
  {
    title: "Intern Graphic Designer @Carreer Development Center UNHAS",
    description:
      "Supported the career development center by creating visual content and designs for various social media materials and events.",
    year: "2025",
  },
  {
    title: "Coordinator of Media Creative Division @PIMNAS 38 UNHAS",
    description:
      "Led the media creative division in planning and executing various visual and communication initiatives for PIMNAS 38 UNHAS.",
    year: "2025",
  },
  {
    title: "Support Develop Website PIMNAS 38 UNHAS",
    description:
      "Assisting in the development and maintenance of the PIMNAS 38 UNHAS website using WordPress, ensuring a seamless user experience and up-to-date information for visitors.",
    year: "2025",
  },
  {
    title: "Web Design & UI/UX PIMNAS 38 UNHAS",
    description:
      "Practicing UI/UX principles using Figma, responsive design, and user-centered design to create an engaging website for PIMNAS 38 UNHAS.",
    year: "2025",
  },
  {
    title: "Website Development for Madduta Invitation",
    description:
      "Designed and developed a custom website for Madduta Invitation using WordPress, showcasing digital wedding invitation services and enhancing online presence through effective UI/UX design and responsive development.",
    year: "2024",
  },
  {
    title: "Founder Madduta Invitation",
    description:
      "Established a small business specializing in custom wedding digital invitations, honing skills in entrepreneurship, client communication, and design.",
    year: "2024",
  },
  {
    title:
      "MSIB Program as IT Development Intern Batch 8 @Bakrie Center Foundation(YAMALI TB)",
    description:
      "Supported the development and maintenance of web applications and systems.",
    year: "2024",
  },
  {
    title:
      "Liaison Officer Student Exchange Program Batch 2024 @Hasnuddin University (UNHAS)",
    description:
      "Served as a liaison officer for the student exchange program, facilitating communication and coordination between students and faculty.",
    year: "2024",
  },
  {
    title:
      "Student Exchange Program Batch 2023 @Institute of Technology Bandung (ITB)",
    description:
      "Participated one semester in a student exchange program at ITB, engaging in academic and cultural activities to broaden my perspective and enhance my skills.",
    year: "2023",
  },
  {
    title:
      "Coordinator of Relations and advocacy division @Kerukunan Mahasaiswa Pinrang (KMP) UNHAS",
    description:
      "Led the relations and advocacy division in planning and executing various initiatives for KMP UNHAS.",
    year: "2023",
  },
  {
    title: "Programming Fundamentals Certification @Dicoding Indonesia",
    description:
      "Completed a comprehensive certification in programming fundamentals.",
    year: "2023",
  },
  {
    title: "Programming Foundations",
    description:
      "Self-learning, online courses, mini-projects, & collage coursework",
    year: "2022",
  },
  {
    title: "Hello World!",
    description: "Started learning programming",
    year: "2021",
  },
];

export const projects: ProjectItem[] = [
  {
    title: "Volunteer Classification",
    description:
      "A machine learning project that classifies volunteers using SVM algorithm and Flask for REST API.",
    linkLabel: "volclassification.web.app",
    url: "https://volclassification.web.app",
    previewUrl: "/images/projects/preview-vol-classification.png",
  },
  {
    title: "Cashier POS System Prototype",
    description:
      "Developed a prototype for a point-of-sale system for a local business.",
    linkLabel: "sink.cool/kopiuser",
    url: "https://sink.cool/kopiuser",
    previewUrl: "/images/projects/preview-cashier-pos.png",
  },
  {
    title: "UI/UX(Figma) Design PIMNAS 38 UNHAS",
    description:
      "Building a website to showcase the UI/UX design of PIMNAS 38 UNHAS",
    linkLabel: "figma.com/design",
    url: "https://www.figma.com/design/4bhapDAC4PAaBpMNYzzuKa/UI_PIMNAS?node-id=0-1&t=S4dXeP0Ww2FYye4m-1",
    previewUrl: "/images/projects/preview-pimnas38.png",
  },
  {
    title: "Resume Website",
    description:
      "My Resume Website built with Next.js and hosted on Firebase, showcasing my projects, skills, and experience in a clean and modern design.",
    linkLabel: "firmansyah-resume.web.app",
    url: "https://firmansyah-resume.web.app/",
    previewUrl: "/images/projects/preview-resume-dark.png",
  },
  {
    title: "Madduta Invitation Website",
    description: "A custom website for Madduta Invitation using WordPress.",
    linkLabel: "maddutainv.com",
    url: "https://www.maddutainv.com/",
    previewUrl: "/images/projects/preview-madduta.png",
  },
  {
    title: "Data Craft",
    description:
      "Jasa professional pengolahan data, AI/ML, Pembuatan Website, dan layanan digital lainnya untuk mahasiswa, pelaku bisnis, dan individu.",
    linkLabel: "datacraftid.vercel.app",
    url: "https://datacraftid.vercel.app/",
    previewUrl: "/images/projects/preview-datacraft.png",
  },
];

export const certifications: CertificationItem[] = [
  {
    title: "Data Analyst in Power BI",
    issuer: "DataCamp",
    imageUrl: "/images/certs/cert-datacamp-powerbi.jpg",
  },
  {
    title: "Data Analyst in Tableau",
    issuer: "DataCamp",
    imageUrl: "/images/certs/cert-datacamp-tableau.jpg",
  },
  {
    title: "Excel Fundamentals for Data Analyst",
    issuer: "DataCamp",
    imageUrl: "/images/certs/cert-datacamp-excel.jpg",
  },
  {
    title: "Project Management Fundamentals",
    issuer: "Dicoding Indonesia",
    imageUrl: "/images/certs/cert-dicoding-pm.png",
  },
  {
    title: "JavaScript Fundamentals",
    issuer: "Dicoding Indonesia",
    imageUrl: "/images/certs/cert-dicoding-js.png",
  },
  {
    title: "Structured Query Language (SQL) Fundamentals",
    issuer: "Dicoding Indonesia",
    imageUrl: "/images/certs/cert-dicoding-sql.png",
  },
  {
    title: "Young Computer & Network Engineer",
    issuer: "BNSP - LSP SMK Negeri 2 Pinrang",
    imageUrl: "/images/certs/cert-bnsp.png",
  },
];

export const goals: string[] = [
  "To develop strong data analytics and visualization skills that transform raw data into actionable business insights.",
  // "To master Business Intelligence tools and methodologies to drive data driven decision making across organizations.",
  "Build end-to-end BI solutions from data pipeline to interactive dashboard that empower businesses to grow strategically.",
];

export const socialLinks: SocialItem[] = [
  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/firmnsyaahh/",
    iconKey: "linkedin",
  },
  {
    label: "GitHub",
    url: "https://github.com/firmnsyah",
    iconKey: "github",
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com/firmnsyaahh/",
    iconKey: "instagram",
  },
  {
    label: "Tiktok",
    url: "https://www.tiktok.com/@firmnsyaahh",
    iconKey: "tiktok",
  },
  // {
  //   label: "Virielle Studio",
  //   url: "https://www.virielle.studio/",
  //   iconKey: "virielle",
  //   imgSrc: "/images/virielle.png",
  // },
];

export const contactItems: ContactItem[] = [
  {
    label: "Email",
    value: "frmnsyh.kdr@gmail.com",
    href: "mailto:frmnsyh.kdr@gmail.com",
    iconKey: "email",
  },
  {
    label: "Let's Talk",
    value: "+62896-7744-6050",
    href: "tel:+6289677446050",
    iconKey: "phone",
  },
];

export const galleryImages: GalleryImage[] = [
  { src: "/images/photo-1.jpeg", alt: "Gallery Image 1" },
  { src: "/images/photo-2.jpeg", alt: "Gallery Image 2" },
  { src: "/images/photo-3.jpeg", alt: "Gallery Image 3" },
  { src: "/images/photo-4.jpeg", alt: "Gallery Image 4" },
  { src: "/images/photo-5.jpeg", alt: "Gallery Image 5" },
  { src: "/images/photo-6.jpeg", alt: "Gallery Image 6" },
  { src: "/images/photo-7.jpeg", alt: "Gallery Image 7" },
  { src: "/images/photo-8.jpeg", alt: "Gallery Image 8" },
  { src: "/images/photo-9.jpeg", alt: "Gallery Image 9" },
  { src: "/images/photo-10.jpeg", alt: "Gallery Image 10" },
  { src: "/images/photo-11.jpeg", alt: "Gallery Image 11" },
];
