import React from 'react'

const SongList = async () => {
    await new Promise(resolve => {
        setTimeout(() => {
            resolve(true)
        }, 1000)
    })

  return (
    <div className="w-[96%] mx-auto px-4">SongList</div>
  )
}

export default SongList