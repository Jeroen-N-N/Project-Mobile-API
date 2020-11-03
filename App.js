import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {ScrollView, StyleSheet, Text, View} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

import Style from './src/style/styleSheet';

import LoginScreen from './src/screens/auth/login';
import ProjectIndexScreen from './src/screens/project';
import ProjectShowScreen from './src/screens/project/show';

class app extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isAuthenticated: false,
            token: null
        };

        this.authenticate = this.authenticate.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentWillMount() {
        AsyncStorage.getItem('jwt').then((response) => {
            if(response !== null) {
                this.authenticate(response);
            }
        })
    }
    authenticate(token) {
        this.setState({
            isAuthenticated: true,
            token: token
        });

        AsyncStorage.setItem('jwt', token);
    }

    logout() {
        AsyncStorage.removeItem('jwt');

        this.setState({
            isAuthenticated: false,
            token: null
        });
    }

    render() {
        const Stack = createStackNavigator();

        const AuthScreens = [
            {
                name: 'login.task',
                title: 'Login',
                component: LoginScreen
            }
        ]
        const UserScreens = [
            {
                name: 'project.task',
                url: '/',
                title: 'Project overzicht',
                component: ProjectIndexScreen
            },

            {
                name: 'project.show',
                url: '/show',
                title: 'Project bekijken',
                component: ProjectShowScreen
            }
        ]

        const auth = this.state.isAuthenticated;

        const screens = auth ? UserScreens : AuthScreens;
        const background = auth ? Style.body : Style.bodyLogin;

       // console.log(auth);

        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerStyle: { elevation: 0 }, cardStyle: background }}>

                    {screens.map((screen, key) => (
                        <Stack.Screen
                            name={screen.name}
                            options={{ title: screen.title, headerTintColor: '#fff', headerStyle: Style.screen.top }}
                            component={screen.component}
                            key={key}
                            initialParams={{
                                authenticate: this.authenticate,
                                logout: this.logout,
                                refresh: this.refresh,
                                state: this.state
                            }}
                        />
                    ))}

                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

export default app;