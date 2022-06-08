import Link from 'next/link';
import { useEffect, useState } from 'react';

const UserNav = () => {
  const [current, setCurrent] = useState('');

  useEffect(() => {
    typeof window !== 'undefined' && setCurrent(window.location.pathname);
  }, [typeof window !== 'undefined' && window.location.pathname]);

  return (
    <div className='nav flex-column nav-pills mt-2'>
      <Link href='/user'>
        <a className={`nav-link ${current === '/user' && 'active'} `}>
          Dashboard
        </a>
      </Link>
    </div>
  );
};

export default UserNav;
