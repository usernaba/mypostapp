import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    // VALIDATION [cite: 194, 206]
    if (email.trim() === "" || password.trim() === "") {
      Alert.alert("localhost:8081 says", "Error Incorrect email or password.");
      return;
    }

    try {
      const storedData = await AsyncStorage.getItem('userData'); // [cite: 199]
      const parsedData = storedData ? JSON.parse(storedData) : null;

      if (parsedData && parsedData.email === email && parsedData.password === password) {
        navigation.navigate('Home'); // [cite: 207]
      } else {
        // [cite: 265, 266]
        Alert.alert("localhost:8081 says", "Error Incorrect email or password.");
      }
    } catch (error) {
      Alert.alert("Error", "Authentication failed.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Login</Text>
      <TextInput style={styles.input} placeholder="Enter your email" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Enter your password" value={password} onChangeText={setPassword} secureTextEntry={true} />
      <Button title="Login" onPress={handleLogin} color="#1f1b3d" />
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderColor: "#ccc", borderWidth: 1, padding: 10, borderRadius: 5, marginBottom: 18 },
  linkText: { color: "blue", textAlign: "center", marginTop: 15 }
});

export default Login;