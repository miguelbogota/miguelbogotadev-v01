/**
 * Job details of the experience the user have to store in Firestore.
 */
export interface AppJobDetails {
  id?: string;
  name: string;
  isCurrent: boolean;
  description: string[];
  year: number;
  role: string;
  imageUrls: string[];
  gitUrl?: string;
  webUrl?: string;
  createdAt: Date;
}
