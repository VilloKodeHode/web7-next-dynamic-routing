import Image from "next/image";
import { AltProductCards, ProductCards } from "./components/ProductCards";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      {/* <ProductCards/> */}
      <AltProductCards/>
    </main>
  );
}
