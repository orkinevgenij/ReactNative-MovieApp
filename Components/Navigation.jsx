import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AntDesign from 'react-native-vector-icons/AntDesign'

import { HomeScreen } from '../screens/HomeScreen';
import { FilmsScreen } from '../screens/FilmsScreen';
import { SerialsScreen } from '../screens/SerialsScreen';
import { VideoScreen } from '../screens/VideoScreen';
import { FavoriteScreen } from '../screens/FavoriteScreen';



const RootStack = createNativeStackNavigator()

export const Navigation = () => {
    return (
        <NavigationContainer>
            <RootStack.Navigator>
                <RootStack.Screen
                    name="HomeScreen"
                    component={HomeScreen}
                    options={{
                        title: 'Movie App',
                        headerTitleStyle: {
                            color: '#ff3900',
                        },
                        headerStyle: {
                            backgroundColor: '#000',
                        },
                        headerLeft: () =>
                            <AntDesign name='videocamera' style={{ color: '#ff3900', fontSize: 40, marginRight: 20 }} />,
                    }}
                />
                <RootStack.Screen
                    name="FilmsScreen"
                    component={FilmsScreen}
                    options={{
                        title: 'Фильмы',
                        headerTintColor: '#ff3900',

                        headerTitleStyle: {
                            fontSize: 22,
                            fontFamily: 'NunitoSans-SemiBold'
                        },
                        headerStyle: {
                            backgroundColor: '#000',
                        },


                    }}
                />
                <RootStack.Screen
                    name="SerialsScreen"
                    component={SerialsScreen}
                    options={{
                        title: 'Сериалы',
                        headerTintColor: '#ff3900',

                        headerTitleStyle: {
                            fontSize: 22,
                            fontFamily: 'NunitoSans-SemiBold'
                        },
                        headerStyle: {
                            backgroundColor: '#000',

                        },

                    }}
                />
                <RootStack.Screen
                    name="FavoriteScreen"
                    component={FavoriteScreen}
                    options={{
                        title: 'Избранные',
                        headerTintColor: '#ff3900',

                        headerTitleStyle: {
                            fontSize: 22,
                            fontFamily: 'NunitoSans-SemiBold'
                        },
                        headerStyle: {
                            backgroundColor: '#000',
                        },

                    }}
                />
                <RootStack.Screen
                    name="VideoScreen"
                    component={VideoScreen}
                    options={{
                        title: 'Видео',
                        headerTintColor: '#fff',

                        headerTitleStyle: {
                            fontSize: 22,
                            fontFamily: 'NunitoSans-SemiBold'
                        },
                        headerStyle: {
                            backgroundColor: '#000',
                        },

                    }}
                />
            </RootStack.Navigator>
        </NavigationContainer >
    )
}

