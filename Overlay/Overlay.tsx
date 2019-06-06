import React, {Component} from 'react'
import {View, Text, Dimensions, Image, StyleSheet, StatusBar, TextInput,KeyboardAvoidingView} from 'react-native'
import StarRating from 'react-native-star-rating'
import Icon from '../Icon/Icon'
import Button from '../Button/ButtonGradient'

let {width, height} = Dimensions.get('screen')

interface Props{
    show: boolean,
    value: number,
    cambio: string
}

export default class Overlay extends Component<Props>{

    state = {
        rating:0,
        show:this.props.show
    }

    static defaultProps = {
        show:true,
        value:0.0,
        cambio:"R$",
    }


    componentDidMount(){
        StatusBar.setBackgroundColor('#00272d')
    }

    render(){
        if(this.state.show){
            return(
                <KeyboardAvoidingView style={styles.styleBackContainer} behavior={'position'} contentContainerStyle={{marginBottom:height*0.05}} >
                        <View style={styles.styleContainer}>
                            <Icon onPress={() => this.setState({show:false})} name={'close'} colors={['#008298','#00B19F']} iconColor={'white'} rounded size={width*0.025} styleRounded={styles.styleIcon} ></Icon>
                            <Image source={require('../../Images/perfil.png')} style={styles.styleImage}  ></Image>
                            <Text style={styles.styleTextName}>Matheus Souza</Text>
                            <Text style={styles.styleTextProfession}>Motorista</Text>
                            <View style={styles.styleDivision}></View>
                            <Text style={styles.styleText}>Avalie a pessoa que te atendeu</Text>
                            <StarRating containerStyle={{width:width*0.78, alignSelf:'center'}} halfStarEnabled selectedStar={rating => this.setState({rating})} rating={this.state.rating} fullStarColor={'#00989B'} halfStarColor={'#00989B'}  />
                            <TextInput placeholder={'Adicione um comentário'} multiline textAlignVertical={'top'} style={styles.styleComents} ></TextInput>
                            <Button buttonStyle={styles.styleButton} textStyle={styles.styleTextButton} angle={135} colors={['#FF9100','#FFB217']} title={`ENVIAR ${this.props.cambio} ${this.props.value}`} ></Button>
                        </View>
                </KeyboardAvoidingView>
            )
        }
        return null
    }
}

const styles = StyleSheet.create({
    styleBackContainer:{
        width,
        height,
        backgroundColor:'rgba(0,0,0,0.7)',
        justifyContent:'center',
        alignItems:'center',
        position:'absolute'
    },
    styleContainer:{
        width:width*0.872,
        height:height*0.655172414,
        backgroundColor:'white',
        borderRadius:width*0.03,
    },
    styleIcon:{
        position:'absolute',
        right:width*0.026666667,
        top:height*0.014992504,
        width:width*0.08,
        height:width*0.08,
        borderRadius:(width*0.08)/2,
        justifyContent:'center',
        alignItems:'center'
    },
    styleImage:{
        marginTop:height*0.028485757,
        alignSelf:'center',
        height:height*0.104947526,
        width:width*0.186666667,
        resizeMode:'contain'
    },
    styleTextName:{
        fontSize:width*0.055,
        fontWeight:'bold',
        textAlign:'center',
        marginTop:height*0.008995502
    },
    styleTextProfession:{
        textAlign:'center',
        fontStyle:'italic',
        fontSize:width*0.043
    },
    styleDivision:{
        marginTop:height*0.017241379,
        width:width*0.768,
        alignSelf:'center',
        backgroundColor:'#00989B',
        height:height*0.0035,
    },
    styleText:{
        fontSize:width*0.04,
        textAlign:'center',
        marginTop:height*0.01874063
    },
    styleComents:{
        height:height*0.178410795,
        width:width*0.8,
        alignSelf:'center',
        backgroundColor:'#ECECEC',
        borderRadius:10,
    },
    styleButton:{
        width:width*0.795306667,
        height:height*0.074962519,
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        marginTop:height*0.017991004,
        borderRadius:(height*0.074962519)/2
    },
    styleTextButton:{
        color:'white',
        fontSize:width*0.05,
    }
})