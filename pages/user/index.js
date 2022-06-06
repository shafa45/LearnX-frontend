import { useEffect, useState, useContext } from 'react';
import { Context } from '../../context';
import axios from 'axios';

const UserIndex = () => {
  const [hidden, setHidden] = useState(true);

  const { state } = useContext(Context);
  const { user } = state;

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const { data } = await axios.get('/api/current-user');
      //   console.log(data);
      setHidden(false);
    } catch (err) {
      console.log(err);
      setHidden(false);
    }
  };

  return (
    <>
      {!hidden && (
        <h1 className='jumbotron text-center square'>
          <pre>{JSON.stringify(user)}</pre>
        </h1>
      )}
    </>
  );
};

export default UserIndex;
