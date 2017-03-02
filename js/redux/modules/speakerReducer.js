
import { formatDataObject } from '../../lib/dataFormatHelpers'
//Actions

const GET_SPEAKERS = 'GET_SPEAKERS';

//Action Creator

export const getSpeakers = (data) => ({type: GET_SPEAKERS, payload: data });

//Redux Thunk

export const fetchSpeakers = (speakerId) => {
    return (dispatch) => {
      const endpoint = `https://r10app-95fea.firebaseio.com/speakers.json?orderBy="speaker_id"&equalTo="${speakerId}"`
        fetch(endpoint)
        .then(response => response.json())
        .then((data) => {
            dispatch(getSpeakers(data));
        })
        .catch(error => console.log('Error fetching JSON', error))
    }
}

//State

const speakerInitialState = {}

export default (state = speakerInitialState, action) => {
    switch(action.type) {
        case GET_SPEAKERS:
          return formatDataObject(action.payload)
        default:
          return state
    }
}

//Session Reducer

