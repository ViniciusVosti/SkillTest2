import {
    StyleSheet,
    Dimensions
} from 'react-native';

import {
    colors,
    metrics,
    fonts
} from '../../styles';

const styles = StyleSheet.create({

    // drawer styles

    content: {

        flex: 1,
        backgroundColor: colors.white,
        padding: metrics.padding,
        
    },

    // image user

    imageUser: {

        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: '#f2f2f2',
        justifyContent: 'center',
        alignItems: 'center',

    },

    // name user

    nameUser: {

        paddingVertical: metrics.padding,
        flexDirection: 'column',

    },
  
    nameUserText: {

        color: colors.dark,
        fontWeight: '800',
        fontSize: fonts.bigger,

    },

    nameUserSubText: {

        fontSize: fonts.default,
        marginTop: 6,
        color: colors.grey,
 
    }, 

    // line separator

    lineUserName: {

        width: 28,
        height: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        backgroundColor: colors.greyLight,

    },
  
    // menu btns

    contentMenu: {
        
        flexDirection: 'column', 
        paddingVertical: metrics.padding,
        flex: 1, 
        backgroundColor: 'transparent',

    },

    btnMenu: {

        height: 58,
        backgroundColor: 'transparent',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',  

    },
 
    btnMenuText: {

        color: colors.dark,
        fontSize: fonts.default,
        flex: 1,
        marginLeft: 16,
    
    }

});

export default styles;
