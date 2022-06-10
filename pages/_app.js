import TopNav from '../components/TopNav';
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../public/css/styles.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from '../context';

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <ToastContainer position='top-center' autoClose={2000} />
      <TopNav />
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
