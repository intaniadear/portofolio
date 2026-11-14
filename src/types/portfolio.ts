export interface KeyMetric {
  label: string;
  value: string;
  subtext?: string;
}

export interface WorkExperience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  summary: string;
  responsibilities: string[];
  entityScope?: string; // e.g. "Kantor Pusat + 2 Unit Hotel + 3 Proyek Konstruksi"
}

export interface OrganizationalExperience {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  summary: string;
  contributions: string[];
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  period: string;
  gpa?: string;
  description?: string;
  honors?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  year: string;
  issuerOrDetail: string;
  description: string;
  badge?: string;
  isbn?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  year: string;
  category: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  items: {
    name: string;
    description: string;
  }[];
}

export interface OperationalCaseStudy {
  id: string;
  title: string;
  organization: string;
  period: string;
  scope: string;
  challenge: string;
  execution: string;
  results: string[];
  toolsUsed: string[];
}

export interface PersonalInfo {
  name: string;
  fullName: string;
  title: string;
  headline: string;
  location: string;
  phone: string;
  whatsappUrl: string;
  email: string;
  linkedin: string;
  status: string;
  aboutParagraphs: string[];
  keyMetrics: KeyMetric[];
  coreValues: {
    title: string;
    description: string;
  }[];
}
