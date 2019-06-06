import React, {Component} from 'react'
import {View, TextInput,StyleSheet, ViewStyle, KeyboardTypeOptions, Text, TextStyle, TextInputProps, Dimensions, TouchableNativeFeedback } from 'react-native'
import {createIconSetFromIcoMoon} from 'react-native-vector-icons'
import selection from '../../Icons/selection.json'

let {width, height} = Dimensions.get('screen')

const Icon = createIconSetFromIcoMoon(selection)

interface Props extends TextInputProps {
    icon: string,
    iconSize: number,
    iconColor: string,
    styleInput: ViewStyle | Array<ViewStyle>,
    placeholder: string,
    password: boolean,
    styleIcon: ViewStyle,
    keyboardType: KeyboardTypeOptions,
    label?: string,
    styleLabel?: TextStyle,
    align?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline",
    onChangeText: (text: string) => void,
    onPress: () => void
}

export default class Input extends Component<Props>{
    
    static defaultProps = {
        icon:undefined,
        iconSize:width*0.05,
        styleInput:{},
        placeholder:"Placeholder",
        password:false,
        styleIcon:{},
        iconColor:'black',
        keyboardType:'default',
        onChangeText: () => {},
        onPress: () => {},
        value: undefined,
        editable: true,
        align:'center'
}

    render(){
        return(
            <View style={{alignSelf:this.props.align}}>
                {this.props.label? <Text style={this.props.styleLabel}>{this.props.label}</Text> : null}
                <View style={styles.styleContainerInput}>
                    <TextInput multiline={this.props.multiline} placeholderTextColor={this.props.placeholderTextColor} value={this.props.value} maxLength={this.props.maxLength} onChangeText={text => this.props.onChangeText(text)} onFocus={this.props.onFocus} keyboardType={this.props.keyboardType} secureTextEntry={this.props.password} placeholder={this.props.placeholder} style={[this.props.styleInput, styles.styleInput ,{}]}></TextInput>
                    <TouchableNativeFeedback onPress={this.props.onPress}>
                        <View style={styles.styleIcon}>
                            <Icon color={this.props.iconColor} name={'find'}size={this.props.iconSize}></Icon>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    styleContainerInput:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
    },
    styleIcon:{
        backgroundColor:'#FF9602',
        justifyContent:'center',
        alignItems:'center',
        height:height*0.061141304,
        width:width*0.124428571,
        borderTopRightRadius:height*0.030570652,
        borderBottomRightRadius:height*0.030570652,
    },
    styleInput:{
        width:width*0.739857143,
        height:height*0.061141304,
        borderRadius:(height*0.061141304)/2,
        backgroundColor:'white',
        borderTopRightRadius:0,
        borderBottomRightRadius:0,
        paddingLeft:width*0.04,
    }
})