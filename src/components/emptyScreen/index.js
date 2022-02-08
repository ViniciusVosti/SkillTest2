import React from 'react'
import { Image, Text, View } from 'react-native';

import { p } from '../../styles';


export const EmptyScreen = (props) => {
    let {
        text = 'Nothing to see here'
    } = props

    return (
        <View style={[p.jCenter,p.aiCenter, p.mt32]}>
            <View style={[p.aiCenter, p.jCenter, p.mt32]}>
                <Text style={[p.ffRegular, p.tCenter]}>{text}</Text>
            </View>
        </View>
    )
}