import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { setLoading, getCodeOfConduct, fetchCodeOfConduct } from '../../redux/modules/aboutReducer';
import { Text, View, Image, StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';
import Conduct from '../../components/Conduct';
import Realm from '../../config/models';

class AboutContainer extends Component {

  static route = {
     navigationBar: {
        title: 'About'
      }
  }

componentDidMount() {
  this.props.fetchCodeOfConduct();
 }

 render() {
   const aboutData = this.props.aboutData;
   return (
     <ScrollView>
      <View style={styles.container}>
        <View style={styles.logoContainer}>
           <Image source={require('../../assets/images/r10_logo.png')} />
        </View>
         <View style={styles.topTextContainer}>
           <Text>R10 is a conference that focuses on just about any topic related to dev.</Text>
           <Text style={styles.headers}>Date & Venue</Text>
           <Text>The R10 conference will take place on Tuesday, June 27, 2017 in Vancouver,BC. </Text>
         </View>
           <Text style={styles.headers}>Code of Conduct</Text>
             {aboutData.map((data, i) => (
               <Conduct 
                 key={i}
                 title={data.title}
                 description={data.description}
               />
             ))}
     </View>
  </ScrollView>
     );
    }
  }

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
   container: {
     padding: 12,
     flex:1,
     width: width
   }, 
   logoContainer: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      height: 100,
      paddingTop: 30,
      borderBottomColor: '#e6e6e6',
      borderBottomWidth: 2,
    },
    topTextContainer: {
      paddingTop: 10,
    },
    headers: {
      fontSize: 20,
      paddingTop: 12,
      paddingBottom: 12,
      fontWeight: 'bold'
    },
});

const mapStateToProps = state =>  ({
    aboutData: state.about.conductData,
    isLoading: state.about.isLoading,
})

const mapDispatchToProps = dispatch => ({
    fetchCodeOfConduct: () => dispatch(fetchCodeOfConduct()),
});

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);