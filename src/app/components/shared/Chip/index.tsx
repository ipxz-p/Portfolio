import React from 'react'

interface ChipProps {
    skill: string
}

const Chip = ({skill}: ChipProps) => {
    return (
        <div className='bg-teal-400/10 text-teal-300 p-1 rounded-md'>
            <div>{skill}</div>
        </div>
    )
}

export default Chip