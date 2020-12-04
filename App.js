import * as React from 'react';
import { Text, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import EventsScreen from './screens/EventsScreen';
import ContactsScreen from './screens/ContactsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'ios-home' : 'ios-home';
            } else if (route.name === 'Events') {
              iconName = focused ? 'ios-list-box' : 'ios-list';
            } else if (route.name === 'Contacts') {
              iconName = focused ? 'ios-contact' : 'ios-contact';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'lightgray',
        }}
      >
        <Tab.Screen name='Home' component={HomeScreen} />
        <Tab.Screen name='Events' component={EventsScreen} />
        <Tab.Screen name='Contacts' component={ContactsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

