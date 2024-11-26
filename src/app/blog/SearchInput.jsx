import React from 'react'

const SearchInput = () => {
    return (
        <div className='container flex gap-4 mx-auto items-center justify-center'>
            <input
                id="search"
                name="search"
                type="text"
                placeholder="Search"
                className="block w-1/2 rounded-md border-gray-200 border py-1.5 pl-7 pr-20 text-gray-900"
            />
            <button className='text-gray-200 bg-indigo-400 p-2 rounded-md'>Search</button>
        </div>
    )
}

export default SearchInput
