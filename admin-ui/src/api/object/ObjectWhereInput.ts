import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PathwayWhereUniqueInput } from "../pathway/PathwayWhereUniqueInput";

export type ObjectWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  objectType?: "Text" | "Image" | "Video";
  pathway?: PathwayWhereUniqueInput;
  title?: StringFilter;
};
