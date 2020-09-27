import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import OpenChat from '../chat/open-chat';
import Info from '../chat/info';
import Tab from './tab-navigator';
import Name from '../settings/name';
import Display from '../settings/display';
import About from '../settings/about';
import Phone from '../settings/phone';
const Stack = createStackNavigator();

export default MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chats"
        component={Tab}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OpenChat"
        component={OpenChat}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Info"
        component={Info}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Name"
        component={Name}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Display"
        component={Display}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Phone"
        component={Phone}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
