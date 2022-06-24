import { StyleSheet, Text, View, SafeAreaView,ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import HeaderTab from '../components/home/HeaderTab'
import SearchBar from '../components/home/SearchBar'
import Categories from '../components/home/Categories'
import ResturantItems,{ LocalResturants } from '../components/home/ResturantItems'
import { Divider } from 'react-native-elements'
import BottomTab from '../components/home/BottomTab'



const YELP_API_KEY ="WPKA6WE-50HLo-CeeBuJK8JPaY_m-UUR8_LRMVxjPavIjD3DbDmMhRhJpb7Ws5ZPGr55ZHYw_vO09RNf_jFOLXaReq-qRZB9-y_iOfhrrXiS2yhV42vyDmdCmPFPYnYx"

const Home = ({ navigation }) => {

  const [resturantsData , setResturantsDate] = useState(LocalResturants);
  const [city, setCity] = useState('Hollywood')
  const [activeTab, setActiveTab] = useState("Delivery")

  const getDataFromYelpApi =()=> {
      const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`
  

  const apiOptions ={
    headers:{
      Authorization: `Bearer ${YELP_API_KEY}`,
    },
  }
    return fetch(yelpUrl, apiOptions)
    .then((res)=>res.json())
    .then((json)=>setResturantsDate(
      json.businesses .filter((business)=>
      business.transactions.includes(activeTab.toLowerCase()))))
  }
  useEffect (()=>{
    getDataFromYelpApi()
  },[city, activeTab])

  return (
    <SafeAreaView style = {{ backgroundColor:'#eee', height: '100%' }}>
        <View style = {{backgroundColor:'white', padding:10}}>

            <HeaderTab activeTab = {activeTab} setActiveTab = {setActiveTab} />
            <SearchBar cityHandler={setCity}/>
         </View>
         <ScrollView showsVerticalScrollIndicator={false}>
         <Categories />
         <ResturantItems 
         resturantsData={resturantsData} 
         navigation ={navigation} />
         </ScrollView>

         <Divider width={1}/>
        <BottomTab />
    </SafeAreaView>
  )
}

export default Home

const styles = StyleSheet.create({})