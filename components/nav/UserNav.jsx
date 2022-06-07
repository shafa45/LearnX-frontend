import Link from 'next/link';

const UserNav = () => {
  return (
    <div className='nav flex-cloumn nav-pills mt-2'>
      <Link href='/'>
        <a className='nav-link active'>Dashboard</a>
      </Link>
    </div>
  );
};

export default UserNav;
