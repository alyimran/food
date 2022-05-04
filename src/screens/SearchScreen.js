import { View, Text , StyleSheet , ScrollView} from 'react-native'
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
    <>
      <SearchBar term= {term}
       onTermChange={setTerm}
       onTermSubmitted= {(searchTerm)=>searchApi(term)}
       />
       <ScrollView>
      <ResultList  results ={filterResultsByPrice("$")} title= "Cost effective"/>
      <ResultList  results ={filterResultsByPrice("$$")} title= "Bit Pricier"/>
      <ResultList  results ={filterResultsByPrice("$$$")} title= "Big Spender"/>
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({
    resultListStyle : {
        marginTop:100
    }
})