import React, { ReactNode } from 'react'
interface SectionContainerProp {
    id: string,
    children: ReactNode
}

const SectionContainer = ({id, children}: SectionContainerProp) => {
    return (
        <section className='pt-4 md:pt-16' id={id}>
            {children}
        </section>
    )
}

export default SectionContainer