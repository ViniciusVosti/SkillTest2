import { StyleSheet, Dimensions } from 'react-native';

import { colors, fonts, metrics } from '.';

const styles = StyleSheet.create({


    // ---> Styles full

    content: {

        backgroundColor: colors.white,
        padding: metrics.padding,

    },

    section: {

        backgroundColor: colors.white,
        paddingHorizontal: metrics.padding,

    },

    // ---> Login Styles

    imageLogin: {

        height: 278,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.dark,
        overflow: 'hidden',

    },

    textRecovery: {

        color: colors.primaryText,
        textDecorationColor: colors.primaryText,
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid'

    },

    viewRecovery: {

        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 20

    },

    // ---> form styles

    titleForm: {

        fontSize: fonts.bigger,
        fontWeight:'800',
        color: colors.dark,
        marginBottom: 16,

    },

    contentForm: {// backgroundColor: colors.primary,
    },

    contentSwitch: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 12,
        borderRadius: 4,
        backgroundColor: colors.greyLight,
        marginTop: 14,

    },

    textAceite: {

        fontSize: fonts.regular,
        color: colors.dark,
        fontFamily: 'Asap-Regular',

    },

    // ---> sing style

    contentAddUserImage: {

        paddingVertical: metrics.padding,
        justifyContent: 'center',
        alignItems: 'center',

    },

    addImageUser: {

        width: 180,
        height: 180,
        borderRadius:90,

    },

    iconAddUserImage: {

        width: 30,
        height: 30,
        borderRadius: 15,
        overflow: 'hidden',
        position: 'absolute',
        right: 12,
        bottom: 12,
        backgroundColor: colors.white,
        borderWidth: 1,
        borderColor: colors.greyLight,
        zIndex: 9999,
        justifyContent: 'center',
        alignItems: 'center',

    },

    readTermsBtn: {

        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: metrics.padding,

    },

    textDefault: {

        fontSize: fonts.regular,
        color: colors.dark,
        textDecorationLine: 'underline',

    },

    // ---> input none

    contentInput: {

        flexDirection: 'column',
        marginBottom: 13,

    },

    labelInput: {

        fontSize: fonts.default,
        color: colors.grey,

    },

    sectionInput: {

        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
        paddingTop: 2,

    },

    inputView: {

        flex: 1,
        flexDirection: 'column',

    },

    inputDefault: {

        marginRight: 12,
        paddingLeft: 0,
        height:50,
        alignItems: 'center',
        justifyContent: 'center',

    },


    textInputNone: {

        fontSize: fonts.default,
        color: colors.dark,
        marginRight: 12,

    },

    borderInput: {

        height: 1,
        backgroundColor: colors.greyLight,

    },

    // ---> home

    imageHome: {

        flex: 1,
        width: '100%',
        height: '100%',

    },

});

export default styles;
