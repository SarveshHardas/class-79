import React, {Component} from 'react';
import {View, Text, StyleSheet, StatusBar, Platform, SafeAreaView, ImageBackground, Image, Alert} from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { Header } from 'react-native-elements';
import axios from 'axios';


export default class ISSLocation extends Component {
  constructor(){
    super()
    this.state({
      location:{}
    })
  }

  componentDidMount(){
    this.getIssLocation()
  }
  getIssLocation =()=>{
    axios.get('https://api.wheretheiss.at/v1/satellites/25544')
    .then((response)=>{
      this.setState({
        location:response.data
      })
      .catch(error=>{
        Alert.alert(error.message)
      })
    })
  }

 render(){
  if(Object.keys(this.state.location).length===0)
  {
     return(
         <View style={{flex:1,
         justifyContent:"center",
         alignItems:"center"}}>
             <Text>Loading...</Text>
         </View>
     )
  }else{
   return (
    <View style={styles.container}>
      <SafeAreaView style={styles.androidSafeArea} />
        <ImageBackground
          source={require('../assets/bg_image.png')}
          style={styles.background}>
            <Header 
            centerComponent={{
              text: 'ISS Location',
              style: styles.heading,
            }}/>
            <View style={styles.mapContainer}>
              <MapView
                style={styles.map}
                initialRegion={{
                latitude:this.state.location.latitude,
                longitude:this.state.location.longitude,
                latitudeDelta:100,
                longitudeDelta: 100,
                }}
                >
                <Marker
                  coordinate={{ latitude : this.state.location.latitude , longitude : this.state.location.longitude }}
                  >
                  <Image
                    source={require('../assets/iss_icon.png')}
                    style={{height:50,width:50}}/>
                </Marker>
              </MapView>
            </View>
            <View style={styles.infoContainer}>
                <Text style={styles.infoText}>
                  latitude:{this.state.location.latitude}
                </Text>

                <Text style={styles.infoText}>
                  longitude:{this.state.location.longitude}
                </Text>

                <Text style={styles.infoText}>
                  altitude(km):{this.state.location.altitude}
                </Text>

                <Text style={styles.infoText}>
                  velocity(km/h):{this.state.location.velocity}
                </Text>


            </View>
        </ImageBackground>
    </View>   
   )
 }
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
  container: {
    flex: 1,
  },
  androidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  mapContainer:{
    flex:0.7,
  },
  map:{
    height:'100%',
    width:'100%',
  },
  infoContainer:{
    flex:0.2,
    backgroundColor:"white",
    marginTop:10,
    padding:30,
    borderTopLeftRadius:30,
    borderTopRightRadius:30,
  },
  infoText:{
    fontSize:15,
    color:'black',
    fontWeight:'bold'
  }
})