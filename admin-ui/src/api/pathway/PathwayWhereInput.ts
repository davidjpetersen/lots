import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PathwayWhereInput = {
  description?: StringNullableFilter;
  id?: StringFilter;
  owner?: UserWhereUniqueInput;
  title?: StringFilter;
};
