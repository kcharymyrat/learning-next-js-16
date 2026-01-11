import React from 'react'
import Link from 'next/link'

const Page = () => {
    const products = [
        { id: 1, name: 'Product 1' },
        { id: 2, name: 'Product 2' },
        { id: 3, name: 'Product 3' },
        { id: 4, name: 'Product 4' },
        { id: 5, name: 'Product 5' },
        { id: 6, name: 'Product 6' },
    ]

  return (
    <div>
        {products.map(product => (
            <div key={product.id}>
                <Link href={`/intercepting-routes/${product.id}`}>{product.name}</Link>
            </div>
        ))}
    </div>
  )
}

export default Page