import { IProject } from './iproject'; // Assuming IProject interface is defined in iproject.ts

export interface IImage {
  id: number;
  project: number; // Assuming Project is defined as IProject interface
  image_url: string;
}
