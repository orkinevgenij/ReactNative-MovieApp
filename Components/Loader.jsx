import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

export const Loader = () => {
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#000',
            justifyContent: 'center',

        }}>
            <ActivityIndicator size={'large'} color='#ff3900' />
        </View>
    )
}

