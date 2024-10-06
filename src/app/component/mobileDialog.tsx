


import React from 'react'

interface mobileDilofInterface {
    search: any
    setSearch: any
}
const MobileDialog: React.FC<mobileDilofInterface> = ({ search, setSearch }) => {
    return (
        <div className='hidden'>
            <input
                className="mr-1 rounded-full px-3 py-1 text-black font-mono "
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button className='round'>Search</button>
        </div>
    )
}


export default MobileDialog