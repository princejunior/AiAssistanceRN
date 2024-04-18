import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
// Navigation Bar
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AppTabs from './navigation/AppTabs';

export default function App() {
  return (
    <AppTabs/>
  );
}