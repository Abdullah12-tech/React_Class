import Button from "./button"
import { useEffect,useState } from "react"

const Counter = ()=>{
    // const [number,setNumber] = useState(10)
    // const [isLoggenIn, setIsLoggenIn] = useState(false) 
    const [products,setProducts] = useState([])
    const [isLoading, setIsloading] = useState(true)
    // const fetchBtn = useRef(null)
    const fetchData = async ()=>{
        try {
            const res = await fetch("https://fakestoreapi.com/products");
            const products = await res.json()
            console.log(products);
            setProducts(products);
            
        } catch (err) {
            console.log(err);
        }finally{
            setIsloading(false)
        }
    }
    // const setCount = ()=>{
    //     setNumber((prev) =>(
    //         prev !== 10 ? prev + 1 : prev
    //     ))
    // }
    
    
    // const minusCount = ()=>{
    //     setNumber((prev) =>(
    //         prev !== 0 ? prev - 1 : prev
    //     ))
    // }
    // const logIn = ()=>{
    //     setIsLoggenIn(true)
    // }

    useEffect(() => {
        //   fetchData()
          console.log("Fetching data");
          
        }, [])
    return(
        <>
        
        {/* <div>
            <h2></h2>
            <p>Number: {number}</p>
            <Button text="addCount" handleClick={setCount} />
            <Button text="minusCount" handleClick={minusCount} />
        </div>
        <div>
            {
                isLoggenIn ? (
                    <p>Welcome, you have successfully logged in</p>
                ) : (
                    <div>
                        <p>Please Login</p>
                        <Button text="Login" handleClick={logIn}/>
                    </div>
                )
            }
        </div> */}
        <section>
            <div>
                <Button handleClick={fetchData} text="Fetch From fakestore api"/>
                {
                    isLoading ?(
                        <p>Loading...</p>
                    ):(
                        products.length === 0 ?(
                            <p>No products found</p>
                        ):(
                            <div style={{display: "grid",gap: "2rem", gridTemplateColumns: "1fr 1fr 1fr"}}>
                                {
                                    products.map((elem, index) => (
                                        <div style={{border: "2px solid white"}} key={index}>
                                            <img src={elem.image} width={300} alt={elem.title} />
                                            <h3>{elem.title}</h3>
                                            <p><b>Price:</b> ${elem.price}</p>
                                            <p>{elem.description}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        )
                    )
                }
            </div>
        </section>
        </>
    )
}
export default Counter;