
import {useNavigate} from "react-router-dom";

export default function Home(){

    
    const navigate = useNavigate();
    // when the browser is rendered
       setTimeout(()=>{
         navigate("./storieslisting/Storylist");
       },10000)


    return(
        <>
        {/* custom loading bar */}
        <div className="heroBox">
            <div className="herobox-content">
         <div className="loader_stories">
         </div>
         <br />
         <span>LOADING...</span>
            </div>
        </div>
        </>
    )
};