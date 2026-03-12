"use client";

import React, { useState } from 'react'

const Movies = () => {
    const [movies, setMovies] = useState([]);

    console.log("This message comes from the client component")

  return (
    <div>Movies</div>
  )
}

export default Movies