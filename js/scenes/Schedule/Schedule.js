import React from 'react';
import {
  View,
  Text,
  ListView,
  TouchableHighlight,
} from 'react-native';
import styles from './styles';
import { goToSession } from '../../lib/navigationHelpers';
import { timeHelper } from '../../lib/timeHelper';

const Schedule = ({ data }) => {
  return (
    <ListView
      dataSource={data}
      renderSectionHeader={(sectionData, startTime) =>
        <Text style={styles.timeContainer}>{timeHelper(startTime)}</Text>
      }
      renderRow={data => (
        <TouchableHighlight onPress={() => goToSession('schedule', { data })}>
          <View style = {styles.titleContainer}>
            <Text style = {styles.title}>{data.title}</Text>
            <Text style = {styles.location}>{data.location}</Text>
          </View>
        </TouchableHighlight>
      )}
      renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
    />
  );
};

export default Schedule;