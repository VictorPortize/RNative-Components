import React from 'react'
import {StyleSheet, View, Dimensions} from 'react-native'

const {height , width} = Dimensions.get('screen')

export default props =>
    <View style={{width:width*0.1, height: width*0.1, borderRadius: (width*0.1)/2, backgroundColor:'gray', alignItems:'center', justifyContent:'center'}}>
        <View style={{width:width*0.08, height: width*0.08, borderRadius: (width*0.08)/2 ,backgroundColor:'white'}} >

        </View>
    </View>