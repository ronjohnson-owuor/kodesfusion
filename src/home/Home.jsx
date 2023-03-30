
import {useNavigate} from "react-router-dom";

export default function Home(){
    const navigate = useNavigate();

    // open a new window when the 10seconds is over
    setTimeout(() => {
        navigate("/storylist");
    }, 10000);
    

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