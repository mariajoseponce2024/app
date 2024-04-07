
// AppNavigator.jsx
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';

// Importa tus pantallas aquí
import ProfileScreen from '../screens/ProfileScreen';
import HistoryIncidentScreen from '../screens/HistoryIncidentScreen';
import HistoryRegisterScreen from '../screens/HistoryRegisterScreen';
import SettingsScreen from '../screens/SettingsScreen';
import NewRegisterScreen from '../screens/RegisterScreen';
import IncidentScreen from '../screens/IncidentScreen';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();



function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          switch (route.name) {
            case 'NewRegister':
              iconName = focused ? 'plus-circle' : 'plus-circle-outline';
              break;
            case 'Incident':
              iconName = focused ? 'exclamation-circle' : 'exclamation-circle-outline';
              break;
          }
          return <Icon name={iconName} type="font-awesome" size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Nuevo Ingreso" component={NewRegisterScreen} />
      <Tab.Screen name="Nuevo Incidente" component={IncidentScreen} />
    </Tab.Navigator>
  );
}

function ContainerScreen() {
  return (
    <BottomTabs />
  );
}

// El Drawer Navigator tendrá como pantalla principal la ContainerScreen que incluye los Bottom Tabs
function AppNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Registros" component={ContainerScreen} />
      <Drawer.Screen name="Mi Perfil" component={ProfileScreen} />
      <Drawer.Screen name="Historial de Incidentes" component={HistoryIncidentScreen} />
      <Drawer.Screen name="Historial de Registros" component={HistoryRegisterScreen} />
      <Drawer.Screen name="Configuración" component={SettingsScreen} />
      {/* Agrega aquí más pantallas si es necesario */}
    </Drawer.Navigator>
  );
}

export default AppNavigator;


