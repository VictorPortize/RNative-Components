import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen')

const Styles = StyleSheet.create({
    container:{
        alignSelf:'center',
        backgroundColor: 'white',
        borderWidth: width*0.005,
        borderColor: '#0BB7B7',
        borderRadius: width*0.01
    },
    selector:{
        fontSize: width*0.04,
    },
    containerSelector:{
        width: width*0.85,
        flexDirection:'row',
        height: height*0.07,
        paddingLeft: width*0.02,
        alignItems:'center',
        justifyContent:'space-between',
    },
    containerIcon:{
        width:width*0.15,
        height:height*0.07,
        justifyContent: 'center' ,
        alignItems: 'center',
        backgroundColor:'#0BB7B7',
        transform: [{rotate: '180deg'}],
    },
    containerItens:{
        position: 'absolute',
        alignSelf:'center',
        maxHeight: height*0.24,
        backgroundColor: '#FFFFFF',
        elevation: 5,
        marginTop:height*0.11,
        zIndex:2
    },
    label:{
        fontSize: width*0.05,
        color: '#143047',
        marginLeft: (width*0.15)/2
    }
})

export default Styles