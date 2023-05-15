import axios from "axios";
import { createContext, useEffect, useState } from "react"


interface propType{
    children: any
}

export interface productType {
    id:number,
    title:string,
    description:string,
    price:number,
    image:string

}

export const ProductContext = createContext<productType[] | any[]>([]);

export const ProductProvider = (props:propType)=>{
   const [productItem,setProductItem] = useState<productType[]>([]);

   useEffect(()=>{
       axios
       .get('http://127.0.0.1:5500/src/data/product.json')
       .then((res:any)=>{setProductItem(res.data)})
   })

    return <ProductContext.Provider value={[productItem,setProductItem]}>
        {props.children}
    </ProductContext.Provider>
}