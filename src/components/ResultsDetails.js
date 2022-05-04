import { View, Text , StyleSheet, Image } from 'react-native'
import React from 'react'

export default function ResultsDetails({result}) {
  return (
    <View style={styles.containerStyle}>
        <Image style={styles.imageStyle}
        source={{uri:result.image_url}}/>
      <Text style = {styles.nameStyle}>{result.name}</Text>
      <Text >{result.rating} Stars, {result.review_count} Reviews</Text>
     
    </View>
  )
}

const styles = StyleSheet.create({
    containerStyle:{
        marginLeft:15
    },
    imageStyle:{
        width:250,
        height:150,
        borderRadius:4,
    
    }
    ,
    nameStyle:{
        fontWeight:'bold',
        marginTop:5
    }
});