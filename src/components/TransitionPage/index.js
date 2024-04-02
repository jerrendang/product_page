import { useRef, useState, useEffect } from "react"
import './TransitionPage.css';

const productImages = require('../../assets/productImages.json');

const TransitionPage = (link1, link2, side) => {
    const elementRefs = useRef([]);
    const [elementOnScreen, setElement] = useState(0);

    const handleScroll = () => {
        if (elementRefs.current){
            for (let i = 0; i < elementRefs.current.length; i++){
                let rect = elementRefs.current[i].getBoundingClientRect()
                if (rect.bottom >= (rect.bottom - rect.top) / 2){
                    setElement(i);
                    break;
                }
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <div className='flex flex-row w-[100%] px-[5vw] min-w-[1100px]'>
            <div className='flex flex-col w-[100%]'>
                {
                    productImages.otherProductImages.map((link, idx) => (
                        <div ref={el => {elementRefs.current[idx] = el}} className={`w-[100%]`} key={idx}>
                            <div className='w-fit'>
                                <img src={link} alt={'otherProducts' + idx}
                                    className='h-[92vh] py-[10vh] object-cover'
                                />
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='h-[92vh] w-[100%] top-[8vh] sticky flex flex-col items-center justify-center'>
                <div className='w-[70%] absolute top-[10%] font-[ttnorms-bold] text-[2em]'>
                    Our amazing products
                </div>
                <span className={`otherProductDesc w-[70%] h-fit ${elementOnScreen <= 1 ? 'show' : 'unshow'} absolute text-left items-center`}>
                    <div className='font-[ttnorms-medium] text-[2em]'>{productImages.otherProductNames[0]}</div>
                    <div className='tracking-[.1em] text-[rgba(0,0,0,.6)]'>
                    {
                        productImages.otherProductDescriptions[0]
                    }
                    </div>
                </span>
                <span className={`otherProductDesc w-[70%] h-fit ${elementOnScreen >= 2 && elementOnScreen < 4 ? 'show' : 'unshow'} absolute text-left items-center`}>
                    <div className='font-[ttnorms-medium] text-[2em]'>{productImages.otherProductNames[1]}</div>
                    <div className='tracking-[.1em] text-[rgba(0,0,0,.6)]'>
                        {
                            productImages.otherProductDescriptions[1]
                        }
                    </div>
                </span>
                <span className={`otherProductDesc w-[70%] h-fit ${elementOnScreen >= 4 && elementOnScreen < 6 ? 'show' : 'unshow'} absolute text-left items-center`}>
                    <div className='font-[ttnorms-medium] text-[2em]'>{productImages.otherProductNames[2]}</div>
                    <div className='tracking-[.1em] text-[rgba(0,0,0,.6)]'>
                        {
                            productImages.otherProductDescriptions[2]
                        }
                    </div>
                </span>
            </div>
        </div>
    )
}

export default TransitionPage