import React, { Component } from 'react';
import { Platform } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView, View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { convertToTime } from './../../lib/dataFormatHelpers';
import { goToSpeaker } from '../../lib/navigationHelpers';
import { typography, colors } from '../../config/styles';
import { updateFave, deleteFave, getFaves } from '../../config/models';
import styles from './styles';

class Session extends Component {
  constructor() {
    super();

    toggleFave = this.toggleFave.bind(this);
    setStateFaved = this.setStateFaved.bind(this);

    this.state = {
      faved: false,
      buttonText: 'Add to Faves',
      heartColor: 'white'
    }
  }

  componentDidMount() {
    this.setStateFaved(this.props.sessionData.data.session_id);
  }

  setStateFaved(id) {
    if (getFaves(id) !== 0) {
      this.setState({ faved: true });
      this.setState({ buttonText: 'Remove from Faves' });
      this.setState({ heartColor: 'red' });
    }
  }

  toggleFave(id) {
    this.setState({ faved: !this.state.faved });
    if (this.state.faved) {
      deleteFave(id)
      this.setState({ buttonText: 'Add to Faves' })
      this.setState({ heartColor: 'white' })
    } else {
      updateFave(id)
      this.setState({ buttonText: 'Remove from Faves' })
      this.setState({ heartColor: 'red' })
    }
  }

  render() {

    return (
      <ScrollView style={styles.container}>
        <View style={styles.locationContainer}>
          <Text style={styles.subHeading}>{this.props.sessionData.data.location}</Text>
          {Platform.OS === 'ios' &&
            <Icon name='ios-heart' size={20} color={this.state.heartColor} />
          }
        </View>
        <Text style={styles.title}>{this.props.sessionData.data.title}</Text>
        <Text style={styles.time}>{convertToTime(this.props.sessionData.data.start_time)}</Text>
        <Text style={styles.description}>{this.props.sessionData.data.description}</Text>
        <Text style={styles.subHeading}>Presented By: </Text>
        <TouchableOpacity onPress={() => goToSpeaker('session')}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={{ uri: this.props.speakerData.image }} />
            <Text style={styles.name}>{this.props.speakerData.name}</Text>
            <View style={styles.borderBottom}></View>
          </View>
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={(e) => { e.preventDefault(); toggleFave(this.props.sessionData.data.session_id) }}>
            <LinearGradient
              start={{ x: 0, y: 1 }} end={{ x: 1, y: 0 }}
              colors={[colors.purple, colors.blue]}
              style={styles.button}
            >
              <Text style={styles.buttonText}>{this.state.buttonText}</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

export default Session;