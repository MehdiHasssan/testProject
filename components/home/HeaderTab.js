import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'


const HeaderTab = (props) => {
      
    

    const HeaderButton = (props) => {
        
        return (
            <View>
             <TouchableOpacity
               style = {{
                backgroundColor: props.activeTab == props.text ? 'black': 'white',
                marginVertical:20,
                paddingHorizontal:20,
                borderRadius:30,
                padding:17,
                margin:3
             }}
             onPress = {()=>props.setActiveTab(props.text)}
             >
                 <Text style = {{
                     fontSize:16,
                     color: props.activeTab == props.text ? 'white': 'black',
                     fontWeight:'900'
                     
                 }}> {props.text} </Text>
             </TouchableOpacity>
             </View>
        )
    }

  return (
    <View style = {styles.headerButton}>
      <HeaderButton
       text = "Delivery" 
       btnColor = "black" 
       textColor = "white" 
       activeTab = {props.activeTab} 
       setActiveTab= {props.setActiveTab}
       />

      <HeaderButton 
      text = "Pickup" 
      btnColor = "white" 
      textColor = "black"
      activeTab = {props.activeTab} 
      setActiveTab= {props.setActiveTab}
      />
    </View>
  )
}

export default HeaderTab

const styles = StyleSheet.create({
    headerButton:{
        flexDirection:'row',
        alignSelf:'center',
    },
    
})