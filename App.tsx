import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './src/context/authContext';
import { Router } from './src/routes/authRouter';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';

const App = () => {

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </ApplicationProvider>
  );
};


export default App;
