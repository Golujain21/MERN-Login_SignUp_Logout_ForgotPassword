const reducer = (state,action) => {
    if(action.type === "HOME_UPDATE"){
        return{
            ...state,
            name:action.payload.name,
            title:action.payload.title
        }
    }
    if(action.type === "ABOUT_UPDATE"){
        return{
            ...state,
            name:action.payload.name,
            title:action.payload.title
        }
    }
    return state;
}
export default reducer