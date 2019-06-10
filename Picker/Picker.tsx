import React,{Component} from 'react'
import {View, StyleSheet, Animated, Text, Dimensions, Picker} from 'react-native'
import styles from './Styles'

import Button from '../Button/ButtonGradient'

let {width, height} = Dimensions.get('screen')

export default class Cambio extends Component{

    state = {
        selected : 'R$'
    }

    render(){
        return(
            <View>
                <View style={styles.containerSelector}>
                    <Text style={styles.selector}>SELECIONE</Text>
                </View>
                <Button />
                <View>
                </View>
            </View>
        )
    }
}
