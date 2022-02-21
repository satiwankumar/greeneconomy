const statesReducer = (state=0, action) =>{
    switch (action.type) {
        case 'SAVE_STATES':
            console.log('in');
            return action.payload;
        default:
            return state;
    }
}
export default statesReducer