import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import GlobalLoader from '../../../Assets/Lottie/loader.json'

const LazyLoader = () => {
    return (
        <DotLottieReact
            data={GlobalLoader}
            loop={true}
            autoplay={true}
            className='h-screen justify-center items-center'
        />
    )
}

export default LazyLoader