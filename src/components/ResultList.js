import { View, Text, StyleSheet, FlatList , TouchableOpacity } from 'react-native'
import React from 'react'
import ResultsDetails from './ResultsDetails'
import { withNavigation } from 'react-navigation'

const ResultList= ({title, results, navigation})=> {
    if (!results.length)
    {
        return null;
    }
  return (
    <View style ={{marginTop:20}}>
      <Text style ={styles.titleStyle}>{title}</Text>
      <FlatList data={results}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(result)=> result.id}
      renderItem= {({item})=>{
          return (
              <TouchableOpacity onPress={()=>navigation.navigate("ResultsShow" , {id:item.id})}>
          <ResultsDetails result= {item}/>
           </TouchableOpacity>
          )
      }}
      />
    </View>
  )
}
const styles = StyleSheet.create({
    titleStyle:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15,
        marginBottom:10
    }
});

export default withNavigation(ResultList) 