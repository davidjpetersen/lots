import { PathwayWhereInput } from "./PathwayWhereInput";
import { PathwayOrderByInput } from "./PathwayOrderByInput";

export type PathwayFindManyArgs = {
  where?: PathwayWhereInput;
  orderBy?: PathwayOrderByInput;
  skip?: number;
  take?: number;
};
