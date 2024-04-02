import { useRef, useState, useEffect } from 'react'

import './MissionPage.css'

const MissionPage = () => {
    const missionRef = useRef();
    const [onScreen, setScreen] = useState(false);

    const handleScroll = () => {
        if (missionRef.current){
            let rect = missionRef.current.getBoundingClientRect();
            if (rect.top - ((rect.bottom - rect.top) / 3) < 0){
                setScreen(true);
            }
            else{
                setScreen(false)
            }
        }
    }

    useEffect(() => {
        console.log(onScreen)
    }, [onScreen])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)

        return window.addEventListener('scroll', handleScroll)
    }, [])

    return (
        <div ref={missionRef} className='w-[100%] relative flex items-center min-w-[1100px]'>
            <span className='w-[100%]'>
                <img 
                    src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/1c07c696767619.63bdc2e1c15ed.jpg'
                    alt='backdrop'
                    width='100%'
                />
                <span className='absolute h-[100%] w-[100%] bg-gradient-to-b from-black via-[rgba(0,0,0,0)] to-black top-0'></span>
            </span>
            
            <span className='absolute left-0 mr-[5vw] h-[100%] grid-rows-3 flex flex-col justify-center'>
                {/* bg-[rgba(199,180,162,1)] */}
                <div className={`${onScreen ? 'w-[100%]': 'w-[0%]'} overflow-hidden missionItem font-[ttnorms-bold] leading-none text-[#e3d4c0] text-[33cqh] row-span-1 row-start-1`}>EMPOWER</div>
                <div className={`${onScreen ? 'w-[100%]': 'w-[0%]'} overflow-hidden missionItem font-[ttnorms-bold] leading-none text-[#e3d4c0] text-[33cqh] row-span-1 row-start-2`}>DISCOVER</div>
                <div className={`${onScreen ? 'w-[100%]': 'w-[0%]'} overflow-hidden missionItem font-[ttnorms-bold] leading-none text-[#e3d4c0] text-[33cqh] row-span-1 row-start-3`}>INNOVATE</div>
            </span>
        </div>
    )
}

export default MissionPage