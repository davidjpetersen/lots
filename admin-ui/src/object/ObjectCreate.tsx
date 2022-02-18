import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { PathwayTitle } from "../pathway/PathwayTitle";

export const ObjectCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <SelectInput
          source="objectType"
          label="ObjectType"
          choices={[
            { label: "Text", value: "Text" },
            { label: "Image", value: "Image" },
            { label: "Video", value: "Video" },
          ]}
          optionText="label"
          optionValue="value"
        />
        <ReferenceInput
          source="pathway.id"
          reference="Pathway"
          label="Pathways"
        >
          <SelectInput optionText={PathwayTitle} />
        </ReferenceInput>
        <TextInput label="Title" source="title" />
      </SimpleForm>
    </Create>
  );
};
