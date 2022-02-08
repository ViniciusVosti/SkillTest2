import React from 'react'
import { ActivityIndicator, Image, Text, View } from 'react-native';

import { p, colors } from '../../styles';


export const LoadingScreen = (props) => {
    let {
        text = 'Loading...'
    } = props

    return (
        <View style={[p.jCenter,p.aiCenter, p.mt32]}>
            <View style={[p.aiCenter, p.jCenter, p.mt16]}>
                <Text style={[p.ffRegular, p.tCenter]}>{text}</Text>
            </View>
            <View style={[p.mt8]}>
                <ActivityIndicator animating={true} color={colors.secondary} size={"large"}  />
            </View>
        </View>
    )
}