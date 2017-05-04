import {
  StyleSheet,
  Dimensions
} from 'react-native';
import { typography, colors } from '../../config/styles';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: width * .95,
    justifyContent: 'center',
    paddingTop: 55,
  },
  name: {
    textAlign: 'center',
    fontSize: typography.largeSize,
    fontFamily: typography.fontMain,
    paddingBottom: 30
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 60,
    paddingTop: 15,
    paddingBottom: 20,
    alignSelf: 'center'
  },
  container: {
    backgroundColor: 'black',
    height: height,
    width: width,
    paddingTop: 15
  },
  interior: {
    flex: 1,
    width: width * .95,
    height: height,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 5,
  },
  bio: {
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: typography.fontMainLight,
    fontSize: typography.mediumSize,
    lineHeight: typography.largeSize,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20
  },
  button: {
    height: 70,
    width: 260,
    borderRadius: 70,

  },
  buttonText: {
    textAlign: 'center',
    color: colors.white,
    paddingTop: 20,
    fontFamily: typography.fontMain,
    fontSize: typography.mediumSize,
    backgroundColor: 'transparent'
  }
})

export default styles;