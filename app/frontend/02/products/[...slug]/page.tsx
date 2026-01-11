import React from 'react'

const Slugs = async ({ params }: { params: Promise<{ slug: string[] }> }) => {

    const { slug } = await params;

    console.log("slug =", slug)

    return (
        <main>
            <div>Slugs</div>
            <ul>
                {slug.map(s => (
                    <li key={s}>{s}</li>
                ))}
            </ul>
        </main>
    )
}

export default Slugs