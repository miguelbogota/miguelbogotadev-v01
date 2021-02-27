/**
 * Content that will be shown in the main page.
 */
export interface AppContent {
  name: string;
  headline: string;
  about: string[];
  works: string[];
  projectCount: number;
  imageUrls: {
    url: string;
    label: string;
  }[];
  skills: {
    category: string;
    skillNames: string[];
  }[];
  email: string;
  tags: string[];
  isOpenForJobs: boolean;
}
