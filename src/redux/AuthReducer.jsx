AuthReducer = (state = {authData:null, loading:false, error:false}, action)=>{
    switch (action.type){
        case "AUTH_START":
            return {...state, loading:true, error:false}
        case "AUTH_SUCCCESS":
            return {...state, authData:action.data}
        default:
            return state
    }
}