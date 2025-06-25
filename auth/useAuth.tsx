import {useContext} from 'react';
import AuthContext from './AuthContext';

const useAuth = () => {
   
  const {user, setUser}:any = useContext(AuthContext);

  return {user, setUser};
};

export default useAuth;