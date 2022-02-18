import { ObjectWhereInput } from "./ObjectWhereInput";
import { ObjectOrderByInput } from "./ObjectOrderByInput";

export type ObjectFindManyArgs = {
  where?: ObjectWhereInput;
  orderBy?: ObjectOrderByInput;
  skip?: number;
  take?: number;
};
