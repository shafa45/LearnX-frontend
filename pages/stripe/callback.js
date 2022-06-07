import { useContext, useEffect } from 'react';
import { Context } from '../../context';
import { SyncOutlined } from '@ant-design/icons';
import UserRoute from '../../components/routes/userRoutes';
import axios from 'axios';

const StripeCallback = () => {
  const { state } = useContext(Context);
  const { user } = state;

  useEffect(() => {
    if (user)
      axios.post('/api/get-account-status').then((res) => {
        window.location.href = '/instructor';
      });
  }, [user]);

  return (
    <SyncOutlined
      spin
      className='d-flex justify-content-center display-1 text-primary p-5'
    />
  );
};

export default StripeCallback;