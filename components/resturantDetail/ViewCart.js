import { StyleSheet, Text, View,TouchableOpacity, Modal } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import OrderItems from './OrderItems'
import firebase from '../../firebase'
import 'firebase/firestore'
import LottieView from 'lottie-react-native'


const ViewCart = ({navigation}) => {
    const [modalVisibal, setModalVisible] = useState(false)
    const [loadingScreen, setLoadingScreen] = useState(false)

    const {items,resturantTitle} = useSelector((state)=>state.CartReducer.selectedItems)
    const total = items.map((item) => Number(item.price.replace('$','')) ).reduce((prev,curr)=>prev + curr,0);

    const totalUSD = total.toLocaleString('en', {
        style: 'currency',
        currency:'USD'
    });
    
    const checkoutModelContent = ()=>{
        return (
            <>
            <View style = {styles.modalContainer}>
                <View style ={styles.modalCheckoutContainer}>
                    <Text style={styles.resturantTitle}> {resturantTitle}</Text>
                    {items.map((item,index)=>(
                        <OrderItems key={index} item={item} />
                    ) )}

                    <View style={styles.subTotalContainer}>
                        <Text style= {styles.subTotalText}>SubTotal</Text>
                        <Text style= {styles.subTotalText}>{totalUSD}</Text>
                    </View>

                    <View style = {{
                        flexDirection:'row',
                        justifyContent:'center',
                        marginTop:0
                    }}>
                        <TouchableOpacity
                        style ={{
                            backgroundColor:'black',
                            borderRadius:30,
                            padding:14,
                            width:250,
                            position:'relative'
                        }}
                        onPress ={()=>{
                            addOrderToFirebase()
                            setModalVisible(false)
                        }}
                        >
                        <Text style ={{
                            color:'white',
                            textAlign:'center',
                            fontWeight:'500',
                            fontSize:20
                        }}>CheckOut</Text>
                        <Text style ={{
                            position: 'absolute',
                            color:'white',
                            right:20,
                            fontSize:15,
                            top:17
                        }}>{total ? totalUSD:''}</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
            </>
        )
    }

    const addOrderToFirebase =()=>{
        setLoadingScreen(true)
        const db = firebase.firestore();
        db.collection("Orders").add({
            items:items,
            resturantTitle:resturantTitle,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() =>{
            setTimeout(()=>{
                setLoadingScreen(false)
                navigation.navigate('OrderCompleted')

            }, 1200)
        })
        
        
    }

  return (
      <>
      <Modal 
      animationType='slide'
      visible={modalVisibal}
      transparent={true}
      onRequestClose={()=>setModalVisible(false)}
      > 
        {checkoutModelContent()}
      </Modal>
        {total ? (
      <View 
      style={{
          flex:1,
          flexDirection:'row',
          alignItems:'center',
          zIndex:999,
          bottom: 15,
          position: 'absolute',
          justifyContent:'center'
          }} >
    <View style= {{
        justifyContent:'center',
        flexDirection:"row",
        width:'100%'
    }}>
        <TouchableOpacity
        style={{
            backgroundColor:'black',
            alignItems:'center',
            flexDirection:'row',
            justifyContent:'flex-end',
            borderRadius:30,
            width: 250,
            justifyContent:'center',
            padding:15,
            position: 'relative'
        }}
        onPress ={ () =>{
             setModalVisible(true)
             
            }}
        >
         <Text style={{color:'white',fontSize:22, marginRight:20}}>ViewCart</Text>
         <Text style={{
             color:'white',
             fontSize:20,

         }}>{ totalUSD }</Text>
         </TouchableOpacity>
        </View>
        </View>
        ):(
            <></>
        )}

        {loadingScreen ? (<> 
        <View style ={{
            backgroundColor:'black',
            position: 'absolute',
            opacity: 0.6,
            justifyContent:'center',
            alignItems:'center',
            height: "100%",
            width: '100%'
        }} 
        > 
        <LottieView style={{
            height: 200,     
        }} 
        source = {require('../../assets/animations/scanner.json')}
        autoPlay
        speed ={3}
        /> 

        </View>
        </>) : <></> }
        </>
  )
}

export default ViewCart

const styles = StyleSheet.create({
    modalContainer:{
        flex:1,
        justifyContent:'flex-end',
        backgroundColor:'rgba(0,0,0,0.7)'
    },
    modalCheckoutContainer:{
        backgroundColor:'white',
        padding:16,
        borderWidth:1,
        height: 500
    },
    resturantTitle:{
        textAlign:'center',
        fontSize:18,
        fontWeight:'600',
        marginBottom:10
    },
    subTotalContainer:{
        justifyContent:'space-between',
        flexDirection:'row',
        marginTop:15
    },
    subTotalText:{
        textAlign:'left',
        fontWeight:'600',
        fontSize:15,
        marginBottom:10
    }
})