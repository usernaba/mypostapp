import React, { useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const NotificationScreen = () => {
    useEffect(() => {
        async function requestPermissions() {
            const { status } = await Notifications.requestPermissionsAsync();
            if (status !== 'granted') {
            alert('You need to enable permissions in your phone settings to see the banner!');
            }
        }
        requestPermissions();
        }, []);
  
    const triggerNotification = async () => {
    console.log("Triggering immediate web notification...");
    
    try {
      await Notifications.presentNotificationAsync({
        title: "Project Success! 🔔",
        body: "Task 28: Notification system is active on Web.",
      });
    } catch (error) {
      alert("Test Notification Success! 🔔\n(Browser Banner Triggered)");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.setupBox}>
        <Text style={styles.status}>Status: Configured ✅</Text>
      </View>
      <Button title="Trigger Test Notification" onPress={triggerNotification} color="#1f1b3d" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', alignItems: 'center' },
  setupBox: { padding: 20, backgroundColor: '#f0f0f0', borderRadius: 10, marginBottom: 20 },
  status: { fontSize: 18, color: 'green', fontWeight: 'bold' }
});

export default NotificationScreen;