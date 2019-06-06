import React , {Component} from 'react'
import {View, Text, StyleSheet, Dimensions, NativeEventEmitter} from 'react-native'
import Icon from '../Icon/Icon'
import Button from '../Button/ButtonGradient'

let {width, height} = Dimensions.get('screen')

interface Props{
    show: boolean,
    type: string,
    message: string,
    fncOk?: Function,
    fncCancel?: Function
}

let Emiter = new NativeEventEmitter()


export default class QNetOverlay extends Component<Props>{

    static defaultProps = {
        message:'Tem certeza que deseja reportar o início da jornada'
    }

    render(){
        return this.switchOverlay()
    }

    close = () =>{
        Emiter.emit('hideOver')
    }

    switchOverlay = () => {
        if(this.props.show){
            switch(this.props.type){
                case 'error':
                    return this.showError()
                case 'init':
                    return this.showInit()
                case 'sos':
                    return this.showSOS()
                case 'sucess':
                    return this.showSucess()
                default:
                    return null
            }
        }
        return null
    }

    showError = () => (
        <View style={styles.styleContainer}>
            <View style={styles.styleBox}>
                <Icon onPress={this.close} iconColor={'white'} styleRounded={styles.styleClose} colors={['#202224','#343639']} rounded size={width*0.03} name={'close'}></Icon>
                <View style={styles.styleBoxItems}>
                    <View style={[styles.styleTop,{justifyContent:'center'}]}>
                        <Icon iconColor={'white'} styleRounded={styles.styleIconErro} colors={['red','red']} rounded size={width*0.03} name={'close'}></Icon>
                        <Text style={styles.title}>ERRO</Text>
                    </View>
                    <Text style={[styles.styleInfo,{marginTop:height*0.025095109}]}>Solicitação de início de jornada negada por não haver configuração ativa</Text>
                    <Button onPress={this.close} textStyle={[styles.styleSmallButtonText,{color:'black'}]} title={'Fechar'} buttonStyle={styles.styleButton} angle={135} colors={['#FF9100','#FFB217']} />
                </View>
            </View>
        </View>
    )

    showInit = () => (
        <View style={styles.styleContainer}>
            <View style={styles.styleBox}>
                <Icon onPress={this.close} iconColor={'white'} styleRounded={styles.styleClose} colors={['#202224','#343639']} rounded size={width*0.03} name={'close'}></Icon>
                <View style={styles.styleBoxItems}>
                    <Text style={[styles.title, {marginTop:height*0.033967391}]}>ATENÇÃO</Text>
                    <Text style={[styles.styleInfo, { marginTop: height * 0.03205163 }]}>{this.props.message}</Text>
                    <View style={[styles.styleTop,{justifyContent:'space-around', marginTop:height*0.05}]}>
                        <Button onPress={this.props.fncCancel} textStyle={styles.styleSmallButtonText} angle={135} colors={['#202224','#343639']} buttonStyle={styles.styleSmallButton} title={'Cancelar'}></Button>
                        <Button onPress={this.props.fncOk} textStyle={[styles.styleSmallButtonText,{color:'black'}]} angle={135} colors={['#FF9100','#FFB217']} buttonStyle={styles.styleSmallButton} title={'Enviar'}></Button>
                    </View>
                </View>
            </View>
        </View>
    )

    showSOS = () => (
        <View style={styles.styleContainer}>
            <View style={[styles.styleBox, {backgroundColor:'red'}]}>
                <Icon onPress={this.close} iconColor={'black'} styleRounded={styles.styleClose} colors={['#FFFFFF','#FFFFFF']} rounded size={width*0.03} name={'close'}></Icon>
                <View style={styles.styleBoxItems}>
                    <Text style={[styles.title, {marginTop:height*0.033967391, color:'white'}]}>EMERGENCIA</Text>
                    <Text style={[styles.styleInfo, {marginTop:height*0.03205163, color:'white'}]}>Tem certeza que deseja reportar o início da jornada?</Text>
                    <View style={[styles.styleTop,{justifyContent:'space-around', marginTop:height*0.05}]}>
                        <Button onPress={this.close} textStyle={styles.styleSmallButtonText} angle={135} colors={['#202224','#343639']} buttonStyle={styles.styleSmallButton} title={'Cancelar'}></Button>
                        <Button textStyle={[styles.styleSmallButtonText,{color:'black'}]} angle={135} colors={['#FFFFFF','#FFFFFF']} buttonStyle={styles.styleSmallButton} title={'Enviar'}></Button>
                    </View>
                </View>
            </View>
        </View>
    )

    showSucess = () => (
        <View style={styles.styleContainer}>
            <View style={styles.styleBox}>
                <Icon onPress={this.close} iconColor={'white'} styleRounded={styles.styleClose} colors={['#202224','#343639']} rounded size={width*0.03} name={'close'}></Icon>
                <View style={styles.styleBoxItems}>
                    <View style={[styles.styleTop,{justifyContent:'center'}]}>
                        <Icon iconColor={'white'} styleRounded={styles.styleIconErro} colors={['#67b242','#67b242']} rounded size={width*0.03} name={'check'}></Icon>
                        <Text style={[styles.title, { fontSize: width * 0.04 }]}>ATENÇÃO</Text>
                    </View>
                    <Text style={[styles.styleInfo, { marginTop: height * 0.025095109 }]}>{this.props.message}</Text>
                    <Button onPress={this.close} textStyle={[styles.styleSmallButtonText,{color:'black'}]} title={'Fechar'} buttonStyle={styles.styleButton} angle={135} colors={['#FF9100','#FFB217']} />
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    styleContainer:{
        width,
        height, 
        backgroundColor:'rgba(0,0,0,0.5)', 
        position:'absolute', 
        alignItems:'center', 
        justifyContent:'center'
    },
    styleBox:{
        width:width*0.84047619,
        height:height*0.289157609, 
        backgroundColor:'white', 
        borderRadius:width*0.025
    },
    styleClose:{
        width:width*0.081428571, 
        height:width*0.081428571, 
        borderRadius:width*0.071428571, 
        alignItems:'center', 
        justifyContent:'center',
        alignSelf:'flex-end', 
        marginTop:height*0.013586957, 
        right:width*0.023809524, 
        position:'absolute',zIndex:3
    },
    styleBoxItems:{
        position:'absolute', 
        width:width*0.84047619
    },
    styleTop:{
        alignItems:'center', 
        flexDirection:"row", 
        marginTop:height*0.033967391
    },
    styleIconErro:{
        width:width*0.071428571, 
        height:width*0.071428571, 
        borderRadius:width*0.071428571, 
        alignItems:'center', 
        justifyContent:'center', 
        marginRight:width*0.02
    },
    styleInfo:{
        width:width*0.604761905,
        alignSelf:'center',
        textAlign:'center', 
    },
    title:{
        alignSelf:'center',
        fontSize:width*0.05, 
        fontWeight:'bold', 
        color:'black'
    },
    styleSmallButtonText:{
        fontSize:width*0.05, 
        fontWeight:'bold',
        color:'white'
    },
    styleSmallButton:{
        width:width*0.357142857, 
        height:height*0.061141304, 
        borderRadius:(height*0.107142857)/2
    },
    styleButton:{
        width:width*0.74252381,
        height:height*0.061141304, 
        borderRadius:(height*0.061141304)/2, 
        alignSelf:'center', 
        marginTop:height*0.03
    }
})