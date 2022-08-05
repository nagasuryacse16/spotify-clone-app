export const initialState ={
    user: null,
    playlist: [],
    playing: false,
    item: null,
    //token: 'BQDTPKrlsrBWbAoTILTymMKT7gxNqdFhIk-MurowggQzMhnFmAcHY5ISqGQXDyYd6f5EHxDQoII_UeaonuCpCLxE-gghzwptictXNBpz1cVG75x9JGJu5-WtmeJYumBkPyGAbf6LsVtFP1lbL__c72kyvgvgDt4mix4ldQEoS-kFvcxSepeWkEEvy3OwSo_SP8Bu74KdC5ncyya6'
};

const reducer = (state, action) =>{
    console.log(action);

    switch (action.type) {
        case "SET_USER":
        return {
            ...state,
            user: action.user,
        };
        case "SET_TOKEN":
        return {
            ...state,
            token: action.token,
        };
        case "SET_PLAYLISTS":
        return {
            ...state,
            playlists: action.playlists,
        }; 
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };       
        default:
            return state
    }
};  

export default reducer;