import React, { Component, } from 'react';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { createStore, applyMiddleware } from 'redux';

import Routes from './Routes';
import reducers from './reducers';

import * as util from './util';
import * as services from './services';
import Loading from './components/loading'; 

import { PermissionsAndroid, Platform, View } from 'react-native';

import moment from 'moment'
import 'moment/locale/pt-br';

import { NativeBaseProvider, Box } from 'native-base';

import { p } from './styles'

class App extends Component {

    permissions = [
        // PermissionsAndroid.PERMISSIONS.CAMERA,
        // PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        // PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        // PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        // PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
    ];

    verifyPermissions(res = null) {
        if (res != null) {
            let liberado = true;

            for(let x in res) {
                if (res[x] != "granted") {
                    liberado = false;
                }
            }

            if (liberado) return;
        }

        global.alert.alert("Para que você consiga interagir no app, será necessário aceitar todas as permissões solicitadas.", "Alerta", () => {
            this.updatePermissions();
        });
    }

    updatePermissions() {
        try {
            if (this.permissions.length <= 0) return;

            PermissionsAndroid.requestMultiple(this.permissions).then((res) => {
                this.verifyPermissions(res);
                console.log("PermissionsAndroid.requestMultiple", res);
            }, (err) => {
                this.verifyPermissions();
                console.log("PermissionsAndroid.requestMultiple err", err);
            });
        } catch (err) {
            console.log("PermissionsAndroid.requestMultiple catch", err)
        }
    }

    componentDidMount() {
        console.disableYellowBox = true;
        global.bootstrap.init().then((res) => {
            // Actions.reset("drawerMenu")
        }).catch((err) => {
            console.log("bootstrap error", err);
        });

        if (Platform.OS !== 'ios') this.updatePermissions();
    }

    render() {
        global.store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        moment.locale('pt-br')
        return (
            <NativeBaseProvider>
                <View style={{flex: 1}}>
                    <Loading/>
                    <Provider store={global.store}>
                        <Routes />
                    </Provider>
                </View>
            </NativeBaseProvider>
        );
    }
}

export default App;