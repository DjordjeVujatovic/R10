import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Dimensions, TouchableOpacity, Linking } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { typography, colors } from '../../config/styles';

const wikiLink = (url) => Linking.openURL(url);

const Speaker = ({speakerData}) => {
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

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  imageContainer: {
    flex: 1,
    width: width * .95,
    justifyContent: 'center',
    paddingTop: 55,
  },
  name: {
    textAlign: 'center',
    fontSize: typography.largeSize,
    fontFamily: typography.fontMain,
    paddingBottom: 30
  },
  image: {
    height: 120,
    width: 120,
    borderRadius: 60,
    paddingTop: 15,
    paddingBottom: 20,
    alignSelf: 'center'
  },
  container: {
    backgroundColor: 'black',
    height: height,
    width: width,
    paddingTop: 15
  },
  interior: {
    flex: 1,
    width: width * .95,
    height: height,
    backgroundColor: 'white',
    alignSelf: 'center',
    borderRadius: 5,
  },
  bio: {
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: typography.fontMainLight,
    fontSize: typography.mediumSize,
    lineHeight: typography.largeSize,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20
  },
  button: {
    height:70,
    width: 260,
    borderRadius: 70,

  },
  buttonText: {
    textAlign: 'center',
    color: colors.white,
    paddingTop: 20,
    fontFamily: typography.fontMain,
    fontSize: typography.mediumSize,
    backgroundColor: 'transparent'
  }
})

export default Speaker;