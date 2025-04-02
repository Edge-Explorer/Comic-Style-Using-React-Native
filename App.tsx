import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'

import FancyCards from './components/FancyCards'
import Anime from './components/Anime'
import Linking from './components/Linking'
const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>  
        <FancyCards/>
        <Anime/>
        <Linking/>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App