import { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({ name, email, password });
    try {
      const response = await axios.post(`http://localhost:8000/api/register`, {
        name,
        email,
        password,
      });
      // console.log(response.data.message);
      toast.success(response.data.message + ' Redirecting to login page...');
      setTimeout(() => {
        window.location.href = '/login';
      }, 3000);
    } catch (err) {
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
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
