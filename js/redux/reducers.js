import { combineReducers } from 'redux';
import { NavigationReducer } from '@exponent/ex-navigation';
import AboutReducer from './modules/aboutReducer';
import ScheduleReducer from './modules/scheduleReducer';
import SpeakerReducer from './modules/speakerReducer';
import FaveReducer from './modules/favesReducer';

export default combineReducers({
    navigation: NavigationReducer,
    about: AboutReducer,
    schedule: ScheduleReducer,
    speakers: SpeakerReducer,
    faves: FaveReducer,
});