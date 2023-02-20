import { View, Text, SafeAreaView, StatusBar,Platform } from 'react-native'
import React from 'react'
import {NavigationContainer} from "@react-navigation/native"

const main = () => {
  return (
<View style = {{ paddingVertical : Platform.OS ==="android"?40:0}}>
    <SafeAreaView>
        <Text>Maths</Text>
    </SafeAreaView>
</View>
  )
}

export default main