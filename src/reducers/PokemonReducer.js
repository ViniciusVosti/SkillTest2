const INITIAL_STATE = {
    pokemons: [],
    pokemon: {sprites:{}},

    favorites: [],

    loading: false,
    loading_more: false,
    can_load_more:false,
    loading_pokemon: false,
    change: 0,
    change_pokemon: 0,
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'POKEMON_INICIAL_STATE':
            return { ...state, ...INITIAL_STATE };

        case 'POKEMON_REMOVE_FAV':
            let POKEMON_REMOVE_FAV = {...state}
            POKEMON_REMOVE_FAV.favorites = POKEMON_REMOVE_FAV.favorites.filter((item, key) => {
                if(action.payload.name !== item.name){
                    return true;
                }else{
                    return false;
                }
            })
            // POKEMON_REMOVE_FAV.pokemons[action.payload.index].fav = !POKEMON_REMOVE_FAV.pokemons[action.payload.index].fav
            POKEMON_REMOVE_FAV.pokemons.map((o, i) => {
                if(o.name === action.payload.name){
                    POKEMON_REMOVE_FAV.pokemons[i].fav = !POKEMON_REMOVE_FAV.pokemons[i].fav
                }
            })

            POKEMON_REMOVE_FAV.change++
            return POKEMON_REMOVE_FAV

        case "POKEMON_INSERT_FAV":
            let POKEMON_INSERT_FAV = { ...state }
            POKEMON_INSERT_FAV.favorites = [ ...POKEMON_INSERT_FAV.favorites, action.payload.res]
            POKEMON_INSERT_FAV.pokemons[action.payload.index].fav = !POKEMON_INSERT_FAV.pokemons[action.payload.index].fav
            POKEMON_INSERT_FAV.change++
            return POKEMON_INSERT_FAV

        case 'POKEMON_SET_FAVORITES':
            let POKEMON_SET_FAVORITES = { ...state }
            POKEMON_SET_FAVORITES.favorites = action.data.favorites
            POKEMON_SET_FAVORITES.change++
            return POKEMON_SET_FAVORITES

        case 'POKEMON_GET':
            let POKEMON_GET = { ...state }
            POKEMON_GET.pokemon = action.payload
            POKEMON_GET.loading_pokemon = false
            POKEMON_GET.change_pokemon++
            return POKEMON_GET

        case 'POKEMON_GETALL':
            let POKEMON_GETALL = { ...state };

            if(action.payload.page == 0){
                POKEMON_GETALL.pokemons = [];
            }

            action.payload.pokemons.map((o,i) => {
                let fav = false
                POKEMON_GETALL.favorites.map((o2, i2) => {
                    if(o2.name === o.name){
                        fav = true
                    }
                })
                o = {...o, fav}
                POKEMON_GETALL.pokemons.push(o) 
            })

            POKEMON_GETALL.loading = false
            POKEMON_GETALL.loading_more = false

            return POKEMON_GETALL;

        case 'POKEMON_LOADING':
            let POKEMON_LOADING = { ...state };
            POKEMON_LOADING.loading = action.payload
            return POKEMON_LOADING

        case 'GET_POKEMON_LOADING':
            let GET_POKEMON_LOADING = { ...state };
            GET_POKEMON_LOADING.loading_pokemon = action.payload
            return GET_POKEMON_LOADING
            
        case 'POKEMON_LOADING_MORE':
            let POKEMON_LOADING_MORE = { ...state };
            POKEMON_LOADING_MORE.loading_more = action.payload
            return POKEMON_LOADING_MORE

        case 'POKEMON_ERROR':
            if(action.payload.page == 1){
                return { ...state, loading: false, loading_more: false, pokemons: [] }
            }
            return { ...state, loading: false, loading_more: false }

        default:
            return state;
    }
}
