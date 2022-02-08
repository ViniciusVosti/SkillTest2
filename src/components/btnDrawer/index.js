
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';

import { colors, p } from '../../styles';

import { Icon } from '../../components';


export const BtnDrawer = (props) => {
    let {
        name="Home", 
        iconName="home", 
        iconType= "FontAwesome5",
        iconSize=22, 
        onPress = () => {},
    } = props

    return (
        <TouchableOpacity onPress={onPress} style={[p.bgcTransparent,p.jCenter,p.aiCenter,p.row,{ height: 50 }]}>
            <Icon name={iconName} type={iconType} size={iconSize} style={{color: colors.white }}/>
            <View style={[p.f1]}>
                <Text style={[p.ffRegular, p.fsSmall, p.tcDark, p.pt8, p.ml16]}>{name}</Text>
            </View>
        </TouchableOpacity>
    )
}
