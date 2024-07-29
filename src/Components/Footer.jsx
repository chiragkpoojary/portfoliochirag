import React from 'react'

export default function Footer() {
    return (
        <footer >
            <div className='py-6 text-center safe-x-padding mt-[205rem] sm:mt-[246rem] md:mt-[228rem] lg:mt-[164rem]'>
                <p className=' font-medium md:text-2xl lg:text-3xl text-xl'>©{new Date().getFullYear()} Chirag K Poojary All rights reserved.</p>
            </div>
        </footer>
    )
}