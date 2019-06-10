import React, {Component} from 'react'
import {View, TextInput,StyleSheet, ViewStyle, KeyboardTypeOptions, Text, TextStyle, TextInputProps } from 'react-native'
import {createIconSetFromIcoMoon} from 'react-native-vector-icons'
import selection from '../../../Icons/selection.json'

const Icon = createIconSetFromIcoMoon(selection)

interface Props extends TextInputProps {
    icon: string,
    iconSize: number,
    iconColor: string,
    styleInput: ViewStyle | Array<ViewStyle>,
    styleContainerInput: ViewStyle | Array<ViewStyle>,
    placeholder: string,
    password: boolean,
    styleIcon: ViewStyle,
    keyboardType: KeyboardTypeOptions,
    label?: string,
    styleLabel?: ViewStyle | Array<ViewStyle>,
    align?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline",
    onChangeText: (text: string) => void
}

export default class Input extends Component<Props>{
    
    static defaultProps = {
        icon:undefined,
        iconSize:24,
        styleInput:{},
        styleContainerInput:{},
        placeholder:"Placeholder",
        password:false,
        styleIcon:{},
        iconColor:'black',
        keyboardType:'default',
        onChangeText: () => {},
        value: undefined,
        editable: true
}

    render(){
        return(
            <View style={{alignSelf:this.props.align}}>
                {this.props.label? <Text style={this.props.styleLabel}>{this.props.label}</Text> : null}
                <View style={[styles.styleContainerInput,this.props.styleContainerInput]}>
                    <TextInput editable={this.props.editable} value={this.props.value} maxLength={this.props.maxLength} onChangeText={text => this.props.onChangeText(text)} onFocus={this.props.onFocus} keyboardType={this.props.keyboardType} secureTextEntry={this.props.password} placeholder={this.props.placeholder} style={this.props.styleInput}></TextInput>
                    {this.props.icon == undefined? null : <View style={this.props.styleIcon}><Icon color={this.props.iconColor} name={this.props.icon}size={this.props.iconSize} ></Icon></View>}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    styleContainerInput:{
        flexDirection:'row',
        alignItems:'center',
    }
})