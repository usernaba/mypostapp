import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Dashboard Home</Text>
      <Text style={styles.welcome}>Welcome to This App!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        padding: 20, 
        alignItems: 'center', 
        justifyContent: 'center' 
    },
    header: { 
        fontSize: 28, 
        fontWeight: 'bold', 
        marginBottom: 10 
    },
    welcome: { 
        fontSize: 18, 
        color: '#666' 
    }
});

export default Home;