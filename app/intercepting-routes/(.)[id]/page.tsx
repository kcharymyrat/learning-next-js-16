import { X } from 'lucide-react';
import Link from 'next/link';

const ProductDetail = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  
  return (
    <div>
      <h1>----------- ProductDetail - {id} - Intercepted Route-------------------</h1>
      <div>
        <Link href="/intercepting-routes"><X size={24} /></Link>
      </div>
    </div>
  )
}

export default ProductDetail