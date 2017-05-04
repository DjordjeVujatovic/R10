//Actions

const GET_CODE_OF_CONDUCT = 'GET_CODE_OF_CONDUCT';

//Action Creator

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
};

//About Reducer

export default (state = aboutPageInitialState, action) => {
    switch (action.type) {
        case GET_CODE_OF_CONDUCT:
            return { ...state, conductData: action.payload };
        default:
            return state;
    }
};