
import { useState } from "react";
import {useNavigate} from "react-router-dom";
import users from "./storyjson/storiesdetails.json";
import Contactus from "../reachus/Contactus";
import Navigation from "../reachus/Navigation";
export default function Storylisting(){

   const [search,setsearch] = useState('');
   const navigate = useNavigate();

   const handleSearch = (e) =>{
    setsearch(e.target.value);
   }


    return(
        <>
        <div className="wrapper">
            
            <div className="searchBox">
            <h1>our content outline</h1><br />        
            <input type="text" value={search}  onChange= {handleSearch} placeholder="search"/>
            <Navigation/>
            </div>
            <div className="stories_card">
                   {/* mapping through the array and displaying them on the screen */}
                   {
                      users.filter(
                        (filtered)=>filtered.title.toLowerCase().includes(search.toLowerCase())
                        ).map((items) => (
                        <div id={items.key} className=" stories_section teen">
                        <div className="image_holder">
                            <img src={items.poster} alt="teen" />
                        </div>
                        <h3>{items.title}</h3>
                        <button onClick={() => navigate(`/${items.paths}`)}>read</button>
                    </div>
                      ))
                   }
            </div>
        </div>
        </>
    )
    
};