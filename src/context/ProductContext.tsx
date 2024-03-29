import { createContext, useState } from "react"
import data from "../data/product";


interface propType{
    children: any
}

export interface productType {
    id:number,
    title:string,
    description:string,
    price:number,
    image:string,
    category: string,
    name: string,
    age: number,
    specialty: string,
    about: string,
    experience: number

}

export const ProductContext = createContext<productType[] | any[]>([]);

export const ProductProvider = (props:propType)=>{
   const [productItem,setProductItem] = useState(data);

//    useEffect(()=>{
//        axios
//        .get('http://127.0.0.1:5500/src/data/product.json')
//        .then((res:any)=>{setProductItem(res.data)})
//    })

    return <ProductContext.Provider value={[productItem,setProductItem]}>
        {props.children}
    </ProductContext.Provider>
}