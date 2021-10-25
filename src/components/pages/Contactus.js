import React, { useState, useEffect } from 'react'
    import { useHistory } from "react-router-dom";
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
  const history = useHistory();
    let [two, settwo] = useState('none')
    let [three, setthree] = useState('none')
    let [fone, setfone] = useState(false);
    let [ftwo, setftwo] = useState(false);

    // const history = useHistory();
    useEffect(async () => {
        setfone(true)
        const res = await loadScript("https://assets.calendly.com/assets/external/widget.js")
        if (!res) {
            alert('Calender Not Available, Please try after sometime...')
        }
    }, [])
    return (
        <div>
        <div className='usticky'>Get in touch</div>
            <div style={{  height: fone ? '580px' : '0px', paddingTop: fone ? '10vh' : '0vh', opacity: !fone ? '0' : '1' }} className='form12'>
                <div style={{ height: fone ? '580px' : '0px', opacity: !fone ? '0' : '1' }} className='column'>
                    <div className='formhead'>Pro tips</div><br />
                    <div><div style={{fontSize:'40px',marginBottom:'10px'}}>Touch on these things in the project details</div>-Your idea <br />-Your timeline <br /> -Budget allocation<br />
                    <br /><div style={{fontSize:'40px',marginBottom:'30px'}}>You can email us at</div></div> 
                    <a style={{ textDecoration: 'none' }} 
                    href="mailto:alphan@gmail.com"><div style={{ fontSize: '30px' }} className='formhead'>alphan@gmail.com</div></a>
                </div>
                <div style={{ height: fone ? '580px' : '0px', opacity: !fone ? '0' : '1' }} className='inputs'>
                    <input name='name' placeholder='Your Name' /><br />
                    <input name='phone' placeholder='Phone Number' /><br />
                    <input name='company' placeholder='Company Name' /><br />
                    <input name='email' placeholder='Email' /><br />
                    <textarea placeholder='Project Details' rows='5' />
                    <div className='Herobut'><div className='Herobutin'> Submit <i class="fas fa-chevron-right"></i></div></div>
                </div>
            </div>
            <div style={{ height: ftwo ? '800px' : '0px', paddingTop: ftwo ? '10vh' : '0vh', opacity: !ftwo ? '0' : '1' }} className='form12'>
                <div style={{ height: ftwo ? '100px' : '0px', opacity: !ftwo ? '0' : '1' }} className='column'>
                    <br /><div style={{fontSize:'60px'}}>You can email us at</div><br /> <br />
                    <a style={{ textDecoration: 'none' }} href="mailto:alphan@gmail.com"><div style={{ fontSize: '30px' }} className='formhead'>alphan@gmail.com</div></a>
                </div>
                <div style={{ height: ftwo ? '750px' : '0px', opacity: !ftwo ? '0' : '1' }} className='inputs'>
                    <div class="calendly-inline-widget" data-url='https://calendly.com/getcamtest/30min?background_color=1a1a1a&text_color=ffffff&primary_color=f1b824' style={{ minWidth: '320px', height: '650px' }}></div>
                </div>
            </div>
            <div className='usi' >
                <div style={{backgroundColor:two=='none'?'white':'#FED008'}} onClick={() => { history.push("/BookMyCall") }} 
                onMouseOver={() => settwo('black')} 
                onMouseLeave={() => settwo('none')}
                className="fill">
                    <svg style={{transform:two=='none'?'rotate(5deg)':'rotate(-45deg)'}} width="144" height="165" viewBox="0 0 184 185" fill={two} xmlns="http://www.w3.org/2000/svg">
                        <path d="M99.2273 66.2861H75.8927L75.5392 38.3553H146.25V109.066L118.319 108.712V85.3779L46.9014 156.796L27.1024 136.997L99.2273 66.2861Z" stroke="black" stroke-width="4" />
                    </svg>
                    <div style={{ marginTop: '-30px'}} className='usd2' >Book a Call</div>
                </div>
                <div  style={{backgroundColor:three=='none'?'#FED008':'white'}} 
                    onClick={() => {
                        window.location.href = 'mailto:alphan@gmail.com?subject= New Project ';
                        window.scrollTo(0, 0);
                    }}
                    onMouseOver={() => setthree('black')} 
                    onMouseLeave={() => setthree('none')}
                    className="fill">
                    <svg style={{transform:three=='none'?'rotate(-88deg)':'rotate(-45deg)',marginLeft:three=='none'?'-1vw':''}} width="124" height="155" viewBox="0 0 184 185" fill={three} xmlns="http://www.w3.org/2000/svg">
                        <path d="M99.2273 66.2861H75.8927L75.5392 38.3553H146.25V109.066L118.319 108.712V85.3779L46.9014 156.796L27.1024 136.997L99.2273 66.2861Z" stroke="black" stroke-width="4" />
                    </svg>
                    <div style={{marginTop:'-23px'}} className='usd3' >Drop a mail</div>
                </div>
            </div>
        </div>
    )
}
