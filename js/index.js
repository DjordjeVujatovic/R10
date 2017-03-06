import React, { Component } from 'react';
import AboutContainer from './scenes/About';
import Router from './navigation/router';
import { StatusBar} from 'react-native';
import { Provider }  from 'react-redux';

import {
  NavigationProvider,
  StackNavigation,
  NavigationContext
} from '@exponent/ex-navigation';

import Store from './redux/store';

const navigationContext = new NavigationContext({
  router: Router,
  store: Store
})

class R10 extends Component {
  render() {
    return (
    <Provider store={Store}>
      <NavigationProvider context={navigationContext}>
        <StatusBar barStyle='light-content'/>
        <StackNavigation initialRoute={Router.getRoute('layout')} navigatorUID="root" />
      </NavigationProvider>
    </Provider>
    );
  }
}

export default R10;