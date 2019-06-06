import React from 'react'
import {View, Image, StyleSheet, Dimensions, Text, ScrollView, ViewStyle, TouchableNativeFeedback} from 'react-native'
import Icon from '../Icon/Icon'

let {width, height} = Dimensions.get('screen')

interface Props{
    selected: boolean,
    style: Array<ViewStyle> | ViewStyle,
    icon?: string,
    colors?: Array<string>,
    withoutIcon?:boolean,
    backgroundColor?: string,
    textColor?:string,
    styleContainer?: ViewStyle,
    onPress?: () => void,
    marginTop: number,
    isDisable:boolean,
    size: number
}

export default class CardUser extends React.Component<Props>{

    static defaultProps = {
        selected: false,
        style: {},
        icon: 'profile',
        withoutIcon:false,
        backgroundColor:'#ECECEC',
        onPress:() => {},
        marginTop: height*0.001,
        isDisable:false,
        size: width*0.052983508
    }

    render(){
        return(
            <View style={[styles.styleContainer, {backgroundColor:this.props.backgroundColor,marginTop:this.props.marginTop}, this.props.styleContainer,]}>
                <Image style={styles.styleImage} source={require('../../Images/perfil.png')}></Image>
                <ScrollView contentContainerStyle={{justifyContent:'center'}} style={styles.styleText}>
                    <Text style={[styles.styleTextName, {color:this.props.textColor}]}>Matheus Souza</Text>
                    <Text style={[styles.styleTextProfession, {color:this.props.textColor}]}>Garçom</Text>
                </ScrollView>
                {this.props.withoutIcon? null : 
                    <View  style={{flexDirection:'row'}}>
                        <Icon  isDisable={this.props.isDisable} onPress={this.props.onPress} disableColors={['rgba(0, 130, 152, 0.2)','rgba(0, 177, 159, 0.2)']} iconColor={'white'} styleRounded={styles.styleIcon} colors={this.props.colors || ['#008298','#00B19F']} size={this.props.size} name={this.props.icon}></Icon>
                        {this.props.selected? null : <Icon disableColors={['#FF9100','#FFB217']} iconColor={'white'} styleRounded={styles.styleIcon} colors={['#FF9100','#FFB217']} size={width*0.062983508} name={'cipher'}></Icon>}
                    </View>}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    styleContainer:{
        width:width*0.917333333,
        height:height*0.089955022,
        flexDirection:'row',
        alignSelf:'center',
        alignItems:'center',
        paddingHorizontal:width*0.026666667,
        borderRadius:(height*0.089955022)/2,
        justifyContent:'space-between',
    },
    styleImage:{
        width:height*0.065967016,
        height:height*0.065967016,
        resizeMode:'contain'
    },
    styleIcon:{
        width:height*0.065967016,
        height:height*0.065967016,
        borderRadius:(height*0.065967016)/2,
        alignItems:'center',
        justifyContent:'center',
        marginLeft:width*0.018666667
    },
    styleText:{
        flex:1,
        height:height*0.089955022,
        marginLeft:width*0.037333333,
    },
    styleTextName:{
        fontSize:width*0.05,
        fontWeight:'bold',
        textAlign:'left',
        top:height*0.01,
    },
    styleTextProfession:{
        fontSize:width*0.04,
        textAlign:'left'
    }
})