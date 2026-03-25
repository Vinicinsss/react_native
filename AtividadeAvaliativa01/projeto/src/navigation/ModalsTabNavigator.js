import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ModalSlideScreen, ModalFadeScreen, ModalNoneScreen } from '../screens/ModalScreens';
const Tab = createBottomTabNavigator();

export default function ModalsTabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Slide" component={ModalSlideScreen} />
      <Tab.Screen name="Fade" component={ModalFadeScreen} />
      <Tab.Screen name="None" component={ModalNoneScreen} />
    </Tab.Navigator>
  );
}