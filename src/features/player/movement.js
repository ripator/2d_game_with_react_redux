import store from "../../config/store";
import {playerSize, mapHeight, mapWidth} from "../constants/constants.js";

/* this function is a higher-order function
which is going to take a player and return
a player with superpowers*/

export default function handleMovement(player){


    function getNewPosition(oldPosition, direction) {
        switch(direction){
            case "LEFT":
                return [oldPosition[0] - playerSize, oldPosition[1]];
            case "RIGHT":
                return [oldPosition[0] + playerSize, oldPosition[1]];
            case "UP":
                return [oldPosition[0], oldPosition[1] - playerSize];
            case "DOWN":
                return [oldPosition[0], oldPosition[1] + playerSize];    
            default:
                console.log(oldPosition[0], oldPosition[1])  
        }
    }

    function getPlayerLocation(direction, spriteIndex){
        switch(direction){
            case "DOWN":
                return `${playerSize*spriteIndex}px ${playerSize*0}px`;
            case "RIGHT":
                return `${playerSize*spriteIndex}px ${playerSize*1}px`;
            case "LEFT":
                return `${playerSize*spriteIndex}px ${playerSize*2}px`;
            case "UP":
                return `${playerSize*spriteIndex}px ${playerSize*3}px`;
            default:
                console.log(direction);
        }
    }

    function getSpriteIndex(){
        const spriteIndex = store.getState().player.spriteIndex;
        return spriteIndex >= 7 ? 0: spriteIndex+1;
    }

    function stayInBoundaries(oldPosition, newPosition) {
        return (newPosition[0] >= 0 && newPosition[0] <= (mapWidth - playerSize)) && 
        (newPosition[1] >= 0 && newPosition[1] <= (mapHeight - playerSize)) 
    }

    function recognizeObstacles(oldPosition, newPosition){
        const tiles = store.getState().map.tiles;
        const x = newPosition[0] / playerSize;
        const y = newPosition[1] / playerSize;
        const nextTile = tiles[y][x];
        return (nextTile < 5);
    }

    function addScore(newPosition){
        const mapCopy = Object.assign({}, store.getState().map);
        const tilesCopy = mapCopy.tiles.slice();
        const x = newPosition[0] / playerSize;
        const y = newPosition[1] / playerSize;
        const nextTile = tilesCopy[y][x];
        let newScore = store.getState().player.score;

        if(nextTile ===2) {
            newScore += 200;
            tilesCopy[y].splice(x, 1, 0);
            
            store.dispatch({
                type: "Add_Tiles",
                payload: {
                    tiles: tilesCopy,
                }
            })
           
        }
        return newScore;
    }

    

    /* we create an action and we dispatch it,
     which is - send it to our store
      using "store.dispatch()"
    */
    function dispatchMove(direction, newPosition) {
        const spriteIndex = getSpriteIndex();
        store.dispatch({
            type: "Move_Player", 
            payload: {
                position: newPosition,
                direction: direction,
                spriteIndex: spriteIndex,
                spriteLocation: getPlayerLocation(direction, spriteIndex),
                score: addScore(newPosition)
            },
        })
    }
    
    function tryMove(direction){
        const oldPosition = store.getState().player.position;
        const newPosition = getNewPosition(oldPosition, direction);

        if(stayInBoundaries(oldPosition, newPosition) && recognizeObstacles(oldPosition, newPosition)){
            dispatchMove(direction, newPosition)
        }
    }

    function handleKeyDown(e){
        /*prevent default to prevent the screen
         from moving and scrolling when we try to move the player */
        e.preventDefault();
        /*event.keyCode returns the Unicode character code of the key that was pressed, in our case the Unicode character codes are 37, 38, 39, 40 (for the arrows) and 65, 87, 68, 83 (for WASD control- for true gamers) */
        switch(e.keyCode){
            case 37:
            case 65: 
              return  tryMove("LEFT");
            case 38:
            case 87:
                return tryMove("UP");
            case 39:
            case 68:
                return tryMove("RIGHT");
            case 40:
            case 83:
                return tryMove("DOWN");         
            default: 
                console.log(e.keyCode);
        }
    }
    
    
    
    window.addEventListener("keydown", (e) => {
        handleKeyDown(e)
    })
    return player
}