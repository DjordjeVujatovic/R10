import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { convertToTime } from './../../lib/dataFormatHelpers'
import { goToSpeaker } from '../../lib/navigationHelpers'

const Session = ({ sessionData, speakerData }) => {
  return (
    <View>
      <Text>{sessionData.data.location}</Text>
      <Text>{sessionData.data.title}</Text>
      <Text>{convertToTime(sessionData.data.start_time)}</Text>
      <Text>{sessionData.data.description}</Text>
      <TouchableOpacity onPress={()=> goToSpeaker('session', { speakerData })}>
        <View>
          <Image style={styles.image} source={{ uri: speakerData.image }} />
          <Text>{speakerData.name}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100
  },
})

export default Session;