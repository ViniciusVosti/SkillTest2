import React, { Component } from 'react';
import { View, Modal, ActivityIndicator } from 'react-native';

export default class Loading extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:false,
        }
    }

    componentDidMount(){
        global.show = () => {
            this.loadingShow();
        }
        global.hide = () => {
            this.loadingHide();
        }
    }

    loadingShow = () => {
        this.setState({loading: true});
    }

    loadingHide = () => {
        this.setState({loading: false});
    }

    _renderLoad = () =>{
        return (
            <Modal
                animationType = 'fade'
                transparent={true}
                visible={this.state.loading}
                presentationStyle={'overFullScreen'}
                style={{}}
                >

                <View style={{backgroundColor: '#000', opacity:.5, flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <View style={{alignItems: 'center', justifyContent: 'center',}}>
                    
                        <View style={{alignItems: 'center', justifyContent: 'center',}}>
                            <ActivityIndicator size="large" color="#ffffff" />
                        </View>
                
                    </View>
                        
                </View>
            </Modal>
          )
    }

    render(){
       return this._renderLoad();
    }
}
