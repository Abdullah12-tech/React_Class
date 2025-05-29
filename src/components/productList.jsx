import ProdoctData from "./prodoctData";
const  ProdoctList =()=>{
    return(
        <section style={{display:"grid",gridTemplateColumns:"1fr,1fr"}}>
            <ProdoctData text="Shoe" price="$500" />
            <ProdoctData text="Bag" price="$300" />
            <ProdoctData text="Trouser" price="$900" />
            <ProdoctData text="Vehicle" price="$800" />
        </section>
    )
}
export default ProdoctList;