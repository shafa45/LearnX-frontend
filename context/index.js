import { useReducer, createContext, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

// initial state
const initialState = {
  user: null,
};

// create context
const Context = createContext();

// root reducer
const rootReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { ...state, user: action.payload };
    case 'LOGOUT':
      return { ...state, user: null };
    default:
      return state;
  }
};

// create context provider
const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  const router = useRouter();

  useEffect(() => {
    dispatch({
      type: 'LOGIN',
      payload: JSON.parse(localStorage.getItem('user')),
    });
  }, []);

  axios.interceptors.response.use(
    (response) => response, //any status code that is within the range of 2xx cause this function to trigger
    (error) => {
      // anystatus code that falls outside the range of 2xx cause this function to be called
      const res = error.response;
      if (
        res.response.status === 401 &&
        res.config &&
        !res.config.__isRetryRequest
      ) {
        return new Promise((resolve, reject) => {
          axios
            .get('/api/logout')
            .then(() => {
              localStorage.removeItem('user');
              dispatch({ type: 'LOGOUT' });

              router.push('/login');
            })
            .catch((error) => {
              localStorage.removeItem('user');
              dispatch({ type: 'LOGOUT' });
              reject(error);
            });
        });
      }
      return Promise.reject(res);
    }
  );

  // amy status code that lie whin 200 and 300 cause this function to trigger
  // and return the response

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};

export { Context, Provider };
