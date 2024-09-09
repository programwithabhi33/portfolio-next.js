import React from 'react'

const skills = [
    {
        name: "React",
        description: "A frontend tool that I have started with and I just love it.",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcR5U16C8yXgBpl7-Bc7Itjx3_LRl425zINA&s"
    },
    {
        name: "JavaScript",
        description: "A language that I love most and Expert in JavaScript.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/800px-Unofficial_JavaScript_logo_2.svg.png"
    },
    {
        name: "NodeJS",
        description: "Most beautiful runtime to build backend apps. (I love JS)",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
    },
    {
        name: "PHP",
        description: "Legacy language that I have worked most in.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/800px-PHP-logo.svg.png"
    },
    {
        name: "Laravel",
        description: "Most beautiful web framework.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png"
    },
    {
        name: "Codeigniter",
        description: "Simple and more user-friendly as well as beginner friendly web framework in PHP.",
        image: "https://coregenicsoftwares.com/wp-content/uploads/2022/01/5847eb8bcef1014c0b5e4851.png"
    },
    {
        name: "Python",
        description: "A language that I love to see myself in future.",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png"
    },
    {
        name: "Django",
        description: "Most beautiful framework like laravel, in python.",
        image: "https://www.fullstackpython.com/img/logos/django.png"
    },
    {
        name: "Docker",
        description: "I just love this❤️",
        image: "https://raw.githubusercontent.com/collabnix/dockerlabs/master/beginners/docker/images/docker_facebook_share.png"
    },
]
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
