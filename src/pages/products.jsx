import { useContext, useEffect } from "react"
import { productContext } from "../context/productContext"
import { useNavigate } from "react-router-dom"

const Product = () => {
  const { products, fetchProducts } = useContext(productContext)
  const navigate = useNavigate()
  useEffect(() => {
    fetchProducts()
  }, [])

  const displaySingle = (id) => {
    navigate(`/products/${id}`)
  }
  return (
    <div>
      {products && products.length > 0 ? (
          <div style={{ display: "grid", gap: "2rem", gridTemplateColumns: "1fr 1fr 1fr", padding: "1rem" }}>
            {
              products.map((product, i) => {
                return (
                  <div key={i} style={{ backgroundColor: "black", color: "white", padding: "1rem", borderRadius: ".5rem" }}>
                    <h2 style={{ fontSize: "20px", fontWeight: "600" }}>{product.productName}</h2>
                    <img src={product.productImage} alt="" />
                    <strong>Price: $<span>{product.price} </span></strong>
                    <p> {product.productDescription} </p>
                    <button onClick={() => displaySingle(product._id)} style={{ display: "flex", alignSelf: "end", backgroundColor: "gray", padding: ".5rem", borderRadius: ".5rem", marginTop: "1rem", color: "white" }}>View Product</button>
                  </div>
                )
              })
            }
          </div>
      ) : (
        <div>No products found</div>

      )
      }
    </div >
  )
}

export default Product