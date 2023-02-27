import * as React from 'react';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {NavigationContainer} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Button, View} from 'react-native';

import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DeatilsScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';
import Main from './screens/Main';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function HomeStack() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SideNavigation" component={SideNavigation} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}



const SideNavigation = () => { 
  return (
    
      <Drawer.Navigator >
      <Drawer.Screen name="Main" component={App} />
        <Drawer.Screen name="Main1" component={Main} />
        <Drawer.Screen name="DetailsScreen1" component={DetailsScreen} />
        <Drawer.Screen name="SettingsScreen1" component={SettingsScreen} />
        <Drawer.Screen name="ProfileScreen1" component={ProfileScreen} />
      </Drawer.Navigator>
    
  );
}

function App() {
  return (
    
    <Tab.Navigator
      // initialRouteName="Feed"
      // screenOptions={({route}) => ({
      //   headerStyle: {backgroundColor: '#42f44b'},
      //   headerTintColor: '#fff',
      //   headerTitleStyle: {fontWeight: 'bold'},
      //   tabBarActiveTintColor: 'tomato',
      //   tabBarInactiveTintColor: 'gray',
      //   tabBarIcon: ({focused, color, size}) => {
      //     let iconName;
      //     if (route.name === 'HomeStack') {
      //       iconName = focused ? 'home-circle' : 'home-circle-outline';
      //     } else if (route.name === 'SettingsStack') {
      //       iconName = focused
      //         ? 'account-settings'
      //         : 'account-settings-outline';
      //     }
      //     return (
      //       <MaterialCommunityIcons name={iconName} size={size} color={color} />
      //     );
      //   },
      // })}
      >
      <Tab.Screen name="Main1" component={Main} />
      <Tab.Screen name="Details2" component={DetailsScreen} />
      <Tab.Screen name="Settings2" component={SettingsScreen} />
      <Tab.Screen name="Profile2" component={ProfileScreen} />
    </Tab.Navigator>
  );
}
export default HomeStack;
