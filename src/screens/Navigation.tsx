import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import { useEffect, useState } from 'react';
import { ActivityIndicator } from 'react-native';
import { useAppDispatch, useAppSelector } from '../hooks/redux';
import { styles } from '../styles';
import { fetchLoginStatus } from '../api/fetchLoginStatus';
import NetInfo from '@react-native-community/netinfo';
import { Text } from 'react-native';

const Stack = createNativeStackNavigator();

const Navigation = () => {
    const [isConnected, setIsConnected] = useState(true);

    const {isLoading,isLogined} = useAppSelector(({ userSlice }) => userSlice);

    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(fetchLoginStatus())
    },[])


  
    useEffect(() => {
      const unsubscribe = NetInfo.addEventListener((state) => {
        setIsConnected(state.isConnected as boolean);
      });
  
      return () => {
        unsubscribe();
      };
    }, []);



    if (isLoading) {
        return <ActivityIndicator style={styles.activityIndicatorStyle} size={50} />
    }

    if(!isConnected){
        return <Text style={{...styles.title,...styles.top80}}>Network is unavailable!</Text>
    }

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isLogined
                    ? <Stack.Screen
                        name="Videos"
                        component={HomeScreen}
                        options={{ title: 'Videos' }}
                    />
                    : <Stack.Screen
                        name="Login"
                        component={LoginScreen}
                        options={{ title: 'Login' }}
                    />
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;