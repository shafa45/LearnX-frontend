import { useState, useContext } from 'react';
import UserRoute from '../../components/routes/userRoute';
import { Context } from '../../context';

const UserIndex = () => {
  const { state } = useContext(Context);
  const { user } = state;
  return (
    <UserRoute>
      <h1 className='jumbotron text-center square'>
        {/* <pre>{JSON.stringify(user, null, 4)}</pre> */}
        {user && 'Welcome ' + user.name}
      </h1>
    </UserRoute>
  );
};

export default UserIndex;
