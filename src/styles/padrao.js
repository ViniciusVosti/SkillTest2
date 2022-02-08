import { StyleSheet } from 'react-native';
import { colors } from '.';
import fonts from './fonts';

export default StyleSheet.create({

    //CONTENTS
    flex: { flex: 1 },
    f1: { flex: 1 },
    row: { flexDirection: 'row' },
    col: { flexDirection: 'column' },
    jStart: { justifyContent: 'flex-start' },
    jCenter: { justifyContent: 'center' },
    jEnd: { justifyContent: 'flex-end' },
    jBetween: { justifyContent: 'space-between' },
    jAround: { justifyContent: 'space-around' },
    aiStart: { alignItems: 'flex-start' },
    aiCenter: { alignItems: 'center' },
    aiEnd: { alignItems: 'flex-end' },
    ele2: { elevation: 2 },
    ele3: { elevation: 3 },
    ovfHidden: { overflow: 'hidden' },

    //BACKGROUNDCOLORS
    bgcPrimary: { backgroundColor: colors.primary },
    bgcPrimaryDark: { backgroundColor: colors.primaryDark },
    bgcPrimaryLight: { backgroundColor: colors.primaryLight },
    bgcSecondary: { backgroundColor: colors.secondary },
    bgcSecondaryLight: { backgroundColor: colors.secondaryLight },
    bgcSecondaryDark: { backgroundColor: colors.secondaryDark },
    bgcThirdDark: { backgroundColor: colors.thirdDark },
    bgcThird: { backgroundColor: colors.third },
    bgcThirdLight: { backgroundColor: colors.thirdLight },
    bgcThirdDark: { backgroundColor: colors.thirdDark },
    bgcGreen: { backgroundColor: colors.green },
    bgcGreenLight: { backgroundColor: colors.greenLight },
    bgcGreenDark: { backgroundColor: colors.greenDark },
    bgcYellow: { backgroundColor: colors.yellow },
    bgcYellowLight: { backgroundColor: colors.yellowLight },
    bgcRed: { backgroundColor: colors.red },
    bgcWhite: { backgroundColor: colors.white },
    bgcDark: { backgroundColor: colors.dark },
    bgcRoxo: { backgroundColor: colors.roxo },
    bgcTransparent: { backgroundColor: 'transparent' },
    bgcGrey: { backgroundColor: colors.grey },
    bgcGreyDark: { backgroundColor: colors.grey },
    bgcGreyLight: { backgroundColor: colors.greyLight },


    // margin 76 entre logo e primeiro acesso
    // 56


    //MARGIN
    ////ZERO
    m0: { margin: 0, marginTop: 0, marginRight: 0, marginBottom: 0, marginLeft: 0, marginVertical: 0, marginHorizontal: 0 },
    mt0: { marginTop: 0 },
    mr0: { marginRight: 0 },
    mb0: { marginBottom: 0 },
    ml0: { marginLeft: 0 },
    mv0: { marginVertical: 0 },
    mh0: { marginHorizontal: 0 },

    //// 4
    m4: { margin: 4, marginTop: 4, marginRight: 4, marginBottom: 4, marginLeft: 4, marginVertical: 4, marginHorizontal: 4 },
    mt4: { marginTop: 4 },
    mr4: { marginRight: 4 },
    mb4: { marginBottom: 4 },
    ml4: { marginLeft: 4 },
    mv4: { marginVertical: 4 },
    mh4: { marginHorizontal: 4 },

    //// 8 
    m8: { margin: 8, marginTop: 8, marginRight: 8, marginBottom: 8, marginLeft: 8, marginVertical: 8, marginHorizontal: 8 },
    mt8: { marginTop: 8 },
    mr8: { marginRight: 8 },
    mb8: { marginBottom: 8 },
    ml8: { marginLeft: 8 },
    mv8: { marginVertical: 8 },
    mh8: { marginHorizontal: 8 },

    //// 12 
    m12: { margin: 12, marginTop: 12, marginRight: 12, marginBottom: 12, marginLeft: 12, marginVertical: 12, marginHorizontal: 12 },
    mt12: { marginTop: 12 },
    mr12: { marginRight: 12 },
    mb12: { marginBottom: 12 },
    ml12: { marginLeft: 12 },
    mv12: { marginVertical: 12 },
    mh12: { marginHorizontal: 12 },

    //// 16 --- Padrao Container
    m16: { margin: 16, marginTop: 16, marginRight: 16, marginBottom: 16, marginLeft: 16, marginVertical: 16, marginHorizontal: 16 },
    mt16: { marginTop: 16 },
    mr16: { marginRight: 16 },
    mb16: { marginBottom: 16 },
    ml16: { marginLeft: 16 },
    mv16: { marginVertical: 16 },
    mh16: { marginHorizontal: 16 },

    //// 22
    m22: { margin: 22, marginTop: 22, marginRight: 22, marginBottom: 22, marginLeft: 22, marginVertical: 22, marginHorizontal: 22 },
    mt22: { marginTop: 22 },
    mr22: { marginRight: 22 },
    mb22: { marginBottom: 22 },
    ml22: { marginLeft: 22 },
    mv22: { marginVertical: 22 },
    mh22: { marginHorizontal: 22 },

    //// 24
    m24: { margin: 24, marginTop: 24, marginRight: 24, marginBottom: 24, marginLeft: 24, marginVertical: 24, marginHorizontal: 24 },
    mt24: { marginTop: 24 },
    mr24: { marginRight: 24 },
    mb24: { marginBottom: 24 },
    ml24: { marginLeft: 24 },
    mv24: { marginVertical: 24 },
    mh24: { marginHorizontal: 24 },

    //// 32
    m32: { margin: 32, marginTop: 32, marginRight: 32, marginBottom: 32, marginLeft: 32, marginVertical: 32, marginHorizontal: 32 },
    mt32: { marginTop: 32 },
    mr32: { marginRight: 32 },
    mb32: { marginBottom: 32 },
    ml32: { marginLeft: 32 },
    mv32: { marginVertical: 32 },
    mh32: { marginHorizontal: 32 },

    ////DEFAULT
    mDef: { margin: 16 },
    mtDef: { marginTop: 16 },
    mrDef: { marginRight: 16 },
    mbDef: { marginBottom: 16 },
    mlDef: { marginLeft: 16 },
    mvDef: { marginVertical: 16 },
    mhDef: { marginHorizontal: 16 },
    ////MIN
    mMin: { margin: 8 },
    mtMin: { marginTop: 8 },
    mrMin: { marginRight: 8 },
    mbMin: { marginBottom: 8 },
    mlMin: { marginLeft: 8 },
    mvMin: { marginVertical: 8 },
    mhMin: { marginHorizontal: 8 },
    ////MAX
    mMax: { margin: 32 },
    mtMax: { marginTop: 32 },
    mrMax: { marginRight: 32 },
    mbMax: { marginBottom: 32 },
    mlMax: { marginLeft: 32 },
    mvMax: { marginVertical: 32 },
    mhMax: { marginHorizontal: 32 },

    //PADDING
    ////ZERO
    p0: { padding: 0 },
    pt0: { paddingTop: 0 },
    pr0: { paddingRight: 0 },
    pb0: { paddingBottom: 0 },
    pl0: { paddingLeft: 0 },
    pv0: { paddingVertical: 0 },
    ph0: { paddingHorizontal: 0 },
    ////DEFAULT
    pDef: { padding: 16 },
    ptDef: { paddingTop: 16 },
    prDef: { paddingRight: 16 },
    pbDef: { paddingBottom: 16 },
    plDef: { paddingLeft: 16 },
    pvDef: { paddingVertical: 16 },
    phDef: { paddingHorizontal: 16 },
    ////MIN
    pMin: { padding: 8 },
    ptMin: { paddingTop: 8 },
    prMin: { paddingRight: 8 },
    pbMin: { paddingBottom: 8 },
    plMin: { paddingLeft: 8 },
    pvMin: { paddingVertical: 8 },
    phMin: { paddingHorizontal: 8 },
    ////MAX
    pMax: { padding: 32 },
    ptMax: { paddingTop: 32 },
    prMax: { paddingRight: 32 },
    pbMax: { paddingBottom: 32 },
    plMax: { paddingLeft: 32 },
    pvMax: { paddingVertical: 32 },
    phMax: { paddingHorizontal: 32 },

    //// 4
    p4: { padding: 4, paddingTop: 4, paddingRight: 4, paddingBottom: 4, paddingLeft: 4, paddingVertical: 4, paddingHorizontal: 4 },
    pt4: { paddingTop: 4 },
    pr4: { paddingRight: 4 },
    pb4: { paddingBottom: 4 },
    pl4: { paddingLeft: 4 },
    pv4: { paddingVertical: 4 },
    ph4: { paddingHorizontal: 4 },

    //// 8 
    p8: { padding: 8, paddingTop: 8, paddingRight: 8, paddingBottom: 8, paddingLeft: 8, paddingVertical: 8, paddingHorizontal: 8 },
    pt8: { paddingTop: 8 },
    pr8: { paddingRight: 8 },
    pb8: { paddingBottom: 8 },
    pl8: { paddingLeft: 8 },
    pv8: { paddingVertical: 8 },
    ph8: { paddingHorizontal: 8 },

    //// 12 
    p12: { padding: 12, paddingTop: 12, paddingRight: 12, paddingBottom: 12, paddingLeft: 12, paddingVertical: 12, paddingHorizontal: 12 },
    pt12: { paddingTop: 12 },
    pr12: { paddingRight: 12 },
    pb12: { paddingBottom: 12 },
    pl12: { paddingLeft: 12 },
    pv12: { paddingVertical: 12 },
    ph12: { paddingHorizontal: 12 },

    //// 16 --- Padrao Container
    p16: { padding: 16, paddingTop: 16, paddingRight: 16, paddingBottom: 16, paddingLeft: 16, paddingVertical: 16, paddingHorizontal: 16 },
    pt16: { paddingTop: 16 },
    pr16: { paddingRight: 16 },
    pb16: { paddingBottom: 16 },
    pl16: { paddingLeft: 16 },
    pv16: { paddingVertical: 16 },
    ph16: { paddingHorizontal: 16 },

    //// 22
    p22: { padding: 22, paddingTop: 22, paddingRight: 22, paddingBottom: 22, paddingLeft: 22, paddingVertical: 22, paddingHorizontal: 22 },
    pt22: { paddingTop: 22 },
    pr22: { paddingRight: 22 },
    pb22: { paddingBottom: 22 },
    pl22: { paddingLeft: 22 },
    pv22: { paddingVertical: 22 },
    ph22: { paddingHorizontal: 22 },

    //// 32
    p32: { padding: 32, paddingTop: 32, paddingRight: 32, paddingBottom: 32, paddingLeft: 32, paddingVertical: 32, paddingHorizontal: 32 },
    pt32: { paddingTop: 32 },
    pr32: { paddingRight: 32 },
    pb32: { paddingBottom: 32 },
    pl32: { paddingLeft: 32 },
    pv32: { paddingVertical: 32 },
    ph32: { paddingHorizontal: 32 },

    //BORDER
    ////COLORS
    bcDef: { borderColor: colors.deepGrey },
    bcGreyLight: { borderColor: colors.greyText },
    bcDivider: { borderColor: colors.divider },
    bcGrey: { borderColor: colors.grey },
    bcPrimary: { borderColor: colors.primary },
    bcPrimaryDark: { borderColor: colors.primaryDark },
    bcDark: { borderColor: colors.dark },
    bcWhite: { borderColor: colors.white },
    bcYellow: { borderColor: colors.yellow },
    bcBlack: { borderColor: colors.black },
    bcGreyLight: { borderColor: colors.greyMedium },
    ////RADIUS
    bRad4: { borderRadius: 4 },
    bRad8: { borderRadius: 8 },
    bRad12: { borderRadius: 12 },
    bRad16: { borderRadius: 16 },
    bRadB0: { borderBottomLeftRadius: 0, borderBottomRightRadius: 0 },
    bRadB16: { borderBottomLeftRadius: 16, borderBottomRightRadius: 16 },
    bCircle: { borderRadius: 1000 },
    ////DEFAULT
    bDef: { borderWidth: 1 },
    btDef: { borderTopWidth: 1 },
    brDef: { borderRightWidth: 1 },
    bbDef: { borderBottomWidth: 1 },
    blDef: { borderLeftWidth: 1 },
    ////LARGE
    bMax: { borderWidth: 2 },
    btMax: { borderTopWidth: 2 },
    brMax: { borderRightWidth: 2 },
    bbMax: { borderBottomWidth: 2 },
    blMax: { borderLeftWidth: 2 },
    ////ZERO
    b0: { borderWidth: 0 },
    bt0: { borderTopWidth: 0 },
    br0: { borderRightWidth: 0 },
    bb0: { borderBottomWidth: 0 },
    bl0: { borderLeftWidth: 0 },

    //TEXT&FONTS
    ////FONT SIZE
    fsExtraForce: { fontSize: fonts.extraForce },
    fsForce: { fontSize: fonts.force },
    fsBigger: { fontSize: fonts.bigger },
    fsBig: { fontSize: fonts.big },
    fsDef: { fontSize: fonts.default },
    fsRegular: { fontSize: fonts.regular },
    fsSmall: { fontSize: fonts.small },
    fsSmaller: { fontSize: fonts.smaller },

    ////FONT
    // ffBlack: { fontFamily: fonts.montBlack },
    // ffBlackI: { fontFamily: fonts.montBlackItalic },
    // ffExtraBold: { fontFamily: fonts.montExtraBold },
    // ffExtraBoldI: { fontFamily: fonts.montExtraBoldItalic },
    // ffBold: { fontFamily: fonts.montBold },
    // ffBoldI: { fontFamily: fonts.montBoldItalic },
    // ffSemiBold: { fontFamily: fonts.montSemiBold },
    // ffSemiBoldI: { fontFamily: fonts.montSemiBoldItalic },
    ffRegular: { fontFamily: fonts.ffRegular },
    // ffRegularI: { fontFamily: fonts.montRegularItalic },
    // ffLight: { fontFamily: fonts.montLight },
    // ffLightI: { fontFamily: fonts.montLightItalic },
    // ffExtraLight: { fontFamily: fonts.montExtraLight },
    // ffExtraLightI: { fontFamily: fonts.montExtraLightItalic },
    // ffMedium: { fontFamily: fonts.montMedium },
    // ffMediumI: { fontFamily: fonts.montMediumItalic },
    // ffThin: { fontFamily: fonts.montThin },
    // ffThinI: { fontFamily: fonts.montThinItalic },

    fwBold: { fontWeight: 'bold' },

    ////TEXT PROPERTIES
    tUnderline: { textDecorationLine: 'underline' },
    tUppercase: { textTransform: 'uppercase' },
    tCenter: { textAlign: 'center' },
    tRight: { textAlign: 'right' },

    //TEXT COLORS
    tcWhite: { color: colors.white },
    tcDark: { color: colors.dark },
    tcPrimary: { color: colors.primary },
    tcSecondary: { color: colors.secondary},
    tcPrimaryDark: { color: colors.primaryDark },
    tcPlaceholder: { color: colors.greyText },
    tcGreyText: { color: colors.greyMedium },
    tcDeepGrey: { color: colors.deepGrey },
    tcLabel: { color: colors.label },
    tcError: { color: colors.error },
    tcGrey: { color: colors.grey },
    tcYellow: { color: colors.yellow },
    tcGreyMedium: { color: '#444444' },
    tcRed: { color: colors.red }

});


