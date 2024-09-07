import { skills } from '@/app/data/skills'
import React from 'react'
import Chip from '../shared/Chip'
import SectionContainer from '../shared/SectionContainer'

const Skills = () => {
    return (
        <SectionContainer id="skills">
            <h2 className='mb-2'>Skills</h2>
            <div className='flex text-sm gap-1 flex-wrap'>
                {
                    skills.map((skill) => (
                        <Chip skill={skill} key={skill} />
                    ))
                }
            </div>
        </SectionContainer>
    )
}

export default Skills