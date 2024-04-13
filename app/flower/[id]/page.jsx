"use client"
import { useParams } from "next/navigation"

export default function FlowerItem(){
//    const params= useParams()
const products = [
  {
    id: 1,
    name: 'Small Red Rose',
    href: '#',
    price: '$65',
    imageSrc: 'https://www.sarinasflorist.com.au/images/products/large/7b7iw5u53x.jpg',
    imageAlt: 'You are my love posy with small red roses and one seasonal tropical foliage. Available in four sizes.',
  },
  {
    id: 2,
    name: 'White Flower Bouquet',
    href: '#',
    price: '$69',
    imageSrc: 'https://www.sarinasflorist.com.au/images/products/large/0pjozhlw71.jpg',
    imageAlt: 'I believe good things happen every day. You will be one of them. ',
  },
  {
    id: 3,
    name: 'Orange Flower Bouquet',
    href: '#',
    price: '$89',
    imageSrc: 'https://www.sarinasflorist.com.au/images/products/large/v5fpjpv6d8.jpg',
    imageAlt: 'I believe orange bouquet with orange big Chrysanthemum, orange mini Gerbera, a yellow carnation',
  },
  {
    id: 4,
    name: 'Love Flower Bouquet ',
    href: '/',
    price: '$35',
    imageSrc: 'https://www.sarinasflorist.com.au/images/products/large/g5l0r0ed40.jpg',
    imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
  }]
    return(
         <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <a key={product.id} href={`./flower/${product.id}`} className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img
                src={product.imageSrc}
                alt={product.imageAlt}
                className="w-full h-full object-center object-cover group-hover:opacity-75"/>
            </div>
            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
          </a>
        ))}
      </div> 
    )
}