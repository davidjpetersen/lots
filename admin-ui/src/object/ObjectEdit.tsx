import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  SelectInput,
  ReferenceInput,
} from "react-admin";
import { PathwayTitle } from "../pathway/PathwayTitle";

export const ObjectEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
