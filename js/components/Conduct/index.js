import React, { PropTypes, Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, LayoutAnimation, Animated } from 'react-native';
import { typography } from '../../config/styles';
import styles from './styles';


class Conduct extends Component {
  constructor() {
    super();
    this.state = {
      expand: false,
      spinValue: new Animated.Value(0)
    }
  }
  onPress = () => {
    const config = LayoutAnimation.create(50, 'linear', 'opacity');
    LayoutAnimation.configureNext(config);
    this.setState({ expand: !this.state.expand });

    this.state.spinValue.setValue(0)
    Animated.spring(
      this.state.spinValue,
      {toValue: 1,
       duration: 1000 }
    ).start();
  }

  render() {
    const {title, description} = this.props;
    let spin = this.state.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    const animatedStyles = {
        transform: [{
          rotate: spin,
        }]
    }
    return (
      <View>
        <TouchableOpacity onPress={this.onPress}>
          <View style={styles.titleContainer}>
            <Animated.Text style = {[animatedStyles, styles.spinColor]}>{this.state.expand ? '-' : '+'}</Animated.Text>
            <Text style={styles.title}>{title}</Text>
          </View>
        </TouchableOpacity>
        <View>
          {this.state.expand &&
            <Text style={styles.paragraphs}>{description}</Text>
          }
        </View>
      </View>
    )
  }
}


export default Conduct;