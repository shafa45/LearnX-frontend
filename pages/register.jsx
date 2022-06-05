import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { SyncOutlined } from '@ant-design/icons';
import Link from 'next/link';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({ name, email, password });

    try {
      setLoading(true);
      const response = await axios.post(`/api/register`, {
        name,
        email,
        password,
      });
      // console.log(response.data.message);
      setLoading(false);
      toast.success(response.data.message + ' Redirecting to login page...');

      setTimeout(() => {
        window.location.href = '/login';
      }, 3000);
    } catch (err) {
      setLoading(false);
      toast.error(err.response.data.message);
    }
  };
  return (
    <>
      <h1 className='jumbotron text-center bg-primary square'>Register</h1>

      <div className='container col-md-4 offset-md-4 pb-5'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            className='form-control mb-4 p-4'
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter name'
            required
          />

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
            disabled={!name || !email || !password || loading}
          >
            {loading ? <SyncOutlined spin /> : 'Submit'}
          </button>
        </form>

        <p className='text-center p-3 '>
          Already have an account?
          <Link href='/login'>
            <a> Login</a>
          </Link>
        </p>
      </div>
    </>
  );
}
