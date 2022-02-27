import { View, StyleSheet } from 'react-native';
import React from 'react';
import SvgLogo from '../Components/logo';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import appColors from '../utils/colors';
import { Input, Text } from '@ui-kitten/components';
import { PrimaryButton } from '../Components/PrimaryButton';
import { useAuth } from '../context/authContext';

const LoginScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const auth = useAuth();

  const login = () => {
    auth.signIn(email, password);
  };

  return (
    <View style={styles.container}>
      <SvgLogo width={200} height={200} />
      <Text style={styles.title} category='s1'>Login to your Account</Text>
      <Input
        style={styles.email}
        placeholder='Email'
        value={email}
        size='large'
        onChangeText={nextValue => setEmail(nextValue)}
      />
      <Input
        placeholder='Password'
        value={password}
        size='large'
        onChangeText={nextValue => setPassword(nextValue)}
      />
      <PrimaryButton onPress={login} text="Login" style={styles.loginBtn} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: appColors.darkBlue,
    padding: 20,
  },
  title: {
    color: 'white',
    marginTop: 50,
    fontSize: 20,
    marginBottom: 25,
    textAlign: 'left',
    width: '100%',
  },
  email: {
    marginBottom: 20,
  },
  loginBtn: {
    width: '100%',
    marginTop: 50,
    marginBottom: 50,
  }
});

export default LoginScreen;
