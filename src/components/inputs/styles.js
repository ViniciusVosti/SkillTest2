import { StyleSheet, Dimensions, } from 'react-native';

import { colors, fonts, metrics } from '../../styles';

const styles = StyleSheet.create({

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
        fontSize: fonts.default,
        color: colors.dark,
        paddingLeft: 0,

    },
    

    icon: {

        fontSize: 20,
        color: colors.dark,
        marginRight: 12, 
 
    },

    borderInput: {

        height: 1,
        backgroundColor: colors.greyLight,

    }, 

    // focused

    textinput_focused: {
        backgroundColor: 'red',
        color: 'white'
    } 
    

});

export default styles;
