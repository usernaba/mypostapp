import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const Detail = ({ navigation }) => {
  // Sample item information for Task 15
  const itemInfo = {
    id: "APP-101",
    name: "React Native Project",
    status: "In Progress",
    description: "This is a detailed view of React Native Project Description"
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Item Information</Text>
      
      <View style={styles.infoCard}>
        <Text style={styles.label}>ID: <Text style={styles.value}>{itemInfo.id}</Text></Text>
        <Text style={styles.label}>Name: <Text style={styles.value}>{itemInfo.name}</Text></Text>
        <Text style={styles.label}>Status: <Text style={styles.value}>{itemInfo.status}</Text></Text>
        <Text style={styles.label}>Description:</Text>
        <Text style={styles.value}>{itemInfo.description}</Text>
      </View>

      <Button title="Back to Dashboard" onPress={() => navigation.goBack()} color="#1f1b3d" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  infoCard: { backgroundColor: '#fff', padding: 20, borderRadius: 10, marginBottom: 20, elevation: 3 },
  label: { fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 5 },
  value: { fontSize: 16, fontWeight: 'normal', color: '#666' }
});

export default Detail;