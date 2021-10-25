import React from 'react';
import './Nav.css'
import { Link } from 'react-router-dom';
export default function Navbar() {
    return (
        <>{(window.innerWidth < 500) ? <div id='Navbap'>
            <div id='Nav'>
                <svg width="50" height="5" viewBox="0 0 50 5" fill="none">
                    <rect width="50" height="5" fill="white" />
                </svg>
                <svg width="50" height="5" viewBox="0 0 50 5" fill="none">
                    <rect width="50" height="5" fill="white" />
                </svg>
            </div>
        </div> :
            <div id='Navbapp'>
                <svg width="27" height="39" viewBox="0 0 47 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M33.492 36.2464C41.3506 27.3747 44.5381 21.3639 43.6373 20.5687C42.7364 19.7734 38.7188 22.9023 29.0327 31.002C19.5648 20.7215 8.87582 14.1179 5.10671 17.4989C-1.58563 23.502 -1.59127 53.7884 4.44985 58.6146C7.53952 61.0829 19.3732 51.2827 29.5506 40.5456C37.654 49.6712 41.9787 58.6146 45.0607 58.6146C48.1426 58.6146 38.9326 43.1872 33.492 36.2464ZM9.35009 23.228C11.0236 22.7216 17.8773 27.6943 25.1397 35.644L25.0839 35.7109C17.592 44.682 11.6937 49.9401 9.35009 49.1155C4.33709 47.3517 5.46361 24.4039 9.35009 23.228Z" fill="#FED008" />
                    <path d="M45.9233 21.762C45.9233 21.762 33.2842 38.2606 33.2268 35.6555C33.1695 33.0505 43.0065 20.2424 43.0065 20.2424C43.5213 10.2564 43.0065 7.05129 44.4936 6.72876C46.4953 6.29459 45.9233 21.762 45.9233 21.762Z" fill="#FED008" />
                    <path d="M45.9233 21.762L46.1218 21.914L46.1702 21.8508L46.1732 21.7712L45.9233 21.762ZM45.9233 21.762C46.1732 21.7712 46.1732 21.7712 46.1732 21.771L46.1732 21.7705L46.1733 21.7683L46.1736 21.7598L46.1748 21.7264L46.1791 21.5966C46.1828 21.483 46.188 21.3167 46.1939 21.1052C46.2057 20.6822 46.2202 20.0787 46.2314 19.3559C46.2538 17.9106 46.2627 15.9868 46.209 14.0755C46.1553 12.167 46.0388 10.2604 45.8081 8.85407C45.6933 8.15424 45.5472 7.55838 45.3567 7.14535C45.2619 6.93977 45.1467 6.75841 45.0009 6.63514C44.8462 6.50432 44.6539 6.43817 44.4406 6.48444C44.2072 6.53506 44.0067 6.64495 43.8414 6.82156C43.6796 6.99433 43.5607 7.22079 43.4693 7.49231C43.2886 8.02944 43.1966 8.80302 43.1359 9.84727C43.0844 10.7326 43.0546 11.8333 43.0182 13.1801C43.0114 13.4303 43.0044 13.6891 42.997 13.9565C42.9502 15.6477 42.8867 17.693 42.7609 20.1521L42.6973 20.2352C42.6251 20.3299 42.5193 20.469 42.3846 20.647C42.1153 21.0028 41.7308 21.5139 41.2696 22.1354C40.3474 23.3781 39.1179 25.0627 37.8899 26.8294C36.6625 28.5952 35.4339 30.4467 34.5148 32.0222C34.0554 32.8097 33.6706 33.5329 33.4017 34.1447C33.1378 34.7452 32.9684 35.2751 32.9769 35.661C32.9791 35.7641 32.9969 35.873 33.0508 35.9681C33.1099 36.0725 33.2045 36.1449 33.3222 36.1723C33.4291 36.1971 33.5355 36.1806 33.6263 36.1531C33.7194 36.125 33.816 36.0792 33.9134 36.0232C34.2956 35.8035 34.8144 35.3514 35.4107 34.7614C36.6128 33.5719 38.2046 31.7459 39.7886 29.8457C41.3742 27.9438 42.9574 25.9608 44.144 24.4539C44.7374 23.7003 45.2317 23.0655 45.5777 22.619C45.7508 22.3958 45.8867 22.2196 45.9794 22.0992L46.0853 21.9615L46.1125 21.9261L46.1194 21.9171L46.1212 21.9148L46.1216 21.9142C46.1217 21.9141 46.1218 21.914 45.9233 21.762Z" stroke="#696969" stroke-opacity="0.35" stroke-width="0.5" />
                    <path d="M18.5307 7.38094C18.5307 11.4573 15.0484 14.7619 10.7527 14.7619C6.45697 14.7619 2.97461 11.4573 2.97461 7.38094C2.97461 3.30456 6.45697 0 10.7527 0C15.0484 0 18.5307 3.30456 18.5307 7.38094ZM14.3558 7.38094C14.3558 8.2033 15.0583 8.86997 15.9249 8.86997C16.7915 8.86997 17.4941 8.2033 17.4941 7.38094C17.4941 6.55857 16.7915 5.8919 15.9249 5.8919C15.0583 5.8919 14.3558 6.55857 14.3558 7.38094Z" fill="#FED008" />
                </svg>
                <div id='Navbapd'>
                    <Link to='/' 
                    onMouseEnter={()=>document.getElementById('mousemid').style.display='none'}  
                    onMouseLeave={()=>document.getElementById('mousemid').style.display='block'}  
                    className="navelement">
                        Home
                    </Link>
                    <Link
                    onMouseEnter={()=>document.getElementById('mousemid').style.display='none'}  
                    onMouseLeave={()=>document.getElementById('mousemid').style.display='block'}  
                     className="navelement">
                        About
                    </Link>
                    <Link 
                    onMouseEnter={()=>document.getElementById('mousemid').style.display='none'}  
                    onMouseLeave={()=>document.getElementById('mousemid').style.display='block'}  
                    to='/OurWorks' className="navelement">
                        Works
                    </Link>
                    <Link
                    onMouseEnter={()=>document.getElementById('mousemid').style.display='none'}  
                    onMouseLeave={()=>document.getElementById('mousemid').style.display='block'}  
                     to='/ContactUs' className="navelement">
                        Contact
                    </Link>
                </div>
            </div>}
        </>
    )
}
