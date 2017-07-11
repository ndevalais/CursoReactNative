import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Platform,
} from 'react-native';

import {Scene, Router} from 'react-native-router-flux';

import HomeView from './HomeView'
import LoginView from './LoginView'
import artistDetailView from './artistDetailView'

class PlatziMusic extends React.Component {
  render() {
    // Puedo usar esta variable para ocultar la navegacion del boton hacia atras.
    const isAndroid = Platform.OS === 'android'

    return <Router>
      <Scene key="login" component={LoginView} hideNavBar/>
      <Scene key="root">
        <Scene key="home" component={HomeView} hideNavBar/>
        <Scene key="artistDetail" component={artistDetailView} hideNavBar={false} title="Artista"/>
      </Scene>
    </Router>
  }
}

AppRegistry.registerComponent('PlatziMusic', () => PlatziMusic);
