import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'


export const LocalResturants = [
         
    {
        name:'BeachSide Bar',
        image_url: "https://media.istockphoto.com/photos/interior-of-a-modern-cozy-french-restaurant-picture-id1314951233?b=1&k=20&m=1314951233&s=170667a&w=0&h=XgyJ96HAeBPpC4c6PnvlN8pnIJw7PAkNhwySVvX2JQk=",
        categories:'Tea & Coffee',
        price:'$1.5',
        review:'1111',
        rating:'4.2'
    },
    {
        name:'Benihana',
        image_url: "https://images.unsplash.com/photo-1620296595801-3cd364a12807?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdHVyYW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        categories:'Sandwich & Burger',
        price:'$5',
        review:'1212',
        rating:'4.6'
    },
    {
        name:'Indian Grill',
        image_url: "https://media.istockphoto.com/photos/empty-restaurant-interior-picture-id1290237592?b=1&k=20&m=1290237592&s=170667a&w=0&h=fgXWrrQ7qWpbiO8O_dpEVlS4JsTZYH8e3FoZ4UeoQH8=",
        categories:'Indian Grills',
        price:'$12',
        review:'1010',
        rating:'3.6'
    },
    {
        name:'Desi Daba',
        image_url: "https://images.unsplash.com/photo-1555992337-005a8656a625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cmVzdHVyYW50c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        categories:'Biryani',
        price:'$12',
        review:'1010',
        rating:'4.0'
    },
    {
        name:'Desi Biryani',
        image_url: "https://images.unsplash.com/photo-1628394029748-3bbbc88a4334?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJlc3R1cmFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        categories:'Desi Biryani',
        price:'$12',
        review:'1010',
        rating:'4.4'
    },
    {
        name:'KFC',
        image_url: "https://images.unsplash.com/photo-1593791211660-9fc3ea7fdbab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHJlc3R1cmFudHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        categories:'Fast Food',
        price:'$12',
        review:'1010',
        rating:'4.9'
    },
]

const ResturantImage =(props)=>{
    return (
    <View >        
    <Image 
    source={{
        uri:props.image,
}}
style= {{width:'100%',height:180}}
    />
    <TouchableOpacity style ={{position:'absolute',right:15,top:12}}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff"/>
    </TouchableOpacity>
    </View>
    )  
}

const ResturantInfo = (props) => {
    return (
        <View >
        <View style={{flexDirection:'row',justifyContent:'space-between', alignItems:'center',marginTop:10}} >
            <View>
                <Text style={{fontSize:15,fontWeight:'bold'}} >
                 {props.name}</Text>
                <Text style = {{fontSize:13,color:'gray'}}>30-40 min</Text>
            </View>
        <View  style = {{
            backgroundColor:'#eee',
            height: 40,
            width: 40,
            fontSize:17,
            borderRadius:40,
            justifyContent:'center',
            alignItems:'center'
        }}>
        <Text>{props.rating}</Text>
        </View>
        </View>
        </View>
    )
}

  const ResturantItems = ({navigation, ...props}) => {
  return (
      <>
    {props.resturantsData.map((resturant, index) =>(
    <TouchableOpacity activeOpacity={1} style ={{marginBottom:30}}
    key ={index}
     onPress ={()=>
        navigation.navigate("resturantDetail",{
            title:resturant.name,
            image:resturant.image_url,
            price:resturant.price,
            categories: resturant.categories,
            review: resturant.review_count,
            rating: resturant.rating
           })}
    >
         <View
          style={{backgroundColor:'#fff', marginTop:10,padding:15}}>
            <ResturantImage image ={resturant.image_url} />
            <ResturantInfo name={resturant.name} rating = {resturant.rating} />
         </View>          
    </TouchableOpacity>
        ))}
    </>
  )
}


export default ResturantItems

const styles = StyleSheet.create({})