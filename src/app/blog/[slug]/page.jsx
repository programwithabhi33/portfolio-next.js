import React from 'react'

const page = async({params}) => {
    const slug = await params.slug
    return (
        <div>
            {`The slug is ${slug}`}
        </div>
    )
}

export default page
