import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'


const Icon =(props)=>(
    <TouchableOpacity >
    <View>
    <FontAwesome5 name ={props.icon} size={25} style={{
        marginBottom: 3,
        alignSelf:'center'
    }}
    />
    <Text>{props.text}</Text>
    </View>
    </TouchableOpacity>
)

const BottomTab = () => {
  return (
    <View style={{
        flexDirection:'row',
        margin: 10,
        justifyContent:'space-between',
        marginHorizontal:30
    }}>
        <Icon icon ="home" text="Home" />
        <Icon icon ="search" text="Browse" />
        <Icon icon ="shopping-bag" text="Grocery" />
        <Icon icon ="receipt" text="Order" />
        <Icon icon ="user" text="Account" />
        
    </View>
  )
}

export default BottomTab

const styles = StyleSheet.create({})