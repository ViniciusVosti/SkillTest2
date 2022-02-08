import { Actions } from 'react-native-router-flux';

export const getPokemons = (obj={ page: 1 }) => {
    return dispatch => {

        if(obj.page > 1){
            dispatch({ type: 'POKEMON_LOADING_MORE', payload: true });
        }else{
            dispatch({ type: 'POKEMON_LOADING', payload: true });
        }
        
        global.pokemon.getPokemons(obj).then((res) => {
            if(res.results){
                dispatch({ type: 'POKEMON_GETALL', payload: { pokemons: res.results, ...obj } });
            }else{
                dispatch({ type: 'POKEMON_GETALL', payload: { pokemons: [{ name: res.name, id: res.id }], ...obj } });
            }
        })
        .catch((err) => {
            dispatch({ type: 'POKEMON_ERROR', payload: { ...obj } });
            // if (err.hasOwnProperty("error_msg") && err.error_msg != "") {
            //     global.alert.alert(err.error_msg);
            // }
        });
    }
}

export const getPokemon = (obj={ pokemon_name: "" }) => {
    return dispatch => {
        dispatch({ type: 'GET_POKEMON_LOADING', payload: true });
        global.pokemon.getPokemons(obj).then((res) => {
            dispatch({ type: 'POKEMON_GET', payload: res });
        })
        .catch((err) => {
            dispatch({ type: 'POKEMON_ERROR', payload: { ...obj } });
            Actions.pop()
            // if (err.hasOwnProperty("error_msg") && err.error_msg != "") {
            //     global.alert.alert(err.error_msg);
            // }
        });
    }
}

export const insertFavorite = (obj={}) => {
    return dispatch => {
        global.pokemon.getPokemons(obj).then((res) => {
            dispatch({ type: 'POKEMON_INSERT_FAV', payload: { res, index: obj.index } });
            global.asyncdb.insertFavorite(res).then(() => {}).catch((error) => {})
        })
        .catch((err) => {
            dispatch({ type: 'POKEMON_ERROR', payload: { ...obj } });
            // if (err.hasOwnProperty("error_msg") && err.error_msg != "") {
            //     global.alert.alert(err.error_msg);
            // }
        });
    }
}

export const removeFavorite = (obj={}) => {
    return dispatch => {
        global.asyncdb.removerFavorite(obj.name).then(() => {
            dispatch({ type: "POKEMON_REMOVE_FAV", payload: obj })
        })
        .catch((err) => {

        })
    }
}