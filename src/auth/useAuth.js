import {useContext} from 'react'
import { AuthContext } from './authProvider';

export default function useAuth() {
    const contextValue=useContext(AuthContext)
  return contextValue;
}
