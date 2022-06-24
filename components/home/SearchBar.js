import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import Ionicons from 'react-native-vector-icons/Ionicons'
import AntDesign from 'react-native-vector-icons/AntDesign'

const SearchBar = ({cityHandler}) => {
  return (
    <View style ={{flexDirection:'row', marginTop:15}} >
      <GooglePlacesAutocomplete 
      query={{key:''}}
      onPress ={(data,details= null)=>{
        console.log(data,description)
        const city = data.description.split(',')[0]
        cityHandler(city)
      }}
      placeholder='search'
      styles={{
          textInput:{
             backgroundColor:'#eee',
              borderRadius:30,
              fontWeight:'700',
          },
          textInputContainer:{
              backgroundColor:'#eee',
              borderRadius:50,
              flexDirection:'row',
              alignItems:'center',
              marginRight:10

          }
      }}
      renderLeftButton ={()=> 
      <View style = {{marginLeft:13}}>
          <Ionicons name = 'location-sharp' size={24} />
           </View>
           }

      renderRightButton = {()=> 
    <View style= {{
        flexDirection:'row',
        marginRight: 9,
        backgroundColor:'white',
        alignItems:'center',
        padding: 10,
        borderRadius:37,
        
    }}>
        <AntDesign name = 'clockcircle' size= {11}style = {{marginRight:6}}/>
        <Text>Search</Text>
    </View>
    }
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({})