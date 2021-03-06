import { useState, useEffect, useContext } from 'react';
import { Menu } from 'antd';
import Link from 'next/link';
import {
  AppstoreOutlined,
  CoffeeOutlined,
  DashboardOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserAddOutlined,
  CarryOutOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import { Context } from '../context';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const { Item, SubMenu, ItemGroup } = Menu;

export default function TopNav() {
  const [current, setCurrent] = useState('');

  const { state, dispatch } = useContext(Context);
  const { user } = state;

  const router = useRouter();

  useEffect(() => {
    typeof window !== 'undefined' && setCurrent(window.location.pathname);
  }, [typeof window !== 'undefined' && window.location.pathname]);

  const handleLogout = async () => {
    if (!user) return;
    try {
      dispatch({ type: 'LOGOUT' });
      localStorage.removeItem('user');
      const { data } = await axios.get('/api/logout');
      toast.success(data.message);
      router.push('/login');
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <Menu mode='horizontal' selectedKeys={[current]} className='mb-2'>
      <Item
        key='/'
        onClick={(e) => setCurrent(e.key)}
        icon={<AppstoreOutlined />}
      >
        <Link href='/'>
          <a>App</a>
        </Link>
      </Item>

      {user && user.role && user.role.includes('Instructor') ? (
        <Item
          key='/instructor/course/create'
          onClick={(e) => setCurrent(e.key)}
          icon={<CarryOutOutlined />}
        >
          <Link href='/instructor/course/create'>
            <a>Create Course</a>
          </Link>
        </Item>
      ) : (
        <Item
          key='/user/become-instructor'
          onClick={(e) => setCurrent(e.key)}
          icon={<TeamOutlined />}
        >
          <Link href='/user/become-instructor'>
            <a>Become Instructor</a>
          </Link>
        </Item>
      )}

      {!user && (
        <>
          <Item
            key='/login'
            onClick={(e) => setCurrent(e.key)}
            icon={<LoginOutlined />}
          >
            <Link href='/login'>
              <a>Login</a>
            </Link>
          </Item>

          <Item
            key='/register'
            onClick={(e) => setCurrent(e.key)}
            icon={<UserAddOutlined />}
          >
            <Link href='/register'>
              <a>Register</a>
            </Link>
          </Item>
        </>
      )}

      {user && (
        <SubMenu
          icon={<CoffeeOutlined />}
          title={user.name}
          style={{
            marginLeft: 'auto',
          }}
          key='/logoutSub'
        >
          <Item key='/user' icon={<DashboardOutlined />}>
            <Link href='/user'>
              <a>Dashboard</a>
            </Link>
          </Item>
          <Item
            // style={{ marginLeft: 'auto' }}
            key='/logout'
            onClick={handleLogout}
            icon={<LogoutOutlined />}
          >
            Logout
          </Item>
        </SubMenu>
      )}

      {user && user.role && user.role.includes('Instructor') && (
        <Item
          key='/instructor'
          onClick={(e) => setCurrent(e.key)}
          icon={<TeamOutlined />}
        >
          <Link href='/instructor'>
            <a>Instructor</a>
          </Link>
        </Item>
      )}
    </Menu>
  );
}
