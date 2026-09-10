import React from 'react'
import { Outlet } from 'react-router-dom'

import PrimaryHeader from './PrimaryHeader'

const Layout = () => {
    return (
        <div className='h-dvh px-[20px] pt-[20px] bg-white relative'>
            <div className='absolute top-[40px] z-1 place-self-center'>
                <PrimaryHeader />
            </div>
            <div className='h-[calc(100%-20px)] overflow-y-auto scroll-smooth'>
                <Outlet />
            </div>
        </div>
    )
}

export default Layout