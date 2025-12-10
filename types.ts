export type Language = 'en' | 'zh';

// 'about' view is merged into 'home' but we keep the type for anchor scrolling logic if needed
export type View = 'home' | 'experience' | 'projects' | 'education' | 'contact';

export interface Project {
  title: string;
  category: 'Code' | 'Video' | 'Design';
  description: string;
  tools: string[];
  link?: string;
  image: string;
  gallery?: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[];
  kpi?: string; 
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  details: string[];
  logo?: string;
}

export interface SkillCategory {
  title: string;
  skills: string;
  iconName: string;
}

export interface Content {
  nav: {
    about: string; // Maps to Home
    whatIDo: string; // Maps to Home (scroll down)
    experience: string;
    projects: string;
    education: string;
    contact: string;
  };
  hero: {
    greeting: string;
    name: string;
    titles: string[];
    bio: string;
    cta: string;
  };
  about: {
    title: string;
    description: string;
    skills: SkillCategory[];
  };
  experience: {
    title: string;
    items: ExperienceItem[];
  };
  projects: {
    title: string;
    items: Project[];
  };
  education: {
    title: string;
    items: EducationItem[];
  };
  contact: {
    title: string;
    subtitle: string;
    emailText: string;
    linkedinText: string;
    footerQuote: string;
  };
}