import React, { useContext, useEffect } from 'react';
import { createContext } from 'react';
import { AuthData, authServices } from '../services/authServices';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type AuthContextData = {
  authData: AuthData | null;
  loading: boolean;
  signIn(email: string, password: string): Promise<void>;
  signOut(): void;
};

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [authData, setAuthData] = React.useState<AuthData | null>(null);
  const [loading, setLoading] = React.useState(true);

  //every time App loads get authData from local storage

  useEffect(() => {
    getDataFromLocalStorage();
  }, []);

  const getDataFromLocalStorage = async () => {
    try {
      const authenticationData = await AsyncStorage.getItem('@authData')
      if (authenticationData !== null) {
        const authData: AuthData = JSON.parse(authenticationData);
        setAuthData(authData);
      }
    } catch (e) { } finally {
      setLoading(false);
    }
  };

  interface loginProps {
    email: string;
    password: string;
  }

  const signIn = async (props: loginProps) => {
    const { email, password } = props;

    console.log("sign in ==>");

    const _authData = await authServices.signIn(email, password);
    setAuthData(_authData);

    //save authData to local storage
    try {
      const jsonValue = JSON.stringify(_authData)
      await AsyncStorage.setItem('@authData', jsonValue)
    } catch (e) { console.log(e) }
  };

  const signOut = async () => {
    setAuthData(null);

    try {
      await AsyncStorage.removeItem('@authData');
    } catch (e) {
    }
  };

  return (
    <AuthContext.Provider value={{ authData, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextData {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('Auth architecture error');
  }
  return context;
}

export { AuthContext, AuthProvider, useAuth };