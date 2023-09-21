import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './screens/Login';
import Home from './screens/Home';
import OTP from './screens/OTP';
import ChatList from './screens/ChatList';
import ChatBox from './screens/ChatBox';
import GroupChat from './screens/GroupChat';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}

        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}

        />

        <Stack.Screen
          name="OTP"
          component={OTP}
          options={{ headerShown: false }}

        />
        <Stack.Screen
          name="ChatList"
          component={ChatList}
          options={{ headerShown: false }}

        />

        <Stack.Screen
          name="GroupChat"
          component={GroupChat}
          options={{ headerShown: false }}

        />
        <Stack.Screen
          name="ChatBox"
          component={ChatBox}
          options={{ headerShown: false }}

        />

      </Stack.Navigator>
    </NavigationContainer>
  )
}

