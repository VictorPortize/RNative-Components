import React,{Component} from 'react'
import {View, StyleSheet, Animated, Text, Dimensions} from 'react-native'

let {width, height} = Dimensions.get('screen')

export default class Cambio extends Component{

    state = {
        selected : 'R$'
    }

    render(){
        return(
            <Animated.View>
                <Text style={styles.styleTextRS}>R$</Text>
            </Animated.View>
        )
    }
}

const styles = StyleSheet.create({
    styleTextRS:{
        fontSize:width*0.05,
        fontWeight:'bold',
        height:width*0.122392857,
        width:width*0.122392857
    },
})