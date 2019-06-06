import React from 'react'
import {View, Text, ViewStyle, TextStyle} from 'react-native'


interface Props{
    date:string,
    cambio: string,
    value: string,
    containerStyle?: ViewStyle,
    styleText?: TextStyle
}

export default class PriceText extends React.Component<Props>{
    render(){
        return(
            <View style={[this.props.containerStyle,{flexDirection:'row'}]}>
                <Text style={this.props.styleText} >{this.props.date} </Text>
                <Text style={[this.props.styleText,{fontWeight:'bold'}]} >{this.props.cambio} <Text style={this.props.styleText}>{this.props.value}</Text></Text>
            </View>
        )
    }
}