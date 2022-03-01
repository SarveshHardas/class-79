import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';
import { Header } from 'react-native-elements';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.androidSafeArea} />
        <ImageBackground
          source={require('../assets/bg_image.png')}
          style={styles.background}>
          <Header 
            centerComponent={{
              text: 'ISS Tracker',
              style: styles.heading,
            }}/>

          <TouchableOpacity
            style={styles.issBtn}
            onPress={() => {
              this.props.navigation.navigate('Location');
            }}>
            <Text style={styles.btnText}>Iss Tracker</Text>
            <Text style={styles.knowMore}>{"Know More --->"}</Text>
            <Text style={styles.bgDigit}>1</Text>
            <Image
            source={require('../assets/iss_icon.png')}
            style={styles.iconImage}/>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.issBtn}
            onPress={() => {
              this.props.navigation.navigate('Meteor');
            }}>
            <Text style={styles.btnText}>Meteor</Text>
            <Text style={styles.knowMore}>{"Know More --->"}</Text>
            <Text style={styles.bgDigit}>1</Text>
            <Image
            source={require('../assets/meteor_icon.png')}
            style={styles.iconImage}/>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    resizedMode: 'cover',
    flex: 1,
  },
  heading:{
  fontSize:22,
  fontFamily:'Time new',
  color:'white',
  
  },
  knowMore:{
    paddingLeft:50,
    color:"red",
    fontSize:15,
  },
  bgDigit:{
    positon:'absolute',
    fontSize:15,
    right:20,
    bottom:-15,
    zIndex:-1,
    color:"rgba(183,183,183,0.5)"
  },
  iconImage:{
    positon:'absolute',
    right:30,
    top:-125,
    height:100,
    width:100,
    resizedMode:"contain"
  },
  issBtn: {
    flex:0.25,
    marginLeft:50,
    marginRight:50,
    marginTop:50,
    height: 250,
    width: 200,
    borderRadius:30,
    backgroundColor: 'white',
  },
  btnText: {
    color: 'black',
    fontSize:22,
    fontFamily:'Time new',
    paddingLeft:50,
    marginTop:25
  },
  container: {
    flex: 1,
  },
  androidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
});
