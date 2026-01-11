// export async function GET() {
//     return new Response("Movies")
// }

import { NextRequest } from "next/server"
import {movies} from "./db"

// export async function GET() {
//     return Response.json(movies)
// }

export async function GET(request: NextRequest) {
    let searchParam = request.nextUrl.searchParams.get("q")

    if (!searchParam) {
        return Response.json(movies)
    }

    let foundMovies = movies.filter(m => m.title.includes(searchParam)) 
    if (foundMovies.length < 1) {
        return Response.json([])
    }
    return Response.json(foundMovies)
}

export async function POST(req: Request) {
    let movie = await req.json()
    
    const newMovie = {... movie}
    movies.push(newMovie)

    return Response.json(movies)
}