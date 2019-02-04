
const initialState = {
    tiles: []
}

const mapReducer = (state=initialState, action) => {
    switch(action.type) {
        case "Add_Tiles":
            return {
                ...action.payload
            }
        default:
            return state
    }
}

export default mapReducer