import DeviceInfo from 'react-native-device-info';
import { Actions } from 'react-native-router-flux';

class AsyncDb{
    device = null;
    fields = [];

    async init() {
        this.device = await DeviceInfo.getUniqueId();
        let dbdata = global.db.get("data");
        if (dbdata) {
            if (dbdata.fields) this.fields = dbdata.fields;
        }
    }

    syncDb() {
        global.db.set("data", { fields: this.fields });
    }
}

var asyncdb = new AsyncDb();
global.asyncdb = asyncdb;
export var asyncdb;
