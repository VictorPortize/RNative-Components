import React, {Component} from 'react'
import {Text, TextStyle, ViewStyle, TouchableNativeFeedback, KeyboardAvoidingView, Dimensions, StatusBar } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { AnimatedValue } from 'react-navigation';
import Icon from '../Icon/Icon'

let {height} = Dimensions.get('screen')

let space = StatusBar.currentHeight === undefined? 0 : StatusBar.currentHeight
height = height - space


export interface Props{
    textStyle?: TextStyle | Array<TextStyle>,
    buttonStyle: ViewStyle | Array<ViewStyle> | AnimatedValue ,
    title?: string,
    colors: Array<string>,
    onPress: Function,
    angle?: number,
    disable:boolean,
    underlayColor:string,
    keyboardAvoid:boolean,
    keyboardHeight: number,
    iconLeft?: boolean,
    iconRight?: boolean,
    iconLeftName?: string,
    iconRightName?: string,
    styleLeftIcon: ViewStyle | Array<ViewStyle>,
    styleRightIcon: ViewStyle | Array<ViewStyle>
    sizeLeftIcon: number,
    sizeRightIcon: number,
    colorIconLeft: string,
    colorIconRight: string,
    key?: any
}



export default class ButtonGradient extends Component<Props>{

    static defaultProps ={
        textStyle: {},
        buttonStyle: {},
        title: 'Button',
        colors: ['transparent','transparent'],
        onPress: () => {},
        angle: 90,
        disable:false,
        underlayColor:'transparent',
        keyboardAvoid:false,
        keyboardHeight:0,
        sizeLeftIcon:24,
        sizeRightIcon:24,
        styleLeftIcon:{},
        styleRightIcon:{},
        colorIconLeft:'black',
        colorIconRight:'black',
        key: '1'
    }

    onPress = () => {
        if(!this.props.disable){
            this.props.onPress()
        }
    }

    randomButtom = () => {
        const min = 1;
        const max = 10000;
        return min + Math.random() * (max - min);
    }
    
    render(){
        return(
            <KeyboardAvoidingView enabled={this.props.keyboardAvoid} behavior={'position'} >
                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(this.props.underlayColor, false)} onPress={this.onPress}> 
                    <LinearGradient  angle={this.props.angle} useAngle style={[{flexDirection:'row', justifyContent:'space-around',alignItems:'center'},this.props.buttonStyle, {opacity: this.props.disable? 0.5 : 1}]} colors={this.props.colors}>
                        {this.props.iconLeft? <Icon iconColor={this.props.colorIconLeft} size={this.props.sizeLeftIcon} styleRounded={this.props.styleLeftIcon} name={this.props.iconLeftName} /> : null }
                        <Text style={this.props.textStyle}>{this.props.title}</Text>
                        {this.props.iconRight? <Icon iconColor={this.props.colorIconRight} size={this.props.sizeRightIcon} styleRounded={this.props.styleRightIcon} name={this.props.iconRightName} /> : null }
                    </LinearGradient>
                </TouchableNativeFeedback>
            </KeyboardAvoidingView>
        )
    }

}