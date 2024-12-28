import { FormEventHandler, PropsWithChildren } from 'react';

import { ChopLogicComponentProps } from '../common.ts';

export type ChopLogicFormData = { [key: string]: unknown };

export type ChopLogicFormValidationState = [string, boolean][];

export interface ChopLogicFormInputParams {
  name: string;
  value: unknown;
  valid?: boolean;
}

export interface ChopLogicFormContextProps {
  onChangeFormInput?: (params: ChopLogicFormInputParams) => void;
  initialValues?: ChopLogicFormData;
  resetSignal?: number;
}

export interface ChopLogicFormProps extends PropsWithChildren, ChopLogicComponentProps {
  columns?: number;
  initialValues?: ChopLogicFormData;
  hasReset?: boolean;
  onClickSubmit?: (data: ChopLogicFormData) => void;
  onReset?: FormEventHandler<HTMLFormElement>;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}
