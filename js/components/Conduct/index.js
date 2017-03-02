import React, { PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Conduct = ({title, description}) => {
    return (
          <View>
            <Text style={styles.title}> + {title}</Text>
            <Text style={styles.paragraphs}>{description}</Text>
          </View>
    );
};

const styles = StyleSheet.create({
    title: {
      color: '#9963ea',
      fontSize: 16,
      paddingBottom: 12,
      fontWeight: 'bold'
    },
    paragraphs: {
      paddingBottom: 12
    },
})

export default Conduct;