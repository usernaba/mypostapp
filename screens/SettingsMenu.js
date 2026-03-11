import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native';

const SettingsMenu = ({ navigation }) => {
  const menuItems = [
    { id: '1', title: 'Profile', route: 'SettingsScreen' },
    { id: '2', title: 'Notifications', route: 'Home' },
    { id: '3', title: 'Privacy & Security', route: 'Home' },
    { id: '4', title: 'Help & Support', route: 'Home' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.menuItem} 
            onPress={() => navigation.navigate(item.route)}
          >
            <Text style={styles.itemText}>{item.title}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f9f9f9' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20 },
  menuItem: { padding: 15, backgroundColor: '#fff', marginBottom: 10, borderRadius: 8, elevation: 2 },
  itemText: { fontSize: 18, color: '#333' }
});

export default SettingsMenu;