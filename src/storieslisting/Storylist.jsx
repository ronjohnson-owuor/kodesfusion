
import teen from "./storyImages/teen.jpg";
import love from "./storyImages/love.jpg";
import sheep from "./storyImages/sheep.jpg";


export default function Storylisting(){
    const images = require.context('./storyImages', false, /\.(png|jpe?g|svg)$/);
    const imageKeys = Object.keys(images);
    return(
        <>
        <div className="wrapper">
         
            <div className="searchBox">
            <h1>Our stories library</h1><br />
                <input type="text" placeholder="search"/>
            </div>

            <div className="stories_card">

                       {/* teen */}
                <div className=" stories_section teen">
                    <div className="image_holder">
                        <img src={teen} alt="teen" />
                    </div>
                    <h3>THE POWER OF A TEEN</h3>
                    <button>read</button>
                </div>
                        
                        {/* love */}
                <div className="stories_section love">
                <div className="image_holder">
                        <img src={love} alt="love" />
                    </div>
                    <h3>LOVE HAS NO BOUNDS</h3>
                    <button>read</button>
                </div>

                {/* farm*/}
                <div className="stories_section farm">
                <div className="image_holder">
                        <img src={sheep} alt="sheep" />
                    </div>
                    <h3>GO TO THE FARM</h3>
                    <button>read</button>
                </div>
            </div>
            

        </div>
        </>
    )
};