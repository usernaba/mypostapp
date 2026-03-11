import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Dashboard Home</Text>
      <Text style={styles.welcome}>Welcome to This App!</Text>
      
      {/* Navigation Icon/Button for Task 14 */}
      <TouchableOpacity 
        style={styles.navButton} 
        onPress={() => navigation.navigate('Detail')}
      >
        <Text style={styles.buttonText}>View Item Details ➔</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' },
    header: { fontSize: 28, fontWeight: 'bold', marginBottom: 10 },
    welcome: { fontSize: 18, color: '#666', marginBottom: 30 },
    navButton: { backgroundColor: '#1f1b3d', padding: 15, borderRadius: 8, flexDirection: 'row' },
    buttonText: { color: '#fff', fontWeight: 'bold' }
});

export default Home;