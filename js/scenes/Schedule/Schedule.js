import React from 'react';
import {
  View,
  Text,
  ListView,
  TouchableHighlight
} from 'react-native';
import { goToSession } from '../../lib/navigationHelpers'

function formatTimeStampToHours(timestamp) {
  const date = new Date(timestamp * 1000);
  const hours = date.getHours();
  const minutes = `0${date.getMinutes()}`;
  const dayHalf = hours < 13 ? 'AM' : 'PM';

  return `${hours}:${minutes.substr(-2)} ${dayHalf}`;
}

const Schedule = ({ data }) => {
    return (
      <ListView 
       dataSource={data}
       renderSectionHeader={(sectionData, startTime) =>
        <Text>{formatTimeStampToHours(startTime)}</Text>
       }
       renderRow={data => (
       <TouchableHighlight onPress={() => goToSession('schedule', { data })}>
       <View>
        <Text>{data.title}</Text> 
        <Text>{data.location}</Text> 
       </View>
       </TouchableHighlight>
       )}
    />
  );
};

export default Schedule;