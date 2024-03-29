


export function createStore(rootReducer, initialState) {
    
    let  state  = rootReducer(initialState, {type:'__INIT__'}); 
    
    const subscribers  = []

    return {
        // action ==== {type: 'INCREMENT'}
        dispath(action){
            state = rootReducer(state, action)
            subscribers.forEach(subscriber => subscriber())

        },
        subscribe(callback){
            subscribers.push(callback)
        },


    getState(){

        return state
    }
}
}