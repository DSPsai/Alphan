import React from 'react'
export default function HeroCard(props) {
    return (
        <div className='HeroCard'>
                    <div className='Heronum'>
                       {props.num}
                    </div>
                    <div dangerouslySetInnerHTML={{__html: props.svg}} >
                    </div>
                    <div dangerouslySetInnerHTML={{__html: props.title}} className='HerocardTit'>
                    </div>
                    <div className='HerocardText'>{props.text}</div>
                </div>
    )
}
