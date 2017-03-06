import React, {Component} from 'react';
import { connect } from 'react-redux';
import Speaker from './Speaker'
import { colors, typography } from '../../config/styles';



class SpeakerContainer extends Component {

    static route = {
        navigationBar: {
            title: 'About The Speaker',
            titleStyle: {
             color: colors.white,
             fontFamily: typography.fontMain,
             fontSize: 22
            },
            backgroundColor: colors.black
        }
    }
    render() {
        return (
          <Speaker speakerData= {this.props.speakerData}/>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        speakerData: state.speakers.speakerData
    }
}
export default connect(mapStateToProps)(SpeakerContainer)