import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Task 22: Menu Icon Implementation */}
      <View style={styles.headerRow}>
        <TouchableOpacity onPress={() => navigation.navigate('SettingsMenu')}>
          <Text style={styles.menuIcon}>☰</Text> 
        </TouchableOpacity>
        <Text style={styles.headerText}>Dashboard</Text>
      </View>
      
      <Text style={styles.welcome}>Welcome to the App!</Text>
      
      <TouchableOpacity 
        style={styles.navButton} 
        onPress={() => navigation.navigate('NotificationScreen')}
      >
        <Text style={styles.buttonText}>Go to Notification Setup ➔</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  headerRow: { flexDirection: 'row', alignItems: 'center', padding: 20, borderBottomWidth: 1, borderBottomColor: '#eee' },
  menuIcon: { fontSize: 30, marginRight: 20 },
  headerText: { fontSize: 24, fontWeight: 'bold' },
  welcome: { padding: 20, fontSize: 18 },
  navButton: { backgroundColor: '#1f1b3d', padding: 15, borderRadius: 8 },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});

export default Home;