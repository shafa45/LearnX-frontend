import { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { SyncOutlined } from '@ant-design/icons';
import Link from 'next/link';
import { Context } from '../context';
import { useRouter } from 'next/router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  // state
  const { state, dispatch } = useContext(Context);
  const { user } = state;

  // router
  const router = useRouter();

  useEffect(() => {
    dispatch({
      type: 'LOGIN',
      payload: JSON.parse(localStorage.getItem('user')),
    });
  }, []);

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({ name, email, password });

    try {
      setLoading(true);
      const response = await axios.post(`/api/login`, {
        email,
        password,
      });

      // console.log(response.data.message);
      setLoading(false);
      dispatch({ type: 'LOGIN', payload: response.data.user });
      // save in local storage
      localStorage.setItem('user', JSON.stringify(response.data.user));
      toast.success(response.data.message + ' Redirecting to dashboard...');

      // redirect
      router.push('/');
    } catch (err) {
      setLoading(false);
      toast.error(err.response.data.message);
    }
  };
  return (
    <>
      <h1 className='jumbotron text-center bg-primary square'>Login</h1>

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

          <input
            type='password'
            className='form-control mb-4 p-4'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder='Enter password'
            required
          />
          <button
            type='submit'
            className='form-control btn btn-primary btn-block  p-2'
            disabled={!email || !password || loading}
          >
            {loading ? <SyncOutlined spin /> : 'Submit'}
          </button>
        </form>

        <p className='text-center p-3 '>
          Don't have an account?
          <Link href='/register'>
            <a> Register</a>
          </Link>
        </p>
      </div>
    </>
  );
}
