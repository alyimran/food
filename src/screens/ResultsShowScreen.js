import { View, Text, StyleSheet , FlatList, Image } from 'react-native'
import React ,{useState , useEffect}from 'react'
import yelp from '../api/yelp'

export default function ResultsShowScreen({navigation}) {
    const [result, setResult]= useState(null);
    const id = navigation.getParam('id')
    const getResult = async (id)=>{
        const responce = await yelp.get(`/${id}`);
        setResult(responce.data);
    }
    useEffect(()=>getResult(id) , []);

    if (!result){
        return null;
    }
  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
     
      data={result.photos}
      keyExtractor={(photo)=>photo}
      renderItem={({item})=>{
          return <Image  style={styles.image} source={{uri:item}}/>
      }}/>
    </View>
  )
}

const styles = StyleSheet.create({
    image:{
        width:300,
        height:200
    }
});