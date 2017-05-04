//Actions

const GET_CODE_OF_CONDUCT = 'GET_CODE_OF_CONDUCT';
const SET_LOADING_FALSE = 'SET_LOADING_FALSE';

//Action Creator

export const setLoadingFalse = () => ({ type: SET_LOADING_FALSE, payload: null });

export const getCodeOfConduct = (data) => ({ type: GET_CODE_OF_CONDUCT, payload: data });



//Redux Thunk
const endpoint = 'https://r10app-95fea.firebaseio.com/code_of_conduct.json';

export const fetchCodeOfConduct = () => {
    return (dispatch) => {

        fetch(endpoint)
            .then(response => response.json())
            .then((data) => {
                dispatch(getCodeOfConduct(data));
            })
            .catch(error => console.log('Error fetching JSON', error))
    }
}

//State
const aboutPageInitialState = {
    conductData: [],
    isLoading: true,
};

//About Reducer

export default (state = aboutPageInitialState, action) => {
    switch (action.type) {
        case SET_LOADING_FALSE:
            return { ...state, isLoading: false };
        case GET_CODE_OF_CONDUCT:
            return { ...state, conductData: action.payload };
        default:
            return state;
    }
};