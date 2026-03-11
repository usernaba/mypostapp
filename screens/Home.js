import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const [userName, setUserName] = useState("");
  const [apiData, setApiData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadLocalData();
    fetchExternalData();
  }, []);

  const loadLocalData = async () => {
    try {
      const data = await AsyncStorage.getItem('userData'); 
      if (data) {
        const user = JSON.parse(data);
        setUserName(user.userName);
      }
    } catch (e) { console.error(e); }
  };

  const fetchExternalData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
      const json = await response.json();
      setApiData(json);
    } catch (e) { console.error(e); }
    finally { setLoading(false); }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerBox}>
        <Text style={styles.welcomeText}>Logged in as: {userName || "Guest"}</Text>
        <Text style={styles.persistenceLabel}>Data verified from Local Storage</Text>
      </View>

      <Text style={styles.title}>External API Feed (Task 20)</Text>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <FlatList
          data={apiData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Text style={styles.cardTitle}>{item.title}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  headerBox: { padding: 15, backgroundColor: '#f0f0f0', borderRadius: 8, marginBottom: 20 },
  welcomeText: { fontSize: 18, fontWeight: 'bold' },
  persistenceLabel: { fontSize: 12, color: 'blue' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  card: { padding: 15, backgroundColor: '#fff', borderBottomWidth: 1, borderBottomColor: '#ccc' },
  cardTitle: { fontSize: 14 }
});

export default Home;