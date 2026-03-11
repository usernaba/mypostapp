import React from 'react';
import { View, Text, StyleSheet, Switch, Button } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Account Settings</Text>
      
      <View style={styles.settingRow}>
        <Text style={styles.label}>Dark Mode</Text>
        <Switch value={false} />
      </View>

      <View style={styles.settingRow}>
        <Text style={styles.label}>Push Notifications</Text>
        <Switch value={true} />
      </View>

      <Button title="Save Changes" onPress={() => navigation.goBack()} color="#1f1b3d" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 30 },
  settingRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#eee' },
  label: { fontSize: 18 }
});

export default SettingsScreen;