import React from 'react';
import { StatusBar, View, ScrollView } from 'react-native';
// import { Container } from 'native-base'

import Header from '../header';
import { colors, p } from '../../styles';

export const Content = (props) => {
    return(
        <View style={p.f1, { }} showsVerticalScrollIndicator={false}>

            {!props.noHeader && <StatusBar backgroundColor={props.statusBarColor ? props.statusBarColor : props.backgroundColor ? props.backgroundColor : colors.secondary} barStyle={'light-content'} {...props} />}
            {!props.noHeader && <Header {...props} />}
            {!props.noScroll && <ScrollView style={[{ backgroundColor: props.backgroundColor ? props.backgroundColor : colors.divider }, props.bodyStyle]} {...props} >
                    {props.children}
                </ScrollView>
            }
            {props.noScroll && <View style={[p.f1, { backgroundColor: props.backgroundColor ? props.backgroundColor : colors.divider }, props.bodyStyle]}  {...props}>
                    {props.children}
                </View>    
            }

        </View>
    )
}
