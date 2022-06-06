import { useState, useContext } from 'react';
import UserRoute from '../../components/routes/userRoutes';
import { Context } from '../../context';

const UserIndex = () => {
  const { state } = useContext(Context);
  const { user } = state;
  return (
    <UserRoute>
      <h1 className='jumbotron text-center square'>
        {/* <pre>{JSON.stringify(user, null, 4)}</pre> */}
        <pre>{user && JSON.stringify(user.name)}</pre>
      </h1>
    </UserRoute>
  );
};

export default UserIndex;
