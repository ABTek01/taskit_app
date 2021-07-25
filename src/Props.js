import React from 'react'

function Props(props){
    return(
        <div>
            {/*can receive props with props dot notation*/}
            <h2>{props.data}</h2>
        </div>
    )
}
export default Props
