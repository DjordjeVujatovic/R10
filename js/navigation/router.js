import {
  createRouter,
} from '@exponent/ex-navigation';

import About from '../scenes/About';
import Schedule from '../scenes/Schedule';
import Session from '../scenes/Session/'
import Faves from '../scenes/Faves/'
import SpeakerContainer from '../scenes/Speaker/'
import NavigationLayout from './NavigationLayout';

const Router = createRouter(() => ({
  layout: () => NavigationLayout,
  about: () => About,
  schedule: () => Schedule,
  faves: () => Faves,
  session: () => Session,
  speaker: () => SpeakerContainer
}));

export default Router;