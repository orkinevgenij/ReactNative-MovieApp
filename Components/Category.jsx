import React from 'react'
import { Pressable, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export const Category = () => {
    const navigation = useNavigation()
    return (
        <View style={{
            flexDirection: 'row',
            marginBottom: 15,
            justifyContent: 'space-between'
        }}>
            <Pressable style={({ pressed }) => [
                {
                    opacity: pressed
                        ? 0.7
                        : 1,
                },
                {
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 120,
                    height: 40,
                    borderRadius: 15,
                    backgroundColor: '#1a1a1a',
                    marginTop: 10,
                }
            ]} onPress={() => navigation.navigate('FilmsScreen')}><Text style={{
                fontSize: 18,
                color: '#ff3900'
            }}>Фильмы</Text>
            </Pressable>
            <Pressable style={({ pressed }) => [
                {
                    opacity: pressed
                        ? 0.7
                        : 1,
                },
                {
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 120,
                    height: 40,
                    borderRadius: 15,
                    backgroundColor: '#1a1a1a',
                    marginTop: 10,

                }
            ]}
                onPress={() => navigation.navigate('SerialsScreen')}
            >
                <Text style={{
                    fontSize: 18,
                    marginRight: 10,
                    color: '#ff3900'
                }}>Сериалы</Text>

            </Pressable>
            <Pressable style={({ pressed }) => [
                {
                    opacity: pressed
                        ? 0.7
                        : 1,
                },
                {
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: 120,
                    height: 40,
                    borderRadius: 15,
                    backgroundColor: '#1a1a1a',
                    marginTop: 10,

                }
            ]}
                onPress={() => navigation.navigate('FavoriteScreen')}
            >
                <Text style={{
                    fontSize: 18,
                    marginRight: 10,
                    color: '#ff3900'
                }}>Избранные</Text>

            </Pressable>
        </View>
    )
}
