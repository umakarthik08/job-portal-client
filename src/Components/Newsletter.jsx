import React from 'react'
import { FaEnvelopeOpenText, FaRocket } from "react-icons/fa6"

const Newsletter = () => {
    return (
        <div className='my-6'>
            <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                <FaEnvelopeOpenText />
            </h3>
            Join Our Email List for Job Alerts
            <p className='text-primary/75 text-base mb-4'>
                Subscribe for Job alerts
            </p>
            <div className='w-full space-y-4'>
                <input type="email" name="email" id="email" placeholder='name@mail.com' className='w-full block py-2 pl-3 border focus:outline-none' />
                <input type="submit" value={"Subscribe"} className='w-full block py-2 border focus:outline-none bg-blue-600 rounded-sm text-white cursor-pointer font-semibold' />
            </div>

            <div className='my-6'>
                <h3 className='text-lg font-bold mb-2 flex items-center gap-2'>
                    <FaRocket />
                </h3>
                Get notified faster
                <p className='text-primary/75 text-base mb-4'>
                    Upgrade to Premium for Instant Job Alerts
                </p>
                <div className='w-full space-y-4'>
                    <input type="submit" value={"Purchase premium"} className='w-full block py-2 border focus:outline-none bg-blue-600 rounded-sm text-white cursor-pointer font-semibold' />
                </div>
            </div>
        </div>


    )
}

export default Newsletter
