import React,{Component} from 'react'
import {View, Animated, Text, Dimensions, TouchableOpacity, FlatList, ViewStyle} from 'react-native'
import styles from './Styles'
import {createIconSetFromIcoMoon} from 'react-native-vector-icons'
import Selection from '../../../Icons/selection.json'
import { ScrollView } from 'react-native-gesture-handler';

const Icons = createIconSetFromIcoMoon(Selection)

let {width, height} = Dimensions.get('screen')

interface Props {
    itens: Array<Object>
    onSelect: (data: any) => void,
    label: String,
    render: (value: any, index: number) => {},
    regex: String,
    containerStyle: ViewStyle,
    height: number
}

export default class Cambio extends Component<Props>{
    height : Animated.Value
    opacity : Animated.Value

    static defaultProps = {
        onSelect: (data: any) => {},
        label: 'Label',
        containerStyle: {},
        height: height*0.25
    }

    constructor(props: Props){
        super(props)
        
        this.height = new Animated.Value(0)
        this.opacity = new Animated.Value(0)
    }

    state = {
        selected : {[`${this.props.regex}`]:'Selecione...'},
        visible: true,
    }

    render(){
        return(
            <View style={this.props.containerStyle}>
                <Text style={styles.label}>{this.props.label}</Text>
                <TouchableOpacity activeOpacity={0.7} onPress={this.animated} style={styles.container}>
                    <View style={styles.containerSelector}>
                        <Text style={styles.selector}>{this.state.selected[`${this.props.regex}`]}</Text>
                        <View style={styles.containerIcon}>
                            <Icons name={'list'} color={'white'} size={width*0.03}  />
                        </View>
                    </View>
                </TouchableOpacity>
                <Animated.View style={[styles.containerItens, {height: this.height, opacity:this.opacity}]}>
                    <ScrollView>

                        <FlatList data={this.props.itens} keyExtractor={(value,index) => index.toString()} renderItem={({item,index}) => (
                            <TouchableOpacity onPress={() => this.changeValue(item)} key={index} >
                                {this.props.render(item,index)}
                            </TouchableOpacity>
                        )}>

                        </FlatList>

                    </ScrollView>
                </Animated.View>
            </View>
        )
    }

    changeValue = (value: any) => {
        this.animated()
        this.setState({selected:{ [`${this.props.regex}`] : value[`${this.props.regex}`] }})
        this.props.onSelect(value)
    }

    animated = () => {
        let {visible} = this.state
        let maxHeight = this.props.height
        if(visible){
            Animated.parallel([
                Animated.timing(this.height,{toValue:maxHeight}),
                Animated.timing(this.opacity,{toValue:1})
            ]).start()
        }else{
            Animated.parallel([
                Animated.timing(this.height,{toValue:0}),
                Animated.timing(this.opacity,{toValue:0})
            ]).start()
        }
        this.setState({visible:!visible})
    }
}
