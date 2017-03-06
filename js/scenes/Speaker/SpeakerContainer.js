import React, {Component} from 'react';
import { connect } from 'react-redux';
import Speaker from './Speaker'



class SpeakerContainer extends Component {

    static route = {
        navigationBar: {
            title: 'About The Speaker'
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