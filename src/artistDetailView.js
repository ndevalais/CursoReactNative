import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

//import Icon from 'react-native-vector-icons/Ionicons'

import ArtistBox from './artistBox'
import { getArtists } from './apis-client'

export default class ArtistDetailView extends Component {
  
  render() {
    const artist = this.props.artist
    return (
      
      <View style={styles.container}>
        <ArtistBox artist={artist} /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 70,
  }
});
