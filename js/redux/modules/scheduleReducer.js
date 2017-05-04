import { formatSessionData } from '../../lib/dataFormatHelpers';

//Actions

const GET_SCHEDULE = 'GET_SCHEDULE';

//Action Creator

export const getSchedule = (data) => ({ type: GET_SCHEDULE, payload: data });

//Redux Thunk
const endpoint = 'https://r10app-95fea.firebaseio.com/sessions.json';
console.log(endpoint)
export const fetchSchedule = () => {
    return (dispatch) => {
        fetch(endpoint)
            .then(response => response.json())
            .then((data) => {
                dispatch(getSchedule(data));
            })
            .catch(error => console.log('Error fetching JSON', error))
    }
}

//State

const schedulePageInitialState = {
    sessionData: {
        dataBlob: {},
        sectionIds: [],
        rowIds: []
    }
};

export default (state = schedulePageInitialState, action) => {
    switch (action.type) {
        case GET_SCHEDULE:
            const formattedData = formatSessionData(action.payload);
            return { ...state, sessionData: formattedData }
        default:
            return state;
    }
}