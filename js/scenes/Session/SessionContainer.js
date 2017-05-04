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
        this.props.fetchSpeakers(this.props.sessionData.data.speaker)
    }

    render() {
        const speakerData = this.props.speakerData
        const sessionData = this.props.sessionData

        return (
            <Session speakerData={speakerData} sessionData={sessionData} />

        );
    }
}

const mapStateToProps = state => ({
    speakerData: state.speakers.speakerData,
})

const mapDispatchToProps = dispatch => ({
    fetchSpeakers: (speakerId) => dispatch(fetchSpeakers(speakerId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionContainer);