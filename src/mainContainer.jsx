import CardContainer from "./cardContainer";
import StyledCardContainer from "./styledCardContainer";


export default function MainContainer (){
    return <div>
        <div className='p-3 text-center'>
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6e/A._P._J._Abdul_Kalam.jpg" className='w-25 hoverElement' style={{ height: "20rem" }} alt="" />
       </div>
       <CardContainer/>
       <StyledCardContainer/>
    </div>
}