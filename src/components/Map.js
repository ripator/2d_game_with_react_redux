import React, { Component } from 'react';

const tileProperties = {
    context: null,
    tileHeight: 40,
    tileWidth: 40,
    mapHeight: 10,
    mapWidth: 10,
}

const gameMap = [
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
    1, 0, 0, 0, 1, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 0, 1, 1, 1, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 0, 1, 1, 1, 0, 0, 1,
    1, 0, 1, 0, 1, 0, 1, 1, 0, 1,
    1, 0, 0, 0, 0, 0, 0, 0, 0, 1,
    1, 0, 1, 1, 1, 1, 1, 0, 1, 1,
    1, 0, 0, 0, 1, 0, 0, 0, 0, 1,
    1, 1, 1, 1, 1, 1, 1, 1, 1, 1
]

function  Map (){
    
    
    window.onload = function(){
        tileProperties.context = document.getElementById("game").getContext('2d');
        requestAnimationFrame(drawGame);
        tileProperties.context.font = "bold 10pt sans-serif";
        
    }
        
    
    

    // render(){
    //     const {dungeon} = this.state;
    //     console.log(this.state)
    //     return(
    //         <canvas className = "game" style ={{maxWidth: "400px", maxHeight: "400px", justifyContent: "center", alignItems: "center", margin: "auto"}}>
    //             {dungeon}
    //         </canvas>
    //     )
    // }


    function drawGame() {
        if(tileProperties.context===null){
            return;
        }
        for(let i = 0; i < tileProperties.mapHeight; i++){
            for(let j = 0; j < tileProperties.mapWidth; j++ ){
                switch(tileProperties.gameMap[((i*tileProperties.mapWidth) + j)]){
                    case 0: tileProperties.context.fillStyle = "#eeeeee";
                            break;
                    default: tileProperties.context.fillStyle = "#999999";
                }
                tileProperties.context.fillRect(j*tileProperties.tileWidth, i*tileProperties.tileHeight, tileProperties.tileWidth, tileProperties.tileHeight);
            }
        }
        tileProperties.context.fillStyle = "#ff0000";
        
        requestAnimationFrame(drawGame);
    }
}

export default Map;