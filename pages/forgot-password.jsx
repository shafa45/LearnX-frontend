import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { SyncOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { Context } from '../context';
import { useRouter } from 'next/router';

const forgotPassword = () => {
  // state
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [code, setCode] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // context
  const { state, dispatch } = useContext(Context);
  const { user } = state;

  // router
  const router = useRouter();

  // redirect if user is logged in
  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, []);

  // display new password text field on success
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email)
    try {
      setLoading(true);
      const { data } = await axios.post('/api/forgot-password', { email });
      // console.log(data){
      setSuccess(true);
      toast.success('Please check your email for a code.');
      setCode(data.code);
    } catch (err) {
      console.log(err.response.data);
      toast.error(err.response.data);
      setLoading(false);
    }
  };

  return (
    <>
      <h1 className='jumbotron text-center bg-primary square'>
        Forgot Password
      </h1>
      <div className='container col-md-4 offset-md-4 pb-5 mt-5'>
        <form onSubmit={handleSubmit}>
          <input
            type='email'
            className='form-control mb-4 p-4'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='Enter email'
            required
          />
          {success ? (
            <>
              <input
                type='text'
                className='form-control mb-4 p-4'
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder='Enter code'
                required
              />
              <input
                type='password'
                className='form-control mb-4 p-4'
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder='Enter new password'
                required
              />
              <input
                type={'password'}
                className='form-control mb-4 p-4'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder='Confirm new password'
                required
              />
              <button
                type='submit'
                className='btn btn-primary btn-block mb-4 p-4'
                disabled={!code || !newPassword || !confirmPassword || loading}
              >
                {loading ? <SyncOutlined spin /> : 'Submit'}
              </button>
            </>
          ) : (
            <button
              type='submit'
              className='form-control btn btn-primary btn-block p-2 '
              disabled={!email || loading}
            >
              {loading ? <SyncOutlined spin /> : 'Submit'}
            </button>
          )}
        </form>
        <p className='text-center p-3'>
          Already registered?{' '}
          <Link href='/login'>
            <a>Login</a>
          </Link>
        </p>
      </div>
    </>
  );
};

export default forgotPassword;
