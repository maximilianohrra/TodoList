import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todos in Denmark!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    height: 85,
    paddingTop: 55,
    backgroundColor: 'tan',
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  }
});