import * as React from 'react';
import Video from 'react-native-video';
import { Animated, Text, TouchableOpacity } from 'react-native';
import { View } from 'react-native';
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native';
import { nanoid } from '@reduxjs/toolkit';
import { styles } from '../styles';
import { useVideoSlider } from '../hooks/useVideoSlider';

const HomeScreen = () => {
    const {
        isLoading,
        position,
        screenWidth,
        togglePause,
        videos,
        index,
        panResponder,
        paused,
        videoLoading,
        setIsVideoLoading,
        setPaused
    } = useVideoSlider()


    if (!isLoading) {
        return (
            <Animated.View
                style={[
                    { transform: position.getTranslateTransform(), width: screenWidth, height: screenWidth * (16 / 9) },
                ]}
                {...panResponder.panHandlers}
            >
                <TouchableOpacity onPress={togglePause} >
                    <View
                        key={nanoid()}
                        style={styles.top30}
                    >
                        <Text style={styles.title}>
                            {videos[index].title}
                        </Text>

                        {paused && !videoLoading
                            ? <Image style={styles.videoSize} source={{ uri: videos[index].thumb }} />
                            : <Video
                                paused={videoLoading ? false : paused}
                                resizeMode='cover'
                                onLoad={() => { 
                                    setIsVideoLoading(false); 
                                    setPaused(false) ;
                                }}
                                source={{ uri: videos[index].sources[0] }}
                                style={styles.videoSize}
                                repeat={true}
                            />
                        }

                        {videoLoading &&
                            <ActivityIndicator style={styles.activityIndicatorStyle} size={50} />}
                    </View>
                </TouchableOpacity>
            </Animated.View>
        );
    } else {
        return <ActivityIndicator style={styles.activityIndicatorStyle} size={50} />
    }
};

export default HomeScreen;

