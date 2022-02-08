import React from 'react';
import { Router, Scene, Stack, Actions } from 'react-native-router-flux';

import Drawer from './components/drawer';

import Home from './screen/home';
import NewContact from './screen/newContact';

export default props => (
    
    <Router onStateChange={() => { console.log("Tela Atual>>", Actions.currentScene) }}>

        <Scene key="root" hideNavBar >

            <Scene 
                drawer
                hideNavBar
                key="drawerMenu"
                contentComponent={Drawer}
                drawerWidth={null}
                drawerPosition='left'
            >

                <Stack key="stack1" hideNavBar>

                    <Scene key='home' hideDrawerButton component={Home} hideNavBar init={true} />

                    <Scene key='newContact' hideDrawerButton component={NewContact} hideNavBar/>
                    
                </Stack>

            </Scene>

        </Scene>
        
    </Router>
); 