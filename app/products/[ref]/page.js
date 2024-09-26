import { altProductData } from "@/app/data/altProducts"
import { productData } from "@/app/data/products"
import Image from "next/image";



export default function Page({params}) {

const product = altProductData.find(item => item.ref === (params.ref));
console.log(product)
return (
    <>
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
    <p className="text-xl">{product?.name}</p>
    <p className="text-xl">{product?.brand}</p>
    <p className="text-xl">{product?.price}</p>
    <p className="text-xl">{product?.description}</p>
    <p className="text-xl">{product?.stock}</p>
    <Image alt={product?.name} width={600} height={600} src={product?.image} className="object-cover w-full h-full" />
    </main>
    </>
)
}