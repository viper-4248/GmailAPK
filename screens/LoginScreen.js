
import React from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';
import * as AuthSession from 'expo-auth-session';
import { useNavigation } from '@react-navigation/native';

const LoginScreen = () => {
  const navigation = useNavigation();

  const handleLogin = async () => {
    const authUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${process.env.GOOGLE_CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&response_type=token&scope=openid email`;

    const result = await AuthSession.startAsync({ authUrl });
    if (result.type === 'success') {
      navigation.navigate('AppPasswordInstructions', { accessToken: result.params.access_token });
    } else {
      Alert.alert('Login Failed', 'Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Login with Gmail" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LoginScreen;
