/**
 * Job details of the experience the user have to store in Firestore.
 */
export interface AppJobDetails {
  id?: string;
  name: string;
  headline: string;
  position: string;
  description: string;
  employmentType: string;
  mediaUrls: string[];
  location: string;
  company?: {
    name: string;
    webUrl: string;
  };
  gitUrl?: string;
  webUrl?: string;
  startsAt: Date;
  endsAt?: Date;
  createdAt: Date;
  tags: string[];
  isPublic: boolean;
  isCurrent: boolean;
}
