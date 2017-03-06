import { StyleSheet } from 'react-native';
import { typography } from '../../config/styles';


const styles = StyleSheet.create({
  timeContainer: {
    backgroundColor: '#e6e6e6',
    padding: 10,
    fontFamily: typography.fontMain
  },
  titleContainer: {
    padding: 10,
  },
  title: {
    fontFamily: typography.fontMain,
    fontSize: typography.baseSize,
    paddingLeft: 10,
    paddingBottom: 5,
    paddingTop: 5
  },
  locationContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent:'space-between',
    paddingLeft: 10

  },
  location: {
    color: '#999999',
    fontSize: typography.baseSize,
    fontFamily: typography.fontMain,
    paddingBottom: 5
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#e6e6e6',
  },
  heart: {
    color:'red',
    paddingRight: 10
  }
});

export default styles;