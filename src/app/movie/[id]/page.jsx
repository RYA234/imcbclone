import React from 'react'

async function getMovie(movieId){
    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
    );
    return await res.json();
}

export default async function MoviePage({params}) {
  const movieId = params.id;
  const movie = await getMovie(movieId);
  console.log(movie.title);
    
    return (
    <div>
    </div>
  );
}
