import React from 'react'
import SectionContainer from '../shared/SectionContainer'
import { projects } from '@/app/data/projects'
import Card from '../shared/Card'

const Projects = () => {
    return (
        <SectionContainer id='projects'>
            <h2 className='mb-2'>Projects</h2>
            <div className='flex flex-col gap-1 group/container'>
                {
                    projects.map((project) => (
                        <Card
                            Header={project.header}
                            LinkUrl={project.linkUrl}
                            Description={project.description}
                            TechStacks={project.techStacks}
                        />
                    ))
                }
            </div>
        </SectionContainer>
    )
}

export default Projects