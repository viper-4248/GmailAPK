
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AppPasswordInstructions = ({ route }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Enable Two-Factor Authentication</Text>
      <Text style={styles.instructions}>
        1. Go to your Google Account.

        2. Select "Security".

        3. Turn on "2-Step Verification".

        4. Generate an App Password.

      </Text>
      <Button
        title="Continue to Dashboard"
        onPress={() => navigation.navigate('Dashboard', { email: 'your-email@gmail.com', appPassword: 'your-app-password' })}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  instructions: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default AppPasswordInstructions;
