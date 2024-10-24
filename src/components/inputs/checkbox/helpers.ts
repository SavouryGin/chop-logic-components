import { ChopLogicFormData } from 'components/containers/form/types';

export function getCheckboxInitialValue({
  defaultChecked,
  initialValues,
  name,
}: {
  defaultChecked?: boolean;
  initialValues?: ChopLogicFormData;
  name: string;
}): boolean {
  if (initialValues && initialValues?.[name] !== undefined) {
    return !!initialValues?.[name];
  }

  return !!defaultChecked;
}
