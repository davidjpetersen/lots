import { Pathway } from "../pathway/Pathway";

export type Object = {
  createdAt: Date;
  description: string | null;
  id: string;
  pathway?: Pathway | null;
  title: string;
  updatedAt: Date;
};
