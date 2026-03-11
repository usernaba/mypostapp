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
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  headerRow: { flexDirection: 'row', alignItems: 'center', padding: 20, borderBottomWidth: 1, borderBottomColor: '#eee' },
  menuIcon: { fontSize: 30, marginRight: 20 },
  headerText: { fontSize: 24, fontWeight: 'bold' },
  welcome: { padding: 20, fontSize: 18 }
});

export default Home;