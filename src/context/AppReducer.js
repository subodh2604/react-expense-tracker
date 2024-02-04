export default (state,action)=>{
    switch (action.type) {

        case 'DELETE_TRANSACTION':
            console.log(action.payload +"delete clicked");
            return {
                ...state,
                transactions:state.transactions?.filter(
                    transactions=>transactions.id!==action.payload
                )
            }
            case 'ADD_TRANSACTION':
                console.log(action.payload +"add clicked");
                return {
                    ...state,
                    transactions:[action.payload,...state.transactions]
                    
                }
        default:
            return state;
    }
}