import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, DataSource } from 'react-native';
import { fetchFaves } from '../../redux/modules/faveReducer';
import Faves from './Faves';


class FavesContainer extends Component {

    static route = {
        navigationBar: {
            title: 'Faves',
        }
    }
    componentDidMount() {
        this.props.fetchFaves();
    }
    render() {
        return (
            <Faves data={this.props.favesData} />
        );
    }
}
const dataSource = new ListView.DataSource({
  rowHasChanged: (r1, r2) => r1 !== r2,
  sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
})

const mapStateToProps = (state) => ({
    favesData: dataSource.cloneWithRowsAndSections(
        state.faves.sessionData.dataBlob,
        state.faves.sessionData.sectionIds,
        state.faves.sessionData.rowIds
    ),
});
const mapDispatchToProps = dispatch => ({
    fetchFaves: () => { dispatch(fetchFaves()) },
});
export default connect(mapStateToProps, mapDispatchToProps)(FavesContainer);