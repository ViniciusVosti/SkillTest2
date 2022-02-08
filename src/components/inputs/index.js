import React, { Component } from 'react'
import { Text, Input as InputNative, Label, Item,Picker } from 'native-base'
import { TextInput, } from 'react-native'
import { View, } from 'react-native'
import styles from './styles'

import { Icon, Button as CustomButton } from '..'

import { p, colors, fonts } from "../../styles"

import DatePicker from 'react-native-datepicker'

import moment from 'moment'
import { TextInputMask } from 'react-native-masked-text'

export class LayoutInputCustom extends Component {

    icon(obj) {

        if (obj) {

            let type = obj.type ? obj.type : ''
            let style = obj.style ? obj.style : {}
            return <Icon type={type} name={obj.name} style={[styles.icon, style]} />

        }

    }

    render() {
        return (

            <View style={[styles.contentInput, { marginBottom: this.props.noMarginBottom ? 0 : 16 }]}>

                {/* <Text style={styles.labelInput}>{this.props.label}</Text> */}

                <View style={styles.sectionInput}>

                    {this.icon(this.props.iconLeft)}

                    <View {...this.props} />

                    {this.icon(this.props.iconRight)}

                </View>

                {/* <View style={styles.borderInput} /> */}

            </View>

        );
    }
}

export const PickerCustom = (props) => {
    return (

        <LayoutInputCustom {...props}>

            <Picker {...props}/>

        </LayoutInputCustom>

    )
}

export const Input = (props) => {
    return (

        <LayoutInputCustom {...props} style={[styles.inputView, props.button ? p.row : {}, props.containerStyle, {}]}>
            <InputNative style={[styles.inputDefault, props.inputStyle]} {...props} />
            {props.button &&
                <CustomButton {...props} />
            }
        </LayoutInputCustom>

    )
}


export const InputDataText = (props) => {
    return (

        <LayoutInputCustom {...props} style={[styles.inputView, props.button ? p.row : {}, props.containerStyle, {}]}>
            <TextInputMask
                type={'datetime'}
                options={{
                    format: 'DD/MM/YYYY'
                }}
                style={[styles.inputDefault, props.inputStyle]}
                {...props}
            />
            {/* {props.button &&
            <CustomButton {...props}  />
            } */}
        </LayoutInputCustom>

    )
}

export const InputDataCalendar = (props) => {
    return (
        <View style={[styles.inputView, p.bRad8, props.button ? p.row : {}, props.containerStyle, {
            borderWidth: 0, backgroundColor: colors.white,
            width: "100%", justifyContent: 'center'
        }]}>

            <DatePicker
                style={{ width: "100%", }}
                showIcon={false}
                mode={props.mode ? props.mode : "date"}
                placeholder={props.placeholder ? props.placeholder : "Selecione uma data"}
                format="DD/MM/YYYY"
                maxDate={props.maxDate ? props.maxDate : moment()}
                confirmBtnText={props.confirmBtnText ? props.confirmBtnText : "Confirmar"}
                cancelBtnText={props.cancelBtnText ? props.cancelBtnText : "Cancelar"}
                customStyles={{
                    dateInput: [styles.inputView, p.bRad8, props.button ? p.row : {}, props.containerStyle, {
                        borderWidth: 0,
                        backgroundColor: colors.white, justifyContent: 'center', alignItems: 'flex-start', paddingLeft: 12,
                        width: "100%", height: 45
                    }],

                    placeholderText: [{
                        fontSize: fonts.default,
                        color: colors.grey,
                        ...p.ffRegular,
                    }],
                    dateText: [{
                        fontSize: fonts.default,
                        color: colors.dark,
                        ...p.ffRegular,
                    }]
                }}
                {...props}
            />
        </View>
    )
}

export const InputMoney = (props) => {
    return (

        <LayoutInputCustom {...props} style={[styles.inputView, props.containerStyle, p.bRad8, {}]}>
            <TextInputMask
                type={'money'}
                options={{
                    precision: 2,
                    separator: ',',
                    delimiter: '.',
                    unit: 'R$',
                    suffixUnit: ''
                }}
                {...props}
                style={[styles.inputView, p.bRad8, props.inputStyle, p.ffRegular, { paddingLeft: 12 }]}
            />
        </LayoutInputCustom>

    )
}