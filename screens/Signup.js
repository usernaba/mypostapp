import React, { useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Signup = ({ navigation }) => {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validateForm = () => {
    if (!userName || !email || !password) {
      Alert.alert("localhost:8081 says", "Validation Error. Please fill in all fields.");
      return false;
    }
    return true;
  };

  const handleRegister = async () => {
    if (validateForm()) {
      try {
        const userData = JSON.stringify({ userName, email, password });
        // Use local storage to save user details locally
        await AsyncStorage.setItem('userData', userData);
        // Redirect user to login page after successful registration
        navigation.navigate('Login');
      } catch (error) {
        Alert.alert("Error", "Failed to save data.");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Account</Text>
      <TextInput style={styles.input} placeholder="UserName" onChangeText={setUserName} />
      <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" onChangeText={setPassword} secureTextEntry={true} />
      <Button title="Sign Up" onPress={handleRegister} color="#1f1b3d" />
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  input: { borderColor: "#ccc", borderWidth: 1, padding: 10, borderRadius: 5, marginBottom: 18 },
  linkText: { color: "blue", textAlign: "center", marginTop: 15 }
});

export default Signup;