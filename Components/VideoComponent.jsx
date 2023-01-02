
import React, { useCallback, useState } from 'react'
import { View } from 'react-native';
import YoutubePlayer from "react-native-youtube-iframe";


export const VideoComponent = ({ keyVideo }) => {
    const [playing, setPlaying] = useState(false);
    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            Alert.alert("video has finished playing!");
        }
    }, []);

    return (
        <View>
            <YoutubePlayer
                height={300}
                play={playing}
                videoId={keyVideo}
                onChangeState={onStateChange}
            />
        </View>
    )
}

