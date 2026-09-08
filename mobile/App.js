import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Import screens
import HomeScreen from './src/screens/HomeScreen';
import ScheduleScreen from './src/screens/ScheduleScreen';
import CommunicationScreen from './src/screens/CommunicationScreen';
import TrackingScreen from './src/screens/TrackingScreen';
import VoiceScreen from './src/screens/VoiceScreen';
import ARScreen from './src/screens/ARScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const API_BASE_URL = 'http://localhost:3000/api';

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Schedule') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Communication') {
            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
          } else if (route.name === 'Tracking') {
            iconName = focused ? 'stats-chart' : 'stats-chart-outline';
          } else if (route.name === 'Voice') {
            iconName = focused ? 'mic' : 'mic-outline';
          } else if (route.name === 'AR') {
            iconName = focused ? 'glasses' : 'glasses-outline';
          }
          
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FFA500',
        tabBarInactiveTintColor: '#999',
        headerShown: true
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
      <Tab.Screen name="Communication" component={CommunicationScreen} />
      <Tab.Screen name="Tracking" component={TrackingScreen} />
      <Tab.Screen name="Voice" component={VoiceScreen} />
      <Tab.Screen name="AR" component={ARScreen} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1a1a1a',
          },
          headerTintColor: '#FFA500',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: '#FFA500',
          },
        }}
      >
        <Stack.Screen 
          name="Main" 
          component={BottomTabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Settings" component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
