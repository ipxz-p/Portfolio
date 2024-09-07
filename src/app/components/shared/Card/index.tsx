import React from 'react'
import Link from 'next/link'
import Chip from '../Chip'
import { HiOutlineLink } from 'react-icons/hi'

interface CardProps {
    Header: string,
    Date?: string
    LinkUrl: string,
    Description: string,
    TechStacks: string[]
}

const Card = ({
    Header,
    Date,
    LinkUrl,
    Description,
    TechStacks
}: CardProps) => {
    return (
        <Link href={LinkUrl} target='_blank'>
            <div className='hover:bg-slate-800/80 rounded-md p-2 group/item transition group-hover/container:opacity-50 hover:!opacity-100'>
                <div className='flex items-center justify-between group-hover/item:text-teal-300'>
                    <h2 className='group-hover/item:text-teal-300'>{Header}</h2>
                    <HiOutlineLink />
                </div>
                {Date && (<div className='text-slate-500 text-sm'>{Date}</div>)}
                <div className='my-2 text-sm'>{Description}</div>
                <div className='flex text-sm gap-1 flex-wrap'>
                    {TechStacks.map((techStack) => (
                        <Chip key={techStack} skill={techStack} />
                    ))}
                </div>
            </div>
        </Link>
    )
}

export default Card