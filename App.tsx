/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Router from "./src/router/Router";
import { NavigationContainer } from '@react-navigation/native';





export default function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

