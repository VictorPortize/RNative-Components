import React from 'react'
import {Dimensions, View, StyleSheet, Image, StatusBar, ViewStyle, Alert} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
// import {toogleDrawer} from '../../Utils/NavigationService'
import Icon from '../Icon/Icon'
import { Color } from 'csstype';


let {width, height} = Dimensions.get('screen')
const image = require('../../Images/logo.png')
const colors = ['#FFFFFF','#FFFFFF']
const arrowColors = ['#0BB7B7','#0BB7B7']

interface Props{
    backArrow?:boolean,
    colors: Color,
    arrowColors: Color,
    headerStyle: ViewStyle | Array<ViewStyle>
}

export default class Header extends React.Component<Props>{

    static defaultProps = {
        backArrow:false,
        colors : ['#FFFFFF','#FFFFFF'],
        arrowColors : ['#0BB7B7','#0BB7B7'],
        headerStyle: {}
    }

    componentDidMount(){
        StatusBar.setBackgroundColor('#FFF')
        StatusBar.setBarStyle('dark-content')
    }

    render(){
        return(
            <LinearGradient style={[styles.styleContainer, this.props.headerStyle]} colors={colors}  >
                <View style={{flexDirection:'row'}}>
                    {this.props.backArrow? <Icon size={width*0.05} onPress={() => Alert.alert('asdas','asdasd')} colors={arrowColors} iconColor={'white'} styleRounded={styles.styleBackArrow} name={'back'} ></Icon> : null}
                <Icon onPress={() => Alert.alert('asdasd','sdasdas')} size={this.props.backArrow? width*0.06 : width*0.07} iconColor={'white'} name={'menu'} styleRounded={this.props.backArrow? styles.styleMenu : {}}></Icon>
                </View>
                <Image source={image} style={[styles.stylesImage,this.props.backArrow? {left:-width*0.084473763}: {}]}></Image>
                <View style={{width:width*0.07}}></View>
            </LinearGradient>
        )
    }
}

const styles = StyleSheet.create({
    styleContainer:{
        height:height*0.1,
        width,
        display:'flex',
        alignItems:'center',
        paddingHorizontal:width*0.034666667,
        flexDirection:'row',
        justifyContent:'space-between',
        elevation: 10,
        borderRadius: 0.1,
    },
    stylesImage:{
        width:width*0.35,
        height:height*0.06,
        resizeMode:'contain',
    },
    styleBackArrow:{
        height:height*0.052473763,
        width:height*0.052473763,
        borderRadius:(height*0.052473763)/2,
        alignItems:'center',
        justifyContent:'center'
    },
    styleMenu:{
        justifyContent:'center',
        alignItems:'center',
        height:height*0.052473763,
        width:height*0.052473763,
        marginLeft:width*0.032
    }
})