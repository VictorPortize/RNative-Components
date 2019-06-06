import React, {Component} from 'react'
import {View, Text, Image, Dimensions, StyleSheet, ImageSourcePropType} from 'react-native'
import Input from '../TextInput/Input'
import Button from '../Button/ButtonGradient'
import Switch from '../Switch/Switch'
import takePic from '../../Utils/Camera'
import { RNCamera } from 'react-native-camera';

let {width, height} = Dimensions.get('screen')

interface Props{
    text: string,
    type: 'S_N' | 'TEXTO' |'IMAGEM',
    source: ImageSourcePropType,
    getValue: Function
}

export default class TaskComponent extends Component<Props>{

    static defaultProps = {
        text:'A Tarefa foi concluída?',
        type:'none',
        getValue: () => {},
        source: require('../../Images/defaultImage.png')
    }

    constructor(props:Props){
        super(props)
    }

    state = {
        switch:false,
        source:undefined
    }
    
    render(){
        return this.types()
    }

    setValueProp = (value:any) => {
        this.props.getValue.apply(this, [value]);
    }
    
    setPhoto = (value:any) => {
        this.setState({ source: value.uri })
        console.log(value)
        var dtFoto = {
            uri: value.uri,
            type: value.type,
            name: value.fileName,
            data: value.data
        }
        this.props.getValue.apply(this, [dtFoto]);
    }

    types = () => {
        switch(this.props.type){
            case'TEXTO':
                return this.typeInput()
            case 'IMAGEM':
                return this.typePic()
            case 'S_N':
                return this.typeSwitch()
            default:
                return this.typeInput()
        }
    }

    typeSwitch = () => (
        <View style={styles.styleContainerSlider}>
            <Text style={styles.styleTextSwitch}>{this.props.text}</Text>
            <Switch negativeText={'NÃO'} positiveText={'SIM'} onValueChange={(text: any) => this.setValueProp(text)} />
        </View>
    )
    
    typeInput = () => (
        <View style={styles.stylesContainerInput}>
            <Input styleLabel={[styles.styleTextSwitch, { flex: undefined }]} label={this.props.text} placeholder={'Digite aqui'} styleInput={styles.styleInput} onChangeText={(text) => this.setValueProp(text) }/>
        </View>      
    )

    typePic = () => (
        <View>
            <Text style={[styles.styleTextSwitch,{marginLeft:width*0.061904762}]}>Tire uma foto do local</Text>
            <Button textStyle={styles.styleTextButton} angle={135} colors={['#202224', '#343639']} buttonStyle={styles.styleButtonPic} title={"Tirar foto do local"} onPress={ () => takePic((img: any) => { this.setPhoto(img) }) }/>
            <Image style={styles.styleImage} source={this.state.source == undefined ? this.props.source : {uri:this.state.source} } />
        </View>
    )
}

const styles = StyleSheet.create({
    styleContainerSlider:{
        width:width*0.880880952,
        alignSelf:'center',
        justifyContent:'space-between',
        alignItems:'center',
        flexDirection:'row',
        height:height*0.0625,
        marginTop:height*0.017663043
    },
    stylesContainerInput:{
        width:width*0.880880952,
        alignSelf:'center',
        marginTop:height*0.017663043,
    },
    styleSwitch:{
        flex:0.247371408
    },
    styleTextSwitch:{
        fontSize:width*0.05,
        flex:0.752628592
    },
    styleInput:{
        width:width*0.880880952,
        paddingHorizontal:width*0.04,
        backgroundColor:'#FFFFFF',
        height:height*0.061141304,
        borderRadius:(height*0.061141304)/2
    },
    styleImage:{
        width:width*0.764904762,
        height:height*0.1171875,
        resizeMode:'contain',
        alignSelf:'center'        
    },
    styleButtonPic:{
        width:width*0.864904762,
        height:height*0.061141304,
        borderRadius:(height*0.061141304)/2,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        marginTop:height*0.024456522,
    },
    styleTextButton:{
        fontSize:width*0.05,
        color:'white',
        fontWeight:'bold'
    }
})