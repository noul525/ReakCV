export interface Experience {
  id: string;
  title: string;
  description: string;
}

export interface Education {
  id: string;
  description: string;
}

export interface CVData {
  personalInfo: {
    fullName: string;
    email: string;
    phone: string;
    location: string;
    avatarUrl?: string;
  };
  profile: string;
  experience: Experience[];
  education: Education[];
  languages: string[];
  skills: string[];
  personalStrengths: string[];
  interests: string[];
}
