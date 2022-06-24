import { StyleSheet, Text, View,Image,ScrollView } from 'react-native'
import { Divider } from 'react-native-elements'
import React from 'react'
import BouncyCheckbox from 'react-native-bouncy-checkbox'

import { useDispatch, useSelector } from 'react-redux'


const MenuItems = ({resturantTitle, foods, hideCheckbox, marginLeft  }) => {

    const dispatch = useDispatch()

    const selectItem = (item,checkboxValue) =>
    dispatch ({
    type : "ADD_TO_CART",
    payload: {...item ,resturantTitle:resturantTitle,
        checkboxValue : checkboxValue

    } 
}
);

const cartItems = useSelector(
    (state)=> state.CartReducer.selectedItems.items);

const isfoodInCart = (food, cartItems)=>Boolean(cartItems.find((item)=>item.title ===food.title));


  return (
      <ScrollView showsVerticalScrollIndicator={false}  >
      {foods.map((food,index)=>(
      <View key={index}  >
        <View style ={styles.menuItems}>
        { hideCheckbox ? (
            <></>
        ) :( <BouncyCheckbox
         onPress = {(checkboxValue) => selectItem(food, checkboxValue)}
          isChecked ={isfoodInCart(food, cartItems)}
         iconStyle={{
              borderColor:'lightgray',
              borderRadius:0,     
          }}
          fillColor='green'
          bounceEffect={"1.0"}
          bounceFriction={"0.1"}
          
          />
          )}
         <FoodInfo  food = {food} marginLeft ={marginLeft ? marginLeft:0 } />
         <FoodImage  food = {food }/>
        </View>
        <Divider width={0.5} orientation="vertical" style={{
            marginHorizontal:20
        }} />
    </View>
    ))}
    </ScrollView>
  )
}

export default MenuItems

const FoodInfo = (props) =>{
    return(
        <View style ={
            {
                width: 240,justifyContent:'space-evenly'
            }
        }>
            <Text style=  {styles.titleStyle}> {props.food.title} </Text>
            <Text> {props.food.description} </Text>
            <Text> {props.food.price} </Text>
        </View>
    )

    
}

const FoodImage = ({marginLeft, ...props}) =>{
    return (
        <Image source={{uri:props.food.image} } style={{
            width: '30%',
            height: "100%",
            borderRadius:12,
            marginLeft: marginLeft
            
        }} />
    )
}

const styles = StyleSheet.create({
    menuItems:{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:20,   
        
        
    },
    titleStyle:{
        fontSize:22,
        fontWeight:'500'
    }
})
