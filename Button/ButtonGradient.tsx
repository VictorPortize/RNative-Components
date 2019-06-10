import React, {Component} from 'react'
import {Text, TextStyle, ViewStyle, TouchableNativeFeedback, ActivityIndicator, KeyboardAvoidingView, Dimensions, StatusBar } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { AnimatedValue } from 'react-navigation';

let {height} = Dimensions.get('screen')

let space = StatusBar.currentHeight === undefined? 0 : StatusBar.currentHeight
height = height - space


export interface Props{
    textStyle?: TextStyle,
    buttonStyle: ViewStyle | Array<ViewStyle> | AnimatedValue ,
    title?: string,
    colors: Array<string>,
    loading?: boolean,
    onPress: Function,
    styleLoading?: ViewStyle,
    angle?: number,
    disable:boolean,
    underlayColor:string,
    keyboardAvoid:boolean,
    keyboardHeight: number
}

interface State{
    loading: boolean
}


export default class ButtonGradient extends Component<Props, State>{

    static defaultProps ={
        textStyle: {},
        buttonStyle: {},
        title: 'Button',
        colors: ['white','white'],
        loading: false,
        onPress: () => {},
        angle: 90,
        disable:false,
        underlayColor:'#fff',
        keyboardAvoid:false,
        keyboardHeight:0
    }
    
    constructor(props: Props){
        super(props)

        this.state = {
            loading : this.props.loading || false
        }
        
    }

    toggleLoading = ()=>{
        if(!this.props.disable){
            this.setState({loading:!this.state.loading})
            this.props.onPress()
        }
    }

    render(){
        return(
            <KeyboardAvoidingView enabled={this.props.keyboardAvoid} behavior={'position'} contentContainerStyle={{marginBottom: space + this.props.keyboardHeight}}  >
                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple(this.props.underlayColor, false)} onPress={this.toggleLoading}> 
                    <LinearGradient  angle={this.props.angle} useAngle style={this.props.buttonStyle} colors={this.props.colors.length == 1? this.props.colors.concat(this.props.colors[0]): this.props.colors}>
                            <Text style={this.props.textStyle}>{this.props.title}</Text>
                    </LinearGradient>
                </TouchableNativeFeedback>
            </KeyboardAvoidingView>
        )
    }

}