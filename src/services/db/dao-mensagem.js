import React from 'react';
import { DAO } from './dao';

class DAOMensagem extends DAO {
    pk = "id";
    table = "mensagem";

    delChatDe(valor) {
        return new Promise((resolve, reject) => {
            this.getAll().then((data) => {
                let dados = [];
                for (let x in data) {
                    if ((data[x].extra.indexOf("CHAT:") < 0) || (data[x].extra.indexOf("CHAT:") >= 0 && (data[x].de+"") != (valor+""))) {
                        dados.push(data[x]);
                    }
                }
                this.db.setData(this.table, dados).then(() => {
                    resolve("OK");
                }, reject);
            }, reject);
        });
    }
}

var mensagem = new DAOMensagem();
export default mensagem;
