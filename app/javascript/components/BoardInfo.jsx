import React from 'react';
import { Link }from 'react-router-dom'

const BoardInfo = (props) => {
    return(
        <div className = "board-element">
            <Link to={`/board/${props.id}`} > {props.name}</Link>
        </div>
    )
}

export default BoardInfo;