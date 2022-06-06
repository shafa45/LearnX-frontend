import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { SyncOutlined } from '@ant-design/icons';

const UserRoute = ({ children }) => {
  const [status, setStatus] = useState(false);

  //   router
  const router = useRouter();

  useEffect(() => {
    fetchUser();
  }, []);

  const fetchUser = async () => {
    try {
      const { data } = await axios.get('/api/current-user');
      //   console.log(data);
      if (data.success) setStatus(true);
    } catch (err) {
      console.log(err);
      setStatus(false);

      router.push('/login');
    }
  };

  return (
    <>
      {!status ? (
        <SyncOutlined
          spin
          className='d-flex justify-content-center display-1 text-primary p-5'
        />
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default UserRoute;
