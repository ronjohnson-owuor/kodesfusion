
import {useNavigate} from "react-router-dom";
import users from "../storieslisting/storyjson/storiesdetails.json";

export default function Suggestion(){
// query the images 
const imagename = require.context("../storieslisting/storyImages");
const imageKey  = imagename.keys();
const cleanedKeys = imageKey.map((key) => key.replace("./",""));


    const navigate = useNavigate();
    return(
        <>
              <div className="reccomended">
                   {users.sort(() => Math.random() - 0.5)
                   .slice(0,3)
                   .map((items)=>(
                    <div id={items.key}>
                        <h3>{items.title}</h3>
                        <img key={items .imagePosition} src={imagename(`./${cleanedKeys[items.imagePosition]}`)} alt="teen" />
                        <button key={items.paths} onClick={() => navigate(`/${items.paths}`)}>read</button>
                    </div>
                   ))}
              </div>
        </>
    )
}