import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const OrderItems = ({item}) => {
    const {title, price} =item
  return (
    <View style ={{
        justifyContent:'space-between',
        flexDirection:'row',
        padding: 20,
        borderBottomWidth:1,
        borderBottomColor:'#999'
    }} >
      <Text style= {{
          fontWeight:'600',
          fontSize:16
      }}>{title}
      </Text>

      <Text  style={{
          opacity: 0.7,
          fontSize:16
      }} >{price}

      </Text>
    </View>
  )
}

export default OrderItems

const styles = StyleSheet.create({})