import React from 'react';
import playerSprite from "./player.png";
import {connect} from "react-redux";
import handleMovement from "./movement"

function Player(props){
    return(
        <div
            style = {{
                position: 'absolute',
                top: props.position[1], //the y axis
                left: props.position[0], // the x axis
                backgroundImage: `url('${playerSprite}')`,
                backgroundPosition: props.spriteLocation,
                width: '40px',
                height: "40px"
            }}
        />
    )
}

/* to get the state of the store to Player component,
is used "mapStateToProps" function. 
This function maps the state that is stored inside the redux-store the to props of the component 
*/
function mapStateToProps(state) {
    return{
        ...state.player,
        
    }
}

/* the "connect" function is a HOF that is
 going to connect the store to the component
 */
export default connect(mapStateToProps)(handleMovement(Player));