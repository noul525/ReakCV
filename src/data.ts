import { CVData } from './types';

export const defaultCVData: CVData = {
  personalInfo: {
    fullName: "SAROM THAVIREAK",
    email: "noul26327@gmail.com",
    phone: "+855 061791986",
    location: "Phnom penh, Cambodia",
    avatarUrl: "/profile.jpg",
  },
  profile: "Friendly and responsible person with basic communication skills. Able to help customers, handle basic tasks, and work well with others. Willing to learn and improve.",
  experience: [
    {
      id: "1",
      title: "School / Projects",
      description: "Worked in a team to complete assignments\nManaged time to meet deadlines"
    },
    {
      id: "2",
      title: "Helping family / informal work",
      description: "Helped manage small clothing tailor business"
    }
  ],
  education: [
    {
      id: "1",
      description: "High School Diploma – Life High School (2020- 2022)"
    },
    {
      id: "2",
      description: "Baccalaureate – Life HIgh School (2023-2025)"
    },
    {
      id: "3",
      description: "Digital Economy (Major – Ongoing Studies)"
    }
  ],
  languages: [
    "Khmer - Native",
    "English - Intermediate"
  ],
  skills: [
    "Basic knowledge of Electronics Device",
    "Time management",
    "Basic computer skill"
  ],
  personalStrengths: [
    "Disciplined",
    "Friendly and polite",
    "Willing to learn"
  ],
  interests: [
    "Reading",
    "Fitness & self-improvement"
  ]
};
