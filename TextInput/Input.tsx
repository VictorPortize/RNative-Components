import React, {Component} from 'react'
import {View, TextInput,StyleSheet, ViewStyle, KeyboardTypeOptions, Text, TextStyle, TextInputProps } from 'react-native'
import Icon from '../Icon/Icon'

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
    styleLabel?: TextStyle | Array<TextStyle>,
    align?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline",
    onChangeText: (text: string) => void,
    containerStyle: ViewStyle | Array<ViewStyle>,
    onIconPress: () => void
}

export default class Input extends Component<Props>{
    
    static defaultProps = {
        icon:undefined,
        iconSize:24,
        styleInput:{},
        placeholder:"Placeholder",
        password:false,
        styleIcon:{},
        iconColor:'black',
        keyboardType:'default',
        onChangeText: () => {},
        value: undefined,
        editable: true,
        containerStyle: {},
        onIconPress: () => {}
}

    render(){
        return(
            <View style={{alignSelf:this.props.align}}>
                {this.props.label? <Text style={this.props.styleLabel}>{this.props.label}</Text> : null}
                <View style={[styles.styleContainerInput, this.props.containerStyle]}>
                    <TextInput autoCapitalize={this.props.autoCapitalize} multiline={this.props.multiline} placeholderTextColor={this.props.placeholderTextColor} editable={this.props.editable} value={this.props.value} maxLength={this.props.maxLength} onChangeText={text => this.props.onChangeText(text)} onFocus={this.props.onFocus} keyboardType={this.props.keyboardType} secureTextEntry={this.props.password} placeholder={this.props.placeholder} style={[this.props.styleInput,{ zIndex:2}]}></TextInput>
                    {this.props.icon == undefined? null : <View style={this.props.styleIcon}><Icon onPress={this.props.onIconPress} iconColor={this.props.iconColor} name={this.props.icon}size={this.props.iconSize} ></Icon></View>}
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