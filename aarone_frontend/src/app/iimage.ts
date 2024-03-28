import { IProject } from './iproject'; // Assuming IProject interface is defined in iproject.ts

export interface IImage {
  id: number;
  project: number; 
  image_url: string;
}
