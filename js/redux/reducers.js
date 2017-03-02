import { combineReducers } from 'redux';
import { NavigationReducer } from '@exponent/ex-navigation';
import AboutReducer from './modules/aboutReducer'
import ScheduleReducer from './modules/scheduleReducer'

export default combineReducers({
    navigation: NavigationReducer,
    about: AboutReducer,
    schedule: ScheduleReducer
});