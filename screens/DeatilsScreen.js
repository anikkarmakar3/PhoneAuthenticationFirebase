// React Native Bottom Navigation
// https://aboutreact.com/react-native-bottom-navigation/
// import * as  from 'react';
import { View, Text, SafeAreaView,Image,FlatList, TouchableOpacity, Alert,StyleSheet, ImageBackground } from 'react-native';
import {photosApi} from  './Url'
import React,{useEffect,useState} from 'react';
import axios, { Axios } from 'axios';


const DetailsScreen = () => {

  const[postData,setpostData]= useState([])

    useEffect(()=>{
      fetchApiData();
    })

    const fetchApiData= async() => {
      try{
          const response= await axios.get(photosApi)
          console.log(response.data)
          setpostData(response.data)
          console.log(response)
      }catch(error){
        console.log(error)
      }
    }
  return (

    
    <View style={styles.container}>
      
      <FlatList
      data={postData}
      renderItem={({item})=>{
        return(
          <View>
          <Image source={{uri:item.url}} style={{width: 400, height: 200}}/>
          <TouchableOpacity>
              <Text style={styles.custmText}>
              {item.title}
              </Text> 
          </TouchableOpacity>
          </View>
        );
      }}
      />
    </View>
    // <SafeAreaView style={{ flex: 1 }}>
    //   <View style={{ flex: 1 , padding: 16}}>
    //     <View
    //       style={{
    //         flex: 1,
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //       }}>
    //       <Text
    //         style={{
    //           fontSize: 25,
    //           textAlign: 'center',
    //           marginBottom: 16
    //         }}>
    //         You are on Details Screen
    //       </Text>
    //     </View>
    //     <Text
    //       style={{
    //         fontSize: 18,
    //         textAlign: 'center',
    //         color: 'grey'
    //       }}>
    //       React Native Bottom Navigation
    //     </Text>
    //     <Text
    //       style={{
    //         fontSize: 16,
    //         textAlign: 'center',
    //         color: 'grey'
    //       }}>
    //       www.aboutreact.com
    //     </Text>
    //   </View>
    // </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  custmText: {
    fontSize:30,
    backgroundColor: 'green',
    margin:10,
    color: 'white',
    textAlign : 'center',
    padding:30
  },
});
export default DetailsScreen;

