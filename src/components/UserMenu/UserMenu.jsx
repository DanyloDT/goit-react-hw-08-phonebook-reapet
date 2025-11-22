import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/Auth/authSelector';
import { logoutThunk } from '../../redux/Auth/authOperations';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUser);

  return (
    <div className="flex justify-between items-center mb-6 font-semibold text-gray-400">
      <h1 className="text-xl text-purple-300 ">
        <span className=" text-gray-400">Hello </span>
        {user?.name}
      </h1>

      <button
        type="button"
        className="underline text-lg cursor-pointer"
        onClick={() => dispatch(logoutThunk())}
      >
        Exit
      </button>
    </div>
  );
};
