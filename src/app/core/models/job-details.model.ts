import firebase from 'firebase/app';

/**
 * Job details of the experience the user have to store in Firestore.
 */
export interface AppJobDetails {
  id: string;
  name: string;
  isActive: boolean;
  description: string;
  role: string;
  imageUrls: string[];
  gitUrl?: string;
  webUrl?: string;
  startedAt: string;
}
