import React from 'react';
import { FilterField } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';

export default function Filter() {
  const dispatch = useDispatch();

  const onChange = event => {
    const value = event.target.value;
    dispatch(setFilter(value));
  };
  return (
    <FilterField>
      Find by name
      <input type="text" onChange={onChange} />
    </FilterField>
  );
}
