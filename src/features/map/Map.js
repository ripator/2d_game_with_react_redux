import React from "react";
import "./styles.css";
import {connect} from "react-redux";
import {playerSize} from "../constants/constants.js";


function getTileSprite(type){
    switch(type) {
        case 0: 
            return "grass";
        case 1:
            return "tree";
        case 2:
            return "treasure";
        case 5:
            return "rock";
        case 6:
            return "tree";
        case 7: 
            return "enemy";
        default:
            console.log("tile")
    }
}
function MapTile(props){
    return(
        <div className={`tile ${getTileSprite(props.tile)}`}
         style={{
             height: playerSize,
             width: playerSize
        }}/>
    )
}

function MapRow(props){
    return(
        <div className="row">
            {
                props.tiles.map((tile, i) => <MapTile key={i} tile={tile} />)
            }
        </div>
        
     )
}

function Map(props){
    return(
        <div
          style={{
              position: "relative",
              top: "0px",
              left: "0px",
              width: "800px",
              height: "400px",
              border: "4px solid white",
              margin: "20px auto"
          }}  
        >
        {
            props.tiles.map((row, i) => <MapRow key={i} tiles ={row} />)
        }
        </div>
    )
}
function mapStateToProps(state){
    return {
        tiles: state.map.tiles,
    }
}

export default connect(mapStateToProps)(Map);