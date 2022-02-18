import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { PathwayWhereUniqueInput } from "../pathway/PathwayWhereUniqueInput";

export type ObjectWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  pathway?: PathwayWhereUniqueInput;
  title?: StringFilter;
};
