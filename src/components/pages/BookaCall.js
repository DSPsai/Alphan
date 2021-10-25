import React, { useState, useEffect } from 'react'
function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}
export default function Contactus() {
    let [fone, setfone] = useState(false);
    useEffect(async () => {
        setfone(true)
        const res = await loadScript("https://assets.calendly.com/assets/external/widget.js")
        if (!res) {
            alert('Calender Not Available, Please try after sometime...')
        }
    }, [])
    return (
        <div className='my' >
        <div className='usticky'>Get in touch</div>
            <div style={{ height:'auto' }} className='form12'>
                <div style={{ height:'auto'}} className='column'>
                    <br />You can email us at<br /> <br />
                    <a style={{ textDecoration: 'none' }} href="mailto:alphan@gmail.com"><div style={{ fontSize: '30px' }} className='formhead'>alphan@gmail.com</div></a>
                </div>
                <div style={{ height:'auto' , paddingTop: '10vh'}} className='inputs'>
                    <div class="calendly-inline-widget" data-url='https://calendly.com/getcamtest/30min?background_color=1a1a1a&text_color=ffffff&primary_color=f1b824' style={{ minWidth: '320px', height: '650px' }}></div>
                </div>
            </div>
        </div>
    )
}
