import axios from 'axios';
import { useContext, useState } from 'react';
import { Context } from '../../context';
import { Button } from 'antd';
import {
  SettingOutlined,
  UserSwitchOutlined,
  LoadingOutlined,
} from '@ant-design/icons';

import { toast } from 'react-toastify';
import UserRoute from '../../components/routes/userRoutes';

const BecomeInstructor = () => {
  // state
  const [loading, setLoading] = useState(false);
  const { state } = useContext(Context);
  const { user } = state;

  const handleBecomeInstructor = () => {
    setLoading(true);
    axios
      .post('/api/make-instructor')
      .then((res) => {
        setLoading(false);
        // toast.success(res.data.message);
        console.log(res.data);
        window.location.href = res.data.accountLink;
      })
      .catch((err) => {
        console.log(err.response.data.message);
        setLoading(false);
        toast.error(err.response.data.message);
      });
  };

  return (
    <>
      <h1 className='jumbotron text-center square'>Become Instructor</h1>

      <div className='container'>
        <div className='row'>
          <div className='col-md-6 offset-md-3 text-center'>
            <div className='pt-4'>
              <UserSwitchOutlined className='display-1 pb-3' />
              <br />
              <h2>Setup payout to publish courses on LearnX</h2>
              <p className='lead text-warning'>
                LearnX partners with stripe to transfer earning to your bank
                account
              </p>

              <Button
                className='mb-3 w-50 mx-auto d-flex align-items-center justify-content-center'
                type='primary'
                // block
                shape='round'
                icon={loading ? <LoadingOutlined /> : <SettingOutlined />}
                size='large'
                onClick={handleBecomeInstructor}
                disabled={user && user.role && user.role.includes('Instructor')}
              >
                {loading ? 'Processing...' : 'Payout Setup'}
              </Button>
              <div className='lead'>
                You will be redirected to stripe to complete onboarding process.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BecomeInstructor;
