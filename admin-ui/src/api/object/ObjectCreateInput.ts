import { PathwayWhereUniqueInput } from "../pathway/PathwayWhereUniqueInput";

export type ObjectCreateInput = {
  description?: string | null;
  objectType: "Text" | "Image" | "Video";
  pathway?: PathwayWhereUniqueInput | null;
  title: string;
};
