
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { fetchEmailCount } from '../utils/imapHelper';

const DashboardScreen = ({ route }) => {
  const { email, appPassword } = route.params;
  const [emailCount, setEmailCount] = useState(null);

  const fetchCount = async () => {
    try {
      const count = await fetchEmailCount(email, appPassword);
      setEmailCount(count);
    } catch (error) {
      Alert.alert('Error', 'Failed to fetch email count.');
    }
  };

  useEffect(() => {
    fetchCount();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Dashboard</Text>
      <Text style={styles.emailCount}>
        {emailCount !== null ? `Total Emails: ${emailCount}` : 'Fetching...'}
      </Text>
      <Button title="Refresh" onPress={fetchCount} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  emailCount: {
    fontSize: 18,
    marginBottom: 20,
  },
});

export default DashboardScreen;
