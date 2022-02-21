const stopsReducer = (state=0, action) =>{
    switch (action.type) {
        case 'SAVE_STOPS':
            console.log('in');
            return action.payload;
        default:
            return state;
    }
}
export default stopsReducer