import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSpeakers } from '../../redux/modules/speakerReducer';
import Session from './Session';

class SessionContainer extends Component {

    static route = {
        navigationBar: {
            title: 'Session'
        }
    }
    componentDidMount() {
        const {sessionData} = this.props;
        this.props.fetchSpeakers(sessionData.data.speaker);
    }

    render() {
        const {speakerData} = this.props
        const {sessionData} = this.props
        return (
          <Session speakerData={speakerData} sessionData={sessionData}/>
        );
    }
}

const mapStateToProps = state => ({
    speakerData: state.speakers
})

const mapDispatchToProps = dispatch => ({
    fetchSpeakers: (speakerId) => dispatch(fetchSpeakers(speakerId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionContainer);