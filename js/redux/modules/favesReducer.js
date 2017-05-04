import { getFaves } from '../../config/models';
import { formatSessionData } from '../../lib/dataFormatHelpers';

//Action
const GET_FAVES = 'GET_FAVES';
//Action Creator
const postFaves = (data) => ({ type: GET_FAVES, payload: data });
//Redux Thunk
export const fetchFaves = () => {
    return(dispatch) => {
        const endpoint = 'https://r10app-95fea.firebaseio.com/sessions.json';
        fetch(endpoint)
        .then((response) => response.json())
        .then((result) =>{
            const queryFave = getFaves()
            const filterFaves = result.filter(fave => queryFave.indexOf(fave.session_id) >= 0)
            dispatch(postFaves(filterFaves));
        })
        .catch(error => console.log('There was an error fetching the JSON', error));
    }
}

//State

const favesPageInitialState = {
    sessionData: {
        dataBlob: {},
        sectionIds:[],
        rowIds: []
    }
}

export default (state = favesPageInitialState, action ) => {
    switch(action.type) {
        case GET_FAVES:
            const formattedData= formatSessionData(action.payload)
            return { ...state, sessionData: formattedData};
        default:
            return state;
    }
}