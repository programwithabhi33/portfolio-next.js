import React from 'react'
import { skills } from './SkillData'
const Skills = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto">
                    <div className="flex flex-wrap m-4">
                        {skills.map((skill, index) => {
                            return <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={index}>
                                <a className="block relative h-48 rounded overflow-hidden">
                                    <img alt="skills" className="object-fit h-full" src={skill.image} />
                                </a>
                                <div className="mt-4">
                                    <h2 className="text-gray-900 title-font text-lg font-medium">{skill.name}</h2>
                                    <p className="mt-1">{skill.description}</p>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Skills
