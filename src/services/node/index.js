import axios from 'axios';

export class Node {
    debug = true;

    constructor() {
        this.debug = global.config.debug;
        if (global.config.isDebuggingEnabled) {
            // GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest;
        }
    }

    get(url, usuario = null, filter = true) {
        return this.rest(url, {}, usuario, filter, true, 'get');
    }

    post(url, body, usuario = null, filter = true) {
        return this.rest(url, body, usuario, filter, true, 'post');
    }

    put(url, body, usuario = null, filter = true) {
        return this.rest(url, body, usuario, filter, true, 'put');
    }

    delete(url, usuario = null, filter = true) {
        return this.rest(url, {}, usuario, filter, true, 'delete');
    }

    patch(url, body, usuario = null, filter = true) {
        return this.rest(url, body, usuario, filter, true, 'patch');
    }

    rest(url, body = {}, usuario = null, filter = true, use_axios = true, action = 'post',) {
        return new Promise((resolve, reject) => {
            this.rfc(url, body, usuario, filter, use_axios, action).then(data => {
                resolve(data.data);
            }, reject);
        });
    }

    rfc(metodo, body = {}, usuario = null,filter = true, use_axios = true, action = 'post') {
        body.path = metodo;

        if (this.debug) {
            console.log('Certo 3', body);
        }

        let rest = null;

        if (use_axios) {
            rest = this._axios(body, null, action);
        } else {
            rest = this._fetch(body, null, action);
        }

        console.log('rest', rest);

        return new Promise(async (resolve, reject) => {
            if (this.debug) console.log(body, null);

            let response;

            try {
            response = await rest;
            } catch (e) {
            response = e.response;
            }

            this.verifyResponse(response, usuario, filter, resolve, reject);
        });
    }

    verifyResponse(response, usuario, filter, resolve, reject) {
        if (this.debug) console.log('Este Node rfc fetch',response,response.hasOwnProperty('data'),response.data.hasOwnProperty('error'),);

        if (response.hasOwnProperty('data')) {
            var data = response.data;
            if (data.hasOwnProperty('value')) {
                resolve({data: data.value});
            } else {
                reject({data});
            }
        } else {
            if (this.debug) console.log('Node rfc fetch reject 2', response);
            var message = 'Erro ao tentar acessar o servidor, problema com internet!';
            reject({
                code: 99,
                error: 99,
                message: message,
                errors: [message],
                statusCode: 500,
            });
        }
    }

    _axios(body, authorization = null, action = 'post') {
        let link = global.config.basedir + body.path;
        // delete body.path;

        let headers = {};

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';
        headers['User-Key'] = global.config.user_key;

        // if(authorization != null) headers['Authorization'] = authorization;

        if (this.debug) {
            console.log('link', link, headers);
        }

        if (action === 'get' || action === 'delete') {
            return axios[action](link, {headers});
        } else {
            return axios[action](link, body, {headers});
        }
    }

    _fetch(body, authorization = null, action = 'post') {
        let link = global.config.basedir + body.path;
        delete body.path;

        let headers = {};

        headers['Accept'] = 'application/json';
        headers['Content-Type'] = 'application/json';
        headers['User-Key'] = global.config.user_key;

        if (authorization != null) headers['Authorization'] = authorization;

        return fetch(link, {method: action.toUpperCase(), body, headers});
    }
}
