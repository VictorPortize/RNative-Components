import React, {Component} from 'react'
import {View,Image , Text, Dimensions, StyleSheet, ScrollView} from 'react-native'
import Icon from '../../Components/Icon/Icon'

const {width, height} = Dimensions.get('screen')

interface Props{
    find : boolean
}


export default class Finder extends Component<Props>{
    render(){
        return(
            <ScrollView contentContainerStyle={styles.styleContainer}>
            {this.props.find == false?
                <View style={{justifyContent:'center',alignItems:'center'}}>
                    <Icon iconColor={'rgba(81, 81, 81, 0.2)'} size={width*0.32} name={'find'}  />
                    <Text style={styles.styleText}>Insira o nome da pessoa na barra de pesquisa acima</Text>
                </View>
                :
                <Image style={styles.styleImage} source={require('../../Images/gif_load.gif')} />
            }
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    styleContainer:{
        height:height*0.688155922,
        marginTop:height*0.023988006,
        justifyContent:'center',
        alignItems:'center'
    },
    styleText:{
        width:width*0.5,
        alignSelf:'center',
        fontSize:width*0.04,
        color:'rgba(81, 81, 81, 0.2)',
        marginTop:height*0.031484258,
        textAlign:'justify'
    },
    styleImage:{
        width:width*0.312693333,
        height:width*0.312693333,
        resizeMode:'contain'
    }
})