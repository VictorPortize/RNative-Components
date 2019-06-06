import React from 'react'
import {Dimensions, View, StyleSheet, Image, StatusBar} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import {toogleDrawer, goBack} from '../../Utils/NavigationService'
import Icon from '../Icon/Icon'


let {width, height} = Dimensions.get('screen')


interface Props{
    backArrow?:boolean,
    noMenu?:boolean,
    backFunc: Function
}

export default class Header extends React.Component<Props>{

    static defaultProps = {
        backArrow:false,
        backFunc: goBack
    }

    componentDidMount(){
        StatusBar.setBackgroundColor('#202224')
        StatusBar.setBarStyle('light-content')
    }

    render(){
        return(
            <LinearGradient style={styles.styleContainer} colors={['#202224','#202224']} >
                <View style={{flexDirection:'row'}}>
                    {this.props.backArrow? <Icon onPress={() => this.props.backFunc} size={width*0.05} colors={['#FF9100','#FFB217']} iconColor={'black'} styleRounded={styles.styleBackArrow} name={'back'} ></Icon> : null}
                    {this.props.noMenu? null : <Icon onPress={() => toogleDrawer()} size={this.props.backArrow? width*0.06 : width*0.07} iconColor={'white'} name={'menu'} styleRounded={this.props.backArrow? styles.styleMenu : {}}></Icon>}
                </View>
                <Image source={require('../../Images/QnetYelloWhite.png')} style={[styles.stylesImage,this.props.backArrow? {left:-width*0.084473763}: {}]}></Image>
                <View style={{width:width*0.07}}></View>
            </LinearGradient>                
        )
    }
}

const styles = StyleSheet.create({
    styleContainer:{
        height:height*0.1,
        width,
        alignItems:'center',
        paddingHorizontal:width*0.034666667,
        flexDirection:'row',
        justifyContent:'space-between',
        borderBottomLeftRadius:height*0.033973641,
        borderBottomRightRadius:height*0.033973641,
    },
    stylesImage:{
        width:width*0.30824,
        height:height*0.052473763,
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