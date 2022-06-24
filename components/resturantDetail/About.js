import { Text, View,Image } from 'react-native'
import React from 'react'


const About = (props) => {
    const {title,image,price,review,rating,categories} = props.route.params
    const formattedCategories = categories.map((cat)=>
    cat.title ).join('·')

    const description = `${formattedCategories} ${price ? '·' + price: ''} · ${rating} ⭐ (${review}+)`
  return (
    <View>
      <ResturantImage image={image} />
      <ResturantTitle title ={title}/>
      <ResturantDescription description={description} />
    </View>
  )
}

export default About

const ResturantImage =(props)=>{
    return (
        <Image source={{uri:props.image}} 
        style={{
            width:'100%',
            height:180
        }} />
    )
}

const ResturantTitle = (props)=>{
    return (
    <Text
     style ={{
        fontSize:29,
        marginTop:10,
        marginHorizontal:15,
        fontWeight:'500'
    }}>
        {props.title}</Text>
    )
}


const ResturantDescription =(props) =>{
    return (
        <Text
        style={{
            fontSize:16,
            color:'gray',
            marginHorizontal:15,
            marginTop:10,
            fontWeight:'400'
        }}>{props.description}</Text>
    )
}
