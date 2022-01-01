import React from 'react'

function Compostion() {
    return (
        <div>
            <h3>Use React Composition</h3>
            <DynamicInfo /> 
        </div>
    )
}

function DynamicInfo () {
    return(
        <GenricBox>
           <div> This is specific info in generic box</div> 
        </GenricBox>
    );
}

function GenricBox (props) {
    return (
        <div className="sidebar">
            {props.children}
        </div>
    );
}

export default Compostion
