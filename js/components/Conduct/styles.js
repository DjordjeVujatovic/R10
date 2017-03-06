import {
  StyleSheet,
} from 'react-native';
import { typography } from '../../config/styles';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: 'red'
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  spinColor: {
    color: '#9963ea',
    fontSize: typography.baseSize,
    fontFamily: typography.fontMainLight,
    paddingRight: 5,
    fontWeight:'bold'
  },
  title: {
    color: '#9963ea',
    fontSize: typography.baseSize,
    fontFamily: typography.fontMainLight,
    paddingBottom: 12,
    fontWeight: 'bold'
  },
  paragraphs: {
    paddingBottom: 12,
    fontSize: typography.baseSize,
    fontFamily: typography.fontMainLight,

  },
})

export default styles;