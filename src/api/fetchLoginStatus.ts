import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchLoginStatus = createAsyncThunk(
    'users/fetchLoginStatus',
    async () => {
      GoogleSignin.configure({
        webClientId: '979764047445-tv6futbc484i122l6sg9i5u9hesgifuo.apps.googleusercontent.com',
      });
      const isLogined = await GoogleSignin.isSignedIn();
      
      return isLogined;
    }
  )