import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RouteNames} from '../route-names';
import GetStartedScreen from '../../screens/get-started/get-started-screen';
import OnBoardingScreen from '../../screens/onboarding/on-boarding-screen';
import {PaywallScreen} from '../../screens/paywall';
import {HomeScreen} from '../../screens/home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image} from 'react-native';
import {getStorage} from '../../configs/mmkvStorage';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const homeIcon = require('../../assets/images/home-icon.png');
const diagnoseIcon = require('../../assets/images/healthcare.png');
const scanIcon = require('../../assets/images/scan_button.png');
const gardenIcon = require('../../assets/images/my-garden-fill.png');
const profileIcon = require('../../assets/images/profile-icon.png');

function HomeStack() {
  return (
    <Tab.Navigator
      initialRouteName={RouteNames.home}
      screenOptions={{
        tabBarActiveTintColor: '#28AF6E',
        tabBarInactiveTintColor: 'rgba(151, 151, 152, 1)',
        tabBarStyle: {
          backgroundColor: '#fff',
          borderTopColor: 'rgba(19, 35, 27, 0.1)',
        },
      }}>
      <Tab.Screen
        name={RouteNames.home}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({}) => {
            return (
              <Image
                resizeMode={'contain'}
                source={homeIcon}
                style={{width: 25, height: 25, resizeMode: 'contain'}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={RouteNames.diagnoseStack}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Diagnose',
          headerShown: false,
          tabBarIcon: ({}) => {
            return (
              <Image
                resizeMode={'contain'}
                source={diagnoseIcon}
                style={{width: 25, height: 25, resizeMode: 'contain'}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={RouteNames.scanStack}
        component={HomeScreen}
        options={{
          tabBarLabel: '',
          headerShown: false,
          tabBarIcon: ({}) => {
            return (
              <Image
                resizeMode={'contain'}
                source={scanIcon}
                style={{
                  width: 74,
                  height: 64,
                  resizeMode: 'contain',
                  marginBottom: 20,
                }}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={RouteNames.myGardenStack}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Profile',
          headerShown: false,
          tabBarIcon: ({}) => {
            return (
              <Image
                resizeMode={'contain'}
                source={gardenIcon}
                style={{width: 25, height: 25, resizeMode: 'contain'}}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name={RouteNames.profileStack}
        component={HomeScreen}
        options={{
          tabBarLabel: 'Profile',
          headerShown: false,
          tabBarIcon: ({}) => {
            return (
              <Image
                resizeMode={'contain'}
                source={profileIcon}
                style={{width: 25, height: 25, resizeMode: 'contain'}}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

function AuthStack() {
  const isAuth = getStorage('token');

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isAuth ? RouteNames.homeStack : RouteNames.getStarted}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={RouteNames.getStarted}
          component={GetStartedScreen}
        />
        <Stack.Screen
          name={RouteNames.onBoarding}
          component={OnBoardingScreen}
        />
        <Stack.Screen name={RouteNames.paywall} component={PaywallScreen} />
        <Stack.Screen name={RouteNames.homeStack} component={HomeStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthStack;
