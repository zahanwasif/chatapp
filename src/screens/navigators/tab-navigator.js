import React from 'react';
import Chat from '../chat';
import Settings from '../settings';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../styles/theme';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Chats') {
            iconName = focused
              ? 'chatbubble-ellipses'
              : 'chatbubble-ellipses-outline';
          } else if (route.name === 'Settings') {
            iconName = 'settings';
            return <Feather name={iconName} size={size} color={color} />;
          }
          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
        // inactiveTintColor: '#8a8a5c',
        inactiveTintColor: colors.text,
      }}>
      <Tab.Screen name="Chats" component={Chat} />
      <Tab.Screen name="Settings" component={Settings} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
