import React from 'react'

const skills = [
    {
        name: "React"
    },
    {
        name: "JavaScript"
    },
    {
        name: "NodeJS"
    },
    {
        name: "PHP"
    },
    {
        name: "Laravel"
    },
    {
        name: "Codeigniter"
    },
    {
        name: "Python"
    },
    {
        name: "Djongo"
    },
    {
        name: "Docker"
    },
]
const Skills = () => {
    return (
        <>
            <section class="text-gray-600 body-font">
                <div class="container px-5 mx-auto">
                    <div class="flex flex-wrap m-4">
                        {skills.map((skill, index) => {
                            return <div class="lg:w-1/4 md:w-1/2 p-4 w-full" key={index}>
                                <a class="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" class="object-cover object-center w-full h-full block" src="https://dummyimage.com/420x260" />
                                </a>
                                <div class="mt-4">
                                    <h2 class="text-gray-900 title-font text-lg font-medium">{skill.name}</h2>
                                    <p class="mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio doloremque placeat vitae nemo veniam ab voluptate neque, itaque ducimus pariatur officiis. Nemo iure aliquam corporis, obcaecati ipsam libero iusto aspernatur?</p>
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
