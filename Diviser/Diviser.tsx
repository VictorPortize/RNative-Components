import React from 'react'
import {View, Dimensions} from 'react-native'

let {height,width} = Dimensions.get('screen')

interface Props{
    size: number,
    color: string,
    width: number
}

export default class Diviser extends React.Component<Props>{

    static defaultProps={
        size:5,
        color:'black',
        width:width*0.1
    }

    render(){
        return(
            <View style={{backgroundColor:this.props.color, alignSelf:'center', width:this.props.width, height:height*(this.props.size/1000)}} ></View>
        )
    }
}