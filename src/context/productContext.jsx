import { createContext, useState } from "react";

export const productContext = createContext()

const ProductProvider = ({children})=>{
    const [products,setProducts] = useState([])
    const BaseUrl = import.meta.env.VITE_BASE_URL
    const fetchProducts = async ()=>{
        try {
            const res = await fetch(`${BaseUrl}products`)
            const data = await res.json()
            const actualData = await data.products
            setProducts(actualData)
            console.log(products);
        } catch (err) {
            console.log(err);
        }
    }
    const value = {
        fetchProducts, products
    }

    return (
        <productContext.Provider value={value}>
            {children}
        </productContext.Provider>
    )
}

export default ProductProvider;