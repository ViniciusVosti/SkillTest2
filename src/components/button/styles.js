import { StyleSheet, Dimensions } from 'react-native';

import { colors, metrics, fonts } from '../../styles';

export default StyleSheet.create({

    'btn': {

        alignItems: 'center',
        flexDirection: 'column',
        borderRadius: 4,
        paddingVertical: 15,
        marginBottom: 10,
        backgroundColor: colors.primary,


    },

    textBtn: {

        fontSize: fonts.default,
        fontWeight: '800',  

    },

    // btn primary
    

    "btn-primary": {

        backgroundColor: colors.primary,

    },

    'btn-text-primary': {

        color: colors.white,

    },

    // btn outline

    'btn-outline': {

        
        backgroundColor: colors.greyLight,
        borderColor: colors.greyLight,

    },

    'btn-text-primary-outline': {

        color: colors.for,

    },
    
    'btn-text-big': {

        fontSize: fonts.big

    },

    'btn-text-regular': {

        fontSize: fonts.regular

    }

});
