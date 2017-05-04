import React, { Component } from 'react';
import { connect } from 'react-redux';
import Schedule from './Schedule';
import { ListView, DataSource } from 'react-native';
import { formatDataObject } from '../../lib/dataFormatHelpers';
import { fetchSchedule } from '../../redux/modules/scheduleReducer';

class ScheduleContainer extends Component {

    static route = {
        navigationBar: {
            title: 'Schedule',
        }
    }
    componentDidMount() {
        this.props.fetchSchedule();
    }

    render() {
        return (
            <Schedule
                data={this.props.dataSource}
            />
        );
    }
}

const ds = new ListView.DataSource({
    rowHasChanged: (r1, r2) => r1 !== r2,
    sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
});

const mapStateToProps = (state) => {
    return {
        dataSource: ds.cloneWithRowsAndSections(
            state.schedule.sessionData.dataBlob,
            state.schedule.sessionData.sectionIds,
            state.schedule.sessionData.rowIds
        ),
    };
};


const mapDispatchToProps = dispatch => ({
    fetchSchedule: () => { dispatch(fetchSchedule()) },
});

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleContainer);