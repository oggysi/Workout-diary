import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Settings, StyleSheet, Text, View } from 'react-native';
import { MessagesContext } from './components/Contexts';
import { Icon, MD3LightTheme, PaperProvider } from 'react-native-paper';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import settings from './components/Settings';
import AddMessageView from './components/AddMessageView';
import MessagesView from './components/MessagesView';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Style, { MyTheme } from './styles/Style';

export default function App() {

  const [messages, setMessages] = useState([]);

  console.log(messages);

  return (
      <MessagesContext.Provider value={{ messages, setMessages }}>
        <PaperProvider theme={MyTheme}>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </PaperProvider>
      </MessagesContext.Provider>
  );
}

const Tab = createMaterialTopTabNavigator();

function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        tabBarPosition='top' 
        style={Style.container} 
        screenOptions={{
          tabBarActiveTintColor: 'black', 
          tabBarInactiveTintColor: MyTheme.colors.primary,
          tabBarStyle: {backgroundColor: MyTheme.colors.surfaceVariant}
        }}
      >
        <Tab.Screen
          name='workouts'
          options={{ title: 'Workouts', tabBarIcon: ({color}) => <Icon color={color} source='arm-flex-outline' size={26} /> }}
          component={MessagesView} 
        />
        <Tab.Screen
          name='addworkout'
          options={{ title: 'Add workout', tabBarIcon: ({color}) => <Icon color={color} source='border-color' size={26} /> }}
          component={AddMessageView}
        />
        <Tab.Screen
          name='user'
          options={{ title: 'Settings', tabBarIcon: ({color}) => <Icon color={color} source='tune' size={26} /> }}
          component={settings}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}