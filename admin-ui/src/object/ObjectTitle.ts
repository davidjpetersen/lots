import { Object as TObject } from "../api/object/Object";

export const OBJECT_TITLE_FIELD = "title";

export const ObjectTitle = (record: TObject): string => {
  return record.title || record.id;
};
