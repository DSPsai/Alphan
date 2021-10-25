import React from 'react'

export default function WorkCard(props) {
    return (
        <div className='workcard'>
            <div style={{height:'70vh',backgroundColor:props.color,marginTop:'15vh',marginLeft:'15vh'}}>
            </div>
            <div className='workcarddata'>
                {props.workno}
            </div>
        </div>
    )
}

