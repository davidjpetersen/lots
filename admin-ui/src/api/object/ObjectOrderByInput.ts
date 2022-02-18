import { SortOrder } from "../../util/SortOrder";

export type ObjectOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  objectType?: SortOrder;
  pathwayId?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
