import React from 'react';
import { ViewStyle, Dimensions, ScrollView, TextStyle,StatusBar} from 'react-native'
import FlipCard from 'react-native-flip-card';
import LinearGradient from 'react-native-linear-gradient'

import {View, Text, StyleSheet, Image, ImageSourcePropType} from 'react-native';

let {width,height} = Dimensions.get('screen')

let minHeight = StatusBar.currentHeight || 36
height = height - minHeight

interface Props{
    width?: number, //CC Width
    height?: number, //CC Height
    align?:"flex-start" | "flex-end" | "center" | "stretch" | "baseline"
    name: string, //Person name
    number: string, //CC Number
    focused?: boolean, //flip controler
    expire: string, //expire date
    cvc: string, //CC pass
    bgColor: string, //CC BackgroundColor
    style?: ViewStyle,
    containerStyle: ViewStyle,
    imageFront?: ImageSourcePropType, //CC ImageFront
    imageBack?: ImageSourcePropType, //CC ImageBack
    shiny?: boolean, //CC shiny detail
    showMonthYear?: boolean, //CC Month Year show?
    showValidThru?: boolean, //CC ValidThru show?
    monthYearText?: string, //CC Month Year message
    validThruText?: string, //CC ValidThru message
    clickable?:boolean, //CC click will turn card?
    shinyAfterBack?: string, //CC shiny detail back
    title?: string //Title card 
    bar?: true // CC black bar
    colors: Array<string> //gradient Colors
    styleText:TextStyle,
    linearConfig:{
        useAngle:boolean, //to use grandient set true
        angle:number // 0 - 360
    }
}

interface State{
    type: string | undefined,
    length: number
}



export default class CreditCard extends React.Component<Props,State>{

    constructor(props: Props) {
        super(props);
        this.state = {
                type: undefined,
                length:16
        }
    }


    static defaultProps = {
        number: undefined,
        cvc: undefined,
        expire: undefined,
        focused: false,
        name: 'Não foi',
        bar:true,
        expireBefore: 'month/year',
        expireAfter: 'valid thru',
        shiny:true,
        width: width*0.8,
        height: height*0.25,
        clickable: true,
        fullNameText:"FullName",
        showMonthYear:true,
        showValidThru:true,
        colors:['#008298','#00B19F'],
        linearConfig:{
            useAngle:false,
            angle:90
        },
        bgColor:'white',
        containerStyle: {}
    };

    componentWillReceiveProps(nextProps: any) {
        this.updateType(nextProps);
    }
    

    componentWillMount() {
        this.updateType(this.props);
    }

    updateType(props: Props) {
        if (!props.number)
            return this.setState({type:"unknown"});
        
        if(props.number){

            if(props.number.split('')[0] == '2'){
                this.setState({type:'mastercard'})
            }
            if(props.number.split('')[0] == '3'){
                this.setState({type:'american'})
            }
            if(props.number.split('')[0] == '4'){
                this.setState({type:'visa'})
            }
            if(props.number.split('')[0] == '5'){
                this.setState({type:'elo'})
            }
        }
    }

    getFlag(type: string | undefined){
        switch(type){
            case 'visa':
                return {image:require('../../Images/visaCard.png'), colors:['#FF9100','#FFB217']}
            case 'mastercard':
                return {image:require('../../Images/masterCard.png'), colors:['#008298','#00B19F']}
            case 'elo':
                return {image:require('../../Images/eloCard.png'), colors:['#4020AB','#5969BB']}
            case 'american':
                return {image:require('../../Images/americanCard.png'), colors:['#232323','#3D3D3D']}
            default:
                return {image:null, colors:this.props.colors}
        }
    }


    number() {
        if (!this.props.number) {
            var string = "";
        } else {
            var string = this.props.number.toString();
        }

        const maxLength = this.state.length;

        if (string.length > maxLength) string = string.slice(0, maxLength);

        while (string.length < maxLength) {
            string += "•"
        }

        const amountOfSpaces = Math.ceil(maxLength/4);

        for (var i = 1; i <= amountOfSpaces; i++) {
            var space_index = (i * 4 + (i - 1));
            string = string.slice(0, space_index) + " " + string.slice(space_index)
        }

        return string;
    }

    name() {
        return this.props.name.toUpperCase()
    }


