import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const SingleProduct = () => {
    const {id} = useParams();
    const [product, setProduct] = useState([]);
    const [loading,setLoading] = useState(true);
    const navigate = useNavigate()
    const baseURL = import.meta.env.VITE_BASE_URL
    const fetchSingleProduct = async () =>{
        try {
            const res = await fetch(`${baseURL}products/${id}`)
            if (!res.ok) {
                throw new Error("Product not found");
            }
            const actualData = await res.json()
            console.log(actualData);
            setProduct(actualData);
            
        } catch (err) {
            console.log(err.message);
            // navigate("")
        }finally{
            setLoading(false);
        }
    }

    useEffect(() => {

        fetchSingleProduct()

    }, [id])
    

  return (
    <div>
        {
            loading ?(
                <p>Loading from My api...</p>
            ):(
                product &&(
                    <div style={{display: "grid",gridTemplateColumns:"1fr 1fr 1fr",padding:"1rem"}}>
                            <div style={{backgroundColor:"black", color:"white", padding:"1rem", borderRadius:".5rem"}}>
                                <h2 style={{fontSize:"20px", fontWeight: "600"}}>{product.product.productName}</h2>
                                <img src={product.product.productImage} alt="" />
                                <strong>Price: $<span>{product.product.price} </span></strong>
                                <p> {product.product.productDescription} </p>

                            </div>
                    </div>
                )
            )
        }
    </div>
  )
}

export default SingleProduct