import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const Speaker = ({speakerData}) => {
    return (
     <View>
     <Image style={styles.image} source={{ uri: speakerData.image }} />
     <Text>{speakerData.bio}</Text>
     <Text>{speakerData.name}</Text>
     </View>
    );
};

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100
  },
})

export default Speaker;