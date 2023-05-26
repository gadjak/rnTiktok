import * as React from 'react';
import { GoogleSigninButton } from '@react-native-google-signin/google-signin';
import { styles } from '../styles';
import { View } from 'react-native';
import { useAppDispatch } from '../hooks/redux';
import { onGoogleButtonPress } from '../utils/onGoogleButtonPress';

const LoginScreen = () => {

    const dispatch = useAppDispatch()

    return (
    <View style={{...styles.center,...styles.fullScreen}}>
        <GoogleSigninButton
            style={styles.googleSigninButtonSize}
            size={GoogleSigninButton.Size.Wide}
            color={GoogleSigninButton.Color.Dark}
            onPress={()=>onGoogleButtonPress(dispatch)}
        />
    </View>

    )


};

export default LoginScreen;