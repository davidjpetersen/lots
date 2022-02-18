import { PathwayWhereUniqueInput } from "../pathway/PathwayWhereUniqueInput";

export type ObjectUpdateInput = {
  description?: string | null;
  pathway?: PathwayWhereUniqueInput | null;
  title?: string;
};
