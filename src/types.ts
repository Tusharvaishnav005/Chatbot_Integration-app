export interface UserData {
  name: string;
  email: string;
  password: string;
}

export interface OrganizationData {
  companyName: string;
  websiteUrl: string;
  description: string;
}

export interface WebPage {
  url: string;
  status: 'scraped' | 'pending';
  content?: string[];
}

export type SetupStep = 'registration' | 'verification' | 'organization' | 'integration' | 'success';