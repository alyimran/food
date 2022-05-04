import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import ResultsDetails from './ResultsDetails'

export default function ResultList({title, results}) {
  return (
    <View style ={{marginTop:20}}>
      <Text style ={styles.titleStyle}>{title}</Text>
      <Text style ={styles.titleStyle}>{results.length}</Text>
      <FlatList data={results}
      horizontal
      keyExtractor={(result)=> result.id}
      renderItem= {({item})=>{
          return <ResultsDetails result = {item}/>
      }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
    titleStyle:{
        fontSize:18,
        fontWeight:'bold'
    }
});