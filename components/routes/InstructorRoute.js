import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { SyncOutlined } from '@ant-design/icons';
import InstructorNav from '../nav/InstructorNav';

const InstructorRoute = ({ children }) => {
  const [status, setStatus] = useState(false);

  //   router
  const router = useRouter();

  useEffect(() => {
    fetchInstructor();
  }, []);

  const fetchInstructor = async () => {
    try {
      const { data } = await axios.get('/api/current-instructor');
      //   console.log(data);
      if (data.success) setStatus(true);
    } catch (err) {
      console.log(err);
      setStatus(false);

      router.push('/');
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
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-2'>
              <InstructorNav />
            </div>
            <div className='col-md-10'>{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default InstructorRoute;
