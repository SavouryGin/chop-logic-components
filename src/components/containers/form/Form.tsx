import React, { PropsWithChildren } from 'react';

import ChopLogicButton from 'components/inputs/button/Button';
import { CLIcon } from 'components/misc/icon/Icon';

import { useChopLogicFormController } from './controller';
import { StyledForm, StyledFormButtonContainer } from './Form.styled';
import { ChopLogicFormContext, ChopLogicFormData } from './FormContext';

export type ChopLogicFormProps = PropsWithChildren &
  React.HTMLAttributes<HTMLFormElement> & {
    columns?: number;
    initialValues?: ChopLogicFormData;
    hasReset?: boolean;
    onClickSubmit?: (data: ChopLogicFormData) => void;
  };

const ChopLogicForm: React.FC<ChopLogicFormProps> = ({
  children,
  initialValues,
  onReset,
  onSubmit,
  onClickSubmit,
  columns = 1,
  hasReset = true,
  ...rest
}) => {
  const { handleInputChange, handleSubmit, handleReset, resetSignal, valid } = useChopLogicFormController({
    initialValues,
    onReset,
    onSubmit,
    onClickSubmit,
  });

  return (
    <StyledForm
      onSubmit={handleSubmit}
      onReset={handleReset}
      $columns={columns}
      style={rest.style}
      className={rest.className}
      id={rest.id}
      tabIndex={rest.tabIndex}
    >
      <ChopLogicFormContext.Provider value={{ onChangeFormInput: handleInputChange, initialValues, resetSignal }}>
        {children}
        <StyledFormButtonContainer $columns={columns}>
          {hasReset && <ChopLogicButton type='reset' text='Reset' icon={CLIcon.Clear} view='danger' />}
          <ChopLogicButton type='submit' text='Submit' icon={CLIcon.Forward} extended={!hasReset} disabled={!valid} />
        </StyledFormButtonContainer>
      </ChopLogicFormContext.Provider>
    </StyledForm>
  );
};

export default ChopLogicForm;
