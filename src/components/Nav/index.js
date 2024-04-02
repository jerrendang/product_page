import { useState, useEffect } from 'react';

import './Nav.css'

const handleScroll = () => {
    console.log(window.scrollY)
}  

const Nav = () => {
    const [scrolled, setScrolled] = useState(false)

    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll)

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll)
    //     }
    // }, [])
    return (
        <div className={`nav h-[8vh] w-[100%] top-0 fixed flex flex-col justify-center items-center min-w-[1100px]
        bg-white overflow-hidden z-10`}>
            <div className='logo items-center'>
                <a href='#'>
                    <span className='flex flex-row items-center overflow-hidden'>
                        <img src="https://www.therabody.com/on/demandware.static/-/Library-Sites-TheragunSharedLibrary/default/dw7221bb75/images/navigation/Therabody_Logo.svg"
                            alt='Therabody Logo'
                        />
                    </span>
                </a>
            </div>
        </div>
    )
}

export default Nav;