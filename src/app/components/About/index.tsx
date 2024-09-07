import React from 'react'
import SectionContainer from '../shared/SectionContainer'

const About = () => {
    return (
        <SectionContainer id="about">
            <h2 className='mb-2'>About</h2>
            <div className="flex flex-col gap-2">
                <p>Full-stack Developer Intern with 7 months of experience in developing web applications. Proficient in JavaScript, React.js, Next.js, Node.js, MySQL, and MongoDB. I have hands-on experience in developing, maintaining production-level web applications for organizations</p>
                <p>My main focus for the future is to become a team leader who can effectively manage and mentor team members, design efficient web architectures, and lead the organization to success.</p>
            </div>
        </SectionContainer>
    )
}

export default About