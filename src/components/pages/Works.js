import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export default function Works() {
    // function scroll(event, num) {
    //     event.preventDefault();
    //     event.stopPropagation();
    //     event.deltaY > 0 ? window.scroll({
    //         top: window.innerHeight * (num + 1),
    //         left: 0,
    //         behavior: 'smooth'
    //     }) :
    //         window.scroll({
    //             top: num == 0 || num == 1 ? 0 : window.innerHeight * (num + 1),
    //             left: 0,
    //             behavior: 'smooth'
    //         })
    // }
    // useEffect(() => { //restricts the function call loop
    //     // let divs = document.getElementsByClassName('work');
    //     // for (let i = 0; i < divs.length; i++) {
    //     //     document.getElementsByClassName('work')[i].addEventListener('wheel', (e) => scroll(e, i), {
    //     //         passive: false
    //     //     });
    //     // }
    // }, [])
    function images() {

    }
    let [color, setcolor] = useState(0);
    let colors = ['red', 'orange', 'pink', 'green', 'orange', 'gold', 'white', 'grey', 'gold', 'white', 'grey']
    function change(num) {
        setcolor(num);
    }
    let data = [
        { image: '/Images/seven.jpg', name: 'Work #1' },
        { image: '/Images/two.jpg', name: 'Work #2' },
        { image: '/Images/three.jpg', name: 'Work #3' },
        { image: '/Images/four.jpg', name: 'Work #4' },
        { image: '/Images/five.jpg', name: 'Work #5' },
        { image: '/Images/six.jpg', name: 'Work #6' },
        { image: '/Images/one.jpg', name: 'Work #7' },
        { image: '/Images/two.jpg', name: 'Work #8' },
        { image: '/Images/three.jpg', name: 'Work #9' },
    ]
    return (
        <>
            <div className='sticky'>
                Projects
            </div>
            <div>
                <div className='workname'>
                    <div className='imgout' style={{ marginTop: '15vh' }}>
                        {data.map((data, index) => {
                            return <img src={data.image} className='workimg' style={{ backgroundColor: colors[index] }} />
                        })}
                    </div>
                    <div className='workno loaderhide'>
                        <div className='loaderhide' style={{display:'flex',flexFlow:'row'}}>
                            <div className='loaderhide'>
                        {data.map((data, index) => {
                            return <div
                                onMouseLeave={() => {document.getElementsByClassName('workimg')[index].classList.remove('workimgstar');change(0)}
                                }
                                onMouseOver={() => { change(index);document.getElementsByClassName('workimg')[index].classList.add('workimgstar') }}
                                className='inwork'>{data.name}</div>
                        })}</div>
                        <div className='number'><div className='numberlopala'><CircularProgressbar value={((color+1)/9)*100} text={`${color+1}`} /></div></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
