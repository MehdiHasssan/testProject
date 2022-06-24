import { StyleSheet, Text, SafeAreaView,View, ScrollView, Dimensions } from 'react-native'
import React, { useEffect,useState } from 'react'
import {useSelector} from 'react-redux'
import LottieView from 'lottie-react-native';
import firebase from 'firebase/compat'
import MenuItems from '../components/resturantDetail/MenuItems'

const windowHeight = Dimensions.get('window').height;

const OrderComplete = () => {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
      
        title:'Lasagne',
        description:'with butter lettuce,with butter lettuce,with butter lettuce,',
        price:'$19.2',
        image:"https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NXx8fGVufDB8fHx8&w=1000&q=80"

    },
    ]
  })

  const {items,resturantTitle} = useSelector((state)=>state.CartReducer.selectedItems)
  const total = items.map((item) => Number(item.price.replace('$','')) ).reduce((prev,curr)=>prev + curr,0);

  const totalUSD = total.toLocaleString('en', {
      style: 'currency',
      currency:'USD'
  });

  useEffect(()=>{
    const db = firebase.firestore()
    const unsubscribe = db.collection("Orders").orderBy("createdAt", 'desc').limit(1)
    .onSnapshot((snapshot)=>{
      snapshot.docs.map((doc) =>{
        setLastOrder(doc.data())
      })
    })   
    return ()=> unsubscribe();
  },[])

  return (
    <SafeAreaView style={{backgroundColor:'white', flex:1, }}>
      <View style =
       {{
         margin:10,
         alignItems:'center',
          paddingBottom:30,
          height:windowHeight
    }}>
      {/* green tick Mark */}
      <LottieView
      source = {require("../assets/animations/check-mark.json")}
      // autoPlay 
      speed={0.5}
      loop={false}
      autoPlay ={true}
      style={{ 
          alignSelf:'center',
          marginBottom:30,
          height: 100,
       }}
       
       />
      <Text style ={{fontSize:20,fontWeight:'bold'}}>
          Your Order at {resturantTitle} has been placed for {totalUSD} 
          </Text>
         
          <ScrollView showsVerticalScrollIndicator={false}>
          {/* MenuItems */}
          <View >
          <MenuItems foods = {lastOrder.items} hideCheckbox={true} />
          </View>
          
          <LottieView style={{ 
          alignSelf:'center',
          height: 200,
          marginBottom:50
       }}
       source = {require("../assets/animations/cooking.json")}
       autoPlay={false}
       speed={-1}
       loop = {true}

       
       />
       </ScrollView>
     
      
          {/* cooking */}
          </View>
    </SafeAreaView>
  )
}

export default OrderComplete

const styles = StyleSheet.create({})