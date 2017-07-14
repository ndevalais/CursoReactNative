import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'

import ArtistBox from './artistBox'
import { getArtists } from './apis-client'
import { firebaseAuth, firebaseDatabase } from './firebase'
import CommentList from './CommentList'

export default class ArtistDetailView extends Component {
  state = {
    comments: []
  }

  handleSend = () => {
    const { text } = this.state
    const artistCommentsRef = this.getArtistCommentsRef()
    var newCommentRef = artistCommentsRef.push()
    newCommentRef.set({ text });
    this.setState({ text: '' })
    //console.warn('enviar', newCommentRef) //this.state.text)
  }

  getArtistCommentsRef = () => {
    const { id } = this.props.artist
    return firebaseDatabase.ref(`comments/${id}`)
  }

  handleChangeText = (text) => this.setState({text})

  componentDidMount() {
    this.getArtistCommentsRef().on('child_added', this.addComment)
  }

  addComment = (data) => {
    const comment = data.val()
    this.setState({
      comments: this.state.comments.concat(comment)
    })
  }

  componentWillUnmount() {
    this.getArtistCommentsRef().off('child_added', this.addComment)
  }

  render() {
    const artist = this.props.artist
    const { comments } = this.state

    return (
      
      <View style={styles.container}>
        <ArtistBox artist={artist} />
        <Text style={styles.header}>Comentarios</Text>
        <CommentList comments={comments} />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={this.state.text}
            placeholder="Opina sobre este artista"
            onChangeText={this.handleChangeText}
          />
          <TouchableOpacity onPress={this.handleSend}>
            <Icon name="ios-send-outline" size={30} color="gray" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    paddingTop: 70,
  },
  header: {
    fontSize: 20,
    paddingHorizontal: 15,
    marginVertical: 10
  },
  inputContainer:{
    /*position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,*/
    height: 70,
    backgroundColor: 'white',
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    height: 50,
    flex: 1
  }
});
