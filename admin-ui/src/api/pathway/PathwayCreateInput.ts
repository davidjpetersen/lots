import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PathwayCreateInput = {
  description?: string | null;
  owner: UserWhereUniqueInput;
  title: string;
};
