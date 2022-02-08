import React from 'react';
import { ActivityIndicator, Alert, Text, View } from 'react-native';

class AlertCustom {
    alert(text, func = null, title = null) {
        Alert.alert(
            title || "Alert",
            text,
            [
                { text: 'OK', onPress: () => { if (func) func(); } },
            ],
            { cancelable: false }
        )
    }

    confirm(text, func = null, title = "Ok", func_cancel = null) {
        Alert.alert(
            title,
            text,
            [
                { text: 'Cancel', onPress: () => { if (func_cancel) func_cancel(); } },
                { text: 'Ok', onPress: () => { if (func) func(); } },
            ],
            { cancelable: false }
        )
    }
}

var alert = new AlertCustom();
global.alert = alert;
export var alert;
