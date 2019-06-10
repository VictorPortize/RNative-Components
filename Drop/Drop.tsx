import React, {Component} from 'react'
import {View, TouchableOpacity, Animated, ViewStyle, NativeEventEmitter} from 'react-native'

interface Props {

    dropHeight: number,
    header: React.ReactChild
    content: React.ReactChild
    contentStyle: ViewStyle | Array<ViewStyle>
    headerStyle: ViewStyle | Array<ViewStyle>
    style: ViewStyle | Array<ViewStyle>
}

export default class Drop extends Component<Props>{
    height: Animated.Value
    opacity: Animated.Value
    toggle: NativeEventEmitter

    constructor(props: Props){
        super(props)
        this.toggle = new NativeEventEmitter()
        this.height = new Animated.Value(0)
        this.opacity = new Animated.Value(0)
    }

    state = {
        visible : true
    }
    
    static defaultProps = {
        dropHeight: 0,
        header: <View />,
        content: <View />,
        contentStyle: {},
        headerStyle: {},
        style: {}
    }


    render(){
        return(
            <View >
                <TouchableOpacity activeOpacity={0.7} onPress={this.animate}>
                        {this.props.header}
                </TouchableOpacity>
                <Animated.View style={{height:this.height, opacity: this.opacity, overflow: 'hidden',backgroundColor:'yellow'}}>
                            {this.props.content}
                </Animated.View>
            </View>
        )
    }

    animate = () => {
    
        if(this.state.visible){
            Animated.parallel([
                Animated.timing(this.height,{toValue:this.props.dropHeight}),
                Animated.timing(this.opacity,{toValue:1})
            ]).start()
        }
        else{
            Animated.parallel([
                Animated.timing(this.height,{toValue:0}),
                Animated.timing(this.opacity,{toValue:0})
            ]).start()
        }
        this.setState({visible: !this.state.visible})
    }
}