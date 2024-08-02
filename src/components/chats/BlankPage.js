import React from 'react'
import { PiCursorClickFill } from 'react-icons/pi'

export default function BlankPage() {
    return (
        <>

            <div className='flex flex-col items-center justify-center w-[60vw] left-2 text-gray-500'>
                <span>
                    <PiCursorClickFill size={15} />
                </span>
                <p className='text-center text-sm'>
                    Select a Chat to View
                </p>

                <footer className='align-text-bottom'>Secure Viewer</footer>
            </div>

        </>
    )
}
