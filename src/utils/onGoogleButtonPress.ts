import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { setIsLogined } from "../store/reducers/userSlice";
import auth from '@react-native-firebase/auth';
    
export const onGoogleButtonPress = async (dispatch:Function) => {
        try {
            //await GoogleSignin.signOut();
            await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
            // Get the users ID token
            const { idToken } = await GoogleSignin.signIn();

            // Create a Google credential with the token
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);

            // Sign-in the user with the credential
            return auth().signInWithCredential(googleCredential).then(() => dispatch(setIsLogined(true)));
        } catch (e) {
            console.log(e)
            console.log("Sign in is failed!")
        }
        // Check if your device supports Google Play

    }