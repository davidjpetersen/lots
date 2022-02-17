import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PathwayUpdateInput = {
  description?: string | null;
  owner?: UserWhereUniqueInput;
  title?: string;
};
