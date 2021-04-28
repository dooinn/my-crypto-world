
export default (state, action) => {
    switch (action.type) {
        case "ADD_COIN_TO_MYLIST":
            return {
                ...state,
                mylist: [action.payload, ...state.mylist],
            };
        case "REMOVE_COIN_FROM_MYLIST":
            return {
                ...state,
                mylist: state.mylist.filter(
                    (coin) => coin.id !== action.payload
                )
            };
        default:
            return state;
    }
}
