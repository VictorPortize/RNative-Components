import React from 'react'
import {View, StyleSheet, Text, Dimensions, Image} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'

let {width, height} = Dimensions.get('screen')

export interface Props{
    title?: string
}

export default class CardHeader extends React.Component<Props>{
    render(){
        return(
            <View>
                <LinearGradient colors={['#008298','#00B19F']} style={[styles.styleHeader]} >
                    <Image source={require('../../Images/logo_tiptapWhiteTop.png')} style={styles.styleImage} ></Image>
                </LinearGradient>
                <View style={styles.styleContainerText}>
                    <Text style={styles.styleText} >{this.props.title}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    styleHeader:{
        height:height*0.39,
        width:width,
        borderBottomLeftRadius:width*0.26,
        borderBottomRightRadius:width*0.26,
        justifyContent:'center',
        alignItems:'center'
    },
    styleImage:{
        width:width*0.3419,
        height:height*0.2153,
        resizeMode:'contain'
    },
    styleContainerText:{
        height:height*0.06,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        borderColor:'#00989B',
        borderWidth:1,
        top:-height*0.03,
        backgroundColor:'white',
        borderRadius:width*0.05,
    },
    styleText:{
        marginHorizontal:width*0.06,
        fontSize:width*0.045,
        color:'#00989B'
    }
})