    expire() {
        if (this.props.expire === undefined) {
            return "••/••";
        } else {
            var expire = this.props.expire.toString();

            const expireMaxLength = 6;

            if (expire.match(/\//))
                expire = expire.replace("/", "");

            if (!expire.match(/^[0-9]*$/))
                return "••/••";

            while (expire.length < 4) {
                expire += "•";
            }

            expire = expire.slice(0, 2) + "/" + expire.slice(2, expireMaxLength);
        }

        return expire;
    }

    cvc() {
        if (this.props.cvc == undefined) {
            return "•••"
        } else {
            return (this.props.cvc.toString().length <= 4) ? this.props.cvc : this.props.cvc.toString().slice(0, 4);
        }
    }

    render() {
        const cardStyle = [{width: this.props.width, height: this.props.height,borderRadius:height*0.01}];
        let card = this.getFlag(this.state.type)
        let colors = this.props.colors? this.props.colors : [this.props.bgColor,this.props.bgColor]

        return (
            <View style={this.props.containerStyle}>
                {this.props.title && <Text style={this.props.styleText}>{this.props.title}</Text>}
                <LinearGradient angle={this.props.linearConfig.angle} useAngle={this.props.linearConfig.useAngle} style={[cardStyle,{alignSelf:this.props.align}]} colors={card.colors != undefined? card.colors : colors}>
                        <FlipCard
                            style={[{width: this.props.width, height: this.props.height}, this.props.style]}
                            friction={6}
                            perspective={1000}
                            flipVertical={false}
                            useNativeDriver={true}
                            flipHorizontal={true}
                            flip={this.props.focused}
                            clickable={this.props.clickable}>
                            <View style={cardStyle}>
                                {this.props.imageFront ?
                                    <Image source={this.props.imageFront} style={[styles.bgImage, {width: this.props.width, height: this.props.height}]} />
                                    : null}
                                <View style={styles.lower}>
                                    {this.props.shiny ?
                                        <View style={styles.shinyFront} />
                                        : null}
                                    {this.state.type?
                                    <Image
                                        style={styles.logo}
                                        source={card.image}
                                    />: null}
                                    <View style={styles.info}>
                                        <Text style={styles.textNumber}>{this.number()}</Text>
                                        <View style={styles.rowWrap}>
                                            <ScrollView style={styles.name}><Text  style={styles.textName}>{this.name()}</Text></ScrollView>
                                            {this.props.showMonthYear &&
                                                <View style={styles.validthru}>
                                                    <Text style={styles.textValidThru}>{this.props.validThruText || 'VALID THRU'}</Text>
                                                </View>
                                            }
                                            <View
                                                style={styles.expire}>
                                                {this.props.showValidThru && 
                                                    <Text style={styles.textSmall}>{this.props.monthYearText || 'MONTH/YEAR'}</Text>
                                                }
                                                <Text style={styles.textexpire}>{this.expire()}</Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </View>

                            <View style={[styles.back, {width: this.props.width, height: this.props.height}]}>
                                {this.props.imageBack ?
                                    <Image source={this.props.imageBack} style={[styles.bgImage, {width: this.props.width, height: this.props.height}]} />
                                    : null}
                                {this.props.bar ?
                                    <View style={styles.bar}/>
                                    : null}
                                <View style={styles.cvc}><Text style={styles.textCvc}>{this.cvc()}</Text></View>
                                {this.props.shiny ?
                                    <View style={styles.shinyBack} data-after={this.props.shinyAfterBack}/>
                                    : null}
                            </View>
                        </FlipCard>
                </LinearGradient>
            </View>
        );
    }

    
}

const styles = StyleSheet.create({
    logo: {
        height: 35,
        width: 57,
        position: 'absolute',
        top: 20,
        right: 20,
        resizeMode:'contain'
    },
    text: {
        color: '#fff'
    },
    bgImage: {
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        right: 0,
    },
    lower: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end',
        paddingVertical: 20,
        paddingHorizontal: 20
    },
    expire: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    rowWrap: {
        flexDirection: 'row',
    },
    name: {
        height:height*0.05,
        width:width*0.1
    },
    validthru: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    textValidThru: {
        fontSize: 8,
        color: '#ddd',
        fontWeight: '900',
        backgroundColor: 'transparent',
    },
    textSmall: {
        fontSize: 8,
        color: '#ddd',
        fontWeight: '900',
        backgroundColor: 'transparent',
    },
    textNumber: {
        color: '#fff',
        fontSize: width*0.06,
        textAlign: 'center',
        marginBottom: 10,
        backgroundColor: 'transparent',
    },
    textName: {
        color: '#fff',
        fontSize: 12,
        backgroundColor: 'transparent',
    },
    textexpire: {
        color: '#fff',
        fontSize: 16,
        backgroundColor: 'transparent',
    },

    back: {
        flex: 1
    },
    cvc: {
        width: 45,
        height: 30,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        right: 15,
        top: 76
    },
    textCvc: {
        color: '#000',
        fontSize: 18
    },
    info: {
        flex: 1,
    },
    shinyFront: {
        backgroundColor: '#ddd',
        borderRadius: 8,
        width: 50,
        height: 40,
        position: 'absolute',
        top: 15,
        left: 20
    },
    shinyBack: {
        backgroundColor: '#ddd',
        borderRadius: 8,
        width: 50,
        height: 40,
        position: 'absolute',
        bottom: 15,
        left: 20
    },
    bar: {
        height: 40,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 30,
        backgroundColor: '#000'
    },
});
