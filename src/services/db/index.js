import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

const paginates = [
  // 'cliente'
];

class Db {
  temp = {};
  data = {};
  tableData = 'mydb';

  init(){
    return new Promise((resolve, reject) => {
      this.getData(this.tableData).then((mydb)=>{
        if (mydb != null) this.data = mydb;
        resolve(this.data);
      }, (mydb)=>{
        resolve(this.data);
      });
    });
  }

  set(key, val){
    let obj = {};
    obj[key] = val;
    return this.setO(obj);
  }

  setO(obj){
    this.data = { ...this.data, ...obj };
    return this.setData(this.tableData, this.data);
  }

  get(key){
    return this.data[key];
  }

  tempSet(key, val){
    this.temp[key] = val;
  }

  tempGet(key){
    return this.temp[key];
  }

  getData(table) {
    return new Promise(async (resolve, reject) => {
      try {
        let arr = [];
        if (paginates.indexOf(table) >= 0) {
          try {
            for (let count = 0; count <= 99999; count++) {
              let data = await AsyncStorage.getItem(`${table}-${count}`);
              if (data && data != null && data != "") {
                arr = arr.concat(JSON.parse(data));
              } else {
                break;
              }
            }
          } catch (e) {

          }
        } else {
          let data = await AsyncStorage.getItem(table);
          if (data && data != null && data != "") {
            arr = JSON.parse(data);
          }
        }

        resolve(arr);
      } catch (e) {
        reject(e);
      }
    });
  }

  setDataValidate(table, data) {
    let newData = JSON.stringify(data);
    return AsyncStorage.setItem(table, newData);
  }

  setData(table, data) {
    return new Promise(async (resolve, reject) => {
      try {
        if (paginates.indexOf(table) >= 0) {
          let count = 0;
          let arr = [];

          if (data && data.length > 0) {
            for (let o of data) {
              arr.push(o);

              if (arr.length >= 1000) {
                await this.setDataValidate(`${table}-${count}`, arr);

                arr = [];
                count++;
              }
            }

            if (arr.length > 0) {
              await this.setDataValidate(`${table}-${count}`, arr);
            }
          }
        } else {
          await this.setDataValidate(table, data);
        }

        resolve("ok");
      } catch (e) {
        reject(e);
      }
    });
  }

  delData(table) {
    return new Promise(async (resolve, reject) => {
      try {
        if (paginates.indexOf(table) >= 0) {
          let count = 0;

          try {
            for (let count = 0; count <= 99999; count++) {
              let data = await AsyncStorage.getItem(`${table}-${count}`);
              if (data) {
                await AsyncStorage.removeItem(`${table}-${count}`);
              } else {
                break;
              }
            }
          } catch (e) {

          }

        } else {
          await AsyncStorage.removeItem(table);
        }

        resolve("ok");
      } catch (e) {
        reject(e);
      }
    });
  }
}

var db = new Db();

import mensagem from './dao-mensagem';

global.db = db;
global.dao = {
  mensagem
};

export var db;
