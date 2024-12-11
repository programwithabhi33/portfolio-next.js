import React from 'react'

const page = async({params}) => {
    const slug = await params.slug
    return (
        <div className='flex justify-center m-8'>
            <span>{`The slug is ${slug}`}</span>
        </div>
    )
}

export default page
