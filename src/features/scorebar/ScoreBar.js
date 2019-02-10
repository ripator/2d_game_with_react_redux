import React from "react";
import {connect} from "react-redux";


function ScoreBar(props){

    return(
        <div className="score-container"
            style ={{
                position: "absolute",
                top: "400px",
                left: "280px",
                width: "200px",
                height: "80px",
                border: "4px solid white",
                margin: "20px 20px",
            }}>
            <div className="scorebar"
                style={{
                    display: "flex",
                    justifyContent: "center",
                  
                    
                }}>
                <h2 
                style={{
                    color: "#c0832c",
                }}>Scores: {props.score}</h2>
                
            </div>
        </div>
    )

}

function mapStateToProps(state){
    return {
        ...state.player,
    }
}

export default connect(mapStateToProps)(ScoreBar);