import { View, Text , StyleSheet } from 'react-native'
import React, {useState, useEffect} from 'react'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults';

export default function SearchScreen() {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults('');
   

  return (
    <View>
      <SearchBar term= {term}
       onTermChange={setTerm}
       onTermSubmitted= {(searchTerm)=>searchApi(term)}
       />
      {errorMessage?(<Text>{errorMessage}</Text>):null}
      <Text>we hava found {results.length} results</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})