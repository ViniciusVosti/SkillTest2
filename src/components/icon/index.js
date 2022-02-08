import React from 'react'
import IconCustom from '../../styles/icons.js';
import { Icon as IconNative }  from 'native-base'

export const Icon = props => {
    let { type } = props
    if (!type) type = "Custom"

    if (type != "Custom") {
        return (
            <IconNative name={props.name} size={props.size} style={[props.style,{ fontSize: props.size }]} type={type} />
        )
    }

    return (
        <IconCustom name={props.name} size={props.size} style={props.style} />
    )
}