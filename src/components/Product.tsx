import { CrossCircledIcon } from "@radix-ui/react-icons";
import CoffeeImage from "@/public/images/coffee.jpg";
import CakeImage from "@/public/images/cake.jpg";
import Image from "next/image";

function FilterSelected() {
  const filter = [
    {
      id: 1,
      type: "drink",
      label: "Drink"
    }
  ];

  if (!filter.length) return <></>;

  return (
    <div className="flex gap-2">
      {filter.map(item => (
        <div key={`slc-${item.id}`}
          className="p-1 text-green-400 bg-green-400 bg-opacity-20 border-green-400 border-opacity-25 font-semibold border rounded-lg flex gap-2 items-center">
          <span className="ml-1">{item.label}</span>
          <button className="rounded-md text-green-400 flex justify-center items-center hover:text-green-400/80">
            <CrossCircledIcon/>
          </button>
        </div>
      ))}
    </div>
  )
}

const products = [
  {
    id: 1,
    name: "Cappuccino",
    category: "drink",
    price: 3
  },{
    id: 2,
    name: "Birthday",
    category: "cake",
    price: 5
  },{
    id: 3,
    name: "Latte",
    category: "drink",
    price: 4
  },{
    id: 4,
    name: "Biscoff",
    category: "cake",
    price: 3
  },{
    id: 5,
    name: "Espresso",
    category: "drink",
    price: 4
  },{
    id: 6,
    name: "Black Forest",
    category: "cake",
    price: 3
  }
];

function ProductList() {
  const filteredProduct = products;

  return (
    <div className="grid grid-cols-3 gap-2">
      {filteredProduct.map(product => (
        <div key={`prd-${product.id}`} className="p-2 border border-slate-700/60 bg-slate-800 rounded-lg flex flex-col gap-2">
          <div className="w-28 h-28 rounded-md">
            {product.category === "cake" ? (
              <Image src={CakeImage} alt="image a cake" className="rounded-md"/>
            ):(
              <Image src={CoffeeImage} alt="image cup of coffee" className="rounded-md"/>
            )}
          </div>
          
          <div>
            <div className="font-semibold">{product.name}</div>
            <div className="flex gap-[0.1rem] items-center">
              <span className="text-slate-500 text-[0.5]">$</span> 
              <span className="font-semibold">{product.price}</span>
            </div>
          </div>

          <button className="border border-slate-slate-200 font-semibold rounded-md py-1
            hover:bg-slate-200 hover:text-slate-900
            transition duration-200 ease-in-out">
            Buy
          </button>
        </div>
      ))}
    </div>
  );
}

export default function Product() {
  return (
    <div className="flex text-sm flex-col gap-3">
      <FilterSelected/>
      <ProductList/>
    </div>
  );
}