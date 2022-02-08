import firebase  from 'react-native-firebase';

class Firebase {
    async getToken() { // Promise
        let ret = await firebase.messaging().getToken();

        if (!ret) {
            throw "err";
        }

        return ret;
    }

    async getPermission(){
        let ret = await firebase.messaging().hasPermission();

        if (!ret) {
            ret = await firebase.messaging().requestPermission();

            if (!ret) {
                throw "err";
            }
        }

        return "ok";
    }

    onTokenRefresh(hundler) { // Void
        firebase.messaging().onTokenRefresh(hundler);
    }

    onNotificationOpen(hundler) { // Void
        this.onNotification(hundler);
    }

    onNotification(hundler) { // Void
        firebase.notifications().onNotification(hundler);
    }

    removeAllDeliveredNotifications() { // Void
        firebase.notifications().removeAllDeliveredNotifications();
    }

    subscribe(topic) { // Void
        firebase.messaging().subscribeToTopic(topic);
    }

    unsubscribe(topic) { // Void
        firebase.messaging().unsubscribeFromTopic(topic);
    }
}

var firebaseClass = new Firebase();
export default firebaseClass;
