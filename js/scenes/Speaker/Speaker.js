import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { colors } from '../../config/styles';
import styles from './styles';

const wikiLink = (url) => Linking.openURL(url);

const Speaker = ({ speakerData }) => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.interior}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: speakerData.image }} />
          <Text style={styles.name}>{speakerData.name}</Text>
        </View>
        <Text style={styles.bio}>{speakerData.bio}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => { wikiLink(speakerData.url) }}>
            <LinearGradient
              start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }}
              colors={[colors.purple, colors.blue]}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Read More on Wikipedia</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};


export default Speaker;