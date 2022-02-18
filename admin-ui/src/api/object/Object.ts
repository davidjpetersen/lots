import { Pathway } from "../pathway/Pathway";

export type Object = {
  createdAt: Date;
  description: string | null;
  id: string;
  objectType?: "Text" | "Image" | "Video";
  pathway?: Pathway | null;
  title: string;
  updatedAt: Date;
};
