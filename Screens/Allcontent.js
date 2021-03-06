import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  ListViewBase,
  TextComponent,
} from 'react-native';
import Header from './components/Header';
// import data from '../data.json';
import firestore from '@react-native-firebase/firestore';

const AllContent = ({navigation}) => {
  const [data, setdata] = useState();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       let list = [];
  //       await firestore()
  //         .collection('MoviesData')
  //         .get()
  //         .then(querySnapshot => {
  //           // console.log('total data:', querySnapshot.size);
  //           querySnapshot.forEach(doc => {
  //             const {
  //               category,
  //               description,
  //               id,
  //               image,
  //               title,
  //               type,
  //               video,
  //               year,
  //             } = doc.data();
  //             list.push({
  //               title: title,
  //               category: category,
  //               year: year,
  //               Description: description,
  //               image: image,
  //               type: type,
  //               video: video,
  //               id: id,
  //             });
  //           });
  //         });

  //       console.log('list', list);
  //       setdata(list);
  //       console.log('data', data);
  //       // setdata(list)
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  // console.log('list', list)


   useEffect(() => {
     fetchData()
    // const interval = setInterval(() => {
    // fetchData()
    // }, 10000);
  
    // return () => clearInterval(interval); 
  }, [])

   const fetchData = async () => {
    try {
      let list = [];
      await firestore()
        .collection('MoviesData')
        .get()
        .then(querySnapshot => {
        
          querySnapshot.forEach(doc => {
            const {
              category,
              description,
              id,
              image,
              title,
              type,
              video,
              year,
            } = doc.data();
            list.push({
              title: title,
              category: category,
              year: year,
              Description: description,
              image: image,
              type: type,
              video: video,
              id: id,
            });
          });
        });

      console.log('list', list);
      setdata(list);
      JSON.stringify(data)
      console.log('data', data);
      
    } catch (error) {
      console.log(error);
    }
  };
  


  return (
    <View style={{backgroundColor: 'black', height: '100%'}}>
      {/* <Header/> */}
      <ScrollView>
        <View style={styles.contentView}>
          {data === undefined ? <View style={{flex:1,alignItems:'center', justifyContent:'center', marginVertical:'70%'}}><ActivityIndicator size="large"  color="red" /></View> 
          : 
          
          data.map((item, index) =>  (
            <View
              key={index}
              style={{
                height: 150,
                width: 100,
                backgroundColor: 'white',
                margin: 10,
              }}>
                <Text style={{color:'white'}}></Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('Player', {item})}>
                <Image
                  style={{height: '100%', width: '100%'}}
                  source={{
                    uri: item.image,
                  }}
                />
              </TouchableOpacity>
            </View>
          ))}


          
         
          <Text style={{color: '#fff'}}></Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default AllContent;
const styles = StyleSheet.create({
  contentView: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  textstyle:{
    color:'#fff'
  }
});






// import React from 'react'
// import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native'
// import Header from './components/Header'
// import data from '../data.json'
// const Allcontent = ({navigation}) => {
//     return (

//         <View style={{backgroundColor:'black', height:'100%'}}>
//            {/* <Header/> */}
//            <ScrollView>
//                <View style={styles.contentView}>
                   
//            {data.map((item, index )=> 
            
// <View key={index} style={{height:150, width:100, backgroundColor:'white', margin:10}}>
// <TouchableOpacity onPress={()=>navigation.navigate('Player',{item})}>
// <Image
//           style={{height:'100%', width:'100%'}}
//           source={{
//               uri: item.image,
//             }}
//         />
//     </TouchableOpacity>   
// </View>  )}
// {/* <View style={{height:150, width:100, backgroundColor:'tomato', margin:10}}>

// </View>
// <View style={{height:150, width:100, backgroundColor:'tomato', margin:10}}>

// </View>
// <View style={{height:150, width:100, backgroundColor:'tomato', margin:10}}>

// </View>
// <View style={{height:150, width:100, backgroundColor:'tomato', margin:10}}>

// </View>
// <View style={{height:150, width:100, backgroundColor:'tomato', margin:10}}>

// </View>
// <View style={{height:150, width:100, backgroundColor:'tomato', margin:10}}>

// </View>
// <View style={{height:150, width:100, backgroundColor:'tomato', margin:10}}>

// </View>
// <View style={{height:150, width:100, backgroundColor:'tomato', margin:10}}>

// </View>
// <View style={{height:150, width:100, backgroundColor:'tomato', margin:10}}>

// </View>
// <View style={{height:150, width:100, backgroundColor:'tomato', margin:10}}>

// </View>
// <View style={{height:150, width:100, backgroundColor:'tomato', margin:10}}>

// </View>
// <View style={{height:150, width:100, backgroundColor:'tomato', margin:10}}>

// </View>
// <View style={{height:150, width:100, backgroundColor:'tomato', margin:10}}>

// </View> */}


              
// </View>
//            </ScrollView>
//         </View>
//     )
// }

// export default Allcontent
//  const styles = StyleSheet.create({
//      contentView:{
//          display:'flex',
//          flexDirection:'row',
//          flexWrap:'wrap',
//          justifyContent:'space-around'
//      }
//  })
