import { formatDataObject } from '../../lib/dataFormatHelpers';

//Actions

GET_SESSIONS = 'GET_SESSIONS';

//Action Creator

const getSession = (data) => ({type: GET_SESSIONS, payload: data });

//Redux Thunk

export const fetchSessions = (speakerId) => {
    return (dispatch) => {
        const endpoint = 'https://r10app-95fea.firebaseio.com/sessions.json'
        fetch(endpoint)
        .then(response => response.json())
        .then((data) => {
            dispatch(getSession(data))
        })
       .catch(error => console.log('Error fetching JSON', error))
    }
}

//State

const sessionInitialState = {
    sessionData: {}
}

export default (state = sessionInitialState, action) => {
    switch(action.type) {
        case GET_SESSIONS:
          return {...state, sessionData: action.payload}
        default:
          return state
    }
}
