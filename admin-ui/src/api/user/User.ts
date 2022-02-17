import { Pathway } from "../pathway/Pathway";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  pathways?: Array<Pathway>;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
