import { View, Text , StyleSheet } from 'react-native'
import React, {useState} from 'react'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults';
import ResultList from '../components/ResultList';

export default function SearchScreen() {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults('');

    const filterResultsByPrice = (price) =>{
        return results.filter(result =>{
            return result.price === price;
        });
    }
   

  return (
    <View>
      <SearchBar term= {term}
       onTermChange={setTerm}
       onTermSubmitted= {(searchTerm)=>searchApi(term)}
       />
      {errorMessage?(<Text>{errorMessage}</Text>):null}
      <Text>we hava found {results.length} results</Text>
      <ResultList  results ={filterResultsByPrice("$")} title= "Cost effective"/>
      <ResultList  results ={filterResultsByPrice("$$")} title= "Bit Pricier"/>
      <ResultList  results ={filterResultsByPrice("$$$")} title= "Big Spender"/>
    </View>
  )
}

const styles = StyleSheet.create({
    resultListStyle : {
        marginTop:100
    }
})