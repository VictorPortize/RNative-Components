import React, {Component} from 'react'
import {View, Text, Dimensions, StyleSheet, TouchableNativeFeedback, Animated} from 'react-native'
import Button from '../../Components/Button/ButtonGradient'
import StarRating from 'react-native-star-rating'
import CardUser from './CardUser';
import PriceText from '../../Components/Price/PriceText';

let {width, height} = Dimensions.get('screen')


export default class CardFav extends Component{

    state = {
        show :false ,
        rating: 0,
        height: new Animated.Value(height*0.125777111)
    }

    render(){
        const colors = this.state.show? ['#FF9100','#FFB217'] : undefined
        let icon = this.state.show? 'close' : 'eye'
        return(
            <Animated.View style={[styles.styleCardUser,{height:this.state.height}]}>
                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('transparent',false)} onPress={() => this.animateDrop()}>
                    <View style={styles.styleCardUser}>
                        <CardUser size={width*0.033} onPress={() => this.animateDrop()}  colors={colors} selected icon={icon} />
                    </View>
                </TouchableNativeFeedback>
                <View style={styles.styleContainer}>
                    <Text style={styles.styleTextTips}>Avaliação</Text>
                    <StarRating starSize={width*0.1} containerStyle={styles.styleContainerRating} starStyle={{height:height*0.05}} halfStarEnabled selectedStar={rating => this.setState({rating})} rating={this.state.rating} fullStarColor={'#00989B'} halfStarColor={'#00989B'}  />
                </View>
                <Text style={styles.styleTextTips}>Ultimas gorjetas:</Text>
                <View style={styles.styleContainerTips}>
                    <PriceText containerStyle={styles.styleContainerPrice} date={'20 de Janeiro de 2019'} cambio={'R$'} value={'10,00'} />
                    <PriceText containerStyle={styles.styleContainerPrice} date={'18 de Março de 2019'} cambio={'R$'} value={'15,00'} />
                    <PriceText containerStyle={styles.styleContainerPrice} date={'02 de Abril de 2019'} cambio={'R$'} value={'5,00'} />
                </View>
                <Button angle={135} underlayColor={'transparent'} title={'REMOVER DOS FAVORITOS'} colors={['#FF9100','#FFB217']} buttonStyle={styles.styleButton} textStyle={styles.styleButtonText} ></Button>
            </Animated.View>
        )
    }

    animateDrop = () => {
        this.setState({show:!this.state.show})

        let {show} = this.state
        if(!show){
            Animated.timing(this.state.height,{
                duration:500,
                toValue:(height*0.585822089),
            }).start()
        }else{
            Animated.timing(this.state.height,{
                duration:600,
                toValue:(height*0.125777111),
            }).start()
        }
    }
}

const styles = StyleSheet.create({
    styleContainerTips:{
        alignSelf:'center',
        width:width*0.917333333,
        paddingHorizontal:width*0.045333333,
    },
    styleContainerPrice:{
        justifyContent:'space-between',
        height:height*0.059970015,
        alignItems:'center',
        backgroundColor:'#ECECEC',
        paddingHorizontal:width*0.045333333,
        marginTop:height*0.013333333,
        borderRadius:(height*0.059970015)/2
    },
    styleTextTips:{
        fontSize:width*0.05,
        marginLeft:width*0.042666667,
        marginTop:height*0.022353823
    },
    styleShow:{
        overflow:'hidden'
    },
    styleCardUser:{
        width:width*0.917333333,
        overflow:'hidden',
        alignSelf:'center',
        borderRadius:(height*0.089955022)/2,
        marginTop:height*0.013333333
    },
    styleButton:{
        width:width*0.868693333,
        height:height*0.074962519,
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        marginTop:height*0.035982009,
        borderRadius:(height*0.074962519)/2,
    },
    styleButtonText:{
        fontSize:width*0.05,
        color:'white'
    },
    styleContainerRating:{
        alignSelf:'center',
        width:width*0.590266667,
        marginLeft:width*0.02568,
        marginTop:height*0.022488756
    },
    styleContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
})