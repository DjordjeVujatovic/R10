import {
  StyleSheet,
} from 'react-native';
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
  },
  location: {
    color: '#999999',
    fontSize: typography.baseSize,
    fontFamily: typography.fontMain
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#e6e6e6',
  },
});

export default styles;