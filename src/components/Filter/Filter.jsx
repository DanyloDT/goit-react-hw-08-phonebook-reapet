import React from 'react';

import { selectFilter } from '../../redux/selector';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();

  return (
    <label className="w-[300px] p-2 rounded-xl bg-black/40 border border-gray-700 mb-4 block">
      <input
        className="focus:outline-none"
        type="text"
        value={filter}
        onChange={(e) => dispatch(setFilter(e.target.value))}
        placeholder="Find contacts by name"
      />
    </label>
  );
};
