import React from 'react'
import {View, Text, Image, StyleSheet, Dimensions, StatusBar, Animated, NativeEventEmitter} from 'react-native'
import {DrawerItemsProps} from 'react-navigation'
import { goTo, replace, toogleDrawer } from '../../Utils/NavigationService'
import Button from '../Button/ButtonGradient'
import Icon from '../Icon/Icon'
import Diviser from '../Diviser/Diviser'
import AsyncStorage from '@react-native-community/async-storage';
import { connect } from 'react-redux';
import { setDataUser } from '../../Redux/Actions/actions';

let {width, height} = Dimensions.get('screen')

let value = StatusBar.currentHeight === undefined? 24 : StatusBar.currentHeight
height = height - value

class Drawer extends React.Component<DrawerItemsProps>{

    state = {
        login:{

        },
        open:false,
        value: new Animated.Value(-width),
    }

    componentDidMount() {
        let emmit = new NativeEventEmitter()
        emmit.addListener('toggle',() => this.animate())
        this.getData();
        
    }
    
    componentWillMount() {
        this.getData();
    }
    
    fetchData() {
        this.getData();
    }

    getData = async () => {
        try {
            const value = await AsyncStorage.getItem('login')
            if (value !== null) {
                this.setDataUser(JSON.parse(value));
            }
        } catch (e) {
            // error reading value
        }
    }

    setDataUser = (data: object) => {
        this.props.setDataUser(data);
    }

    animate = () => {
        if(this.state.open){
            Animated.timing(this.state.value,{toValue:-width}).start()
            this.setState({open:false})

        }else{
            Animated.timing(this.state.value,{toValue:0}).start()
            this.setState({open:true})
        }
    }

    render(){
        return(
            <Animated.View style={[{backgroundColor:'transparent', width, height, position:'absolute',},{transform:[{translateX:this.state.value}]}]}>
                <View style={[styles.styleContainer,]}> 
                    <View style={styles.styleHeader}>
                        <Image style={styles.styleImage} source={require('../../Images/QnetYelloBlack.png')} />
                        <Icon styleRounded={styles.styleIcon} onPress={this.animate} name={'close'} size={width*0.05} iconColor={'#202224'} />
                    </View>
                    <Diviser color={'#00989B'} size={2} width={width*0.645333333} />
                    <View style={styles.styleContainerImage}>
                        <View style={{paddingLeft:width*0.050666667}}>
                            <Text style={styles.styleUser}>Usuário</Text>
                            <Text style={styles.styleTextName}>{this.props.dataUser.pess_nome}</Text>
                        </View>
                    </View>
                    <Button angle={135} colors={['#FF9100','#FFB217']} title={'Editar perfil'} buttonStyle={styles.styleButton} textStyle={styles.styletxtButton} />
                    <Diviser color={'#00989B'} size={2} width={width*0.645333333} />
                    {/* <Text style={styles.styleTextButton}>Agenda</Text> */}
                    <Text onPress={() => this.openScreen('allChecklists')} style={styles.styleTextButton}>Processos</Text>
                    <Text onPress={() => this.openScreen('Tools')} style={styles.styleTextButton}>Ferramentas</Text>
                    <Text onPress={() => this.openScreen('ReadQR')} style={styles.styleTextButton}>Escanear QR Code</Text>
                    <Text onPress={this.logout} style={styles.styleTextButton}>Sair</Text>
                    <View style={styles.styleContainerIconFooter} >
                        <Text style={styles.styleTextIcon}>Powered by</Text>
                        <Icon name={'quality'} size={width*0.14}  />
                    </View>
                </View>
            </Animated.View>
        )
    }

    openScreen = (screen: string) => {
        toogleDrawer()
        goTo(screen)
    }

    logout = async () => {
        try {
            await AsyncStorage.removeItem('login')
            this.setDataUser({});
            replace('Login')
        } catch (e) {
            // error reading value
        }
    }
}

const mapStateToProps = (state: any) => state;
export default connect(mapStateToProps, {
    setDataUser,
})(Drawer);

const styles = StyleSheet.create({
    styleContainer:{
        paddingHorizontal:width*0.052,
        height,
        width:width*0.673809524,
        
        backgroundColor:'white'
    },
    styleHeader:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height: height * 0.125187406,
    },
    styleImage:{
        width:width*0.238095238,
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
        color:'black'
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
    },
    styleUser:{
        fontSize:width*0.04,
    }
})