import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, ImageBackground, } from 'react-native';
import DeviceInfo from 'react-native-device-info';

import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import { BtnDrawer } from '../../components';
import { Icon } from '..';
import { colors, p, } from '../../styles'

export default class MenuContainer extends Component {
	
	state = {
		version: ""
	}
	
	componentDidMount() {
		this.init();
	}
	
	async init() {
		let version = await DeviceInfo.getVersion();
		this.setState({version});
    }
    
    render() {

        return (

            <View style={[p.f1, p.p16, p.bgcWhite]}>

                <View style={[p.bgcTransparent,p.f1,]}>

                    <ScrollView style={[p.mt16]}>

                        <BtnDrawer
                            name={"Home"}
                            iconName={"home"} 
                            iconType={"FontAwesome5"}
                            iconSize={22}
                            onPress={() => Actions.home()}
                        />

                    </ScrollView>

                </View>

                <View style={{ position: 'absolute', bottom: 14, left: 14, }}>

                    <Text style={[p.ffRegular, p.fsSmaller, p.tcDark]}>V.: {this.state.version} {'- DEV'}</Text>

                </View>

            </View>
        );
    }
}
