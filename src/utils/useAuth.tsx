import {createContext} from 'react';

const AuthContext = createContext({
  isLoggedIn: false,
  setIsLoggedIn: (param: boolean) => {},
});

export default AuthContext;
