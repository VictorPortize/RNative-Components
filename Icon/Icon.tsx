import React from 'react'
import {TouchableNativeFeedback, ViewStyle} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Selection from '../../Icons/selection.json'
import {createIconSetFromIcoMoon} from 'react-native-vector-icons'

const Icons = createIconSetFromIcoMoon(Selection)

interface Props{
    colors: Array<string>
    name: string,
    size?: number,
    onPress: Function,
    iconColor?:string,
    styleRounded?: ViewStyle | Array<ViewStyle>, 
    disable:false,
}

export default class Icon extends React.Component<Props>{

    state = {
        disable: this.props.disable
    }

    static defaultProps = {
        rounded:false,
        colors:['transparent','transparent'],
        name:'full-star',
        onPress:()=>{},
        size:24,
        disable:false,
    }


    onPress = () =>{
        if(!this.props.disable){
            this.props.onPress()
        }
    }

    render(){
        return(
            <TouchableNativeFeedback onPress={this.onPress} background={TouchableNativeFeedback.Ripple('transparent', false)} >
                <LinearGradient style={this.props.styleRounded} colors={this.props.colors}>
                    <Icons  color={this.props.iconColor} name={this.props.name} size={this.props.size} ></Icons>
                </LinearGradient>
            </TouchableNativeFeedback>
        )
    }
}