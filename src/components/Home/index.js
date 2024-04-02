import './Home.css'

const Home = () => {
    return (
        <>
            <div className='overflow-hidden h-[80vh] w-[100%] flex flex-col items-center justify-center min-w-[1100px]'>
                {/* <div>
                    <span>
                        <img src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/c6b72e153543217.6331e5a9bf936.png'/>
                    </span>
                </div> */}
                {/* <div>
                    <span>
                        <video autoPlay loop muted src='https://content.jwplatform.com/videos/GU4jRQNV-RPubQso2.mp4'></video>
                    </span>
                </div> */}
                <div className='w-[100%] relative'>
                    <img className='w-[100%]' src='https://mir-s3-cdn-cf.behance.net/project_modules/1400/2bd6cd153543217.6331e5a9c0116.gif' alt='homeGif'/>
                    <span className='absolute h-[100%] w-[100%] bg-gradient-to-r from-black via-[rgba(0,0,0,0)] to-black top-0'></span>
                </div>
            </div>
            <div className='flex flex-row w-[100%] h-fit tracking-tight text-[3em] p-[45px] justify-center items-center'>
                <span>
                    <span className="font-[ttnorms-bold] text-[1.3em]">Reinventing what it means to recover</span>
                </span>
            </div>
        </>
    )
}

export default Home;