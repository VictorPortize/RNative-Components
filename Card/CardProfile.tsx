import React, {Component} from 'react'
import {View, Image, Text, Dimensions, StyleSheet, ImageSourcePropType, TouchableNativeFeedback} from 'react-native'

let {width, height} = Dimensions.get('screen')

interface Props{
    image: ImageSourcePropType,
    nota: number | string,
    cargo: string,
    onPress: () => void
}

export default class CardProfile extends Component<Props>{

    static defaultProps = {
        image: require('../../Images/defaultImage.png'),
        cargo: 'COLABORADOR',
        nota: '0.0',
        onPress: () => {}
    }

    render(){
        return(
            <TouchableNativeFeedback onPress={this.props.onPress}>
                <View style={styles.styleContainer}>
                    <View style={styles.styleContainerText}>
                        <Text style={[styles.styleText,{fontSize:width*0.04}]}>{this.props.cargo}</Text>
                    </View>
                    <View style={styles.styleContainerImage}>
                        <Image style={styles.styleImage} source={this.props.image} />
                    </View>
                    <View style={styles.styleContainerText}>
                        <Text style={styles.styleText}>{`Sua nota: ${this.props.nota}`}</Text>
                    </View>
                </View>
            </TouchableNativeFeedback>
        )
    }
}

const styles = StyleSheet.create({
    styleContainer:{
        width:width*0.411904762,
        height:height*0.224184783,
        backgroundColor:'black',
        borderRadius:width*0.03,
        marginTop:height*0.020380435
    },
    styleContainerText:{
        alignItems:'center',
        justifyContent:'center',
        height:height*0.065217391,
        width:width*0.411904762,
    },
    styleContainerImage:{
        width:width*0.411904762,
        height:height*0.09375,
        backgroundColor:'#FFFFFF'
    },
    styleImage:{
        width:width*0.41190476,
        height:height*0.09375,
        resizeMode:'contain',
    },
    styleText:{
        fontSize:width*0.05,
        color:'white',
        fontWeight:'bold'
    }
})