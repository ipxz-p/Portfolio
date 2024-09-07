import React from 'react'
import SectionContainer from '../shared/SectionContainer'
import Card from '../shared/Card'
import { experiences } from '@/app/data/experience'

const Experience = () => {
    return (
        <SectionContainer id='experience'>
            <h2 className='mb-2'>Experiences</h2>
            <div className='flex flex-col gap-1 group/container'>
                {
                    experiences.map((experience) => (
                        <Card
                            Header={experience.header}
                            Date={experience.date}
                            LinkUrl={experience.linkUrl}
                            Description={experience.description}
                            TechStacks={experience.techStacks}
                        />
                    ))
                }
            </div>
        </SectionContainer>
    )
}

export default Experience