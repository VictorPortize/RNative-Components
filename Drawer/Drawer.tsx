import React from 'react'
import {View, Text, Image, StyleSheet, Dimensions, StatusBar} from 'react-native'
import {DrawerItemsProps} from 'react-navigation'
import Button from '../Button/ButtonGradient'
import Icon from '../Icon/Icon'
import Diviser from '../Diviser/Diviser'

let {width, height} = Dimensions.get('screen')

let value = StatusBar.currentHeight === undefined? 24 : StatusBar.currentHeight
height = height - value

export default class Drawer extends React.Component<DrawerItemsProps>{
    render(){
        return(
            <View style={styles.styleContainer}>
                <View style={styles.styleHeader}>
                    <Image style={styles.styleImage} source={require('../../Images/logo_tiptapBlue.png')} />
                    <Icon styleRounded={styles.styleIcon} onPress={()=> this.props.navigation.toggleDrawer()} name={'close'} size={width*0.07} iconColor={'#00989B'} />
                </View>
                <Diviser color={'#00989B'} size={2} width={width*0.645333333} />
                <View style={styles.styleContainerImage}>
                    <Image style={styles.styleAvatar} source={require('../../Images/perfil.png')} />
                    <View style={{paddingLeft:width*0.050666667}}>
                        <Text style={styles.styleTextName}>Luciano Mathias</Text>
                        <Text style={styles.styleTextProfession}>Empresário</Text>
                    </View>
                </View>
                <Button angle={135} colors={['#FF9100','#FFB217']} title={'EDITAR PERFIL'} buttonStyle={styles.styleButton} textStyle={styles.styletxtButton} />
                <Diviser color={'#00989B'} size={2} width={width*0.645333333} />
                <Text style={styles.styleTextButton}>Últimas gorjetas</Text>
                <Text style={styles.styleTextButton}>Cartão de Crédito</Text>
                <Text style={styles.styleTextButton}>Configurações</Text>
                <Text style={styles.styleTextButton}>Compartilhar</Text>
                <Text style={styles.styleTextButton}>Sair</Text>
                <View style={styles.styleContainerIconFooter} >
                    <Text style={styles.styleTextIcon}>Powered by</Text>
                    <Icon name={'quality'} size={width*0.14}  />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    styleContainer:{
        paddingHorizontal:width*0.052,
        height,
        width:width*0.754666667
    },
    styleHeader:{
        flexDirection:'row',
        alignItems:'center',
        height:height*0.125187406,
    },
    styleImage:{
        width:width*0.556219081,
        height:height*0.071469265,
        resizeMode:'contain',
    },
    styleIcon:{
        padding:width*0.01
    },
    styleContainerImage:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:height*0.038230885,
        marginBottom:height*0.028485757
    },
    styleAvatar:{
        width:width*0.28975265,
        height:width*0.28975265,
        resizeMode:'contain',
        borderRadius:(width*0.28975265)/2
    },
    styleTextName:{
        fontSize:width*0.04,
        fontWeight:'bold',
        width:width*0.37,
    },
    styleTextProfession:{
        fontSize:width*0.03,
    },
    styleButton:{
        width:width*0.629333333,
        height:height*0.059970015,
        borderRadius:(height*0.059970015)/2,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:height*0.033733133
    },
    styletxtButton:{
        fontSize:width*0.04,
        fontWeight:'bold',
        color:'white'
    },
    styleContainerIconFooter:{
        position:'absolute',
        bottom:height*0.042548726,
        marginLeft:width*0.052,
    },
    styleTextIcon:{
        top:height*0.03
    },
    styleTextButton:{
        fontSize:width*0.04,
        fontWeight:'bold',
        marginTop:height*0.038230885,
    }
})