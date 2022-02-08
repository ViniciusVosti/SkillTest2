// import SplashScreen from 'react-native-splash-screen';

class Bootstrap {
    async init() {
		return new Promise((resolve, reject) => {
            global.db.init().then((res) => {
                global.asyncdb.init();
                resolve("initialized");
                this.splashHide();
            }).catch((err) => {
                reject(err);
                this.splashHide();
            });
        });
    }

    splashHide() {
        setTimeout(() => {
            // SplashScreen.hide();
        }, 1000);
    }
    
}

var bootstrap = new Bootstrap();
global.bootstrap = bootstrap;
export var bootstrap;
