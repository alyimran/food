import { View, TextInput , StyleSheet } from 'react-native'
import React, {useState} from 'react'
import {Feather} from "@expo/vector-icons"

export default function SearchBar({term , onTermChange , onTermSubmitted}) {
   
  return (
    <View style= {styles.backgourndStyle}>
        <Feather name='search' 
        style= {styles.iconStyle}/>
      <TextInput 
      style={styles.inputStyle} 
      placeholder='Search'
      value={term}
      onChangeText={onTermChange}
      onEndEditing={onTermSubmitted}/>
    </View>
  )
}

const styles = StyleSheet.create({
    backgourndStyle:{
        backgroundColor:'#eee',
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row',
        marginTop:10,
        marginBottom:10
    }
    ,
    inputStyle:{
        flex:1,
        fontSize:18
    },
    iconStyle : {
        fontSize:35,
        alignSelf:'center',
        marginHorizontal:15
    }
})

