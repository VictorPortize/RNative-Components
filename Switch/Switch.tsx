import React, {Component} from 'react'
import {View, Text, Dimensions, Animated, Alert, TouchableNativeFeedback} from 'react-native'
import { Color } from 'csstype';

const {width, height} = Dimensions.get('screen')

interface Props{
    height: number,
    width: number,
    positiveText:string,
    positiveTextColor:Color,
    negativeText: string,
    negativeTextColor:Color,
    backgroundColor:Color,
    switchColor: Color,
    onValueChange: Function,
    fontSize:number
}


export default class Switch extends Component<Props>{
    
    state = {
        value: false,
        translateX: new Animated.Value(-this.props.width/2 + this.props.width*0.393356643 + width*0.010666667),
        LeftText: new Animated.Value(0),
        RightText: new Animated.Value(1)
    }

    static defaultProps = {
        width:width*0.217904762,
        height:height*0.0625,
        positiveText:'True',
        negativeText:'False',
        backgroundColor:'#202224',
        switchColor:'white',
        onValueChange: () => {},
        fontSize:width*0.03,
        negativeTextColor:'white',
        positiveTextColor:'white'
    }

    render(){
        return(
            <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('transparent',false)} onPress={this.onPress}>
                <View style={{width:this.props.width, height:this.props.height, borderRadius:(this.props.height)/2, alignItems:'center', justifyContent:'space-around', backgroundColor:this.props.backgroundColor,flexDirection:'row'}}>
                    <Animated.Text style={{fontSize:this.props.fontSize, color:this.props.positiveTextColor, fontWeight:'bold', opacity:this.state.LeftText}}>{this.props.positiveText}</Animated.Text>
                    <Animated.View style={{width:this.props.width*0.393356643, height:this.props.height*0.782608696, borderRadius:(this.props.height*0.782608696)/2, backgroundColor:this.props.switchColor,position:'absolute',transform:[{translateX:this.state.translateX}]}}></Animated.View>
                    <Animated.Text style={{fontSize:this.props.fontSize, color:this.props.negativeTextColor, fontWeight:'bold', opacity:this.state.RightText}}>{this.props.negativeText}</Animated.Text>
                </View>
            </TouchableNativeFeedback>
        )
    }
    
    onPress = () =>{
        if(this.state.value){
            this.setState({value:false})
            this.setFalse()
        }
        else{
            this.setState({value:true})
            this.setTrue()
        }
        this.props.onValueChange.apply(this, [!this.state.value])
    }
    

    setTrue = () => {
        Animated.parallel([
            Animated.timing(this.state.translateX,{toValue:this.props.width - this.props.width*0.393356643 - (width*0.016666667)*2, duration:400}),
            Animated.timing(this.state.RightText,{toValue:0}),
            Animated.timing(this.state.LeftText,{toValue:1})
        ]).start()
    }

    setFalse = () => {
        Animated.parallel([
            Animated.timing(this.state.translateX,{toValue:-this.props.width/2 + this.props.width*0.393356643 + width*0.010666667, duration:400}),
            Animated.timing(this.state.RightText,{toValue:1}),
            Animated.timing(this.state.LeftText,{toValue:0})
        ]).start()
    }
}