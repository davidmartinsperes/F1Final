import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import Dashboard from '../screens/Dashboard';
import Profile from '../screens/Profile';
import AboutScreen from '../screens/AboutScreen';
import FavoriteDriverScreen from '../screens/FavoriteDriverScreen';
import PilotsScreen from '../screens/PilotsScreen';
import PilotDetailsScreen from '../screens/PilotDetailsScreen';
import TeamsScreen from '../screens/TeamsScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerRoutes() {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      screenOptions={{

        drawerActiveTintColor: '#d00', 
        drawerInactiveTintColor: '#333', 
      }}
    >
      <Drawer.Screen name="Dashboard" component={Dashboard} options={{ title: 'Próximas Corridas' }} />
      <Drawer.Screen name="Pilots" component={PilotsScreen} options={{ title: 'Pilotos' }} />
      <Drawer.Screen name="Teams" component={TeamsScreen} options={{ title: 'Equipes' }} />
      <Drawer.Screen name="Profile" component={Profile} options={{ title: 'Perfil' }} />
    </Drawer.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={DrawerRoutes} options={{ headerShown: false }} />
      <Stack.Screen name="About" component={AboutScreen} options={{ title: 'Sobre a Fórmula 1' }} />
      <Stack.Screen name="FavoriteDriver" component={FavoriteDriverScreen} options={{ title: 'Piloto Favorito' }} />
      <Stack.Screen name="PilotDetails" component={PilotDetailsScreen} options={{ title: 'Detalhes do Piloto' }} />
    </Stack.Navigator>
  );
}