import React from 'react';
import {
  ListView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Platform
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { timeHelper } from '../../lib/timeHelper';
import { goToSession } from '../../lib/navigationHelpers';
import styles from './styles'

const Faves = ({data}) => {
  return (
    <ListView
      dataSource={data}
      renderSectionHeader={(sectionData, startTime) =>
        <Text style={styles.timeContainer}>{timeHelper(startTime)}</Text>
      }

      renderRow={data =>
        <View>
          <TouchableOpacity onPress={() => { goToSession('faves', { data }); }}>
            <View>
              <Text style={styles.title}>{data.title}</Text>
              <View style={styles.locationContainer}>
                <Text style={styles.location}>{data.location}</Text>
                {Platform.OS === 'ios' &&
                  <Icon name='ios-heart' size={16} style={styles.heart}/>
                }
                {Platform.Version === 23 &&
                  <Icon name='md-heart' size={16} style={styles.heart}/>
                }
              </View>
            </View>
          </TouchableOpacity>
        </View>
      }
      renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator}/>} 
    />
  )
}

export default Faves;