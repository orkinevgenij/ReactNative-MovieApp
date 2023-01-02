import React from 'react'
import { View } from 'react-native'

import { VideoComponent } from '../Components/VideoComponent';


export const VideoScreen = ({ navigation, route }) => {
    const { keyVideo } = route.params

    return (
        <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#000' }}>
            <VideoComponent keyVideo={keyVideo} />
        </View>
    )
}

