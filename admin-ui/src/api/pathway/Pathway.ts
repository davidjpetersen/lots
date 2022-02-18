import { Object } from "../object/Object";
import { User } from "../user/User";

export type Pathway = {
  createdAt: Date;
  description: string | null;
  id: string;
  objects?: Array<Object>;
  owner?: User;
  title: string;
  updatedAt: Date;
};
