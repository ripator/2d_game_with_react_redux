/*this file is responsible for dealing with
the state of the Player component */

const initialState = {
    position: [0, 0],
    spriteLocation: "0px 0px",
    direction: "RIGHT",
    spriteIndex: 0,
    score: 0,
}

const playerReducer = (state=initialState, action) => {
    switch(action.type) {
        case "Move_Player":
            return {
                ...action.payload
            }
        default:
            return state //is going to return whatever is in the redux store
    }
}

export default playerReducer