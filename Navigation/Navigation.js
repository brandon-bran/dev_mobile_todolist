import React, {useState} from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import TodoListsScreen from '../Screen/TodoListsScreen'
import HomeScreen from '../Screen/HomeScreen'
import SignInScreen from '../Screen/SignInScreen'
import SignUpScreen from '../Screen/SignUpScreen'
import SignOutScreen from '../Screen/SignOutScreen'
import Icon from 'react-native-vector-icons/AntDesign';
import {TokenContext} from "../Context/Context";

const Tab = createBottomTabNavigator()

export default function Navigation () {
    return (
        <TokenContext.Consumer>
            {([token, setToken]) => (
                <NavigationContainer>
                    {token == null ? (
                        <Tab.Navigator>
                            <Tab.Screen name='SignIn' component={SignInScreen} />
                            <Tab.Screen name='SignUp' component={SignUpScreen} />
                        </Tab.Navigator>
                    ) : (
                        <Tab.Navigator>
                            <Tab.Screen name='Home' component={HomeScreen} />
                            <Tab.Screen name='TodoLists' component={TodoListsScreen} />
                            <Tab.Screen name='SignOut' component={SignOutScreen} />
                            {/*screenOptions = { ({route}) => ({tabBarIcon: ({color}) => screenOptions(route, color),})}>*/}
                        </Tab.Navigator>
                    )}
                </NavigationContainer>
            )}
        </TokenContext.Consumer>
    )
}


let screenOptions = (route, color) => {
    let iconName;
    
    switch (route.name) {
        case 'Home':
            iconName = 'home';
            break;
        case 'TodoLists':
            iconName = 'folder1';
            break;
        case 'SignOut':
            iconName = 'appstore-o';
            break;
        case 'SignIn':
            iconName = 'appstore-o';
            break
        case 'SignUp':
            iconName = 'appstore-o';
            break
        default:
            break;
    }
    
    return <Icon name={iconName} color={color} size={24} />;
};

