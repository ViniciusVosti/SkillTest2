import React from 'react'
import { ActivityIndicator, Text, View } from 'react-native';

import {  colors, p, fonts } from '../../styles';

import { Icon } from '../../components';

import TouchableScale from 'react-native-touchable-scale';

export const Button = (props) => {
    const {
        text = 'Insira um texto', color = colors.dark, backgroundColor = colors.yellow,
        marginBottom = 16, borderRadius = 8, height = null,
        outline = false, flexDirection = 'column',
        textColor = color, textSize = 18, textStyle = {},
        iconLeft = false, iconRight = false, iconCenter = false, name = 'edit', size = 16,
        textLeft = null,
        onPress = () => global.alert.alert("Em desenvolvimento ..."),
        loading = false,
        ele = false,
        button = false,
        noAnimation = false,
    } = props

    if (iconLeft == true || iconRight == true || iconCenter == true) flexDirection = 'row'

    return (
        <View style={[{ marginBottom: marginBottom }]}>
            <TouchableScale onPress={onPress} style={[]} activeScale={noAnimation ? 1 : 0.9} >
                <View style={[p.ph8,
                (outline) ? { borderWidth: 2, borderColor: color, backgroundColor: 'transparent' } : { backgroundColor: backgroundColor },
                (flexDirection == 'row') ? [p.aiCenter, p.jBetween] : [p.jCenter],
                (borderRadius > 8) ? [p.ph16] : {},
                {
                    height: height ? height : 50,
                    borderRadius: borderRadius,
                    flexDirection: flexDirection,
                    elevation: ele ? 2 : 0,
                },
                ]}>
                    {flexDirection == 'row' && textLeft != true &&
                        <View style={{  }}>
                            {iconLeft ?
                                <View style={[p.ml16]}>
                                    <Icon name={name} type="FontAwesome5" size={size} style={{ color: color }} />
                                </View>
                                :
                                <View style={[{ width: size + 16 }]} />
                            }
                        </View>
                    }
                    <View style={{  }}>
                        {!loading ?
                        <Text
                            style={[p.ffBlack, p.tCenter,
                                { color: textColor ? textColor : colors.black },
                                { fontSize: textSize },
                                textStyle,
                            ]}>
                            {text}
                        </Text>
                        :
                        <ActivityIndicator style={{ color: colors.yellow, paddingHorizontal: button ? 0 : 21 }} size={"small"} />
                        }
                    </View>
                    {flexDirection == 'row' &&
                        <View>
                            {(iconRight && !loading) ?
                                <View style={[p.mr8, {} ]}>
                                    <Icon name={name} type="FontAwesome5" size={size} style={{ color: color }} />
                                </View>
                                :
                                <View style={[{ width: size + 16 }]} />
                            }
                        </View>
                    }
                </View>
            </TouchableScale >
        </View >
    )
}
