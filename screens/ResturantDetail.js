import { StyleSheet, Text, View,Dimensions } from 'react-native'
import React from 'react'
import About from '../components/resturantDetail/About'
import { Divider } from 'react-native-elements'
import MenuItems from '../components/resturantDetail/MenuItems'
import ViewCart from '../components/resturantDetail/ViewCart'
import { __param } from 'tslib'

const Height = Dimensions.get('screen').height;

const foods = [
  {
      title:'Lasagne',
      description:'with butter lettuce,with butter lettuce,with butter lettuce,',
      price:'$19.2',
      image:"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80"
},
{
  title:'Thandori Chicken',
  description:'Amazing desi dish Amazing desi dish Amazing desi dish',
  price:'$12.2',
  image:"https://ministryofcurry.com/wp-content/uploads/2021/11/air-fryer-whole-tandoori-chicken_-3-500x500.jpg"
},
{
  title:'Biryani ',
  description:'Tasty biryaniTasty biryani Tasty biryani Tasty biryani',
  price:'$19.2',
  image:"https://butteroverbae.com/wp-content/uploads/2020/10/karachi-chicken-biryani-11-735x735.jpg"
},
{
  title:'Lasange',
  description:'with butter lettuce',
  price:'$19.2',
  image:"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80"
},
{
  title:'Biryani ',
  description:'Tasty biryaniTasty biryani Tasty biryani Tasty biryani',
  price:'$19.2',
  image:"https://butteroverbae.com/wp-content/uploads/2020/10/karachi-chicken-biryani-11-735x735.jpg"
},
{
  title:'Biryani ',
  description:'Tasty biryaniTasty biryani Tasty biryani Tasty biryani',
  price:'$19.2',
  image:"https://butteroverbae.com/wp-content/uploads/2020/10/karachi-chicken-biryani-11-735x735.jpg"
},
];

const ResturantDetail = ({route, navigation}) => {
  return (
    
    <View style={{height:Height}}>
      <About route={route}/>
      <Divider width={1.3} style={{marginVertical:20}}/>
      <MenuItems resturantTitle={route.params.title}  foods ={foods} />
      <ViewCart navigation ={navigation}/>
    </View>
  )
}

export default ResturantDetail

const styles = StyleSheet.create({})