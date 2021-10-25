import React, { useState } from 'react'
export default function HeroCard1(props) {
    return (
        <div className='HeroCard1'>
            <div className='Herocardimage'>
                <img src={props.img} />
            </div>
            <div>
                <div className="Herocard1quote">
                    <svg width="145" height="103" viewBox="0 0 145 103" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M48.0781 54.4219V102.469H0.03125V60.6719C0.03125 46.4792 1.13802 35.4766 3.35156 27.6641C5.5651 19.8516 10.2526 13.4714 17.4141 8.52344C24.5755 3.44531 34.7969 0.710938 48.0781 0.320312V20.6328C32.4531 22.9766 24.6406 32.6771 24.6406 49.7344V54.4219H48.0781ZM144.562 54.4219V102.469H96.7109V60.6719C96.7109 46.4792 97.7526 35.4766 99.8359 27.6641C102.049 19.8516 106.737 13.4714 113.898 8.52344C121.19 3.44531 131.411 0.710938 144.562 0.320312V20.6328C128.938 22.9766 121.125 32.6771 121.125 49.7344C121.125 50.776 121.19 52.3385 121.32 54.4219H144.562Z" fill="white" />
                    </svg>
                </div>
                <div className="Herocard1title">
                    {props.title}
                </div>
                <div  dangerouslySetInnerHTML={{__html: props.stars}} className="Herocardstars"></div>
                <div className="Herocardtext">{props.text}</div>
                <div className="Herocardname">- {props.name}</div>
                <div className="Herocardprofession">{props.pro}</div>
            </div>
        </div>
    )
}
