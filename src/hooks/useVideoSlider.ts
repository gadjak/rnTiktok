import { useState, useRef, useEffect } from "react";
import { Animated, PanResponder, Platform, GestureResponderEvent, PanResponderGestureState, Dimensions } from "react-native";
import { useAppSelector, useAppDispatch } from "./redux";
import { fetchVideos } from "../api/fetchVideos";

export const useVideoSlider = ()=>{
    const { videos, isLoading } = useAppSelector(({ videoSlice }) => videoSlice);
    const [videoLoading, setIsVideoLoading] = useState(true);
    const [paused, setPaused] = useState(false);
    const [index, setIndex] = useState(0)

    const indexRef = useRef(index)
    indexRef.current = index;;

    const dispatch = useAppDispatch()

    useEffect(() => {
        if (videos.length === 0) {
            dispatch(fetchVideos())
        }
    }, [])

    const position = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
            onMoveShouldSetPanResponder: Platform.select({
                default: () => true,
                android: (e: GestureResponderEvent, state: PanResponderGestureState) =>
                    Math.abs(state.dx) > 10 || Math.abs(state.dy) > 10
            }),
            onPanResponderMove: (_, gesture) => {
                position.setValue({ x: 0, y: gesture.dy });
            },
            onPanResponderRelease: (_, gesture) => {
                if (gesture.dy < -170) {
                    if (indexRef.current + 1 !== videos.length) {
                        setPaused(true)
                        setIndex(index => index + 1)
                    }
                } else if (gesture.dy > 170) {
                    if (indexRef.current > 0) {
                        setPaused(true)
                        setIndex(index => index - 1)
                    }

                }
                Animated.spring(position, {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: true,
                }).start();
            },
        })
    ).current;

    const screenWidth = Dimensions.get('window').width;

    const togglePause = () => {
        if (!videoLoading) {
            setPaused(prev => !prev);
        }
    };

    useEffect(() => {
        setIsVideoLoading(true)
    }, [index])

    return {
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
    }

}