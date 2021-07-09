import React from 'react'
import portfoliologo from '../images/portfolio-logo.svg';
import projectstitle from '../images/projects-title.svg';
import '../components/projects/styles/projects.scss'
export default function Projects() {
    return (
        <div className='projects'>
            <img src={portfoliologo} className='projects__logo'/>
            <img src={projectstitle} className='projects__job-title' />
            <div className='projects__list'>
                <div  className='projects__list-top-projects'>
                    <h2>Projects</h2>
                </div>
            </div>

        </div>
    )
}
