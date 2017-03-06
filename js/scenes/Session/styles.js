import {
  StyleSheet,
  Dimensions
} from 'react-native';
import { typography, colors } from '../../config/styles';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  locationContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight:10
  },
  subHeading: {
    fontFamily: typography.fontMain,
    fontSize: typography.baseSize,
    color: colors.mediumGrey,
    paddingBottom: 10
  },
  title: {
    fontSize: typography.baseSize * 1.8,
    fontFamily: typography.fontMain,
    paddingBottom: 10
  },
  time: {
    fontSize: typography.baseSize,
    fontFamily: typography.fontMain,
    color: colors.red,
    paddingBottom: 10
  },
  description: {
    fontFamily: typography.fontMainLight,
    fontSize: typography.mediumSize,
    lineHeight: 30,
    paddingBottom: 20,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 80,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
    paddingBottom: 20
  },
  image: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
    width: 60,
    borderRadius: 30,
  },
  name: {
    alignSelf: 'center',
    fontFamily: typography.fontMain,
    fontSize: typography.mediumSize,
    fontWeight: 'bold',
    paddingLeft: 10
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20
  },
  button: {
    flex: 1,
    height: 50,
    width: 210,
    marginTop: 5,
    alignItems: 'center',
    borderRadius: 75,
    overflow: 'hidden',
  },
  buttonText: {
    justifyContent: 'center',
    color: 'white',
    paddingTop: 11,
    fontFamily: typography.fontMain,
    fontSize: 18,
    backgroundColor: 'transparent'
  }
})

export default styles;