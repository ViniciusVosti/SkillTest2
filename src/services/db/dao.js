import React from 'react';

export class DAO {
    pk = "";
    table = "";

    constructor() {

    }

    getAll() {
        return new Promise((resolve, reject) => {
            global.db.getData(this.table).then(resolve, () => {
                resolve([]);
            });
        });
    }

    getIndex(key) {
        return new Promise((resolve, reject) => {
            this.getAll().then((data) => {
                resolve(data[key]);
            }, reject);
        });
    }

    getIndexOf(key, valor) {
        return new Promise((resolve, reject) => {
            this.getAll().then((data) => {
                let dados = [];
                for (let x in data) {
                    if (data[x][key].indexOf(valor) >= 0) {
                        dados.push(data[x]);
                    }
                }
                resolve(dados);
            }, reject);
        });
    }

    getKey(key, valor) {
        return new Promise((resolve, reject) => {
            this.getAll().then((data) => {
                let dados = [];
                for (let x in data) {
                    if (valor == data[x][key]) {
                        dados.push(data[x]);
                    }
                }
                resolve(dados);
            }, reject);
        });
    }

    get(id) {
        return new Promise((resolve, reject) => {
            this.getKey(this.pk, id).then((data) => {
                resolve(data[0]);
            }, reject);
        });
    }

    add(obj) {
        return new Promise((resolve, reject) => {
            this.getAll().then((data) => {
                data.push(obj);
                global.db.setData(this.table, data).then(() => {
                    resolve("OK");
                }, reject);
            }, (err) => {
                let data = [];
                data.push(obj);
                global.db.setData(this.table, data).then(() => {
                    resolve("OK");
                }, reject);
            });
        });
    }

    addAll(array) {
        return new Promise((resolve, reject) => {
            this.getAll().then((data) => {
                for (let x in array) {
                    data.push(array[x]);
                }
                global.db.setData(this.table, data).then(() => {
                    resolve("OK");
                }, reject);
            }, (err) => {
                let data = [];
                for (let x in array) {
                    data.push(array[x]);
                }
                global.db.setData(this.table, data).then(() => {
                    resolve("OK");
                }, reject);
            });
        });
    }

    updateKey(key, valor, obj) {
        return new Promise((resolve, reject) => {
            this.getAll().then((data) => {
                for (let x in data) {
                    if (valor == data[x][key]) {
                        data[x] = obj;
                    }
                }
                global.db.setData(this.table, data).then(() => {
                    resolve("OK");
                }, reject);
            }, reject);
        });
    }

    update(id, obj) {
        return this.updateKey(this.pk, id, obj);
    }

    delIndex(key) {
        return new Promise((resolve, reject) => {
            this.getAll().then((data) => {
                delete data[key];
                global.db.setData(this.table, data).then(() => {
                    resolve("OK");
                }, reject);
            }, reject);
        });
    }

    delIndexOf(key, valor) {
        return new Promise((resolve, reject) => {
            this.getAll().then((data) => {
                let dados = [];
                for (let x in data) {
                    if (data[x][key].indexOf(valor) < 0) {
                        dados.push(data[x]);
                    }
                }
                global.db.setData(this.table, dados).then(() => {
                    resolve("OK");
                }, reject);
            }, reject);
        });
    }

    delKey(key, valor) {
        return new Promise((resolve, reject) => {
            this.getAll().then((data) => {
                let dados = [];
                for (let x in data) {
                    if (valor != data[x][key]) {
                        dados.push(data[x]);
                    }
                }
                global.db.setData(this.table, dados).then(() => {
                    resolve("OK");
                }, reject);
            }, reject);
        });
    }

    del(id) {
        return this.delKey(this.pk, id);
    }

    delMultKey(key, valor) {
        return new Promise((resolve, reject) => {
            this.getAll().then((data) => {
                let dados = [];
                for (let x in data) {
                    let vrf = valor.indexOf(data[x][this.pk]);
                    if (vrf == -1) {
                        dados.push(data[x]);
                    }
                }
                global.db.setData(this.table, dados).then(resolve, reject);
            }, reject);
        });
    }

    delMult(id) {
        return this.delMultKey(this.pk, id);
    }

    set(array = []) {
        return global.db.setData(this.table, array);
    }
}
