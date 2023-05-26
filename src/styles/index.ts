import { Dimensions, StyleSheet } from 'react-native';

const { width: fullWidth, height: fullHeight } = Dimensions.get('window');
export const styles = StyleSheet.create({
  center: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  googleSigninButtonSize: {
    width: 192,
    height: 60
  },
  fullScreen: {
    width: fullWidth,
    height: fullHeight,
  },
  activityIndicatorStyle: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  top30:{
    marginTop: '30%'
  },
  top80:{
    marginTop: '80%'
  },
  videoSize:{
    width: '100%', 
    height: 350 
  },
  title:{
    fontSize: 25,
    margin: 5,
    textAlign: 'center'
}
});