import React, {Component} from 'react';
import {View, Text, Alert, StyleSheet,} from 'react-native';
import axios from 'axios';


export default class Meteor extends Component {
  constructor(){
    super()
    this.state={
      meteors:{}
    }
  }

  getMeteors = async () =>{
    axios.get("https://api.nasa.gov/planetary/apod?api_key=EfRiBvf65yv7U882aY2qigxngIHm8rlD5YXed046")
    .then(response=>{this.setState({
      meteors:response.data.near_earth_objects
    })
    .catch(error=>{
      Alert.alert(error.message)
    })
  }
    )

  }

  componentDidMount(){
    this.getMeteors()
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
    var meteor_arr = Object.keys(this.state.meteors).map(meteor_date=>{
      return this.state.meteors[meteor_date]
    })
    var meteors = [].concat.apply([], meteor_arr)
    meteors.forEach(function(element){
      var diameter = (element.estimated_diameter.kilometers.estimated_diameter_min + element.estimated_diameter.kilometers.estimated_diameter_max)/2
      var threat = (diameter/element.close_approach_data[0].miss_distance.kilometers)*1000000000
      element.threat_score = threat
    })
    return(
      <View>
        <Text>Meteor Screen</Text>
      </View>
    )
   }
  }
}