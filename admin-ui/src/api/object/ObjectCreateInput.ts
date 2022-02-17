import { PathwayWhereUniqueInput } from "../pathway/PathwayWhereUniqueInput";

export type ObjectCreateInput = {
  description?: string | null;
  pathway?: PathwayWhereUniqueInput | null;
  title: string;
};
