
export const modificaCampo = (payload, type, campo = null, index = null) => {
    if (campo !== null) {
        payload = { valor: payload, campo, index };
    }
    return { payload, type, campo, index };
}
