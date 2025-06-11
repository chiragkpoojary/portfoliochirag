import React from 'react'

export default function Footer() {
    return (
        <footer >
            <div className='py-6 text-center mt-5'>
                <p className=' font-medium md:text-2xl lg:text-3xl text-xl'>©{new Date().getFullYear()} Chirag K Poojary All rights reserved.</p>
            </div>
        </footer>
    )
}