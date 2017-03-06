import {
  StyleSheet,
  Dimensions
} from 'react-native';
import { typography } from '../../config/styles';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
   container: {
     padding: 12,
     flex:1,
     width: width
   }, 
   logoContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      height: 100,
      paddingTop: 30,
      borderBottomColor: '#e6e6e6',
      borderBottomWidth: 2,
    },
    topTextContainer: {
      paddingTop: 10,
    },
    headers: {
      fontSize: typography.baseSize*1.5,
      paddingTop: 12,
      paddingBottom: 12,
      fontFamily: typography.fontMain
    },
    blurpText: {
     fontFamily: typography.fontMainLight,
     fontSize: typography.baseSize
    }
});

export default styles;
