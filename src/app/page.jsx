import { Inter } from "@next/font/google"

const API_KEY = process.env.API_KEY;


export default async function Home({searchParams}) {
  const genre = searchParams.genre || "fetchTrending";
  
  const res = await fetch(
    `https://api.themoviedb.org/3/${
      genre === "fetchTopRated" ? "movie/top_rated" : "trending/all/week"
  }?api_key=${API_KEY}&language=en-Us%&page=1`,
  {next:{revalidate: 10000}}
  );

  if(!res.ok){
    throw new Error("Failed to fetch data");
  }

  const data = await res.json();
  console.log(data);

  return (
    <h1 className='text-red-300'>HOME</h1>
  )
}
