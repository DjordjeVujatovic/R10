import {
  createRouter,
} from '@exponent/ex-navigation';

import About from '../scenes/About';
import Schedule from '../scenes/Schedule';
import Session from '../scenes/Session/SessionContainer'
import SpeakerContainer from '../scenes/Speaker/SpeakerContainer'
import NavigationLayout from './NavigationLayout';

const Router = createRouter(() => ({
  layout: () => NavigationLayout,
  about: () => About,
  schedule: () => Schedule,
  session: () => Session,
  speaker: () => SpeakerContainer
}));

export default Router;