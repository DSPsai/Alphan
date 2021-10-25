import React, { useEffect } from 'react';
import HeroCard from './HeroCard';
import HeroCard1 from './HeroCard1';
import ScrollContainer from 'react-indiana-drag-scroll';
import HorizontalScroll from 'react-scroll-horizontal'
export default function Home() {
    var count = -100;
    var count1 = 100;
    function scroll(event, div, num) {
        event.preventDefault();
        event.stopPropagation()
        // console.log(event)
        // console.log('wheel')
        let myDiv = div;
        if(event.deltaY > 0){
        if ( count < myDiv.scrollLeft) {
            count==-100?count=0:
            count = count + 40;
            myDiv.scrollBy({
                left:  50
            });
        }
        else {
            count = -100
            count1=100
            event.deltaY > 0 ? window.scroll({
                top: (num == 1 ? window.innerHeight * 2.5 : window.innerHeight * 2),
                left: 0,
                behavior: 'smooth'
            }) :
                window.scroll({
                    top: (num == 1 ? window.innerHeight : 0),
                    left: 0,
                    behavior: 'smooth'
                })
        }
    }else{
        console.log(myDiv.scrollLeft)
        if (myDiv.scrollLeft != 0 ) {
            count1 = count1 + 30 ;
            myDiv.scrollBy({
                left: -50
            });
        }
        else {
            count = -100
            count1=100
            event.deltaY > 0 ? window.scroll({
                top: (num == 1 ? window.innerHeight * 2.5 : window.innerHeight * 2),
                left: 0,
                behavior: 'smooth'
            }) :
                window.scroll({
                    top: (num == 1 ? window.innerHeight : 0),
                    left: 0,
                    behavior: 'smooth'
                })
        }
    }
        return false
    }
    function scrollbody(event) {
        event.preventDefault();
        event.stopPropagation();
        count = -100
        count1=100
        event.deltaY > 0 ? window.scroll({
            top: window.innerHeight,
            left: 0,
            behavior: 'smooth'
        }) :
            window.scroll({
                top: -window.innerHeight,
                left: 0,
                behavior: 'smooth'
            })
    }
    useEffect(() => { //restricts the function call loop
        document.getElementById('heroservices').addEventListener('wheel', (e) => scroll(e, document.getElementsByClassName('scroll-container')[0], 2), {
            passive: false
        });
        document.getElementById('one').addEventListener('wheel', (e) => scroll(e, document.getElementsByClassName('scroll-container')[1], 1), {
            passive: false
        });
        document.getElementById('zero').addEventListener('wheel', (e) => scrollbody(e), {
            passive: false
        });
    }, [])
    return (
        <>
            <div className='Hero' id='zero' style={{ minHeight: '500px', height: (window.innerHeight - 84) + 'px' }}>
                <div className='herobig'>Your Partner in Technology</div>
                <div className='herosmall'>
                    Digital Marketing, Logos Design, Web &amp;<br /> App Design and Development Services</div>
                <div className='Herobut'><div className='Herobutin'>Request a quote <i class="fas fa-chevron-right"></i></div></div>
            </div>
            <div className='Herobottom'>
                <div id='heroservices' 
                onMouseLeave={() => {
                    console.log('leave');
                    // document.getElementsByClassName('scroll-container')[0].scroll({
                    //     left:-10000,
                    //     behavior:'smooth'});
                    count = -100
                    count1=100
                }}
                    style={{ minHeight: '661px', height: window.innerHeight }}>
                    <div className='HeroHead'>Our Services</div>
                    <div className='herocontain'>
                        {/* <HorizontalScroll reverseScroll='true' pageLock='true' style={{height:'380px',backgroundColor:'black'}}> */}
                        <div style={{ height: (window.innerHeight - 173 - 340) + 'px' }} className="scroll-container">
                            <HeroCard
                                num="01"
                                title='App Design &amp;<br />Development'
                                svg='<svg width="68" height="41" viewBox="0 0 78 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M57.625 17.129V6.24194L76.5 16.7258L67.2722 22.1694L57.625 17.129Z" stroke="#FED008" />
                        <path d="M76.5002 16.7258L57.835 27.6129V37.8952L76.5002 27.6129V16.7258Z" stroke="#FED008" />
                        <path d="M53.4304 1H24.4888V43.3387H53.4304V1Z" stroke="#FED008" />
                        <path d="M19.875 37.8952L1 27.4113C1.4 27.0823 7.59814 23.6452 10.6472 21.9678L19.875 27.4113V37.8952Z" stroke="#FED008" />
                        <path d="M1 27.4113V16.7258L19.875 6.24194V16.7258L1 27.4113Z" stroke="#FED008" />
                        <path d="M41.1862 48.379C41.1862 49.532 40.2082 50.5 38.9598 50.5C37.7114 50.5 36.7334 49.532 36.7334 48.379C36.7334 47.226 37.7114 46.2581 38.9598 46.2581C40.2082 46.2581 41.1862 47.226 41.1862 48.379Z" stroke="#FED008" />
                    </svg>'
                                text='We help you to turn your ideas into successful mobile apps that you can make money from.'
                            />
                            <HeroCard
                                num='02'
                                svg='<svg width="63" height="54" viewBox="0 0 63 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.39645 27.1036L22.4179 41.125L18.75 44.7929L0.707107 26.75L18.75 8.70711L22.4179 12.375L8.39645 26.3964L8.04289 26.75L8.39645 27.1036ZM54.1036 26.3964L40.0821 12.375L43.75 8.70711L61.7929 26.75L43.75 44.7929L40.0821 41.125L54.1036 27.1036L54.4571 26.75L54.1036 26.3964Z" stroke="#FED008"/>
                    <rect x="32.2012" y="0.567438" width="5.49559" height="52.46" transform="rotate(8.36744 32.2012 0.567438)" stroke="#FED008"/>
                    </svg>
                    '
                                title='Web Design &amp;<br/>Development'
                                text='We help you design and build a website that makes the best first impression for your business.'
                            />
                            <HeroCard
                                svg='<svg width="63" height="54" viewBox="0 0 93 89" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.5 73.4282V15.8119H92.5V73.4282H0.5Z" stroke="#FED008"/>
                    <path d="M58.8395 88.5001H36.898L44.026 74.2864H51.7541L58.8395 88.5001Z" stroke="#FED008"/>
                    <path d="M0.5 73.2239V62.9075H92.5V73.2239H0.5Z" stroke="#FED008"/>
                    <path d="M47.5819 70.8412C49.3374 70.8412 50.7605 69.4607 50.7605 67.7578C50.7605 66.0549 49.3374 64.6744 47.5819 64.6744C45.8264 64.6744 44.4033 66.0549 44.4033 67.7578C44.4033 69.4607 45.8264 70.8412 47.5819 70.8412Z" fill="#C4C4C4"/>
                    <path d="M62.6042 41.1744C65.4954 41.1744 67.8392 38.9314 67.8392 36.1645C67.8392 33.3977 65.4954 31.1547 62.6042 31.1547C59.7129 31.1547 57.3691 33.3977 57.3691 36.1645C57.3691 38.9314 59.7129 41.1744 62.6042 41.1744Z" fill="#FFD200"/>
                    <path d="M43.739 30.2783H28.1865V43.38H43.739V30.2783Z" fill="#FFD200"/>
                    <path d="M43.6782 30.2783C47.8192 29.9359 51.7808 28.5053 55.1258 26.1444C58.4708 23.7835 61.0693 20.584 62.6343 16.8992V54.1008C62.6343 54.1008 56.3156 43.38 43.6782 43.38V30.2783Z" fill="white"/>
                    <path d="M35.9551 43.38L40.3354 56.0435H47.5393L43.7237 43.38H35.9551Z" fill="#FFD200"/>
                    </svg>
                    '
                                num='03'
                                title='Digital <br/>Marketing'
                                text='Passionate about improving customer experiences and enabiling technology-driven transformation across brands'
                            />
                            <div id='observe'></div>
                        </div>
                        {/* </HorizontalScroll> */}
                    </div>
                </div>
                <div id='one' onMouseLeave={() => {
                    console.log('leave');
                    // document.getElementsByClassName('scroll-container')[1].scroll({
                    //     left:-10000,
                    //     behavior:'smooth'});
                    count = -100
                    count1 = 100
                }} >
                    <div className='HeroHead2'>We<div className='HeroHead2bold'>&nbsp;listen&nbsp;</div> to&nbsp;our&nbsp;<div className='HeroHead2bold'>clients.</div></div>
                    <div className="Herotest "  >
                        <div className="scroll-container">
                            <HeroCard1
                                img='/Images/one.png'
                                title='Aabestergo Ltd.'
                                stars='
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>                    
                    '
                                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor cras dolor sed pellentesque sed tellus. Tellus dictum bibendum convallis ornare tincidunt velit orci, amet. Diam viverra neque orci nunc, tellus at amet sed. Facilisis phasellus etiam neque, justo pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor cras dolor sed pellentesque sed tellus. Tellus dictum bibendum convallis ornare '
                                name='Robert Fox'
                                pro='Sales Associate'
                            />
                            <HeroCard1
                                img='/Images/two.png'
                                title='Babestergo Ltd.'
                                stars='
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>                    
                    '
                                text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor cras dolor sed pellentesque sed tellus. Tellus dictum bibendum convallis ornare tincidunt velit orci, amet. Diam viverra neque orci nunc, tellus at amet sed. Facilisis phasellus etiam neque, justo pellentesque.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Porttitor cras dolor sed pellentesque sed tellus. Tellus dictum bibendum convallis ornare '
                                name='Robert Fox Secound Account'
                                pro='production Associate'
                            /></div>
                    </div>
                </div>
            </div>
        </>
    )
}
