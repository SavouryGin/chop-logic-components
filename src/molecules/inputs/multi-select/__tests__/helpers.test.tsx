import { ChopLogicFormData, ChopLogicMultiSelectValue, ChopLogicSelectValue } from '@models';
import { describe, expect, it } from 'vitest';

import { getMultiSelectInitialValues } from '../Multiselect.helpers.ts';

describe('getMultiSelectSelectValues', () => {
  const options: ChopLogicSelectValue[] = [
    { id: '1', label: 'Option 1' },
    { id: '2', label: 'Option 2' },
    { id: '3', label: 'Option 3' },
  ];

  it('should return ChopLogicMultiSelectValue[] with selected true for options in initialValues', () => {
    const initialValues: ChopLogicFormData = { mySelect: ['1', '3'] };
    const result = getMultiSelectInitialValues({
      name: 'mySelect',
      options,
      initialValues,
    });
    const expected: ChopLogicMultiSelectValue[] = [
      { id: '1', label: 'Option 1', selected: true },
      { id: '2', label: 'Option 2', selected: false },
      { id: '3', label: 'Option 3', selected: true },
    ];
    expect(result).toEqual(expected);
  });

  it('should return ChopLogicMultiSelectValue[] with selected true for options in defaultValue if initialValues is absent', () => {
    const defaultValue = ['2'];
    const result = getMultiSelectInitialValues({
      name: 'mySelect',
      options,
      defaultValue,
    });
    const expected: ChopLogicMultiSelectValue[] = [
      { id: '1', label: 'Option 1', selected: false },
      { id: '2', label: 'Option 2', selected: true },
      { id: '3', label: 'Option 3', selected: false },
    ];
    expect(result).toEqual(expected);
  });

  it('should return ChopLogicMultiSelectValue[] with all selected false if neither initialValues nor defaultValue matches any options', () => {
    const initialValues: ChopLogicFormData = { mySelect: ['4', '5'] };
    const result = getMultiSelectInitialValues({
      name: 'mySelect',
      options,
      initialValues,
    });
    const expected: ChopLogicMultiSelectValue[] = [
      { id: '1', label: 'Option 1', selected: false },
      { id: '2', label: 'Option 2', selected: false },
      { id: '3', label: 'Option 3', selected: false },
    ];
    expect(result).toEqual(expected);
  });

  it('should prioritize initialValues over defaultValue', () => {
    const initialValues: ChopLogicFormData = { mySelect: ['1'] };
    const defaultValue = ['2'];
    const result = getMultiSelectInitialValues({
      name: 'mySelect',
      options,
      initialValues,
      defaultValue,
    });
    const expected: ChopLogicMultiSelectValue[] = [
      { id: '1', label: 'Option 1', selected: true },
      { id: '2', label: 'Option 2', selected: false },
      { id: '3', label: 'Option 3', selected: false },
    ];
    expect(result).toEqual(expected);
  });

  it('should handle complex initialValues with ChopLogicSelectValue objects', () => {
    const initialValues: ChopLogicFormData = { mySelect: [{ id: '1' }, { id: '3' }] };
    const result = getMultiSelectInitialValues({
      name: 'mySelect',
      options,
      initialValues,
    });
    const expected: ChopLogicMultiSelectValue[] = [
      { id: '1', label: 'Option 1', selected: true },
      { id: '2', label: 'Option 2', selected: false },
      { id: '3', label: 'Option 3', selected: true },
    ];
    expect(result).toEqual(expected);
  });

  it('should return ChopLogicMultiSelectValue[] with all selected false if no initialValues or defaultValue are provided', () => {
    const result = getMultiSelectInitialValues({
      name: 'mySelect',
      options,
    });
    const expected: ChopLogicMultiSelectValue[] = [
      { id: '1', label: 'Option 1', selected: false },
      { id: '2', label: 'Option 2', selected: false },
      { id: '3', label: 'Option 3', selected: false },
    ];
    expect(result).toEqual(expected);
  });
});
