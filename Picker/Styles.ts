import {StyleSheet, Dimensions} from 'react-native';
const {width, height} = Dimensions.get('screen')

const Styles = StyleSheet.create({
    selector:{
        backgroundColor: 'red',
        width: width*0.7,
        height: height*0.08,
        alignItems:'center',
    },
    containerSelector:{
    }
})

export default Styles