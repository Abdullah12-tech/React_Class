// import Button from "./button"
// import ProdoctList from "./productList"
import Counter from "./counter"
import Timer from "./timer"
// import Navbar from "./navbar"
function Header(){
    // const searchProduct = ()=>{
    //     alert("Searching Product")
    // }
    return(
        <div className="App-header">
        {/* <Navbar/> */}
        <Timer/>
        {/* <Counter/> */}
        {/* <Button handleClick={searchProduct} text="Search product "/> */}
        {/* <div>
            This is the header
        </div> */}
        {/* <ProdoctList/> */}
        
        </div>
    )
}
export default Header;