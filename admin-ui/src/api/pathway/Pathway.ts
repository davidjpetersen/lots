import { User } from "../user/User";

export type Pathway = {
  createdAt: Date;
  description: string | null;
  id: string;
  owner?: User;
  title: string;
  updatedAt: Date;
};
