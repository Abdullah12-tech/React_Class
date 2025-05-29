import Button from "./button";
const ProdoctData = ({img,text,item,price,button})=>{
    const bottonFunction = ()=>{
        alert("Product added to cart")
    }
    return(
        <>
                <div >
                    <img src={img} />
                    <p>{text}</p>
                    <span>{price}</span>
                    <Button handleClick={bottonFunction} text="Add to cart" />
                </div>
        </>
    )
}
export default ProdoctData;