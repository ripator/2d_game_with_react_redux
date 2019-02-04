import React from "react";
import Player from "../player/Player";
import Map from "../map/Map";
import {tiles} from "../../data/maps/first/first";
import store from "../../config/store";

function World(props){
    store.dispatch({type: "Add_Tiles", payload: {
        tiles,
    }})
    return(
        <div
         style={{
             position: "relative",
             width: "800px",
             height: "400px",
             margin: "20px auto",
         }}>
            <Map />
            <Player  />
        </div>
    )
}

export default World;